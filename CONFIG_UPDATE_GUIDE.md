# Why _config.yml Changes Don't Show Up

## The Problem

Jekyll **caches** `_config.yml` when it starts. Changes to this file are **NOT** automatically detected during development.

## Solutions

### If Running Locally (`bundle exec jekyll serve`)

**You MUST restart Jekyll** after changing `_config.yml`:

1. Stop the server: Press `Ctrl+C` in the terminal
2. Restart: `bundle exec jekyll serve`
3. Hard refresh browser: `Ctrl+F5` or `Ctrl+Shift+R`

### If Using GitHub Pages

1. **Push your changes:**
   ```bash
   git add _config.yml
   git commit -m "Update config"
   git push
   ```

2. **Wait for rebuild** (2-5 minutes)
   - Check the **Actions** tab in GitHub
   - Wait for "Build and Deploy" to complete

3. **Clear browser cache** or use incognito mode

## Important Notes

- ✅ Changes to posts, pages, and other files: Auto-reload works
- ❌ Changes to `_config.yml`: Requires restart/rebuild
- ❌ Changes to `Gemfile`: Requires restart/rebuild
- ❌ Changes to `_plugins/`: Requires restart/rebuild

## Quick Test

After making changes to `_config.yml`:
1. Restart Jekyll (if local)
2. Check if title/tagline changed in browser
3. If not, clear browser cache

---

**Remember: Always restart Jekyll after editing `_config.yml`!**
