# Toluwalope Dada - Portfolio Website

[![Deploy Status](https://github.com/Holluwacryptic/Holluwacryptic.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Holluwacryptic/Holluwacryptic.github.io/actions/workflows/deploy.yml)

Personal portfolio website showcasing my work in robotics engineering, autonomous systems, and UAV development. Built with Astro and deployed on GitHub Pages.

**🌐 Live Site**: [https://holluwacryptic.github.io](https://holluwacryptic.github.io)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Content Management](#content-management)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## ✨ Features

- **🏠 Home Page** - Hero section with introduction, about me, skills showcase
- **🚀 Projects** - Standalone projects page with detailed project cards
- **💼 Experience** - Professional work history and achievements
- **🎓 Education** - Academic background and certifications
- **📝 Blog** - Technical writing and project documentation
- **📄 Resume** - Downloadable/printable resume page
- **📱 Responsive Design** - Works seamlessly on all devices
- **🎨 Modern UI** - Clean, professional design with IBM Plex Mono font
- **⚡ Fast Performance** - Static site generation for optimal speed
- **🔍 SEO Optimized** - Proper meta tags and structured data

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build)
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com) via Vite plugin
- **Language**: TypeScript
- **Deployment**: GitHub Pages via GitHub Actions
- **Font**: IBM Plex Mono (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Holluwacryptic/Holluwacryptic.github.io.git
   cd Holluwacryptic.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📝 Content Management

All content is centrally managed for easy updates. No need to edit multiple files!

### Main Configuration: `src/config.ts`

This is your **content hub**. Edit this file to update:

- ✏️ Personal information (name, title, bio)
- 🔗 Social links (email, LinkedIn, GitHub, Twitter)
- 💡 Skills list
- 🚀 Projects portfolio
- 💼 Work experience
- 🎓 Education history

**Example: Adding a New Project**

```typescript
// In src/config.ts
projects: [
  {
    name: "Your Project Name",
    description: "Brief description of what your project does",
    link: "https://github.com/yourusername/project",
    skills: ["Python", "ROS2", "Docker"],
  },
  // ... other projects
],
```

### Blog Posts: `src/content/blog/`

Create markdown files for blog posts:

**File structure:**
```
src/content/blog/
├── my-first-post.md
├── uav-development.md
└── robotics-tutorial.md
```

**Blog post template:**

```markdown
---
title: "Your Blog Post Title"
date: "2025-12-21"
description: "A brief description for the blog listing"
author: "Your Name"
---

# Your Blog Post Title

Your content here using Markdown...

## Subheading

- Bullet points
- More content

```code blocks```
```

**✨ New blog posts automatically appear on your blog page!**

### Quick Content Updates

| What to Update | File Location | Notes |
|---------------|---------------|-------|
| About me, skills, projects | `src/config.ts` | Single source of truth |
| Blog posts | `src/content/blog/*.md` | Each post is a separate file |
| Site metadata | `src/config.ts` | Description, title |
| Navigation | `src/components/Header.astro` | Rarely needs changes |

---

## 📁 Project Structure

```
Holluwacryptic.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── About.astro
│   │   ├── BlogCard.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── content/
│   │   └── blog/               # Blog posts (Markdown)
│   │       ├── post-1.md
│   │       └── post-2.md
│   ├── layouts/
│   │   └── BlogLayout.astro    # Blog post template
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro # Dynamic blog post pages
│   │   │   └── index.astro     # Blog listing page
│   │   ├── index.astro         # Homepage
│   │   ├── projects.astro      # Projects page
│   │   └── resume.astro        # Resume page
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── config.ts               # ⭐ Main content configuration
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind CSS config (if exists)
├── tsconfig.json               # TypeScript config
└── README.md                   # This file
```

---

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Deployment Process

1. **Edit content** (locally or via vscode.dev)
2. **Commit changes**
   ```bash
   git add .
   git commit -m "Update content"
   ```
3. **Push to GitHub**
   ```bash
   git push origin main
   ```
4. **Automatic deployment** - GitHub Actions builds and deploys
5. **Live in ~2 minutes** at https://holluwacryptic.github.io

### Monitoring Deployment

- Check deployment status: [Actions tab](https://github.com/Holluwacryptic/Holluwacryptic.github.io/actions)
- Green checkmark ✅ = successful deployment
- Red X ❌ = build failed (check logs for errors)

### GitHub Pages Settings

**Settings → Pages:**
- Source: **GitHub Actions**
- Branch: Not used (Actions handles deployment)

---

## 🎨 Customization

### Changing Colors

The site uses a blue accent color (`#1d4ed8`). To change:

1. Update `accentColor` in `src/config.ts`
2. Search and replace `#1d4ed8` in page files with your color
3. Update Tailwind classes: `blue-600` → `purple-600` (etc.)

### Adding New Pages

1. Create new file in `src/pages/`, e.g., `src/pages/contact.astro`
2. Add navigation link in `src/components/Header.astro`
3. Commit and push

### Modifying Design

All pages use inline styles and minimal Tailwind (compatible with v4). To modify:

1. Open the relevant page file in `src/pages/`
2. Edit inline styles: `style="..."`
3. Modify CSS in `<style>` tags at bottom of file

---

## 🐛 Troubleshooting

### Common Issues

#### Build Fails After Editing

**Check:**
- Missing commas in `config.ts` arrays
- Unclosed brackets/braces: `{ }` `[ ]`
- Mismatched quotes: use `"` consistently
- Review error in GitHub Actions logs

#### Changes Not Visible on Live Site

**Solutions:**
1. Wait for GitHub Actions to complete (~2 minutes)
2. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Clear browser cache
4. Try incognito/private mode

#### Blog Post Not Appearing

**Check:**
- File is in `src/content/blog/` folder
- File extension is `.md`
- Frontmatter has all required fields:
  ```yaml
  ---
  title: "..."
  date: "YYYY-MM-DD"
  description: "..."
  ---
  ```
- No layout field in frontmatter (not supported in Astro 5)

#### CSS Not Loading on Blog/Resume

**Solution:**
- Ensure you're using the "simple" versions of pages (inline styles)
- Check `src/styles/global.css` uses: `@import "tailwindcss";`

### Getting Help

1. Check [GitHub Issues](https://github.com/Holluwacryptic/Holluwacryptic.github.io/issues)
2. Review [Astro Documentation](https://docs.astro.build)
3. Check deployment logs in Actions tab

---

## 📦 Dependencies

Main dependencies (see `package.json` for versions):

- `astro` - Static site framework
- `tailwindcss` - CSS framework
- `@tailwindcss/vite` - Tailwind v4 Vite plugin

---

## 🔄 Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update astro
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

Feel free to fork and customize for your own portfolio!

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Commit changes: `git commit -m "Add improvement"`
4. Push to branch: `git push origin feature/improvement`
5. Open a Pull Request

---

## 📧 Contact

**Toluwalope Dada**
- Email: [Toluwalopedada1@gmail.com](mailto:Toluwalopedada1@gmail.com)
- LinkedIn: [linkedin.com/in/tdad](https://linkedin.com/in/tdad)
- GitHub: [@Holluwacryptic](https://github.com/Holluwacryptic)
- Twitter: [@tdad1992](https://x.com/tdad1992)

---

## ⭐ Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Font: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)
- Deployed on [GitHub Pages](https://pages.github.com)

---

**Last Updated**: December 2025

**Portfolio Live**: https://holluwacryptic.github.io

---

Made with ❤️ and ☕ by Toluwalope Dada
