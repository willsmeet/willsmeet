# Willsmeet Marketing Site — Deployment Guide

## Overview

| Item | Detail |
|------|--------|
| Server | Hostinger VPS |
| Server IP | 72.60.99.199 |
| Domain | willsmeet.com / www.willsmeet.com |
| Site folder on VPS | /var/www/willsmeet.com |
| Deployment | Auto-deploy on every push to `main` branch |
| Old site backup | Stays on Hostinger shared hosting (untouched) |

---

## How Auto-Deploy Works

Every time you push code to the `main` branch on GitHub:

1. GitHub Actions triggers automatically
2. Installs dependencies and builds the static site
3. Copies the built files to `/var/www/willsmeet.com` on the VPS via SSH
4. Reloads Nginx — new site is live instantly

```
git push origin main
      ↓
GitHub Actions (build)
      ↓
SSH copy to VPS /var/www/willsmeet.com
      ↓
Nginx reload → willsmeet.com live
```

---

## One-Time Server Setup

SSH into the VPS and run these commands once.

### 1. Create site folder

```bash
mkdir -p /var/www/willsmeet.com
```

### 2. Create Nginx config

```bash
nano /etc/nginx/sites-available/willsmeet.com
```

Paste the following (Ctrl+X → Y → Enter to save):

```nginx
server {
    listen 80;
    server_name willsmeet.com www.willsmeet.com;
    return 301 https://willsmeet.com$request_uri;
}

server {
    listen 443 ssl;
    server_name www.willsmeet.com;
    ssl_certificate /etc/letsencrypt/live/willsmeet.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/willsmeet.com/privkey.pem;
    return 301 https://willsmeet.com$request_uri;
}

server {
    listen 443 ssl;
    server_name willsmeet.com;

    ssl_certificate /etc/letsencrypt/live/willsmeet.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/willsmeet.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    root /var/www/willsmeet.com;
    index index.html;

    location / {
        try_files $uri $uri/index.html =404;
    }

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 256;
}
```

### 3. Enable the site

```bash
ln -s /etc/nginx/sites-available/willsmeet.com /etc/nginx/sites-enabled/
```

### 4. Generate SSH key for GitHub Actions

```bash
ssh-keygen -t ed25519 -C "github-actions-willsmeet" -f ~/.ssh/willsmeet_deploy
```
Press Enter for all prompts (no passphrase).

```bash
# Add public key to authorized keys
cat ~/.ssh/willsmeet_deploy.pub >> ~/.ssh/authorized_keys

# Print private key — copy everything including BEGIN and END lines
cat ~/.ssh/willsmeet_deploy
```

---

## GoDaddy DNS Setup

Go to GoDaddy → your domain → DNS → Add these 2 records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 72.60.99.199 | 600 |
| A | www | 72.60.99.199 | 600 |

> DNS propagation takes 10–30 minutes. Do the SSL step only after DNS is live.

---

## SSL Certificate (Run after DNS propagates)

```bash
certbot --nginx -d willsmeet.com -d www.willsmeet.com
nginx -t && systemctl reload nginx
```

---

## GitHub Repository Setup

### 1. Push code to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Add GitHub Secrets

Go to: GitHub Repo → Settings → Secrets and variables → Actions → New repository secret

Add these 5 secrets:

| Secret Name | Value |
|-------------|-------|
| `SSH_HOST` | `72.60.99.199` |
| `SSH_USER` | `root` |
| `SSH_PRIVATE_KEY` | Contents of `~/.ssh/willsmeet_deploy` (private key) |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | `52df2e36-1411-453c-9b80-5c10e740eaa0` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `willsmeet.official@gmail.com` |

---

## Environment Variables

Local development uses `.env.local` (already in `.gitignore`, never committed).

```env
NEXT_PUBLIC_WEB3FORMS_KEY=52df2e36-1411-453c-9b80-5c10e740eaa0
NEXT_PUBLIC_CONTACT_EMAIL=willsmeet.official@gmail.com
```

For production, these are injected by GitHub Actions during build via GitHub Secrets.

---

## Daily Workflow (After Setup)

To deploy any change:

```bash
git add .
git commit -m "your message"
git push origin main
```

That's it. GitHub Actions handles the rest. Site is live in ~2-3 minutes.

To monitor a deployment: Go to GitHub Repo → Actions tab → watch the workflow run.

---

## Existing Sites on VPS (Do Not Touch)

These are already running and must not be modified:

| Domain | Folder | Purpose |
|--------|--------|---------|
| opsportal-willsmeet.com | /var/www/opsportal-willsmeet.com | Production SaaS portal |
| dev.opsportal-willsmeet.com | /var/www/dev.opsportal-willsmeet.com | Dev SaaS portal |
| api.opsportal-willsmeet.com | Proxies to port 3000 | Production API |
| api-dev.opsportal-willsmeet.com | Proxies to port 4000 | Dev API |

---

## Old Site Backup

The previous marketing site remains on **Hostinger shared hosting** and is untouched.
It serves as a natural backup. No files were deleted.

---

## Troubleshooting

**Build fails on GitHub Actions**
- Check the Actions tab for the error log
- Make sure all 5 GitHub Secrets are added correctly

**Site not loading after deploy**
- Check Nginx: `nginx -t && systemctl reload nginx`
- Check folder: `ls /var/www/willsmeet.com`

**SSL error**
- Make sure DNS has propagated before running certbot
- Run: `certbot renew --dry-run` to test renewal

**Changes not reflecting**
- Hard refresh browser: `Ctrl+Shift+R` / `Cmd+Shift+R`
- Check Actions tab to confirm deployment completed
