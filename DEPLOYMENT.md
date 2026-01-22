# Deployment Guide

## Quick Deployment Steps

### 1. Update Configuration

Make sure `_config.yml` has your correct information:
- `url: "https://jadenmckee.github.io"` (already set)
- `github.username: jadenmckee` (already set)
- Update `social.name` and `social.email` with your details
- Add your LinkedIn URL to `social.links`

### 2. Push to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Mechanical engineering portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/jadenmckee/jadenmckee.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/jadenmckee/jadenmckee.github.io`
2. Click **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. The GitHub Actions workflow will automatically build and deploy your site

### 4. Wait for Deployment

- Go to the **Actions** tab in your repository
- You'll see a workflow run called "Build and Deploy"
- Wait for it to complete (usually 2-5 minutes)
- Once it shows a green checkmark, your site is live!

### 5. Access Your Site

Your portfolio will be available at:
**https://jadenmckee.github.io**

---

## Automatic Deployment

The GitHub Actions workflow (`.github/workflows/pages-deploy.yml`) is already configured. It will:

- ✅ Automatically build your site when you push to `main` or `master` branch
- ✅ Run tests to check for broken links
- ✅ Deploy to GitHub Pages automatically
- ✅ Rebuild on every push (no manual steps needed)

## Manual Deployment

If you need to trigger a manual deployment:

1. Go to **Actions** tab in your repository
2. Click **Build and Deploy** workflow
3. Click **Run workflow** button
4. Select the branch (usually `main`)
5. Click **Run workflow**

## Troubleshooting

### Site not updating?
- Check the **Actions** tab for any errors
- Make sure you pushed to the `main` branch
- Wait a few minutes for GitHub to process the deployment

### Build errors?
- Check the workflow logs in the **Actions** tab
- Make sure `_config.yml` has valid YAML syntax
- Verify all required files are committed

### 404 errors?
- Ensure `url` in `_config.yml` matches your GitHub Pages URL exactly
- Check that `baseurl` is set correctly (should be empty for username.github.io)

### Need to test locally first?

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the root directory with your domain name
2. Update `url` in `_config.yml` to your custom domain
3. Configure DNS settings with your domain provider
4. Enable custom domain in GitHub Pages settings

---

**Your site will automatically update every time you push changes to GitHub!** 🚀
