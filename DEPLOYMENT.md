# Deployment Guide

This guide explains how to deploy the GTS Shad/Cn Kit to various hosting platforms.

## 🚀 GitHub Pages (Recommended)

### Automatic Deployment

1. **Fork this repository** to your GitHub account
2. **Go to repository Settings** → **Pages**
3. **Set Source to "GitHub Actions"**
4. **Push to main branch** - deployment happens automatically via GitHub Actions

The app will be available at: `https://faheemalvii.github.io/GTS-UI-Kit/`

### Manual Deployment

```bash
# Build the static files
pnpm run export

# The static files are now in the 'out' directory
# You can manually upload these to GitHub Pages or any static host
```

## 🌐 Other Hosting Platforms

### Vercel (Zero Config)

1. **Connect your GitHub repository** to Vercel
2. **Deploy automatically** on every push
3. **Custom domain** support available

### Netlify

1. **Drag and drop** the `out` folder to Netlify
2. **Or connect** your GitHub repository for automatic deployments
3. **Custom domain** and SSL included

### AWS S3 + CloudFront

1. **Upload** the contents of the `out` folder to an S3 bucket
2. **Configure** the bucket for static website hosting
3. **Set up CloudFront** for global CDN distribution

### Any Static Host

The `out` directory contains all the static files needed:
- HTML files for each page
- JavaScript bundles
- CSS files
- Images and assets

## 🔧 Configuration

### Environment Variables

For production builds, the following environment variables are used:

- `NODE_ENV=production` - Enables production optimizations
- `NEXT_PUBLIC_BASE_PATH` - Set to `/GTS-UI-Kit` for GitHub Pages

### Build Process

```bash
# Install dependencies
pnpm install

# Build for production
pnpm run export

# Output directory: ./out
```

## 📁 Static Files Structure

```
out/
├── index.html              # Home page
├── 404.html               # Custom 404 page
├── dashboard/             # Dashboard page
├── analytics/             # Analytics page
├── login/                 # Login page
├── signup/                # Signup page
├── profile/               # Profile page
├── _next/                 # Next.js assets
│   ├── static/           # Static assets
│   └── ...
└── ...                   # Other pages
```

## 🛠️ Troubleshooting

### GitHub Pages Issues

1. **404 on refresh**: The `404.html` file handles client-side routing
2. **Assets not loading**: Check that `basePath` is correctly set
3. **Build fails**: Ensure all dependencies are installed

### Common Issues

- **Images not loading**: Make sure `images.unoptimized: true` is set in `next.config.js`
- **CSS not loading**: Check that `assetPrefix` is correctly configured
- **Routing issues**: Ensure `trailingSlash: true` is set

## 📝 Notes

- The app is configured for static export with `output: 'export'`
- All images are unoptimized for static hosting compatibility
- Client-side routing is handled by the custom `404.html` file
- The build process generates optimized static files in the `out` directory
