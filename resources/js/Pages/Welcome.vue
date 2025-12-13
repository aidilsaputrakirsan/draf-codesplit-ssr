<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Beranda" />

    <AppLayout>
        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    Selamat Datang di E-Commerce SSR
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-gray-100">
                    Platform belanja online dengan teknologi Server-Side Rendering untuk performa maksimal
                </p>
                <Link
                    href="/produk"
                    class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                    Mulai Belanja
                </Link>
            </div>
        </div>

        <!-- Features Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Mengapa Memilih Kami?</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <div class="text-blue-600 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Performa Cepat</h3>
                    <p class="text-gray-600">
                        Menggunakan teknologi SSR untuk loading page yang super cepat dan responsif
                    </p>
                </div>

                <!-- Feature 2 -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <div class="text-purple-600 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Produk Berkualitas</h3>
                    <p class="text-gray-600">
                        Berbagai pilihan produk original dengan garansi resmi dan harga terjangkau
                    </p>
                </div>

                <!-- Feature 3 -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <div class="text-green-600 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Harga Terbaik</h3>
                    <p class="text-gray-600">
                        Dapatkan promo menarik setiap hari dengan harga yang kompetitif
                    </p>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gray-100 py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold mb-4 text-gray-900">Siap Untuk Mulai Belanja?</h2>
                <p class="text-xl text-gray-600 mb-8">
                    Jelajahi berbagai produk pilihan dan temukan yang Anda butuhkan
                </p>
                <Link
                    href="/produk"
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                >
                    Lihat Semua Produk
                </Link>
            </div>
        </div>

        <!-- Info Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <p class="text-sm text-gray-500 italic">
                Project Penelitian Akademis: Implementasi Server-Side Rendering (SSR) dan Code Splitting pada Aplikasi Laravel berbasis Inertia.js untuk Meningkatkan First Contentful Paint (FCP)
            </p>
        </div>
    </AppLayout>
</template>
