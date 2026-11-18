# RackGenius VPS Test Deployment

A minimal React + Vite test application with an automated GitHub Actions CI/CD pipeline targeting `one.webisa.site` on VPS.

## Target Specifications

- **Domain:** `one.webisa.site`
- **VPS Deploy Path:** `/var/www/test-app`
- **Internal Port:** `8080` (served via PM2 SPA)
- **Node.js Target:** 20.x

---

## Architecture & Features

- **React 19 + Vite:** Blazing fast build and client development environment.
- **Build-Time Injections:**
  - `import.meta.env.VITE_API_BASE_URL`: Injected during build time via GitHub Secrets (`secrets.VITE_API_BASE_URL`) or local `.env` files.
  - `import.meta.env.VITE_BUILD_TIME`: Evaluated during Vite build and baked into bundle chunks.
- **System Operational Dashboard:** Real-time visual landing dashboard reporting operational status, build metadata, server configuration, and live API diagnostics.

---

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Files:**
   - Development: `.env.development` (`VITE_API_BASE_URL=http://localhost:5000`)
   - Production: `.env.production` (`VITE_API_BASE_URL=https://api.webisa.site`)
   - Template: `.env.example`

   *(Note: `.env*` files are strictly excluded via `.gitignore` to prevent secret leakage).*

3. **Start local dev server:**
   ```bash
   npm run dev
   ```

4. **Build & Preview:**
   ```bash
   npm run build
   npm run preview
   ```

---

## CI/CD Pipeline (`.github/workflows/deploy.yml`)

The deployment workflow automatically runs on every `push` to the `main` branch:

1. **Checkout Code:** Uses `actions/checkout@v4`.
2. **Setup Node 20:** Configures Node.js 20 with npm caching.
3. **Install & Build:**
   - Runs `npm ci` for deterministic dependency resolution.
   - Runs `npm run build` injecting `VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}`.
4. **Deploy via SSH:**
   - Uses `easingthemes/ssh-deploy@v5`.
   - Transfers compiled `./dist` directory contents to `/var/www/test-app`.
5. **Post-Deploy Hook:**
   - Executes:
     ```bash
     pm2 restart test-app || pm2 serve /var/www/test-app 8080 --name test-app --spa && pm2 save
     ```

---

## Required GitHub Repository Secrets

Configure the following secrets in your GitHub repository (**Settings > Secrets and variables > Actions**):

| Secret Name | Description | Example / Recommended Value |
| :--- | :--- | :--- |
| `SSH_PRIVATE_KEY` | Private SSH key for user `charles` | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `REMOTE_HOST` | VPS IPv6 or Tailscale IP / domain | e.g. `one.webisa.site` or Tailscale IP |
| `REMOTE_USER` | SSH user | `charles` |
| `VITE_API_BASE_URL` | API Base URL injected at build time | `https://api.webisa.site` |
