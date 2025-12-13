<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps({
    cartItems: Array,
    totalHarga: Number,
    totalItem: Number
});

// Format harga ke Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

// Update jumlah item
const updateJumlah = (itemId, jumlahBaru) => {
    if (jumlahBaru < 1) return;

    router.patch(`/keranjang/update/${itemId}`, {
        jumlah: jumlahBaru
    }, {
        preserveScroll: true
    });
};

// Hapus item dari keranjang
const hapusItem = (itemId) => {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini dari keranjang?')) {
        router.delete(`/keranjang/hapus/${itemId}`, {
            preserveScroll: true
        });
    }
};

// Checkout (dummy)
const checkout = () => {
    alert('Fitur checkout sedang dalam pengembangan. Terima kasih telah berbelanja!');
};
</script>

<template>
    <Head title="Keranjang Belanja" />

    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Header -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Keranjang Belanja</h1>
                <p class="text-gray-600">Kelola produk yang ingin Anda beli</p>
            </div>

            <!-- Cart Content -->
            <div v-if="cartItems.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Cart Items -->
                <div class="lg:col-span-2 space-y-4">
                    <div
                        v-for="item in cartItems"
                        :key="item.id"
                        class="bg-white rounded-lg shadow-md p-4 flex gap-4"
                    >
                        <!-- Product Image -->
                        <Link :href="`/produk/${item.product.id}`" class="flex-shrink-0">
                            <img
                                :src="item.product.gambar_url"
                                :alt="item.product.nama_produk"
                                class="w-24 h-24 object-cover rounded-md"
                            />
                        </Link>

                        <!-- Product Info -->
                        <div class="flex-grow">
                            <Link :href="`/produk/${item.product.id}`">
                                <h3 class="font-semibold text-gray-900 hover:text-blue-600 mb-1">
                                    {{ item.product.nama_produk }}
                                </h3>
                            </Link>
                            <p class="text-sm text-gray-600 mb-2">{{ item.product.kategori }}</p>
                            <p class="text-lg font-bold text-blue-600 mb-3">
                                {{ formatRupiah(item.product.harga) }}
                            </p>

                            <!-- Quantity Controls -->
                            <div class="flex items-center gap-3">
                                <button
                                    @click="updateJumlah(item.id, item.jumlah - 1)"
                                    :disabled="item.jumlah <= 1"
                                    class="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                >
                                    -
                                </button>
                                <input
                                    :value="item.jumlah"
                                    @change="updateJumlah(item.id, $event.target.value)"
                                    type="number"
                                    min="1"
                                    :max="item.product.stok"
                                    class="w-16 text-center px-2 py-1 border border-gray-300 rounded-md"
                                />
                                <button
                                    @click="updateJumlah(item.id, item.jumlah + 1)"
                                    :disabled="item.jumlah >= item.product.stok"
                                    class="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                >
                                    +
                                </button>
                                <button
                                    @click="hapusItem(item.id)"
                                    class="ml-auto text-red-600 hover:text-red-800 font-medium"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>

                        <!-- Subtotal -->
                        <div class="flex-shrink-0 text-right">
                            <p class="text-sm text-gray-600 mb-1">Subtotal</p>
                            <p class="text-xl font-bold text-gray-900">
                                {{ formatRupiah(item.product.harga * item.jumlah) }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
                        <h2 class="text-xl font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>

                        <div class="space-y-3 mb-6">
                            <div class="flex justify-between text-gray-700">
                                <span>Jumlah Item:</span>
                                <span class="font-semibold">{{ totalItem }}</span>
                            </div>
                            <div class="flex justify-between text-gray-700">
                                <span>Subtotal:</span>
                                <span class="font-semibold">{{ formatRupiah(totalHarga) }}</span>
                            </div>
                            <div class="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                                <span>Total:</span>
                                <span class="text-blue-600">{{ formatRupiah(totalHarga) }}</span>
                            </div>
                        </div>

                        <button
                            @click="checkout"
                            class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Lanjutkan ke Checkout
                        </button>

                        <Link
                            href="/produk"
                            class="block w-full text-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Lanjutkan Belanja
                        </Link>
                    </div>
                </div>
            </div>

            <!-- Empty Cart State -->
            <div v-else class="text-center py-16">
                <svg class="w-32 h-32 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Keranjang Anda Kosong</h2>
                <p class="text-gray-600 mb-6">Belum ada produk yang ditambahkan ke keranjang</p>
                <Link
                    href="/produk"
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Mulai Belanja
                </Link>
            </div>
        </div>
    </AppLayout>
</template>
