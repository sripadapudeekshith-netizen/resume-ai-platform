# PlacePrep AI - Resume & Interview Preparation Platform

## 🎯 Project Overview

PlacePrep AI is an AI-powered platform designed to help students create professional resumes and prepare for job interviews. This is a **30% working prototype** focusing on frontend UI, navigation flow, reusable components, and backend scaffolding.

## ✨ Features Implemented (30% Prototype)

### 🎨 Branding & UI
- **Animated Interactive Logo** with glassmorphic styling
  - Floating animation on idle
  - Glow/pulse effect on hover
  - Particle rings and effects
  - Click navigation to home
- **Glassmorphic Design System**
  - Frosted glass UI cards
  - Blur background layers
  - Neon gradient accents
  - Smooth hover transitions
  - Dark futuristic theme

### 📄 Core Modules

#### 1. Landing Page
- Animated loading splash screen
- Hero section with animated logo
- Feature highlight cards
- Call-to-action buttons

#### 2. Profile Onboarding
- Interactive profile form
- Skills tag input system
- Profile summary display
- Local state management

#### 3. Resume Builder
- Template selector (Modern, Classic, Creative)
- Resume content editor
- Live preview panel
- Export placeholder (PDF coming soon)

#### 4. Mock Interview Simulator
- Interview type selection (Technical, Behavioral, HR)
- Chat-style interface
- Progress tracking
- AI feedback panel with scores

#### 5. Analytics Dashboard
- Performance statistics cards
- Skill analytics visualization
- Weekly progress chart
- AI recommendations panel

### 🎨 Reusable UI Components
- `AnimatedLogo` - Interactive brand logo
- `GlassCard` - Glassmorphic container
- `GlassButton` - Animated button
- `GlassNavbar` - Navigation bar
- `AnimatedBackground` - Gradient background with floating orbs

### 🔧 Backend Scaffold
- Express.js server setup
- REST API placeholder endpoints
- Mock controllers for:
  - Profile management
  - Resume generation
  - Interview sessions
- CORS enabled for frontend integration

## 🚀 Tech Stack

### Frontend
- **Next.js** (React framework)
- Component-based architecture
- CSS modules for styling
- Responsive mobile-first design

### Backend
- **Node.js** with Express
- RESTful API structure
- Mock data responses

### Deployment Ready
- Vercel configuration
- GitHub deployable structure

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resume-ai-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Run the development server**
   ```bash
   # Frontend (Next.js)
   npm run dev
   
   # Backend (Express) - in separate terminal
   npm run backend
   ```

5. **Open in browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## 📁 Project Structure

```
resume-ai-platform/
├── public/                    # Static assets
│   └── assets/
├── src/
│   ├── components/
│   │   ├── branding/         # Logo components
│   │   ├── glass-ui/         # Glassmorphic UI components
│   │   ├── onboarding/       # Profile setup components
│   │   ├── resume/           # Resume builder components
│   │   ├── interview/        # Interview simulator components
│   │   └── dashboard/        # Analytics components
│   ├── pages/                # Next.js pages
│   ├── services/             # API service layers
│   └── styles/               # Global styles
├── backend/
│   ├── routes/               # API routes
│   ├── controllers/          # Request handlers
│   └── server.js             # Express server
├── package.json
├── next.config.js
└── vercel.json
```

## 🎮 Usage Guide

### Creating a Profile
1. Navigate to **Profile** page
2. Fill in personal information, education, and skills
3. Add work experience and career goals
4. Save profile (stored in localStorage for demo)

### Building a Resume
1. Go to **Resume** page
2. Select a template (Modern, Classic, Creative)
3. Fill in resume content
4. Click "Generate Preview" to see live preview
5. Export functionality coming in future phase

### Mock Interview Practice
1. Visit **Interview** page
2. Select interview type (Technical, Behavioral, HR)
3. Click "Start Interview"
4. Answer questions in the chat interface
5. Receive AI feedback and performance scores

### Viewing Analytics
1. Access **Dashboard** page
2. View performance statistics
3. Check skill analytics and progress charts
4. Review AI recommendations

## 🔮 Future Enhancements (Not in 30% Prototype)

### Phase 2 (Next 30%)
- Real AI integration (OpenAI/GPT)
- Database integration (MongoDB/PostgreSQL)
- User authentication system
- PDF export functionality
- Advanced resume templates

### Phase 3 (Final 40%)
- Real-time interview practice with voice
- Advanced analytics and insights
- Job matching recommendations
- Company-specific interview prep
- Mobile app version

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - 30% prototype"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Environment Variables**
   - Add environment variables in Vercel dashboard
   - Set `NEXT_PUBLIC_API_URL` for production API

## 🛠️ Development Notes

### Mock Data
- All AI features use mock data
- No real API calls to AI services
- Profile data stored in localStorage
- Interview sessions use predefined questions

### Component Architecture
- Modular and reusable components
- Props-based configuration
- Inline styles for rapid prototyping
- Ready for CSS-in-JS migration

### API Structure
- RESTful endpoints defined
- Mock controllers return dummy data
- Ready for real database integration
- CORS configured for cross-origin requests

## 📝 License

This project is part of a prototype development phase.

## 👥 Contributors

- Development Team: PlacePrep AI

## 📧 Contact

For questions or feedback, please reach out to the development team.

---

**Note:** This is a 30% working prototype. Real AI logic, database integration, and authentication will be implemented in future phases.
