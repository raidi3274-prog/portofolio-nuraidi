# Portofolio Nuraidi

Website portofolio personal Nuraidi, lulusan D4 Teknik Mesin Pertanian. Website ini menampilkan profil profesional, pengalaman, keahlian, sertifikat, dan proyek teknik maupun digital.

## Fitur

- Halaman utama responsif dengan bagian profil, pengalaman, proyek, keahlian, sertifikat, dan kontak
- Halaman detail dan galeri untuk setiap proyek
- Navigasi desktop dan mobile
- Animasi saat elemen masuk ke viewport dengan dukungan `prefers-reduced-motion`
- Unduh CV langsung dari website
- Tautan kontak melalui email, WhatsApp, dan LinkedIn
- Halaman 404 serta metadata SEO, `sitemap.xml`, dan `robots.txt`

## Teknologi

- React 19
- React Router 7
- Vite 7
- JavaScript, JSX, dan CSS
- ESLint dan Prettier

## Menjalankan Proyek

Pastikan Node.js versi 20 atau lebih baru telah terpasang.

```bash
npm install
npm run dev
```

Perintah lain yang tersedia:

```bash
npm run build    # membuat build production
npm run preview  # melihat build production secara lokal
npm run lint     # memeriksa kualitas kode
npm run format   # memformat kode
```

Pada PowerShell Windows, gunakan `npm.cmd` jika eksekusi `npm.ps1` diblokir oleh Execution Policy.

## Mengelola Konten

Konten utama dipisahkan dari komponen agar mudah diperbarui:

- Identitas dan kontak: `src/config/siteConfig.js`
- Navigasi: `src/data/navigation.js`
- Pengalaman: `src/data/experiences.js`
- Proyek dan galeri: `src/data/projects.js`
- Keahlian: `src/data/skills.js`
- Sertifikat: `src/data/certificates.js`
- Tautan sosial: `src/data/socialLinks.js`

Aset publik tersimpan di:

- Foto profil: `public/images/profile/`
- Gambar proyek: `public/images/projects/`
- Gambar sertifikat: `public/images/certificates/`
- CV: `public/documents/cv-nuraidi.pdf`

## Catatan Formulir Kontak

Formulir kontak saat ini belum terhubung ke layanan pengiriman. Pengunjung diarahkan untuk menghubungi Nuraidi melalui email, WhatsApp, atau LinkedIn.

## Build Production

```bash
npm run build
```

Hasil build tersedia di folder `dist/` dan dapat di-deploy ke layanan hosting statis seperti Vercel, Netlify, atau GitHub Pages.
