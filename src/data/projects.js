export const projects = [
  {
    slug: 'sistem-penyiraman-tanaman-otomatis',
    name: 'Sistem Penyiraman Tanaman Otomatis',
    category: 'Proyek Teknik / Tugas Akhir',
    image: '/images/projects/sistem-penyiraman-otomatis/cover.webp',
    alt: 'Sistem Penyiraman Tanaman Otomatis berbasis Arduino Uno',
    images: [
      {
        src: '/images/projects/sistem-penyiraman-otomatis/prototipe-alat-penyiram-tanaman.webp',
        alt: 'Prototipe alat penyiram tanaman otomatis',
      },
      {
        src: '/images/projects/sistem-penyiraman-otomatis/rangkayan-arduino.webp',
        alt: 'Rangkaian Arduino sistem penyiraman otomatis',
      },
      {
        src: '/images/projects/sistem-penyiraman-otomatis/sensor-kelembapan-tanah.webp',
        alt: 'Sensor kelembapan tanah pada sistem penyiraman',
      },
      {
        src: '/images/projects/sistem-penyiraman-otomatis/sisten-otomasi.webp',
        alt: 'Sistem otomasi penyiraman tanaman',
      },
    ],
    description:
      'Sistem penyiraman otomatis berbasis Arduino Uno dengan kendali sensor kelembapan tanah dan jadwal RTC.',
    tools: [
      'Arduino Uno',
      'Capacitive Soil Moisture Sensor',
      'RTC DS1307',
      'Relay',
      'Pompa air',
      'LCD',
      'Keypad',
    ],
    outcomes: [
      'Dua mode penyiraman: sensor dan jadwal.',
      'Target kelembapan tanah 60–80%.',
      'Akurasi mode sensor 98,12%.',
      'Sistem diuji pada tanaman cabai rawit.',
    ],
  },
  {
    slug: 'aplikasi-perisai',
    name: 'Aplikasi PERISAI',
    category: 'Proyek Digital',
    image: '/images/projects/perisai/perisai.webp',
    alt: 'Tampilan aplikasi PERISAI',
    images: [
      {
        src: '/images/projects/perisai/halaman-login-perisai.webp',
        alt: 'Halaman login aplikasi PERISAI',
      },
    ],
    description:
      'Aplikasi berbasis web untuk mendukung pengelolaan data dan administrasi internal.',
    tools: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Google Spreadsheet'],
    outcomes: [
      'Pengembangan identitas dari konsep SIGAP menjadi PERISAI.',
      'Modul Patroli, Perimeter/Alarm, Laporan Harian, Laporan Kejadian, Jadwal Piket, dan Dokumentasi.',
    ],
  },
  {
    slug: 'sipras-sistem-pengelolaan-rutan-sambas',
    name: 'SiPRAS — Sistem Pengelolaan Rutan Sambas',
    category: 'Pengembangan Platform Sistem Informasi',
    image: '/images/projects/sipras/sipras.webp',
    alt: 'Tampilan platform SiPRAS Sistem Pengelolaan Rutan Sambas',
    images: [
      {
        src: '/images/projects/sipras/halaman-login-sipras.webp',
        alt: 'Halaman login platform SiPRAS',
      },
    ],
    description:
      'Platform web terintegrasi yang menghubungkan layanan keuangan, kepegawaian, pengelolaan BMN, dan administrasi tata usaha di Rutan Kelas IIB Sambas.',
    detailDescription:
      'SiPRAS (Sistem Pengelolaan Rutan Sambas) dikembangkan sebagai inovasi digital untuk meningkatkan efektivitas pengelolaan administrasi di Rutan Kelas IIB Sambas. Platform ini menyediakan satu antarmuka untuk mengakses berbagai layanan internal sehingga proses kerja menjadi lebih cepat, terstruktur, dan efisien.',
    modules: [
      'SiAKUR — Sistem Informasi Keuangan dan Anggaran Rutan.',
      'SiKEP — Sistem Informasi Kepegawaian.',
      'E-BMN — Sistem Pengelolaan Barang Milik Negara.',
      'NOMORA — Sistem Administrasi Tata Usaha Rutan Sambas.',
    ],
    tools: ['Google Apps Script', 'HTML5', 'CSS3', 'JavaScript', 'Google Sheets'],
    detailTools: [
      'Google Apps Script',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Google Sheets sebagai basis data',
      'Visual Studio Code',
    ],
    outcomes: [
      'Mengintegrasikan berbagai aplikasi internal melalui satu portal terpusat.',
      'Mempermudah akses pengguna terhadap layanan administrasi sesuai kebutuhan.',
      'Mendukung pengelolaan data yang lebih terstruktur dan efisien.',
      'Menyediakan platform web yang dapat dikembangkan dan diperbarui sesuai kebutuhan instansi.',
    ],
  },
  {
    slug: 'desain-dan-dokumentasi-digital',
    name: 'Desain dan Dokumentasi Digital',
    category: 'Desain',
    image: '/images/projects/desain-dan-dokumentasi-digital/hari-pendidikan-nasional.webp',
    alt: 'Desain publikasi Hari Pendidikan Nasional',
    images: [
      {
        src: '/images/projects/desain-dan-dokumentasi-digital/hari-bela-negara.webp',
        alt: 'Desain publikasi Hari Bela Negara',
      },
      {
        src: '/images/projects/desain-dan-dokumentasi-digital/hari-ibu.webp',
        alt: 'Desain publikasi Hari Ibu',
      },
      {
        src: '/images/projects/desain-dan-dokumentasi-digital/hari-kenaikan-isa-almasih.webp',
        alt: 'Desain publikasi Hari Kenaikan Isa Almasih',
      },
      {
        src: '/images/projects/desain-dan-dokumentasi-digital/hari-raya-nyepi-2026.webp',
        alt: 'Desain publikasi Hari Raya Nyepi 2026',
      },
      {
        src: '/images/projects/desain-dan-dokumentasi-digital/logo-perisai.webp',
        alt: 'Desain logo PERISAI',
      },
      {
        src: '/images/projects/desain-dan-dokumentasi-digital/ultah-kakanwil.webp',
        alt: 'Desain publikasi ulang tahun Kepala Kantor Wilayah',
      },
    ],
    description:
      'Kumpulan desain publikasi, logo, dokumentasi kegiatan, dan materi visual untuk kebutuhan organisasi.',
    tools: ['Canva', 'Dokumentasi visual', 'Publikasi'],
    outcomes: ['Materi visual pendukung publikasi dan dokumentasi organisasi.'],
  },
];
