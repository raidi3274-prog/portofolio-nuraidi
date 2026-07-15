# Portofolio Nuraidi

Fondasi website personal portfolio Nuraidi berbasis React, Vite, JavaScript, JSX, dan CSS.

## Instalasi

```bash
npm install
```

Pada PowerShell Windows, gunakan `npm.cmd install` jika `npm.ps1` diblokir Execution Policy.

## Menjalankan Proyek

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Struktur Konten

- Identitas website: `src/config/siteConfig.js`
- Navigasi: `src/data/navigation.js`
- Pengalaman: `src/data/experiences.js`
- Proyek: `src/data/projects.js`
- Keahlian: `src/data/skills.js`
- Sertifikat: `src/data/certificates.js`
- Tautan sosial: `src/data/socialLinks.js`

## Mengganti Placeholder

- Foto profil: ganti placeholder di `HeroSection.jsx` dengan gambar lokal di `src/assets/images/`.
- CV: ganti `src/assets/documents/CV_Nuraidi.pdf`.
- Gambar proyek dan sertifikat: simpan aset baru di `src/assets/images/`, lalu hubungkan dari data terkait.

## Formulir Kontak

Fondasi formulir masih memakai simulasi lokal. Kunci layanan mendatang disiapkan di `.env.example`.

## Deploy

Proyek disiapkan untuk Vercel, tetapi belum dihubungkan ke GitHub atau Vercel pada tahap fondasi ini.
