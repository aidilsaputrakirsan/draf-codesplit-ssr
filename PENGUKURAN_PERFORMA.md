# Pengukuran Performa - Penelitian SSR & Code Splitting

## Informasi Penelitian
- **Judul**: Implementasi Server-Side Rendering (SSR) dan Code Splitting pada Aplikasi Laravel Berbasis Inertia.js untuk Meningkatkan First Contentful Paint (FCP)
- **Tanggal Mulai**: 2025-12-13
- **Tools**: Google Lighthouse (Chrome DevTools)

---

## FASE 2: Pengukuran Baseline (CSR - Client-Side Rendering)

### Kondisi Pengukuran
- **Mode**: Production Build (`npm run build`)
- **Server**: `php artisan serve`
- **Browser**: Google Chrome (Incognito Mode)
- **Device Emulation**: Mobile (Lighthouse default)
- **Network**: Simulated Slow 4G (Lighthouse default)
- **CPU**: 4x Slowdown (Lighthouse default)

### Hasil Pengukuran

#### 1. Halaman Welcome (/)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 6.3 s | 6.0 s | 6.4 s | **6.23 s** |
| LCP (Largest Contentful Paint) | 9.2 s | 9.8 s | 9.7 s | **9.57 s** |
| TBT (Total Blocking Time) | 40 ms | 30 ms | 40 ms | **36.67 ms** |
| CLS (Cumulative Layout Shift) | 0 | 0 | 0 | **0** |
| Performance Score | 60 | 55 | 55 | **56.67** |

#### 2. Halaman Products (/produk)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 7.6 s | 6.2 s | 6.2 s | **6.67 s** |
| LCP (Largest Contentful Paint) | 11.2 s | 11.1 s | 11.1 s | **11.13 s** |
| TBT (Total Blocking Time) | 100 ms | 80 ms | 90 ms | **90 ms** |
| CLS (Cumulative Layout Shift) | 0 | 0 | 0 | **0** |
| Performance Score | 57 | 58 | 58 | **57.67** |

#### 3. Halaman Product Detail (/produk/1)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 6.5 s | 6.1 s | 7.4 s | **6.67 s** |
| LCP (Largest Contentful Paint) | 9.9 s | 10.6 s | 10.6 s | **10.37 s** |
| TBT (Total Blocking Time) | 40 ms | 110 ms | 60 ms | **70 ms** |
| CLS (Cumulative Layout Shift) | 0.338 | 0 | 0.338 | **0.225** |
| Performance Score | 38 | 58 | 41 | **45.67** |

#### 4. Halaman Cart (/keranjang)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 7.4 s | 6.1 s | 7.4 s | **6.97 s** |
| LCP (Largest Contentful Paint) | 10.0 s | 9.8 s | 10.0 s | **9.93 s** |
| TBT (Total Blocking Time) | 110 ms | 30 ms | 50 ms | **63.33 ms** |
| CLS (Cumulative Layout Shift) | 0 | 0 | 0 | **0** |
| Performance Score | 57 | 60 | 58 | **58.33** |

### Catatan Baseline
- Bundle size: app.js = 238.53 kB (gzip: 84.63 kB)
- Semua halaman menggunakan Client-Side Rendering (CSR)
- Belum ada SSR atau Code Splitting

---

## FASE 5: Pengukuran Setelah SSR + Code Splitting

### Kondisi Pengukuran
- **Mode**: Production Build (`npm run build`)
- **Server**: `php artisan serve` + `php artisan inertia:start-ssr`
- **SSR**: Enabled (Inertia SSR Server on port 13714)
- **Code Splitting**: Enabled (lazy loading per halaman)

### Hasil Pengukuran

#### 1. Halaman Welcome (/)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 2.6 s | 2.7 s | 2.7 s | **2.67 s** |
| LCP (Largest Contentful Paint) | 2.6 s | 2.7 s | 2.7 s | **2.67 s** |
| TBT (Total Blocking Time) | 10 ms | 10 ms | 20 ms | **13.33 ms** |
| CLS (Cumulative Layout Shift) | 0 | 0 | 0 | **0** |
| Performance Score | 93 | 92 | 92 | **92.33** |

#### 2. Halaman Products (/produk)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 4.5 s | 2.6 s | 4.5 s | **3.87 s** |
| LCP (Largest Contentful Paint) | 7.0 s | 5.5 s | 7.1 s | **6.53 s** |
| TBT (Total Blocking Time) | 70 ms | 30 ms | 120 ms | **73.33 ms** |
| CLS (Cumulative Layout Shift) | 0 | 0 | 0 | **0** |
| Performance Score | 65 | 76 | 64 | **68.33** |

#### 3. Halaman Product Detail (/produk/1)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 3.0 s | 5.1 s | 4.5 s | **4.2 s** |
| LCP (Largest Contentful Paint) | 4.5 s | 6.6 s | 4.5 s | **5.2 s** |
| TBT (Total Blocking Time) | 120 ms | 70 ms | 30 ms | **73.33 ms** |
| CLS (Cumulative Layout Shift) | 0.338 | 0 | 0.338 | **0.225** |
| Performance Score | 60 | 58 | 56 | **58** |

#### 4. Halaman Cart (/keranjang)
| Metrik | Run 1 | Run 2 | Run 3 | Rata-rata |
|--------|-------|-------|-------|-----------|
| FCP (First Contentful Paint) | 4.1 s | 2.8 s | 2.9 s | **3.27 s** |
| LCP (Largest Contentful Paint) | 4.1 s | 3.2 s | 4.7 s | **4.0 s** |
| TBT (Total Blocking Time) | 30 ms | 40 ms | 70 ms | **46.67 ms** |
| CLS (Cumulative Layout Shift) | 0 | 0 | 0 | **0** |
| Performance Score | 77 | 87 | 77 | **80.33** |

### Catatan SSR + Code Splitting
- Bundle size tetap sama (app.js = 238.53 kB) namun di-split per halaman
- HTML sudah ter-render dari server (SSR)
- Setiap halaman di-load secara lazy (Code Splitting)

---

## Perbandingan Hasil

### Perbandingan FCP (First Contentful Paint)
| Halaman | Baseline (CSR) | SSR + Code Split | Improvement |
|---------|----------------|------------------|-------------|
| Welcome | 6.23 s | 2.67 s | **57.14%** |
| Products | 6.67 s | 3.87 s | **41.98%** |
| Product Detail | 6.67 s | 4.2 s | **37.03%** |
| Cart | 6.97 s | 3.27 s | **53.08%** |
| **Rata-rata** | **6.64 s** | **3.50 s** | **47.29%** |

### Perbandingan LCP (Largest Contentful Paint)
| Halaman | Baseline (CSR) | SSR + Code Split | Improvement |
|---------|----------------|------------------|-------------|
| Welcome | 9.57 s | 2.67 s | **72.10%** |
| Products | 11.13 s | 6.53 s | **41.33%** |
| Product Detail | 10.37 s | 5.2 s | **49.85%** |
| Cart | 9.93 s | 4.0 s | **59.72%** |
| **Rata-rata** | **10.25 s** | **4.60 s** | **55.12%** |

### Perbandingan TBT (Total Blocking Time)
| Halaman | Baseline (CSR) | SSR + Code Split | Improvement |
|---------|----------------|------------------|-------------|
| Welcome | 36.67 ms | 13.33 ms | **63.64%** |
| Products | 90 ms | 73.33 ms | **18.52%** |
| Product Detail | 70 ms | 73.33 ms | -4.76% |
| Cart | 63.33 ms | 46.67 ms | **26.32%** |
| **Rata-rata** | **65 ms** | **51.67 ms** | **20.51%** |

### Perbandingan Performance Score
| Halaman | Baseline (CSR) | SSR + Code Split | Improvement |
|---------|----------------|------------------|-------------|
| Welcome | 56.67 | 92.33 | **+35.66** |
| Products | 57.67 | 68.33 | **+10.66** |
| Product Detail | 45.67 | 58 | **+12.33** |
| Cart | 58.33 | 80.33 | **+22.00** |
| **Rata-rata** | **54.59** | **74.75** | **+20.16** |

---

## Kesimpulan

### Hasil Penelitian

Implementasi **Server-Side Rendering (SSR)** dan **Code Splitting** pada aplikasi Laravel berbasis Inertia.js berhasil meningkatkan performa secara signifikan:

#### 1. First Contentful Paint (FCP) - Fokus Utama Penelitian
- **Peningkatan rata-rata: 47.29%**
- FCP berkurang dari 6.64 detik menjadi 3.50 detik
- Halaman Welcome menunjukkan peningkatan tertinggi (57.14%)
- Semua halaman mengalami peningkatan FCP yang signifikan

#### 2. Largest Contentful Paint (LCP)
- **Peningkatan rata-rata: 55.12%**
- LCP berkurang dari 10.25 detik menjadi 4.60 detik
- Halaman Welcome menunjukkan peningkatan tertinggi (72.10%)

#### 3. Total Blocking Time (TBT)
- **Peningkatan rata-rata: 20.51%**
- TBT berkurang dari 65 ms menjadi 51.67 ms
- Catatan: Product Detail mengalami sedikit penurunan (-4.76%)

#### 4. Performance Score
- **Peningkatan rata-rata: +20.16 poin**
- Score meningkat dari 54.59 menjadi 74.75
- Halaman Welcome mencapai score 92.33 (kategori hijau/baik)

### Analisis

1. **SSR memberikan dampak terbesar pada FCP dan LCP** karena konten HTML sudah tersedia dari server tanpa perlu menunggu JavaScript di-download dan di-execute.

2. **Code Splitting membantu mengurangi ukuran initial bundle** yang perlu di-load, meskipun main bundle (Vue + Inertia core) tetap besar.

3. **Halaman Welcome menunjukkan peningkatan terbaik** karena kontennya relatif statis dan tidak memerlukan data dari database yang kompleks.

4. **Halaman Products dan Product Detail** masih memiliki LCP yang relatif tinggi karena memuat gambar dari external URL (Picsum).

### Rekomendasi Pengembangan Lanjutan

1. Implementasi image optimization (lazy loading, WebP format, proper sizing)
2. Gunakan caching untuk API responses
3. Implementasi preloading untuk critical assets
4. Optimasi database queries untuk halaman dengan banyak data
