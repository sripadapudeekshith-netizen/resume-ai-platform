# Component Architecture Map

## 🗺️ Visual Component Hierarchy

```
App (_app.jsx)
│
├── AnimatedBackground (always visible)
├── GlassNavbar (always visible)
│   └── AnimatedLogo (small variant)
│
└── Pages
    │
    ├── Landing Page (index.jsx)
    │   ├── LoadingScreen
    │   │   └── AnimatedLogo (large, with loading animation)
    │   │
    │   └── Main Content
    │       ├── Hero Section
    │       │   ├── AnimatedLogo (large variant)
    │       │   └── CTA Buttons (GlassButton)
    │       │
    │       └── Features Section
    │           └── FeatureCard (GlassCard) × 3
    │
    ├── Profile Page (profile.jsx)
    │   ├── ProfileForm (when editing)
    │   │   ├── GlassCard × 4
    │   │   ├── SkillsInput
    │   │   └── GlassButton
    │   │
    │   └── ProfileSummary (when saved)
    │       └── GlassCard
    │
    ├── Resume Page (resume.jsx)
    │   ├── Left Panel
    │   │   ├── TemplateSelector
    │   │   │   └── GlassCard
    │   │   │
    │   │   └── ResumeBuilder
    │   │       ├── GlassCard
    │   │       └── GlassButton × 2
    │   │
    │   └── Right Panel (sticky)
    │       └── ResumePreview
    │           └── GlassCard
    │
    ├── Interview Page (interview.jsx)
    │   ├── Setup Screen (initial)
    │   │   ├── GlassCard
    │   │   ├── Type Selection × 3
    │   │   └── GlassButton
    │   │
    │   └── MockInterview (active)
    │       ├── Progress Bar
    │       ├── InterviewChat
    │       │   ├── Question Display
    │       │   ├── Answer Input
    │       │   ├── GlassButton
    │       │   └── Tips Section
    │       │
    │       └── FeedbackPanel (on completion)
    │           ├── Score Circle
    │           ├── Metrics Breakdown
    │           ├── AI Feedback
    │           └── GlassButton
    │
    └── Dashboard Page (dashboard.jsx)
        ├── Stats Grid
        │   └── StatCard (GlassCard) × 4
        │
        ├── Charts Grid
        │   ├── SkillAnalytics (GlassCard)
        │   └── ProgressChart (GlassCard)
        │
        └── Recommendations
            └── GlassCard
                └── RecommendationItem × 3
```

---

## 🧩 Component Dependencies

### Core UI Components (glass-ui/)
```
GlassCard
├── Used by: All pages
└── Props: children, hover, style

GlassButton
├── Used by: All pages
└── Props: children, onClick, variant, fullWidth, type

GlassNavbar
├── Uses: AnimatedLogo
└── Props: none

AnimatedBackground
├── Used by: _app.jsx (global)
└── Props: none
```

### Branding Components (branding/)
```
AnimatedLogo
├── Used by: Navbar, Landing, Loading
├── Props: size, showParticles, onClick
└── Variants: small, medium, large
```

### Profile Components (onboarding/)
```
ProfileForm
├── Uses: GlassCard, GlassButton, SkillsInput
├── Props: onSubmit
└── State: formData

SkillsInput
├── Props: skills, onChange
└── Features: Tag input with Enter key
```

### Resume Components (resume/)
```
TemplateSelector
├── Uses: GlassCard
├── Props: selected, onSelect
└── Templates: modern, classic, creative

ResumeBuilder
├── Uses: GlassCard, GlassButton
├── Props: template, onUpdate, onPreview
└── Features: Auto-load profile data

ResumePreview
├── Uses: GlassCard
├── Props: data, template
└── Features: Print-ready layout
```

### Interview Components (interview/)
```
MockInterview
├── Uses: InterviewChat, FeedbackPanel, GlassCard
├── Props: type, onEnd
└── State: currentQuestion, answers, showFeedback

InterviewChat
├── Uses: GlassButton
├── Props: question, onAnswer
└── Features: STAR method tips

FeedbackPanel
├── Uses: GlassButton
├── Props: answers, onEnd
└── Features: Score visualization
```

### Dashboard Components (dashboard/)
```
SkillAnalytics
├── Uses: GlassCard
├── Props: none
└── Features: Animated progress bars

ProgressChart
├── Uses: GlassCard
├── Props: none
└── Features: Bar chart visualization
```

---

## 🎨 Styling Architecture

```
global.css
├── CSS Variables
├── Base Styles
├── Typography
└── Scrollbar

glass.css
├── .glass-container
├── .glass-card
├── .glass-button
├── .glass-input
├── .glass-navbar
├── .gradient-text
├── .neon-glow
└── Animations

logoAnimation.css
├── .animated-logo-container
├── .logo-core
├── .logo-icon
├── .logo-ring (1, 2, 3)
├── .logo-particle
├── Hover effects
└── Keyframe animations
```

---

## 🔄 Data Flow

### Profile Flow
```
User Input
    ↓
ProfileForm (local state)
    ↓
localStorage.setItem('userProfile')
    ↓
ProfileSummary Display
    ↓
ResumeBuilder (auto-load)
```

### Resume Flow
```
Profile Data (localStorage)
    ↓
ResumeBuilder (form input)
    ↓
onUpdate callback
    ↓
ResumePreview (live update)
    ↓
Export (placeholder)
```

### Interview Flow
```
Type Selection
    ↓
MockInterview (load questions)
    ↓
InterviewChat (Q&A loop)
    ↓
Submit Answer
    ↓
Next Question or Feedback
    ↓
FeedbackPanel (scores & suggestions)
```

### Dashboard Flow
```
Mock Data (static)
    ↓
Dashboard Page
    ↓
├── StatCards (display metrics)
├── SkillAnalytics (visualize skills)
├── ProgressChart (show trends)
└── Recommendations (AI suggestions)
```

---

## 🌐 Service Layer

```
Frontend Components
    ↓
Service Layer (src/services/)
    ├── aiService.js
    ├── resumeService.js
    └── interviewService.js
    ↓
API Calls (fetch)
    ↓
Backend Routes (backend/routes/)
    ├── profileRoutes.js
    ├── resumeRoutes.js
    └── interviewRoutes.js
    ↓
Controllers (backend/controllers/)
    ├── profileController.js
    ├── resumeController.js
    └── interviewController.js
    ↓
Mock Data Response
```

---

## 🎯 Component Reusability

### Highly Reusable (Used 10+ times)
- GlassCard
- GlassButton

### Moderately Reusable (Used 3-5 times)
- AnimatedLogo

### Page-Specific (Used 1-2 times)
- ProfileForm
- ResumeBuilder
- MockInterview
- SkillAnalytics
- ProgressChart

---

## 📦 Import Patterns

### Typical Page Import
```javascript
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import GlassCard from '../components/glass-ui/GlassCard';
import GlassButton from '../components/glass-ui/GlassButton';
import SpecificComponent from '../components/category/SpecificComponent';
```

### Typical Component Import
```javascript
import React from 'react';
import GlassCard from '../glass-ui/GlassCard';
// or
import GlassCard from '../../components/glass-ui/GlassCard';
```

---

## 🔧 Props Interface

### GlassCard
```typescript
{
  children: ReactNode,
  hover?: boolean = true,
  style?: CSSProperties = {}
}
```

### GlassButton
```typescript
{
  children: ReactNode,
  onClick?: () => void,
  variant?: 'primary' | 'secondary' = 'primary',
  fullWidth?: boolean = false,
  type?: 'button' | 'submit' = 'button'
}
```

### AnimatedLogo
```typescript
{
  size?: 'small' | 'medium' | 'large' = 'medium',
  showParticles?: boolean = true,
  onClick?: () => void
}
```

---

## 🎨 Style Patterns

### Inline Styles (Used for)
- Layout (flexbox, grid)
- Spacing (margin, padding)
- Sizing (width, height)
- Colors (specific to component)

### CSS Classes (Used for)
- Glassmorphic effects
- Animations
- Hover states
- Global utilities

### CSS Variables (Used for)
- Theme colors
- Gradients
- Consistent values

---

## 🚀 Performance Considerations

### Optimizations Implemented
- ✅ Sticky positioning for preview panels
- ✅ CSS animations (GPU accelerated)
- ✅ Minimal re-renders (local state)
- ✅ Lazy loading ready structure
- ✅ Optimized image placeholders

### Future Optimizations
- 🔜 Code splitting
- 🔜 Image optimization
- 🔜 Bundle analysis
- 🔜 Memoization
- 🔜 Virtual scrolling

---

This component map provides a complete overview of the application architecture, making it easy to understand relationships and dependencies between components.
