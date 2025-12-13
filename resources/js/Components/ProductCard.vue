<script setup>
import { Link, router } from '@inertiajs/vue3';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

// Format harga ke Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

// Tambah ke keranjang
const tambahKeKeranjang = () => {
    router.post('/keranjang/tambah', {
        product_id: props.product.id,
        jumlah: 1
    }, {
        preserveScroll: true,
        onSuccess: () => {
            // Refresh cart count di navbar
            window.location.reload(); // Simple reload untuk update cart badge
        }
    });
};
</script>

<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <!-- Product Image -->
        <Link :href="`/produk/${product.id}`" class="block">
            <img
                :src="product.gambar_url"
                :alt="product.nama_produk"
                class="w-full h-48 object-cover"
            />
        </Link>

        <!-- Product Info -->
        <div class="p-4">
            <!-- Kategori -->
            <span class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-2">
                {{ product.kategori }}
            </span>

            <!-- Nama Produk -->
            <Link :href="`/produk/${product.id}`">
                <h3 class="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2">
                    {{ product.nama_produk }}
                </h3>
            </Link>

            <!-- Harga -->
            <p class="text-2xl font-bold text-blue-600 mb-3">
                {{ formatRupiah(product.harga) }}
            </p>

            <!-- Stok Info -->
            <p class="text-sm text-gray-600 mb-4">
                <span v-if="product.stok > 0" class="text-green-600">
                    Stok: {{ product.stok }}
                </span>
                <span v-else class="text-red-600">
                    Stok Habis
                </span>
            </p>

            <!-- Action Buttons -->
            <div class="flex gap-2">
                <Link
                    :href="`/produk/${product.id}`"
                    class="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-center font-medium hover:bg-gray-300 transition duration-300"
                >
                    Lihat Detail
                </Link>
                <button
                    @click="tambahKeKeranjang"
                    :disabled="product.stok === 0"
                    class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    + Keranjang
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
