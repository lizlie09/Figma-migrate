# Deploy Crypto Manager so others can access it

Your app is a **Vite + React** static site. After you run `npm run build`, the output goes to the `dist/` folder. You can host that folder on any static host.

---

## Option 1: Vercel (recommended, free)

1. **Push your project to GitHub** (if you haven’t already):
   - Create a repo at [github.com/new](https://github.com/new)
   - In your project folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up (GitHub login is easiest).
   - Click **Add New** → **Project** and import your GitHub repo.
   - Vercel will detect Vite. Keep:
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Click **Deploy**. In about a minute you’ll get a URL like `https://your-project.vercel.app`.

3. **Updates:** Push to `main` on GitHub; Vercel will redeploy automatically.

---

## Option 2: Netlify (free)

1. Push your code to GitHub (same as above).

2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project** → choose GitHub and your repo.

3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. Deploy. You’ll get a URL like `https://something.netlify.app`.

---

## Option 3: GitHub Pages (free)

1. Push your project to a GitHub repo.

2. In `vite.config.ts`, set the base to your repo name:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO_NAME/',
   })
   ```

3. Install the GitHub Pages deploy script:
   ```bash
   npm install -D gh-pages
   ```

4. In `package.json`, add:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

5. In the same `package.json`, add:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
   ```

6. Run:
   ```bash
   npm run deploy
   ```
   Your site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## Quick test before deploying

Run a production build and preview it locally:

```bash
npm run build
npm run preview
```

Then open the URL shown in the terminal (e.g. `http://localhost:4173`) to confirm everything works.

---

## Summary

| Service       | Best for              | Free tier | Custom domain |
|---------------|------------------------|-----------|---------------|
| **Vercel**    | Easiest, auto deploys  | Yes       | Yes           |
| **Netlify**   | Similar to Vercel      | Yes       | Yes           |
| **GitHub Pages** | Already on GitHub   | Yes       | Yes           |

For most cases, **Vercel** or **Netlify** with a connected GitHub repo is the simplest way to let many people access your app.
