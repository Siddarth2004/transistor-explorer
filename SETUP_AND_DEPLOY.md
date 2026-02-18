# Setup & Deployment Guide — Transistor Explorer

This guide takes you from zero to live at **transistor-explorer.com**.
No prior web dev experience assumed.

---

## Step 1 — Install Node.js

Node.js is the runtime that powers the build tools. Install it once and you're set forever.

1. Go to **https://nodejs.org** in your browser
2. Click the **"LTS"** (recommended) download button
3. Open the downloaded `.pkg` installer and follow the prompts
4. Open a new **Terminal** window (Spotlight → "Terminal") and verify:

```bash
node --version    # should print something like v20.x.x
npm --version     # should print something like 10.x.x
```

---

## Step 2 — Install project dependencies

Open Terminal, navigate to this folder, and install:

```bash
cd ~/Documents/transistor-explorer/transistor-explorer
npm install
```

This downloads React, Three.js, and Vite into a local `node_modules` folder.
It takes about 30–60 seconds on first run.

---

## Step 3 — Preview the site locally

```bash
npm run dev
```

Vite will print something like:

```
  ➜  Local:   http://localhost:5173/
```

Open that URL in your browser. The site will **hot-reload** every time you save a file —
no need to refresh manually. Press `Ctrl+C` in Terminal to stop the server.

---

## Step 4 — Push code to GitHub

Once you're happy with how the site looks locally:

```bash
git add .
git commit -m "Initial site build"
git push origin main
```

Your code is now on GitHub at https://github.com/Siddarth2004/transistor-explorer

---

## Step 5 — Deploy with Vercel (free)

Vercel is the easiest way to host this kind of React/Vite site.
It auto-deploys every time you push to GitHub.

1. Go to **https://vercel.com** and click **Sign Up**
2. Choose **Continue with GitHub** and authorize Vercel to access your repos
3. Click **Add New → Project**
4. Find **transistor-explorer** in the list and click **Import**
5. Vercel auto-detects Vite. Leave all settings as-is and click **Deploy**
6. In ~60 seconds you'll have a live URL like `transistor-explorer.vercel.app`

---

## Step 6 — Connect your custom domain (transistor-explorer.com)

### In Vercel:
1. Open your project dashboard → **Settings → Domains**
2. Type `transistor-explorer.com` and click **Add**
3. Vercel will show you DNS records to configure. They look like:

   | Type | Name | Value |
   |------|------|-------|
   | A    | @    | 76.76.21.21 |
   | CNAME | www | cname.vercel-dns.com |

### At your domain registrar:
Log in to wherever you bought `transistor-explorer.com` and:
1. Find **DNS Settings** or **Manage DNS**
2. Delete any existing A or CNAME records for `@` and `www`
3. Add the two records Vercel gave you (copy them exactly)
4. Save

DNS changes propagate in 5 minutes to 48 hours (usually under 30 min).
Vercel will auto-provision an HTTPS certificate once it detects the DNS.

---

## Day-to-day workflow

```bash
# Make changes to any file in src/
# The browser updates automatically while npm run dev is running

# When ready to publish:
git add .
git commit -m "describe your change"
git push origin main
# → Vercel picks this up and redeploys automatically
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm: command not found` | Node.js isn't installed — see Step 1 |
| Port 5173 in use | Run `npm run dev -- --port 3000` |
| White screen in browser | Open browser DevTools (F12) → Console tab for errors |
| Domain not working after 48h | Double-check DNS records at registrar; remove conflicting records |

---

## Security notes

- No API keys, secrets, or personal data are stored in this codebase
- The site is fully static — no server, no database, no user logins
- Vercel adds HTTPS automatically at no extra cost
- Nothing in this repo exposes your name, email, or institutional affiliation
