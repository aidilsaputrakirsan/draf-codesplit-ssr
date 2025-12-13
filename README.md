# Penelitian SSR & Code Splitting - Laravel Inertia.js

## Judul Penelitian

**Implementasi Server-Side Rendering (SSR) dan Code Splitting pada Aplikasi Laravel Berbasis Inertia.js untuk Meningkatkan First Contentful Paint (FCP)**

## Deskripsi

Project ini merupakan penelitian akademis yang bertujuan untuk mengukur dampak implementasi SSR (Server-Side Rendering) dan Code Splitting terhadap performa web, khususnya metrik First Contentful Paint (FCP).

Aplikasi yang dibangun adalah **E-Commerce sederhana** dengan fitur:
- Halaman Welcome (landing page)
- Daftar Produk (dengan search, filter, sort, pagination)
- Detail Produk (dengan produk terkait)
- Keranjang Belanja (CRUD operations)

## Tech Stack

| Teknologi | Versi |
|-----------|-------|
| Laravel | 12.x |
| Inertia.js | 2.x |
| Vue.js | 3.x |
| Tailwind CSS | 4.x |
| Vite | 7.x |
| PHP | 8.3+ |
| MySQL | 8.x |

## Hasil Penelitian

### Peningkatan FCP (First Contentful Paint)

| Halaman | CSR (Baseline) | SSR + Code Split | Improvement |
|---------|----------------|------------------|-------------|
| Welcome | 6.23 s | 2.67 s | **57.14%** |
| Products | 6.67 s | 3.87 s | **41.98%** |
| Product Detail | 6.67 s | 4.2 s | **37.03%** |
| Cart | 6.97 s | 3.27 s | **53.08%** |
| **Rata-rata** | **6.64 s** | **3.50 s** | **47.29%** |

### Peningkatan Performance Score

| Halaman | CSR | SSR + Code Split | Improvement |
|---------|-----|------------------|-------------|
| Welcome | 56.67 | 92.33 | **+35.66** |
| Products | 57.67 | 68.33 | **+10.66** |
| Product Detail | 45.67 | 58 | **+12.33** |
| Cart | 58.33 | 80.33 | **+22.00** |
| **Rata-rata** | **54.59** | **74.75** | **+20.16** |

> Dokumentasi lengkap hasil pengukuran: [PENGUKURAN_PERFORMA.md](PENGUKURAN_PERFORMA.md)

## Instalasi

### Prerequisites
- PHP 8.3+
- Composer
- Node.js 18+
- MySQL 8.x

### Langkah Instalasi

```bash
# 1. Clone repository
git clone <repository-url>
cd penelitian_ssr-codesplitting

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Setup environment
cp .env.example .env
php artisan key:generate

# 5. Konfigurasi database di .env
# DB_DATABASE=penelitian_ssr_db
# DB_USERNAME=root
# DB_PASSWORD=your_password

# 6. Jalankan migration dan seeder
php artisan migrate
php artisan db:seed

# 7. Build assets
npm run build
```

## Menjalankan Aplikasi

### Mode Development (CSR)
```bash
# Terminal 1 - Laravel Server
php artisan serve

# Terminal 2 - Vite Dev Server
npm run dev
```

### Mode Production dengan SSR
```bash
# 1. Build production assets
npm run build

# Terminal 1 - Laravel Server
php artisan serve

# Terminal 2 - SSR Server
php artisan inertia:start-ssr
```

Aplikasi dapat diakses di: http://127.0.0.1:8000

## Struktur Project

```
├── app/
│   ├── Http/Controllers/
│   │   ├── ProductController.php    # CRUD Produk
│   │   └── CartController.php       # CRUD Keranjang
│   └── Models/
│       ├── Product.php
│       ├── Cart.php
│       └── CartItem.php
├── resources/js/
│   ├── app.js                       # Client entry point
│   ├── ssr.js                       # SSR entry point
│   ├── Pages/
│   │   ├── Welcome.vue
│   │   ├── Products/
│   │   │   ├── Index.vue
│   │   │   └── Show.vue
│   │   └── Cart/
│   │       └── Index.vue
│   ├── Components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── ProductCard.vue
│   └── Layouts/
│       └── AppLayout.vue
├── config/
│   └── inertia.php                  # Konfigurasi SSR
├── vite.config.js                   # Konfigurasi Vite + SSR
├── PENGUKURAN_PERFORMA.md           # Hasil pengukuran
└── README.md
```

## Konfigurasi SSR

### vite.config.js
```javascript
laravel({
    input: ['resources/css/app.css', 'resources/js/app.js'],
    ssr: 'resources/js/ssr.js',
    refresh: true,
}),
```

### config/inertia.php
```php
'ssr' => [
    'enabled' => true,
    'url' => 'http://127.0.0.1:13714',
],
```

## Pengukuran Performa

Pengukuran dilakukan menggunakan **Google Lighthouse** dengan kondisi:
- Mode: Navigation
- Device: Mobile
- Network: Simulated Slow 4G
- CPU: 4x Slowdown

Setiap halaman diukur **3 kali** dan diambil rata-ratanya.

## Kesimpulan

Implementasi SSR dan Code Splitting pada aplikasi Laravel berbasis Inertia.js **berhasil meningkatkan performa** secara signifikan:

1. **FCP meningkat rata-rata 47.29%** (dari 6.64s menjadi 3.50s)
2. **LCP meningkat rata-rata 55.12%** (dari 10.25s menjadi 4.60s)
3. **Performance Score naik +20.16 poin** (dari 54.59 menjadi 74.75)

## Lisensi

Project ini dibuat untuk keperluan penelitian akademis.

## Kontak

Untuk pertanyaan terkait penelitian ini, silakan hubungi peneliti.
