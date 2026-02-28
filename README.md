# Storage Array History Website

A comprehensive archive of enterprise storage arrays from DellEMC, IBM, HPE, NetApp, Hitachi, and Everpure (formerly Pure Storage).

## 📊 What's Inside

- **50+ Spec Sheets** (45MB of PDFs)
- **6 Major Vendors** covered
- **2000-2025** time range
- **Searchable & Filterable** interface

## 🔄 Historical Rebrand Notes

- **February 2026**: Pure Storage rebranded to **Everpure**
- **Post-2016 Dell/EMC Merger**: Major product line transitions:
  - Symmetrix → **PowerMax**
  - Isilon → **PowerScale**
  - VNX → Unity → **PowerStore**
  - Data Domain → **PowerProtect**

## 🚀 Quick Setup (Easiest Method)

### Step 1: Create GitHub Repo
1. Go to https://github.com/new
2. Repository name: `storage-array-history`
3. Make it **Public**
4. Click **Create repository**

### Step 2: Upload Files

**Option A: Drag & Drop (Easiest)**
1. Open your new repo on GitHub
2. Click **"Uploading an existing file"**
3. Drag the entire `storage-array-website` folder contents
4. Commit changes

**Option B: Command Line**
```bash
cd ~/Desktop/storage-array-website

git init
git add .
git commit -m "Initial commit: Storage array archive"

git remote add origin https://github.com/jp-moregain/storage-array-history.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Click **Save**
5. Wait 2-3 minutes

### Step 4: Visit Your Site! 🎉
Your site will be live at:
```
https://jp-moregain.github.io/storage-array-history
```

## 📁 File Structure

```
storage-array-website/
├── index.html          # Main website
├── css/
│   └── style.css       # Styling
├── js/
│   └── app.js          # Search & filter logic
├── pdfs/
│   ├── DellEMC/        # 22 PDFs
│   ├── IBM/            # 7 PDFs
│   ├── Hitachi/        # 6 PDFs
│   ├── NetApp/         # 9 PDFs
│   ├── HPE/            # 3 PDFs
│   └── PureStorage/    # 3 PDFs
└── README.md           # This file
```

## ✨ Features

- 🔍 **Search** - Filter arrays by name, type, or year
- 🏷️ **Filter** - Show only Current or Discontinued products
- 📱 **Responsive** - Works on mobile, tablet, desktop
- ⚡ **Fast** - Static site, no server needed
- 🔗 **Direct Downloads** - Click any PDF to download

## 📝 Adding More Arrays

To add a new storage array:

1. Add PDF to appropriate `pdfs/<vendor>/` folder
2. Edit `index.html` and add a new card:

```html
<div class="array-card [current|discontinued]">
    <h3>Array Name</h3>
    <span class="year">YYYY</span>
    <span class="type">Type</span>
    <p>Description here</p>
    <a href="pdfs/Vendor/YourFile.pdf" class="download-link" target="_blank">
        📄 Download Spec Sheet
    </a>
</div>
```

3. Commit and push to GitHub
4. Changes go live in ~1 minute

## 🎨 Customization

### Change Colors
Edit `css/style.css`:
```css
:root {
    --primary: #2563eb;    /* Main blue color */
    --accent: #f59e0b;     /* Orange accent */
}
```

### Add Custom Domain
1. Buy domain (e.g., storagehistory.com)
2. Go to repo **Settings** → **Pages**
3. Enter custom domain
4. Add DNS CNAME record pointing to `jp-moregain.github.io`

## 📊 Current Coverage

| Vendor | Current | Discontinued | Total PDFs |
|--------|---------|--------------|------------|
| DellEMC | 3 | 19 | 22 |
| IBM | 2 | 5 | 7 |
| Hitachi | 2 | 4 | 6 |
| NetApp | 1 | 8 | 9 |
| HPE | 0 | 3 | 3 |
| Everpure (Pure Storage) | 3 | 0 | 3 |
| **Total** | **11** | **39** | **50** |

## 🔗 Links

- **Live Site**: https://jp-moregain.github.io/storage-array-history
- **GitHub Repo**: https://github.com/jp-moregain/storage-array-history

## 📄 License

Spec sheets are archived from public sources for educational purposes.
Website code is MIT licensed - feel free to fork and modify!

---

Created by [@jp-moregain](https://github.com/jp-moregain) | February 2026
# Trigger rebuild
