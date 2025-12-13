<template>
    <footer class="bg-gray-800 text-white mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- About Section -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Tentang Kami</h3>
                    <p class="text-gray-300 text-sm">
                        E-Commerce SSR adalah platform belanja online yang menyediakan berbagai produk berkualitas dengan harga terjangkau.
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Link Cepat</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <Link href="/" class="text-gray-300 hover:text-white">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href="/produk" class="text-gray-300 hover:text-white">
                                Produk
                            </Link>
                        </li>
                        <li>
                            <Link href="/keranjang" class="text-gray-300 hover:text-white">
                                Keranjang
                            </Link>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Kontak</h3>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li>Email: info@ecommerce-ssr.com</li>
                        <li>Telepon: +62 812-3456-7890</li>
                        <li>Alamat: Jakarta, Indonesia</li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                <p>&copy; 2025 E-Commerce SSR. Project Penelitian Akademis - Implementasi SSR & Code Splitting</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>
