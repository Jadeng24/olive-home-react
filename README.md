# Olive Home React Website

Welcome to the Olive Home Co website repository! This guide will help you get started with deploying and updating the website.

## 📚 Documentation

- **This README** - Complete deployment workflow (you're here!)
- **[DEVELOPER-GUIDE.md](./DEVELOPER-GUIDE.md)** - For developers: project structure, common tasks, using Cascade AI, troubleshooting, and more

---

## About This Guide - Olive Home Co React Website (Hosted on Bluehost)

This comprehensive step-by-step guide is designed to help beginners deploy and update the Olive Home React website without any prior coding experience. It walks you through the entire process from:
1. Cloning the project from GitHub
2. Making changes locally
3. Testing them in your browser, and then
4. Deploying those updates to your live Bluehost website.

The guide covers everything from basic terminal navigation to using Git for version control, building the production files, and properly uploading them to your cPanel file manager. Whether you're updating content, adding new images, or making design changes, this workflow ensures your website stays current and professional.

**If you have any questions about any of these steps, encounter errors, or need clarification on any part of the process, please don't hesitate to reach out.**

---

## Prerequisites

- Install Git https://git-scm.com/install/
- Install Node.js  https://nodejs.org/en/download
- Have access to your Bluehost cPanel
  - Go to: https://www.bluehost.com/my-account/hosting/details/sites/15398605/files
  - Click on 'File Manager'

---

## Step 1: Clone the Repository

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to where you want the project:
   ```bash
   cd Desktop
   ```
   
   **Navigation tips:**
   - `cd folder-name` - move forward into a folder
   - `cd ..` - move back one folder
   - `pwd` (Mac) or `cd` (Windows) - see where you are
   - `ls` (Mac) or `dir` (Windows) - list folders/files
   
3. Clone the repository:
   ```bash
   git clone https://github.com/Jadeng24/olive-home-react.git
   ```
4. Enter the project folder:
   ```bash
   cd olive-home-react
   ```

---

## Step 2: Install Dependencies

```bash
npm install
```

### 📁 Navigation Tips

If you need to navigate between folders in Terminal/Command Prompt:

- **Go into a folder:** `cd folder-name`
- **Go back one folder:** `cd ..`
- **Go back to home:** `cd ~` (Mac) or `cd %USERPROFILE%` (Windows)
- **See current location:** `pwd` (Mac) or `cd` (Windows)
- **List files in current folder:** `ls` (Mac) or `dir` (Windows)

**Example:** If you're in the wrong folder, use `cd ..` to go back, then `cd Desktop` to get to Desktop.

---

## Step 3: Start Development Server (Optional but Recommended)

```bash
npm run dev
```

- Open your browser and go to http://localhost:5173/
- You can now see your website locally and watch changes update in real-time
- Press `Ctrl+C` to stop the server when done

---

## Step 4: Make Your Changes

1. Open the project in your code editor IDE (Windsurf, VS Code, etc.)
2. Make your desired changes to any files
3. Save all files
4. Check your changes at http://localhost:5173/ before deploying - refresh browser if needed

**💡 Need help making changes?** Check out [DEVELOPER-GUIDE.md](./DEVELOPER-GUIDE.md) for tips on using Cascade AI, understanding the project structure, and common tasks!

---

## Step 5: Commit and Push Changes from Local (Your Computer) to Remote (GitHub)

1. Add all changes:
   ```bash
   git add .
   ```
2. Commit with a message:
   ```bash
   git commit -m "describe your changes here"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```

---

## Step 6: Build for Production (How to Upload Your Changes to the Live Website)

```bash
npm run build
```

This creates a `dist` folder with your website files.

---

## Step 7: Create ZIP File

1. Within your computer's File explorer, go to `olive-home-react` → `dist`
2. Right-click on the `dist` folder
3. Select "Compress" (Mac) or "Send to → Compressed folder" (Windows)
4. This creates `dist.zip`

---

## Step 8: Upload to Bluehost cPanel

1. Go to: **https://www.bluehost.com/my-account/hosting/details/sites/15398605/files**
2. Click on 'File Manager'
3. You should be in the website now (`public_html/website_57cd81b8`)
4. Click **Upload** button
5. Select and upload your `dist.zip` file
6. Wait for upload to complete

---

## Step 9: Extract and Move Files

1. In File Manager, right-click `dist.zip`
2. Select **Extract**
3. Click **Extract Files**
4. You now have a `dist` folder in `public_html/website_57cd81b8`

---

## Step 10: Move Contents Out of Dist Folder to Root Level

1. Double-click the `dist` folder (on folder icon) to open it
2. Select ALL files and folders inside dist (`Ctrl+A` or `Cmd+A`) or hold shift and click all of them
3. Click **Move** button
4. In the popup, change the path from:
   ```
   /public_html/website_57cd81b8/dist/
   ```
   to:
   ```
   /public_html/website_57cd81b8/
   ```
5. Click **Move Files**
   - **Note:** If it asks if you want to overwrite files, YES overwrite them so new updates are taking precedence over old ones.

---

## Step 11: Clean Up (Not Required but Should Do)

1. Go back to `public_html/website_57cd81b8`
2. Delete the empty `dist` folder
3. Delete the `dist.zip` file

---

## Step 12: Test Your Website

Visit your domain to see the updated website!

---

## 🎉 Your website is now updated! 

Repeat steps 4-12 whenever you want to make changes.

---

## 💡 Pro Tips

- Always test your changes locally at http://localhost:5173/ with `npm run dev` before deploying to production. This helps catch any issues before they go live!
- Check out **[DEVELOPER-GUIDE.md](./DEVELOPER-GUIDE.md)** for troubleshooting help, using Cascade AI assistant, Git best practices, and more!

---

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **SCSS** - Styling
- **React Router** - Navigation

---

## 🆘 Need Help?

- **Troubleshooting?** See [DEVELOPER-GUIDE.md](./DEVELOPER-GUIDE.md)
- **Understanding the code?** Check the project structure in [DEVELOPER-GUIDE.md](./DEVELOPER-GUIDE.md)
- **Using Cascade AI?** Find tips and examples in [DEVELOPER-GUIDE.md](./DEVELOPER-GUIDE.md)
- **Still stuck?** Reach out with your question, error message, or screenshot!
