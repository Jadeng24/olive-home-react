# Developer Guide - Olive Home React

A practical guide for beginner frontend engineers working on the Olive Home website.

---

## 👀 Reading This Guide

**To view this file in a nicer preview format:**

- **Keyboard shortcut:** `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux)
- **Menu method:** Right-click the file tab → "Open Preview" or look for preview icon in top-right corner

This works for any `.md` (markdown) file in the project!

---

## 📁 Project Structure

```
olive-home-react/
├── src/
│   ├── components/     # Reusable UI components (Header, Footer, etc.)
│   ├── pages/          # Full page components (Home, About, Contact, etc.)
│   ├── assets/         # Images, fonts, and other static files
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Files served as-is (vite.svg, etc.)
├── dist/               # Production build (created by npm run build)
└── package.json        # Project dependencies and scripts
```

**Where to make changes:**
- **Text/Content** → `src/pages/` or `src/components/`
- **Images** → Add to `src/assets/`, reference in code
- **Styling** → `.scss` or `.css` files in `src/`
- **New Pages** → Create in `src/pages/`, add route in `App.tsx`

---

## 🛠️ Tech Stack

- **React** - UI library for building components
- **TypeScript** - JavaScript with type safety
- **Vite** - Fast development server and build tool
- **SCSS/CSS** - Styling (SCSS compiles to CSS)
- **React Router** - Page navigation

---

## 🚀 Quick Start

1. **First Time Setup:**
   ```bash
   cd olive-home-react
   npm install
   npm run dev
   ```

2. **Daily Workflow:**
   ```bash
   git pull                    # Get latest changes
   npm run dev                 # Start dev server
   # Make your changes
   # Test at http://localhost:5173
   git add .
   git commit -m "your message"
   git push
   ```

---

## ✏️ Common Tasks

### Adding/Changing Images

1. Place image in `src/assets/`
2. Import in your component:
   ```tsx
   import myImage from './assets/myImage.png'
   ```
3. Use in JSX:
   ```tsx
   <img src={myImage} alt="description" />
   ```

### Updating Text Content

1. Find the page in `src/pages/` or component in `src/components/`
2. Locate the text within JSX (inside `return()`)
3. Edit the text directly
4. Save and check browser (auto-refreshes)

### Adding a New Page

1. Create new file: `src/pages/NewPage.tsx`
2. Copy structure from existing page
3. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Import at top of `App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage'
   ```

### Changing Styles

1. Find the `.scss` or `.css` file for your component
2. Edit existing styles or add new ones
3. Changes apply automatically with dev server running

---

## 🤖 Using Cascade (AI Assistant)

Cascade can help you make changes without needing to manually edit code.

### Good Prompts Examples:

- ✅ "Update the About page headline to say 'Welcome to Olive Home Co'"
- ✅ "Add a new image called 'product.png' from my assets folder to the Services page"
- ✅ "Change the header background color to navy blue"
- ✅ "Create a new Testimonials page with a simple layout"
- ✅ "Fix the spacing issue on the Contact page - there's too much padding"

### Tips for Working with Cascade:

1. **Be specific** - Say which page/component you want changed
2. **One task at a time** - Don't combine multiple unrelated requests
3. **Review changes** - Always check what Cascade modified before committing
4. **Test locally** - Run `npm run dev` and test in browser
5. **Ask questions** - If you don't understand something, ask Cascade to explain

### When to Use Cascade vs Manual Editing:

**Use Cascade for:**
- Complex changes across multiple files
- Adding new features you're unsure how to implement
- Debugging errors
- Understanding existing code

**Manual editing is fine for:**
- Simple text changes
- Swapping out images
- Minor style tweaks
- Changes you're confident about

---

## 🔧 Troubleshooting

### `npm install` fails
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
Stop the other dev server running, or use:
```bash
npm run dev -- --port 3000
```

### Git push rejected
Someone else pushed changes. Pull first:
```bash
git pull
# Resolve any conflicts if needed
git push
```

### White screen after deployment
1. Open browser console (F12 or Right-click → Inspect)
2. Look for red errors
3. Common cause: file path issues or missing files
4. Ask Cascade to help debug with the error message

### Changes not showing up locally
1. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Check if dev server is still running
3. Verify you saved the file

### Build fails (`npm run build`)
1. Check terminal for error message
2. Make sure dev server works: `npm run dev`
3. Copy error message and ask Cascade for help

---

## 📝 Git Best Practices

### Before Starting Work
```bash
git pull    # Get latest changes from GitHub
```

### Check What Changed
```bash
git status  # See which files changed
git diff    # See specific changes
```

### Commit Your Changes
```bash
git add .
git commit -m "Clear description of what you changed"
git push
```

### Writing Good Commit Messages
- ❌ "updated stuff"
- ❌ "changes"
- ✅ "Updated About page headline and added team photo"
- ✅ "Fixed navigation menu spacing on mobile"
- ✅ "Added new Services page with product images"

### Undo Recent Changes (Not Committed Yet)
```bash
git checkout -- filename.tsx    # Undo changes to one file
git checkout -- .               # Undo all changes
```

---

## 💻 Development Workflow Tips

### Keep Dev Server Running
- Leave `npm run dev` running while you work
- Changes appear instantly in browser (hot reload)
- Only restart if something breaks

### Use Browser DevTools
- **Open:** `F12` or Right-click → Inspect
- **Console tab:** See JavaScript errors
- **Elements tab:** Inspect HTML/CSS
- **Network tab:** Check if files are loading

### Browser Auto-Refresh
- Save your file → browser updates automatically
- If not updating, hard refresh: `Cmd+Shift+R` or `Ctrl+Shift+R`

### Testing Your Changes
1. Make change in code
2. Save file
3. Check browser at http://localhost:5173/
4. Try different pages if needed
5. Check on mobile view (resize browser or DevTools device mode)

---

## 📖 Quick Reference Commands

```bash
# Navigate folders
cd folder-name          # Enter folder
cd ..                   # Go back one level
pwd                     # Show current location
ls                      # List files (Mac)

# Git commands
git pull                # Get latest code
git status              # Check what changed
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push                # Push to GitHub

# NPM commands
npm install             # Install dependencies
npm run dev             # Start dev server
npm run build           # Build for production

# Keyboard shortcuts
Cmd/Ctrl + S            # Save file
Cmd/Ctrl + C            # Stop running process (in terminal)
Cmd/Ctrl + Shift + R    # Hard refresh browser
```

---

## 🆘 When You Get Stuck

1. **Check the error message** - Read it carefully, it often tells you what's wrong
2. **Search the error** - Copy/paste into Google with "React" or "Vite"
3. **Ask Cascade** - Describe the issue and share any error messages
4. **Check the browser console** - F12 → Console tab for errors
5. **Restart dev server** - `Ctrl+C` then `npm run dev`
6. **Ask for help** - Reach out with:
   - What you were trying to do
   - What happened instead
   - Any error messages
   - Screenshot if helpful

---

## 🎯 Remember

- **Test locally first** - Always run `npm run dev` and check changes before deploying
- **Commit often** - Small, frequent commits are better than one huge commit
- **Ask questions** - No question is too basic, better to ask than break something
- **Use Cascade** - It's there to help, especially for tasks you're unsure about
- **Have fun** - You're learning and building something cool!
