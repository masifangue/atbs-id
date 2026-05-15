# Setup GitHub Pages — Panduan Singkat

## 1. Buat Repo di GitHub

```bash
# Di folder project
cd c:/Users/yazid/Learning/atbs-id

git init
git branch -M main
git add .
git commit -m "Initial commit: 20 bab terjemahan ATBS"

# Buat repo public di GitHub (bisa via web atau gh CLI)
gh repo create atbs-id --public --source=. --push

# Atau manual via web, lalu:
git remote add origin https://github.com/USERNAME/atbs-id.git
git push -u origin main
```

## 2. Aktifkan GitHub Pages

1. Buka repo di GitHub → **Settings** → **Pages**
2. Source: pilih **GitHub Actions**
3. Done — workflow `.github/workflows/deploy.yml` akan jalan otomatis tiap push ke `main`

## 3. Cek Status

- **Tab Actions** di GitHub → lihat workflow "Deploy ke GitHub Pages"
- Tunggu ~2 menit
- Site live di `https://USERNAME.github.io/atbs-id/`

## 4. Custom Domain (Opsional)

Kalau punya domain sendiri (misalnya `boringstuff.id`):

1. Settings → Pages → Custom domain → masukkan domain
2. Di provider DNS, tambah CNAME record yang point ke `USERNAME.github.io`
3. Tunggu propagasi DNS (~1 jam)
4. Aktifkan "Enforce HTTPS"

## 5. Update Site

Tiap push ke `main`:

```bash
git add .
git commit -m "Update bab X"
git push
```

Workflow auto-trigger, site update dalam 2-3 menit.

## Troubleshooting

**Build gagal:**
- Cek tab Actions, lihat error log
- Test local dulu: `mkdocs build --strict`

**Site 404:**
- Pastikan `Settings → Pages → Source = GitHub Actions`
- Tunggu 5-10 menit setelah workflow sukses

**Mermaid diagram tidak render:**
- Pastikan `extra_javascript` di `mkdocs.yml` masih ada
- CDN Mermaid kadang butuh waktu — refresh browser
