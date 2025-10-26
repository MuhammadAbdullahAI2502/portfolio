<!-- © 2025 Muhammad Abdullah. All rights reserved. -->
<!-- Unauthorized copying or reuse is prohibited. -->
# Google Search Console Setup Guide

## Step 1: Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Choose "URL prefix" 
4. Enter your domain: `https://yourusername.github.io/My-Portfolio`

## Step 2: Verify Ownership (Choose ONE method)

### Method 1: HTML Meta Tag (Recommended)
1. Google will give you a verification code
2. Replace `YOUR_VERIFICATION_CODE_HERE` in index.html with your code
3. Example: `<meta name="google-site-verification" content="abc123xyz789">`

### Method 2: HTML File Upload
1. Download the verification file from Google Console
2. Replace the existing `google-site-verification.html` file with Google's file
3. Upload to your repository root

## Step 3: Setup Google Analytics (Optional)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Replace `GA_MEASUREMENT_ID` in index.html with your actual ID

## Step 4: Submit Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Add sitemap URL: `https://yourusername.github.io/My-Portfolio/sitemap.xml`
3. Click "Submit"

## Step 5: Test and Monitor

1. Use "URL Inspection" tool to test your pages
2. Check "Coverage" report for indexing issues
3. Monitor "Performance" for search analytics

## Important Notes:

- Replace `yourusername` with your actual GitHub username
- Verification can take 24-48 hours
- Make sure your site is live before verification
- Keep the verification code/file permanently

## Files Added/Modified:

- ✅ `index.html` - Added verification meta tag
- ✅ `google-site-verification.html` - Verification file
- ✅ `sitemap.xml` - Already exists
- ✅ `robots.txt` - Already exists