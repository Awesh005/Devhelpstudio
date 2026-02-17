# 🚀 How to Deploy DevHelp Studio to Vercel

The easiest way to deploy this project is using **[Vercel](https://vercel.com/)**.

## 1. Prerequisites

- A **GitHub** account
- A **[Vercel](https://vercel.com/signup)** account
- Your **Gemini API Key** (from [Google AI Studio](https://aistudio.google.com/apikey))

---

## 2. Push Code to GitHub

1. Create a new repository on GitHub.
2. Push your code to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

---

## 3. Deploy on Vercel

1. Go to your **[Vercel Dashboard](https://vercel.com/dashboard)**.
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository.
4. Vercel will auto-detect **Vite**.

### ⚠️ CRITICAL STEP: Add Environment Variables

Before clicking "Deploy", you **MUST** add your API key:

1. In the "Configure Project" screen, scroll down to **Environment Variables**.
2. Add a new variable:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** `your_actual_api_key_starts_with_AIza...`
3. Click **Add**.

> **Note:** Do NOT add quotes depending on how you copy it, just the raw key string.

---

## 4. Click Deploy

- Click **Deploy**.
- Vercel will build your site (takes ~30-60 seconds).
- Once done, you'll get a live URL (e.g., `https://devhelp-studio.vercel.app`).

---

## 🛠 Troubleshooting

### "Unable to connect to AI consultant" Error?
If you see this error on the live site:

1. Go to your Vercel Project Dashboard.
2. Click **Settings** → **Environment Variables**.
3. Check if `GEMINI_API_KEY` is added correctly.
4. If you added it *after* deploying, you must **Redeploy**:
   - Go to **Deployments** tab.
   - Click the three dots (⋮) on the latest deployment.
   - Select **Redeploy**.

### Local Development
To run locally, ensure you have a `.env.local` file with:
```env
GEMINI_API_KEY=your_key_here
```
