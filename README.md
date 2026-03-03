# Sheedoz Showcase Website

Professional showcase website for the Sheedoz app, built with static HTML/CSS/JavaScript.

## 📋 Overview

- **Domain**: www.sheedoz.app
- **Hosting**: Hostinger
- **Technology**: Static HTML5, CSS3, Vanilla JavaScript
- **Design**: Matches Sheedoz brand identity (Terracotta #D6724A, Cream #F8F1ED, Playfair Display + Poppins)

## 🏗️ Project Structure

```
sheedoz-website/
├── index.html                 # Main landing page
├── assets/
│   ├── css/
│   │   └── styles.css        # Complete design system
│   ├── js/
│   │   └── main.js           # Interactions & animations
│   ├── images/
│   │   └── logo.png          # Sheedoz logo
│   └── fonts/                # (optional) Self-hosted fonts
├── legal/
│   ├── cgu.html              # Terms of Service
│   ├── confidentialite.html  # Privacy Policy
│   ├── cgv.html              # Sales Conditions
│   ├── mentions-legales.html # Legal Notice
│   ├── limites-usage.html    # Usage Limits
│   └── charte-ia.html        # AI Ethics Charter
└── README.md                  # This file
```

## 🚀 Local Development

### Option 1: Python HTTP Server
```bash
cd sheedoz-website
python3 -m http.server 8000
```
Visit: http://localhost:8000

### Option 2: Node HTTP Server
```bash
cd sheedoz-website
npx http-server -p 8000
```

### Option 3: VS Code Live Server
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 🌐 Deployment to www.sheedoz.app (Hostinger)

### Prerequisites
- Hostinger hosting account
- Domain: sheedoz.app (already owned)
- FTP credentials or Git access

### Step 1: Create Subdomain on Hostinger

1. Log into **Hostinger hPanel**: https://hpanel.hostinger.com
2. Navigate to **Domains** → **Subdomains**
3. Click **"Create Subdomain"**
4. Enter: `www`
5. Set document root: `/public_html/www` (or custom path)
6. Click **"Create"**

### Step 2: Upload Files

#### Option A: FTP Upload (Simple)

1. **Get FTP credentials**:
   - hPanel → **Files** → **FTP Accounts**
   - Note: hostname, username, password

2. **Connect with FTP client** (FileZilla, Cyberduck, etc.):
   - Host: `ftp.sheedoz.app` (or provided hostname)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Upload files**:
   - Navigate to `/public_html/www` on remote server
   - Upload all files from `sheedoz-website/` directory
   - Ensure directory structure is preserved

#### Option B: Git Deployment (Recommended)

1. **Initialize Git repo**:
```bash
cd sheedoz-website
git init
git add .
git commit -m "Initial commit: Sheedoz showcase website"
```

2. **Push to GitHub** (private repo recommended):
```bash
git remote add origin https://github.com/YOUR_USERNAME/sheedoz-website.git
git branch -M main
git push -u origin main
```

3. **Set up Git deployment in Hostinger**:
   - hPanel → **Advanced** → **Git**
   - Click **"Create"**
   - Enter repository URL
   - Set branch: `main`
   - Set deployment path: `/public_html/www`
   - Enable **Auto-deploy** (optional)

4. **Deploy**:
   - Click **"Pull"** to deploy
   - Future pushes to `main` will auto-deploy if enabled

### Step 3: Configure DNS (If Needed)

DNS should auto-configure when you create the subdomain, but verify:

1. hPanel → **Domains** → **DNS Zone Editor**
2. Ensure `www` record exists:
   - **Type**: A or CNAME
   - **Name**: www
   - **Points to**: Server IP (for A) or sheedoz.app (for CNAME)
3. DNS propagation: 24-48 hours (usually faster)

### Step 4: Enable SSL Certificate

1. hPanel → **Security** → **SSL**
2. Select domain: `www.sheedoz.app`
3. Enable **Free SSL (Let's Encrypt)**
4. Enable **Force HTTPS** (redirect HTTP to HTTPS)
5. Wait 5-10 minutes for certificate provisioning

### Step 5: Verify Deployment

1. Visit: https://www.sheedoz.app
2. Check SSL padlock in browser
3. Test all links:
   - Navigation links
   - Legal pages footer links
   - App Store/Google Play buttons
4. Test mobile responsiveness (Chrome DevTools)

## 📝 Pre-Launch Checklist

### Content
- [ ] All sections present (Hero, Features, How It Works, Pricing, CTA, Footer)
- [ ] All 6 legal pages accessible
- [ ] Contact email links work (`mailto:contact@sheedoz.app`)
- [ ] Promotional copy reviewed (French, warm tone)

### Functionality
- [ ] Smooth scroll navigation
- [ ] Sticky header with scroll effect
- [ ] Mobile menu toggle
- [ ] All internal links work
- [ ] External links open in new tab with `rel="noopener"`

### Performance
- [ ] Images optimized (logo compressed)
- [ ] CSS and JS files load correctly
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score: 90+ (Performance, Accessibility, SEO)

### Mobile & Responsive
- [ ] Tested on iOS (Safari)
- [ ] Tested on Android (Chrome)
- [ ] Tablet layout works
- [ ] Typography scales properly

### SEO & Meta
- [ ] Page title and meta description set
- [ ] Open Graph tags present
- [ ] Favicon displays
- [ ] `sitemap.xml` created (see below)
- [ ] `robots.txt` allows indexing

### Security
- [ ] HTTPS enabled and forced
- [ ] SSL certificate valid
- [ ] No mixed content warnings
- [ ] External links have `rel="noopener noreferrer"`

## 🔍 SEO Setup

### Create sitemap.xml

Add to root directory (`/public_html/www/sitemap.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.sheedoz.app/</loc>
    <lastmod>2026-03-02</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.sheedoz.app/legal/cgu.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.sheedoz.app/legal/confidentialite.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.sheedoz.app/legal/cgv.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.sheedoz.app/legal/mentions-legales.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.sheedoz.app/legal/limites-usage.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.sheedoz.app/legal/charte-ia.html</loc>
    <priority>0.5</priority>
  </url>
</urlset>
```

### Create robots.txt

Add to root directory (`/public_html/www/robots.txt`):

```
User-agent: *
Allow: /
Sitemap: https://www.sheedoz.app/sitemap.xml
```

### Submit to Google Search Console

1. Visit: https://search.google.com/search-console
2. Add property: `www.sheedoz.app`
3. Verify ownership (HTML file upload or DNS record)
4. Submit `sitemap.xml` URL

## 🎨 Design System Reference

### Colors
- **Primary (Terracotta)**: `#D6724A`
- **Background (Cream)**: `#F8F1ED`
- **Text Dark (Brown)**: `#4B2E2A`
- **Success (Sage)**: `#9FC3A8`

### Typography
- **Headings**: Playfair Display (Bold 700)
- **Body**: Poppins (Regular 400, Medium 500, SemiBold 600, Bold 700)

### Spacing Scale
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px

### Border Radius
- sm: 8px, md: 12px, lg: 16px, full: 999px

## 🔗 Important URLs to Update

### App Store & Google Play Links

Update these once apps are published:

**iOS App Store:**
- Current: `https://apps.apple.com/app/sheedoz`
- Update to: `https://apps.apple.com/app/sheedoz/[YOUR_APP_ID]`

**Google Play:**
- Current: `https://play.google.com/store/apps/details?id=com.harinydjearamane.sheedoz`
- Verify package ID matches actual app

### Files to Update:
1. `index.html` - All CTA buttons (lines with `href="https://apps.apple.com"` or `href="https://play.google.com"`)
2. `assets/js/main.js` - `appStoreURL` and `googlePlayURL` constants (around line 150)

## 📊 Analytics Setup (Optional)

### Google Analytics 4

Add before closing `</head>` in `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Troubleshooting

### Issue: Page not loading after deployment
- **Check**: DNS propagation (use https://dnschecker.org)
- **Check**: File permissions (should be 644 for files, 755 for directories)
- **Check**: Path in subdomain settings matches upload location

### Issue: CSS/JS not loading
- **Check**: Relative paths in HTML (`assets/css/styles.css`, not `/assets/css/styles.css`)
- **Check**: Files uploaded to correct directory
- **Check**: File names match exactly (case-sensitive on Linux servers)

### Issue: SSL certificate not working
- **Wait**: 5-10 minutes after enabling
- **Check**: Force HTTPS enabled in Hostinger SSL settings
- **Clear**: Browser cache and try in incognito

### Issue: Mobile menu not working
- **Check**: JavaScript file loaded (`<script src="assets/js/main.js" defer></script>`)
- **Check**: Browser console for errors (F12 → Console tab)

## 📧 Support

For questions about deployment or technical issues:
- **Email**: contact@sheedoz.app
- **Hostinger Support**: https://www.hostinger.com/support

## 📄 License

© 2026 Sheedoz - Hariny DJEARAMANE
SIREN: 902046390
All rights reserved.
