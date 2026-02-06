/**
 * Setup Verification Script
 * Run this to verify all files are in place
 * Usage: node verify-setup.js
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  // Config files
  'package.json',
  'next.config.js',
  'vercel.json',
  '.env.example',
  '.gitignore',
  
  // Documentation
  'README.md',
  'QUICKSTART.md',
  'PROJECT_SUMMARY.md',
  'COMPONENT_MAP.md',
  'DEVELOPMENT_ROADMAP.md',
  
  // Styles
  'src/styles/global.css',
  'src/styles/glass.css',
  'src/styles/logoAnimation.css',
  
  // Pages
  'src/pages/_app.jsx',
  'src/pages/_document.jsx',
  'src/pages/index.jsx',
  'src/pages/profile.jsx',
  'src/pages/resume.jsx',
  'src/pages/interview.jsx',
  'src/pages/dashboard.jsx',
  
  // Branding components
  'src/components/branding/AnimatedLogo.jsx',
  
  // Glass UI components
  'src/components/glass-ui/GlassCard.jsx',
  'src/components/glass-ui/GlassButton.jsx',
  'src/components/glass-ui/GlassNavbar.jsx',
  'src/components/glass-ui/AnimatedBackground.jsx',
  
  // Onboarding components
  'src/components/onboarding/ProfileForm.jsx',
  'src/components/onboarding/SkillsInput.jsx',
  
  // Resume components
  'src/components/resume/ResumeBuilder.jsx',
  'src/components/resume/ResumePreview.jsx',
  'src/components/resume/TemplateSelector.jsx',
  
  // Interview components
  'src/components/interview/MockInterview.jsx',
  'src/components/interview/InterviewChat.jsx',
  'src/components/interview/FeedbackPanel.jsx',
  
  // Dashboard components
  'src/components/dashboard/SkillAnalytics.jsx',
  'src/components/dashboard/ProgressChart.jsx',
  
  // Services
  'src/services/aiService.js',
  'src/services/resumeService.js',
  'src/services/interviewService.js',
  
  // Backend
  'backend/server.js',
  'backend/routes/profileRoutes.js',
  'backend/routes/resumeRoutes.js',
  'backend/routes/interviewRoutes.js',
  'backend/controllers/profileController.js',
  'backend/controllers/resumeController.js',
  'backend/controllers/interviewController.js'
];

console.log('🔍 Verifying PlacePrep AI Setup...\n');

let allFilesPresent = true;
let missingFiles = [];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesPresent = false;
    missingFiles.push(file);
  }
});

console.log('\n' + '='.repeat(60));

if (allFilesPresent) {
  console.log('\n✅ SUCCESS! All required files are present.\n');
  console.log('📦 Total files verified:', requiredFiles.length);
  console.log('\n🚀 Next steps:');
  console.log('   1. Run: npm install');
  console.log('   2. Run: npm run dev');
  console.log('   3. Open: http://localhost:3000\n');
  console.log('📖 Read QUICKSTART.md for detailed instructions.\n');
} else {
  console.log('\n❌ SETUP INCOMPLETE\n');
  console.log('Missing files:', missingFiles.length);
  console.log('\nMissing files:');
  missingFiles.forEach(file => console.log(`   - ${file}`));
  console.log('\nPlease ensure all files are created.\n');
  process.exit(1);
}

// Check for required directories
const requiredDirs = [
  'src',
  'src/components',
  'src/pages',
  'src/services',
  'src/styles',
  'backend',
  'backend/routes',
  'backend/controllers',
  'public'
];

console.log('📁 Verifying directory structure...\n');

let allDirsPresent = true;
requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ - MISSING`);
    allDirsPresent = false;
  }
});

if (allDirsPresent) {
  console.log('\n✅ All directories present!\n');
} else {
  console.log('\n❌ Some directories are missing!\n');
}

console.log('='.repeat(60));
console.log('\n🎉 PlacePrep AI - 30% Prototype Ready!\n');
