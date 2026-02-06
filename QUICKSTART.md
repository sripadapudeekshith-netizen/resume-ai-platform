# 🚀 Quick Start Guide - PlacePrep AI

## Get Started in 3 Minutes!

### Step 1: Install Dependencies
```bash
cd resume-ai-platform
npm install
```

### Step 2: Run the Application
```bash
# Start the frontend (Next.js)
npm run dev
```

The app will be available at: **http://localhost:3000**

### Step 3: Explore the Platform

#### 🏠 Landing Page
- Watch the animated logo loading screen
- Click "Get Started" to begin

#### 👤 Create Your Profile
1. Click **Profile** in the navbar
2. Fill in your details:
   - Personal information
   - Education
   - Skills (type and press Enter)
   - Experience & goals
3. Click "Save Profile"

#### 📝 Build Your Resume
1. Navigate to **Resume**
2. Select a template (Modern/Classic/Creative)
3. Fill in resume content
4. Click "Generate Preview" to see your resume

#### 🎤 Practice Interviews
1. Go to **Interview**
2. Choose interview type:
   - Technical (coding questions)
   - Behavioral (soft skills)
   - HR (general questions)
3. Start interview and answer questions
4. Get AI feedback and scores

#### 📊 View Analytics
1. Visit **Dashboard**
2. See your performance stats
3. Check skill analytics
4. Review AI recommendations

## 🎨 Key Features to Try

### Interactive Logo
- **Hover** over the logo to see glow effect
- **Click** logo to return to home
- Watch the **floating animation** and particle rings

### Glassmorphic UI
- Notice the frosted glass effect on cards
- Hover over buttons for gradient animations
- Smooth transitions throughout

### Mock Data
- All data is stored locally (localStorage)
- No backend required for basic functionality
- Perfect for demo and testing

## 🔧 Optional: Run Backend Server

If you want to test API endpoints:

```bash
# In a separate terminal
npm run backend
```

Backend API will run at: **http://localhost:5000/api**

### Test API Endpoints
```bash
# Health check
curl http://localhost:5000/api/health

# Start interview
curl -X POST http://localhost:5000/api/interview/start \
  -H "Content-Type: application/json" \
  -d '{"userId":"123","interviewType":"technical"}'
```

## 📱 Responsive Design

The platform works on:
- 💻 Desktop (optimized)
- 📱 Tablet
- 📱 Mobile

Try resizing your browser to see responsive behavior!

## 🎯 What's Working (30% Prototype)

✅ Animated interactive logo with particles  
✅ Glassmorphic UI design system  
✅ Complete navigation flow  
✅ Profile creation and editing  
✅ Resume builder with templates  
✅ Mock interview simulator  
✅ Analytics dashboard  
✅ Backend API scaffold  
✅ Responsive design  

## ⏳ Coming in Future Phases

🔜 Real AI integration (GPT)  
🔜 Database storage  
🔜 User authentication  
🔜 PDF export  
🔜 Advanced analytics  
🔜 Voice interview practice  

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Browser Issues
- Clear browser cache
- Try incognito/private mode
- Use Chrome/Firefox for best experience

## 💡 Tips

1. **Profile First**: Create your profile before using resume builder
2. **Skills**: Press Enter after typing each skill
3. **Interview**: Take your time answering questions
4. **Dashboard**: Complete interviews to see analytics update

## 🎨 Customization

### Change Theme Colors
Edit `src/styles/global.css`:
```css
:root {
  --neon-purple: #a855f7;  /* Change to your color */
  --neon-blue: #3b82f6;
  --neon-pink: #ec4899;
}
```

### Modify Logo
Edit `src/components/branding/AnimatedLogo.jsx` and `src/styles/logoAnimation.css`

## 📚 Learn More

- Read full [README.md](./README.md) for detailed documentation
- Check component files for inline comments
- Explore the modular architecture

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments!

---

**Enjoy building with PlacePrep AI! 🎉**
