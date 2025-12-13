<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $kategori = ['Elektronik', 'Fashion', 'Makanan & Minuman', 'Buku & Alat Tulis', 'Olahraga'];
        $kategoriDipilih = fake()->randomElement($kategori);

        // Generate nama produk berdasarkan kategori
        $namaProduk = $this->generateNamaProduk($kategoriDipilih);

        return [
            'nama_produk' => $namaProduk,
            'deskripsi' => $this->generateDeskripsi($namaProduk),
            'harga' => fake()->randomFloat(2, 50000, 5000000),
            'gambar_url' => 'https://picsum.photos/seed/' . fake()->unique()->numberBetween(1000, 9999) . '/400/400',
            'stok' => fake()->numberBetween(0, 100),
            'kategori' => $kategoriDipilih,
        ];
    }

    /**
     * Generate nama produk realistis berdasarkan kategori
     */
    private function generateNamaProduk(string $kategori): string
    {
        $produkPerKategori = [
            'Elektronik' => [
                'Laptop ASUS ROG', 'Mouse Gaming Logitech', 'Keyboard Mechanical RGB',
                'Headset Gaming HyperX', 'Webcam Logitech HD', 'Monitor LED 24 Inch',
                'SSD External 1TB', 'Power Bank 20000mAh'
            ],
            'Fashion' => [
                'Kaos Polos Premium', 'Jaket Hoodie Unisex', 'Celana Jeans Pria',
                'Dress Wanita Casual', 'Sepatu Sneakers', 'Tas Ransel Anti Air',
                'Jam Tangan Analog', 'Topi Baseball Cap'
            ],
            'Makanan & Minuman' => [
                'Kopi Arabika Premium', 'Coklat Import Belgia', 'Mie Instan Goreng',
                'Biskuit Butter Cookies', 'Teh Hijau Organik', 'Selai Kacang Creamy',
                'Madu Murni 500ml', 'Keripik Kentang Original'
            ],
            'Buku & Alat Tulis' => [
                'Buku Catatan A5', 'Pulpen Gel 0.5mm', 'Pensil Mekanik 0.7mm',
                'Stabilo Highlighter Set', 'Penghapus Putih', 'Spidol Permanen Hitam',
                'Penggaris 30cm', 'Lem Stick 25gr'
            ],
            'Olahraga' => [
                'Matras Yoga Anti Slip', 'Dumbbell 5kg Set', 'Botol Minum Olahraga',
                'Raket Badminton Carbon', 'Sepatu Lari Running', 'Resistance Band Set',
                'Bola Basket Mikasa', 'Skipping Rope Digital'
            ],
        ];

        return fake()->randomElement($produkPerKategori[$kategori]);
    }

    /**
     * Generate deskripsi produk 2-3 paragraf
     */
    private function generateDeskripsi(string $namaProduk): string
    {
        $paragraf1 = "Produk {$namaProduk} adalah pilihan terbaik untuk memenuhi kebutuhan Anda. "
            . "Dibuat dengan material berkualitas tinggi dan desain yang modern, produk ini "
            . "dirancang untuk memberikan kenyamanan dan kepuasan maksimal bagi penggunanya. "
            . "Cocok digunakan untuk berbagai keperluan sehari-hari maupun profesional.";

        $paragraf2 = "Dengan teknologi terkini dan inovasi yang terus berkembang, {$namaProduk} "
            . "menawarkan performa yang handal dan tahan lama. Produk ini telah lulus uji kualitas "
            . "standar internasional sehingga Anda tidak perlu khawatir dengan daya tahan dan "
            . "keamanannya. Tersedia dalam berbagai pilihan warna dan ukuran sesuai kebutuhan.";

        $paragraf3 = "Dapatkan pengalaman berbelanja terbaik dengan produk original dan bergaransi resmi. "
            . "Kami menjamin 100% keaslian produk dengan harga yang kompetitif. Free ongkir untuk "
            . "pembelian di atas Rp100.000 dan dapatkan promo menarik setiap bulannya. Buruan pesan "
            . "sekarang sebelum kehabisan stok!";

        return $paragraf1 . "\n\n" . $paragraf2 . "\n\n" . $paragraf3;
    }
}
