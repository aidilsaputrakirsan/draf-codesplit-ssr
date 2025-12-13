<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';

const cartCount = ref(0);

// Fetch cart count saat component dimount
const fetchCartCount = async () => {
    try {
        const response = await fetch('/keranjang/count');
        const data = await response.json();
        cartCount.value = data.count;
    } catch (error) {
        console.error('Error fetching cart count:', error);
    }
};

onMounted(() => {
    fetchCartCount();
});

// Expose function untuk refresh cart count dari parent
defineExpose({
    refreshCartCount: fetchCartCount
});
</script>

<template>
    <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo / Brand -->
                <div class="flex items-center">
                    <Link href="/" class="text-2xl font-bold text-gray-900 hover:text-gray-700">
                        E-Commerce SSR
                    </Link>
                </div>

                <!-- Navigation Links -->
                <div class="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/produk"
                        class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Produk
                    </Link>
                    <Link
                        href="/keranjang"
                        class="relative text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="ml-1">Keranjang</span>
                        <span
                            v-if="cartCount > 0"
                            class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                        >
                            {{ cartCount }}
                        </span>
                    </Link>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button
                        type="button"
                        class="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    >
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
