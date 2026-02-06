# Troubleshooting Guide - PlacePrep AI

## 🔧 Common Issues & Solutions

---

## Installation Issues

### Issue: `npm install` fails
**Symptoms:**
- Error messages during installation
- Missing dependencies
- Permission errors

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install

# If permission issues (Mac/Linux)
sudo npm install

# Try using yarn instead
npm install -g yarn
yarn install
```

### Issue: Node version incompatibility
**Symptoms:**
- "Unsupported engine" error
- Build failures

**Solutions:**
```bash
# Check your Node version
node --version

# Should be v16 or higher
# Install nvm (Node Version Manager)
# Mac/Linux:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Windows: Download from nodejs.org

# Install and use Node 18
nvm install 18
nvm use 18
```

---

## Development Server Issues

### Issue: Port 3000 already in use
**Symptoms:**
- "Port 3000 is already in use"
- Server won't start

**Solutions:**
```bash
# Option 1: Kill the process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Option 2: Use a different port
PORT=3001 npm run dev
```

### Issue: Backend server won't start
**Symptoms:**
- Port 5000 in use
- Express errors

**Solutions:**
```bash
# Check if port 5000 is available
# Mac/Linux:
lsof -ti:5000 | xargs kill -9

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in backend/server.js
const PORT = process.env.PORT || 5001;
```

### Issue: Hot reload not working
**Symptoms:**
- Changes don't reflect in browser
- Need to manually refresh

**Solutions:**
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev

# Check if file watcher limit is reached (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## Build Issues

### Issue: Build fails with CSS errors
**Symptoms:**
- CSS parsing errors
- Style not loading

**Solutions:**
1. Check CSS syntax in all `.css` files
2. Ensure CSS files are imported in `_app.jsx`
3. Clear `.next` folder and rebuild

```bash
rm -rf .next
npm run build
```

### Issue: Module not found errors
**Symptoms:**
- "Cannot find module" errors
- Import path issues

**Solutions:**
```bash
# Check file paths are correct
# Ensure case sensitivity (Component.jsx vs component.jsx)

# Verify imports use correct relative paths
# From pages: '../components/...'
# From components: '../glass-ui/...' or '../../components/...'

# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## Browser Issues

### Issue: Styles not loading
**Symptoms:**
- Plain HTML without styling
- Missing glassmorphic effects

**Solutions:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check browser console for CSS errors
4. Verify CSS files are imported in `_app.jsx`

### Issue: Logo animation not working
**Symptoms:**
- Static logo
- No particles or rotation

**Solutions:**
1. Check `logoAnimation.css` is imported
2. Verify CSS animations are supported in browser
3. Check browser console for JavaScript errors
4. Try different browser (Chrome/Firefox recommended)

### Issue: Navigation not working
**Symptoms:**
- Links don't navigate
- 404 errors

**Solutions:**
1. Ensure all page files are in `src/pages/`
2. Check file names match routes (profile.jsx → /profile)
3. Verify Next.js router is working
4. Check browser console for errors

---

## Component Issues

### Issue: AnimatedLogo not displaying
**Symptoms:**
- Logo missing
- Console errors

**Solutions:**
```javascript
// Check import path
import AnimatedLogo from '../components/branding/AnimatedLogo';

// Verify component is exported
export default AnimatedLogo;

// Check CSS is loaded
import '../styles/logoAnimation.css';
```

### Issue: GlassCard not showing glassmorphic effect
**Symptoms:**
- Solid background instead of glass
- No blur effect

**Solutions:**
1. Check browser supports backdrop-filter
2. Verify `glass.css` is imported
3. Check CSS variables are defined in `global.css`
4. Try different browser

### Issue: Forms not submitting
**Symptoms:**
- Submit button doesn't work
- Data not saving

**Solutions:**
```javascript
// Check form has onSubmit handler
<form onSubmit={handleSubmit}>

// Prevent default form behavior
const handleSubmit = (e) => {
  e.preventDefault();
  // Your code
};

// Check localStorage is available
if (typeof window !== 'undefined') {
  localStorage.setItem('key', 'value');
}
```

---

## Data Issues

### Issue: Profile data not persisting
**Symptoms:**
- Data lost on refresh
- localStorage not working

**Solutions:**
```javascript
// Check localStorage is available
if (typeof window !== 'undefined') {
  // Safe to use localStorage
  localStorage.setItem('userProfile', JSON.stringify(data));
}

// Check browser allows localStorage
// Some browsers block it in private/incognito mode

// Verify data format
const data = JSON.parse(localStorage.getItem('userProfile'));
console.log(data);
```

### Issue: Resume preview not updating
**Symptoms:**
- Preview shows old data
- Changes don't reflect

**Solutions:**
1. Check `onUpdate` callback is called
2. Verify state is updating
3. Check React DevTools for state changes
4. Ensure preview component receives new props

---

## API Issues

### Issue: API calls failing
**Symptoms:**
- Network errors
- CORS errors
- 404 on API endpoints

**Solutions:**
```bash
# Ensure backend is running
npm run backend

# Check API URL in .env
NEXT_PUBLIC_API_URL=http://localhost:5000

# Verify CORS is enabled in backend/server.js
app.use(cors());

# Check endpoint paths match
// Frontend: /api/profile
// Backend: router.get('/profile')
```

### Issue: CORS errors
**Symptoms:**
- "Access-Control-Allow-Origin" errors
- API blocked by browser

**Solutions:**
```javascript
// In backend/server.js
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

## Performance Issues

### Issue: Slow page load
**Symptoms:**
- Long loading times
- Laggy animations

**Solutions:**
1. Check browser console for errors
2. Disable browser extensions
3. Clear browser cache
4. Check network tab for slow requests
5. Optimize images in `public/assets/`

### Issue: Animations stuttering
**Symptoms:**
- Choppy animations
- Low frame rate

**Solutions:**
1. Close other browser tabs
2. Check CPU usage
3. Disable hardware acceleration in browser
4. Reduce animation complexity
5. Use Chrome DevTools Performance tab

---

## Deployment Issues

### Issue: Vercel deployment fails
**Symptoms:**
- Build errors on Vercel
- Deployment timeout

**Solutions:**
```bash
# Test build locally first
npm run build
npm start

# Check vercel.json is correct
# Ensure all dependencies are in package.json
# Check Node version in Vercel settings

# View build logs in Vercel dashboard
```

### Issue: Environment variables not working
**Symptoms:**
- API URL undefined
- Features not working in production

**Solutions:**
1. Add environment variables in Vercel dashboard
2. Prefix with `NEXT_PUBLIC_` for client-side access
3. Redeploy after adding variables
4. Check variable names match exactly

---

## Development Tips

### Enable Detailed Error Messages
```javascript
// In next.config.js
module.exports = {
  reactStrictMode: true,
  // Add this for detailed errors
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  }
}
```

### Debug React Components
```javascript
// Add console logs
console.log('Component rendered', { props, state });

// Use React DevTools browser extension
// Install from Chrome/Firefox extension store

// Check component tree and props
```

### Debug API Calls
```javascript
// In service files
console.log('API Request:', { url, method, body });

// Check Network tab in browser DevTools
// View request/response details
```

---

## Getting Help

### Before Asking for Help
1. ✅ Check this troubleshooting guide
2. ✅ Read error messages carefully
3. ✅ Check browser console
4. ✅ Search error message online
5. ✅ Try solutions from Stack Overflow

### When Asking for Help
Include:
- Error message (full text)
- Steps to reproduce
- Your environment (OS, Node version, browser)
- What you've already tried
- Relevant code snippets

### Useful Resources
- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- MDN Web Docs: https://developer.mozilla.org
- Stack Overflow: https://stackoverflow.com

---

## Quick Fixes Checklist

When something breaks, try these in order:

1. ✅ Hard refresh browser (Ctrl+Shift+R)
2. ✅ Check browser console for errors
3. ✅ Restart development server
4. ✅ Clear `.next` folder
5. ✅ Clear browser cache
6. ✅ Reinstall node_modules
7. ✅ Check file paths and imports
8. ✅ Verify all required files exist
9. ✅ Check Node and npm versions
10. ✅ Try different browser

---

## Still Having Issues?

Run the verification script:
```bash
node verify-setup.js
```

This will check if all required files are present.

---

**Remember: Most issues are caused by:**
- Missing dependencies
- Incorrect file paths
- Port conflicts
- Browser cache
- Typos in code

**Take a deep breath, read error messages carefully, and debug systematically! 🐛🔍**
