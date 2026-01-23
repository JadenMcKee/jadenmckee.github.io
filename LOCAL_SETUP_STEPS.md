# Step-by-Step: Viewing Changes Locally

## Current Status
You've made changes to:
- ✅ Avatar image (changed to Senior Picture.jpg)
- ✅ Removed RSS button from contact links

## Steps to See Your Changes

### Step 1: Stop the Current Jekyll Server
1. Go to your terminal/command prompt where Jekyll is running
2. Press `Ctrl + C` to stop the server
3. You should see a message like "Server stopped" or return to command prompt

### Step 2: Restart Jekyll Server
1. Make sure you're in the project directory:
   ```bash
   cd "c:\Users\notja\OneDrive\Files\Github Portfolio\jadenmckee.github.io"
   ```

2. Start Jekyll again:
   ```bash
   bundle exec jekyll serve
   ```

3. Wait for it to finish building - you'll see:
   ```
   Server address: http://127.0.0.1:4000/
   Server running... press ctrl-c to stop.
   ```

### Step 3: View Your Changes
1. Open your browser
2. Go to: `http://localhost:4000` or `http://127.0.0.1:4000`
3. **Hard refresh** to clear cache:
   - **Windows/Linux**: Press `Ctrl + Shift + R` or `Ctrl + F5`
   - **Mac**: Press `Cmd + Shift + R`

### Step 4: Verify Changes
Check that:
- ✅ Top left shows "Senior Picture.jpg" (not social_preview.jpg)
- ✅ Bottom left has only 4 buttons (LinkedIn, GitHub, Instagram, Email)
- ✅ No RSS/wifi icon button

## Troubleshooting

### If the image doesn't show:
The filename has a space which might cause issues. Try:
1. Rename the file to remove the space:
   - Rename `Senior Picture.jpg` to `SeniorPicture.jpg` or `senior-picture.jpg`
2. Update `_config.yml` line 103 to match:
   ```yaml
   avatar: /assets/images/SeniorPicture.jpg
   ```
3. Restart Jekyll again (Step 1-2)

### If changes still don't appear:
1. Make sure you saved the files (`_config.yml` and `_data/contact.yml`)
2. Check terminal for any error messages
3. Try stopping Jekyll, deleting `_site` folder, then restarting:
   ```bash
   # Stop Jekyll (Ctrl+C)
   # Delete build folder
   Remove-Item -Recurse -Force _site
   # Restart
   bundle exec jekyll serve
   ```

### If you get errors:
- Make sure you're in the correct directory
- Make sure all dependencies are installed: `bundle install`
- Check the terminal for specific error messages

---

**Quick Reference:**
- Stop server: `Ctrl + C`
- Start server: `bundle exec jekyll serve`
- View site: `http://localhost:4000`
- Hard refresh: `Ctrl + Shift + R`
