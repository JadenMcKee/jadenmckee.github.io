# Mechanical Engineering Portfolio

A professional portfolio website template for mechanical engineers, built with Jekyll and the Chirpy theme.

## Features

- **Professional Design**: Clean, modern layout optimized for showcasing engineering projects
- **Project Showcase**: Dedicated sections for portfolio projects with technical details
- **Skills & Experience**: Comprehensive about page highlighting education, skills, and professional experience
- **Technical Documentation**: Support for mathematical equations, code snippets, and technical diagrams
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in search engine optimization features

## Quick Start

### Prerequisites

- Ruby (>= 2.5)
- Bundler
- Git

### Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Customize your portfolio:**
   - Edit `_config.yml` with your personal information
   - Update `_tabs/about.md` with your education, skills, and experience
   - Add your LinkedIn profile to `_data/contact.yml`
   - Replace sample projects in `_posts/` with your own work

4. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` to preview your site

5. **Deploy to GitHub Pages:**
   - Push your repository to GitHub
   - Enable GitHub Pages in repository settings
   - Your site will be available at `https://yourusername.github.io`

## Customization Guide

### Site Configuration (`_config.yml`)

Update the following fields:
- `title`: Your name or portfolio title
- `tagline`: A brief professional tagline
- `description`: SEO description of your portfolio
- `url`: Your GitHub Pages URL (e.g., `https://yourusername.github.io`)
- `github.username`: Your GitHub username
- `social.name`: Your full name
- `social.email`: Your professional email
- `social.links`: Your social media profiles (LinkedIn, GitHub, etc.)

### About Page (`_tabs/about.md`)

Customize with:
- Your professional introduction
- Education history
- Technical skills (CAD, FEA, programming, etc.)
- Work experience
- Certifications
- Professional interests

### Adding Projects

Create new project posts in `_posts/` following this naming convention:
```
YYYY-MM-DD-project-title.md
```

Use the sample projects as templates:
- Include front matter with categories and tags
- Add technical details, analysis results, and images
- Use markdown formatting for code, equations, and tables

### Project Categories

Organize projects by categories such as:
- Design
- Analysis
- Robotics
- Manufacturing
- Research
- Prototyping

### Contact Information (`_data/contact.yml`)

Add your professional contact links:
- LinkedIn (recommended for engineers)
- GitHub
- Email
- Other professional networks

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _data/
│   ├── contact.yml      # Contact links
│   └── share.yml        # Social sharing options
├── _posts/              # Your portfolio projects
├── _tabs/               # Navigation pages
│   ├── about.md         # About/Resume page
│   ├── projects.md      # Projects overview
│   ├── categories.md    # Project categories
│   ├── tags.md          # Project tags
│   └── archives.md      # Project archives
├── assets/              # Images, CSS, JS
└── index.html           # Home page
```

## Tips for Mechanical Engineering Portfolios

1. **Showcase Technical Depth**: Include FEA results, CAD models, calculations, and analysis
2. **Use Visuals**: Add images of designs, prototypes, test results, and simulations
3. **Highlight Problem-Solving**: Explain challenges and how you solved them
4. **Include Metrics**: Quantify results (weight reduction, efficiency improvements, etc.)
5. **Professional Language**: Use technical terminology appropriately
6. **Keep It Updated**: Regularly add new projects and update your experience

## Sample Projects

Two sample projects are included:
1. **Automotive Brake System Design** - Demonstrates FEA analysis and optimization
2. **6-DOF Robotic Arm Design** - Shows kinematic analysis and prototyping

Use these as templates for your own projects.

## Resources

- [Chirpy Theme Documentation](https://github.com/cotes2020/jekyll-theme-chirpy/wiki)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages](https://pages.github.com/)

## License

This work is published under [MIT License](LICENSE).

---

**Built with [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy/) Jekyll Theme**
