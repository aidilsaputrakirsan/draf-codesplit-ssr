<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ProductCard from '@/Components/ProductCard.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps({
    product: Object,
    relatedProducts: Array
});

const jumlah = ref(1);

// Format harga ke Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

// Increment/Decrement jumlah
const decrementJumlah = () => {
    if (jumlah.value > 1) {
        jumlah.value--;
    }
};

const incrementJumlah = () => {
    if (jumlah.value < props.product.stok) {
        jumlah.value++;
    }
};

// Tambah ke keranjang
const tambahKeKeranjang = () => {
    router.post('/keranjang/tambah', {
        product_id: props.product.id,
        jumlah: jumlah.value
    }, {
        preserveScroll: true,
        onSuccess: () => {
            alert('Produk berhasil ditambahkan ke keranjang!');
            jumlah.value = 1; // Reset jumlah
            window.location.reload(); // Reload untuk update cart badge
        }
    });
};
</script>

<template>
    <Head :title="product.nama_produk" />

    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Breadcrumb -->
            <nav class="flex mb-6 text-sm text-gray-600">
                <Link href="/" class="hover:text-blue-600">Beranda</Link>
                <span class="mx-2">/</span>
                <Link href="/produk" class="hover:text-blue-600">Produk</Link>
                <span class="mx-2">/</span>
                <span class="text-gray-900">{{ product.nama_produk }}</span>
            </nav>

            <!-- Product Detail -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <!-- Product Image -->
                <div>
                    <img
                        :src="product.gambar_url"
                        :alt="product.nama_produk"
                        class="w-full rounded-lg shadow-lg"
                    />
                </div>

                <!-- Product Info -->
                <div>
                    <!-- Kategori -->
                    <span class="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded mb-3">
                        {{ product.kategori }}
                    </span>

                    <!-- Nama Produk -->
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">
                        {{ product.nama_produk }}
                    </h1>

                    <!-- Harga -->
                    <div class="mb-6">
                        <span class="text-4xl font-bold text-blue-600">
                            {{ formatRupiah(product.harga) }}
                        </span>
                    </div>

                    <!-- Stok -->
                    <div class="mb-6">
                        <p class="text-sm font-medium text-gray-700 mb-1">Ketersediaan Stok:</p>
                        <p v-if="product.stok > 0" class="text-green-600 font-semibold">
                            Tersedia ({{ product.stok }} unit)
                        </p>
                        <p v-else class="text-red-600 font-semibold">
                            Stok Habis
                        </p>
                    </div>

                    <!-- Deskripsi Singkat -->
                    <div class="mb-6">
                        <h2 class="text-lg font-semibold text-gray-900 mb-3">Deskripsi Produk</h2>
                        <div class="text-gray-700 leading-relaxed whitespace-pre-line">
                            {{ product.deskripsi }}
                        </div>
                    </div>

                    <!-- Quantity Selector -->
                    <div class="mb-6">
                        <p class="text-sm font-medium text-gray-700 mb-2">Jumlah:</p>
                        <div class="flex items-center gap-3">
                            <button
                                @click="decrementJumlah"
                                :disabled="jumlah <= 1"
                                class="w-10 h-10 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                -
                            </button>
                            <input
                                v-model.number="jumlah"
                                type="number"
                                min="1"
                                :max="product.stok"
                                class="w-20 text-center px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <button
                                @click="incrementJumlah"
                                :disabled="jumlah >= product.stok"
                                class="w-10 h-10 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <!-- Add to Cart Button -->
                    <div class="flex gap-4">
                        <button
                            @click="tambahKeKeranjang"
                            :disabled="product.stok === 0"
                            class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Tambah ke Keranjang
                        </button>
                        <Link
                            href="/keranjang"
                            class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
                        >
                            Lihat Keranjang
                        </Link>
                    </div>
                </div>
            </div>

            <!-- Related Products -->
            <div v-if="relatedProducts.length > 0">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Produk Terkait</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProductCard
                        v-for="relatedProduct in relatedProducts"
                        :key="relatedProduct.id"
                        :product="relatedProduct"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
