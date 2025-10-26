<!-- © 2025 Muhammad Abdullah. All rights reserved. -->
<!-- Unauthorized copying or reuse is prohibited. -->
# Muhammad Abdullah - AI Portfolio

A modern, responsive portfolio website for Muhammad Abdullah, showcasing his expertise in Generative & Agentic AI.

## 🚀 Features

- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Modern Design**: Glassmorphism effects, neon themes, and smooth animations
- **AI-Focused**: Showcases AI projects, skills, and expertise
- **Performance Optimized**: Fast loading with advanced animations
- **SEO Ready**: Meta tags, structured data, and search optimization
- **Code Protected**: Advanced protection against unauthorized copying and inspection

## 📋 Deployment Options

### Option 1: GitHub Pages (Recommended - Already Configured)

The portfolio is currently configured for GitHub Pages deployment.

#### Quick Deploy to GitHub:
1. **Fork/Clone** this repository to your GitHub account
2. **Rename** the repository to `yourusername.github.io`
3. **Enable GitHub Pages** in repository settings → Pages → Source: "Deploy from a branch" → Branch: "main"
4. **Done!** Your portfolio will be live at `https://yourusername.github.io`

#### Current GitHub Setup:
- ✅ URLs configured for `muhammadabdullahAI2502.github.io/My-Portfolio`
- ✅ All images and assets properly linked
- ✅ HTTPS automatically enabled by GitHub
- ✅ Ready to deploy immediately

### Option 2: WordPress/Custom Domain Deployment

For deployment on your own WordPress domain or custom hosting:

#### Step 1: Upload Files
Upload all files to your WordPress site or hosting:
- `index.html` (main portfolio file)
- All `Pic-*.png` images
- `Resume.pdf` and `Abdullah.Letter.pdf`

#### Step 2: Update URLs
Edit the following in `index.html`:

```html
<!-- Replace GitHub URLs with your domain -->
<meta property="og:url" content="https://yourdomain.com/portfolio">
<meta property="og:image" content="https://yourdomain.com/portfolio/Abdullah.pic.jpeg">
<meta name="twitter:image" content="https://yourdomain.com/portfolio/Abdullah.pic.jpeg">
<link rel="canonical" href="https://yourdomain.com/portfolio">

<!-- In JSON-LD -->
"url": "https://yourdomain.com/portfolio"
```

#### Step 3: Update Google Site Verification
Replace the placeholder:
```html
<meta name="google-site-verification" content="your-actual-verification-code" />
```

#### Step 4: Configure Analytics (Optional)
Update Google Analytics ID:
```javascript
gtag('config', 'YOUR_GA_MEASUREMENT_ID');
```

## 📱 Mobile Responsive Features

- **Single Column Layouts**: All sections adapt to mobile screens
- **Touch-Friendly**: Optimized button sizes and spacing
- **Performance**: Reduced animations on mobile for better performance
- **No Horizontal Scroll**: Content fits perfectly within viewport

## 🎨 Customization

### Colors
The portfolio uses a neon cyan/purple theme. To customize:
- Update CSS custom properties in the `:root` selector
- Modify Tailwind color classes throughout the HTML

### Content
- Update personal information in the About section
- Modify project links and descriptions
- Add/remove skills in the Skills Matrix
- Update contact information

## 🔧 Technical Details

- **Framework**: Pure HTML/CSS/JavaScript
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome
- **Animations**: CSS animations and JavaScript
- **Responsive**: Mobile-first design approach

## 📄 File Structure

```
/portfolio/
├── index.html          # Main portfolio file
├── Pic-01.png         # Profile image
├── Pic-02.png to Pic-12.png  # Project screenshots
├── Resume.pdf         # Resume download
├── Abdullah.Letter.pdf # Cover letter download
└── README.md          # This file
```

## 🔒 Code Protection Features

This portfolio includes advanced protection against unauthorized code inspection and copying:

### **Protection Measures:**
- **© Copyright notices** in console and footer
- **🔒 Code obfuscation** - JavaScript is minified and obfuscated
- **� Developer tools blocked** (F12, Ctrl+Shift+I, etc.)
- **🚫 View source disabled** (Ctrl+U)
- **🚫 Inspect element blocked** (Ctrl+Shift+C)
- **🚫 Console access restricted** (Ctrl+Shift+J)
- **🚫 Developer tools detection** with overlay warnings
- **🚫 Search engine archiving blocked** (robots.txt)
- **🚫 Browser caching disabled** for source protection

### **Legal Protection:**
- **© Copyright notices** in footer and console
- **📜 Copyright meta tags** for legal protection
- **🚫 No-archive directives** for search engines
- **⚖️ Copyright warnings** on protection attempts

### **Important Note:**
While these measures make it significantly harder to copy your code, determined developers can still access it since it runs in the browser. This provides a strong deterrent against casual copying while maintaining full functionality.

## 🌐 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📞 Support

For customization or deployment help, contact Muhammad Abdullah.

---

**Built with ❤️ by Muhammad Abdullah**
**© 2025 All rights reserved - Code protection active**