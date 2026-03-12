# How to Update PDFs on the Website

This guide will walk you through uploading PDFs to the Olive Home Co. website. Three pages support PDF display that you can easily update. No coding experience required!

---

## What You'll Need

- Your PDF file (formatted in **4:3 landscape aspect ratio** for best display)
- Access to Bluehost cPanel
- The PDF should be named correctly (see below)

---

## Which PDF Are You Updating?

Three pages support PDF display. Each PDF only shows up when the file exists on the server:

### Promotions Page (`yourdomain.com/promotions`)
- **File name:** `promo.pdf`
- **Purpose:** Current sales, special offers, limited-time promotions
- **Location on page:** Main content of the page
- **Best for:** QR codes, flyers, in-store displays
- **Display:** Shows "No Active Promotions" message when PDF doesn't exist

### Window Coverings Page (`yourdomain.com/window-coverings`)
- **File name:** `window-coverings.pdf`
- **Purpose:** Product catalog showing styles, colors, options
- **Location on page:** Bottom of page (labeled "Browse Our Catalog")
- **Display:** Section hidden when PDF doesn't exist

### Services Page (`yourdomain.com/services`)
- **File name:** `services.pdf`
- **Purpose:** Detailed service information, pricing guides
- **Location on page:** Below the service request form
- **Display:** Section hidden when PDF doesn't exist

---

## Step-by-Step Instructions

### Step 1: Prepare Your PDF

1. Create your document (in Word, Canva, Photoshop, etc.)
2. **Important:** Format your PDF in **4:3 landscape aspect ratio** (horizontal orientation)
3. Save or export it as a PDF file
4. Rename the file based on which page you're updating (exactly as shown - lowercase):
   - Promotions page: `promo.pdf`
   - Window coverings page: `window-coverings.pdf`
   - Services page: `services.pdf`

---

### Step 2: Access Bluehost File Manager

1. Go to: **https://www.bluehost.com/my-account/hosting/details/sites/15398605/files**
2. Log in if prompted
3. Click the **"File Manager"** button
4. You should now see your website files

---

### Step 3: Navigate to the Correct Folder

1. Make sure you're in the folder: `public_html/website_57cd81b8`
   - This should be the default location when File Manager opens
   - If not, click on folders in the left sidebar to navigate there

---

### Step 4: Upload Your PDF

1. Click the **"Upload"** button at the top of the File Manager
2. A new window/tab will open
3. Click **"Select File"** or drag and drop your `promo.pdf` file
4. Wait for the upload to complete (you'll see a progress bar)
5. Once complete, close the upload window

---

### Step 5: Verify the Upload

1. Back in File Manager, you should see your PDF file in the file list
2. If there was an old file with the same name, it has been replaced with your new one

---

### Step 6: Test the Website

1. Open a web browser
2. Go to the appropriate page and scroll to see the PDF section:
   - Promotions: `yourdomain.com/promotions`
   - Window Coverings: `yourdomain.com/window-coverings` (scroll to bottom)
   - Services: `yourdomain.com/services` (scroll to bottom)
3. You should see your new PDF displayed on the page in landscape format
4. If you see the old PDF, try refreshing the page (Ctrl+R or Cmd+R)
   - Or do a hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

---

## 🎉 Done!

Your PDF is now live on the website! The PDF section will automatically appear on the page once the file is uploaded.

---

## 💡 Tips

- **File names matter**: The files MUST be named exactly as specified (lowercase):
  - `promo.pdf`, `window-coverings.pdf`, `services.pdf`
- **Aspect ratio**: PDFs display best in **4:3 landscape format** (horizontal orientation)
- **Conditional display**: PDF sections only appear when the file exists - no file means no section shows
- **QR codes**: Your QR codes don't need to change - they always point to the same URL
- **Multiple items**: If you want to show multiple documents, combine them into one PDF file before uploading
- **File size**: Keep your PDFs under 10MB for faster loading
- **Update anytime**: You can replace these PDFs as often as you need - just upload a new file with the same name
- **Remove a PDF**: To hide a PDF section, simply delete the PDF file from Bluehost

---

## 🆘 Troubleshooting

### Problem: I don't see my new PDF on the website

**Solution:**
- Clear your browser cache and refresh the page
- Try opening the page in a private/incognito window
- Make sure the file is named exactly `promo.pdf`
- Check that you uploaded to the correct folder: `public_html/website_57cd81b8`

### Problem: The PDF won't display (shows error)

**Solution:**
- Make sure the file is actually a PDF (not a Word doc or image)
- Try re-saving/exporting your PDF
- Check the file size - very large PDFs may have issues

### Problem: I can't find the File Manager

**Solution:**
- Use this direct link: https://www.bluehost.com/my-account/hosting/details/sites/15398605/files
- Or log into Bluehost → My Account → Hosting → File Manager

---

## 📞 Need More Help?

If you're stuck or something isn't working, reach out with:
- A description of what you're trying to do
- What step you're on
- Any error messages you see
- A screenshot if possible

We're here to help!
