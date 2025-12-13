<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ProductCard from '@/Components/ProductCard.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

const props = defineProps({
    products: Object,
    kategoriList: Array,
    filters: Object
});

// State untuk filters
const search = ref(props.filters.search || '');
const kategori = ref(props.filters.kategori || '');
const sort = ref(props.filters.sort || 'created_at');
const direction = ref(props.filters.direction || 'desc');

// Watch filters dan trigger search
watch([search, kategori, sort, direction], () => {
    router.get('/produk', {
        search: search.value,
        kategori: kategori.value,
        sort: sort.value,
        direction: direction.value
    }, {
        preserveState: true,
        preserveScroll: true
    });
});

// Reset filters
const resetFilters = () => {
    search.value = '';
    kategori.value = '';
    sort.value = 'created_at';
    direction.value = 'desc';
};
</script>

<template>
    <Head title="Daftar Produk" />

    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Header -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Daftar Produk</h1>
                <p class="text-gray-600">Temukan berbagai produk pilihan untuk kebutuhan Anda</p>
            </div>

            <!-- Filters Section -->
            <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Search -->
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Cari Produk</label>
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Masukkan nama produk..."
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                        <select
                            v-model="kategori"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Semua Kategori</option>
                            <option v-for="kat in kategoriList" :key="kat" :value="kat">
                                {{ kat }}
                            </option>
                        </select>
                    </div>

                    <!-- Sort -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Urutkan</label>
                        <select
                            v-model="sort"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="created_at">Terbaru</option>
                            <option value="nama_produk">Nama (A-Z)</option>
                            <option value="harga">Harga</option>
                        </select>
                    </div>
                </div>

                <!-- Sort Direction & Reset -->
                <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center">
                        <label class="inline-flex items-center">
                            <input
                                type="checkbox"
                                :checked="direction === 'desc'"
                                @change="direction = direction === 'asc' ? 'desc' : 'asc'"
                                class="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span class="ml-2 text-sm text-gray-700">Urutkan Terbalik</span>
                        </label>
                    </div>
                    <button
                        @click="resetFilters"
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        Reset Filter
                    </button>
                </div>
            </div>

            <!-- Products Grid -->
            <div v-if="products.data.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                <ProductCard
                    v-for="product in products.data"
                    :key="product.id"
                    :product="product"
                />
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
                <svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Produk Tidak Ditemukan</h3>
                <p class="text-gray-500 mb-4">Tidak ada produk yang sesuai dengan pencarian Anda</p>
                <button
                    @click="resetFilters"
                    class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Reset Pencarian
                </button>
            </div>

            <!-- Pagination -->
            <div v-if="products.links.length > 3" class="flex justify-center items-center gap-2">
                <template v-for="link in products.links" :key="link.label">
                    <Link
                        v-if="link.url"
                        :href="link.url"
                        :class="[
                            'px-4 py-2 rounded-md border transition duration-300',
                            link.active
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        ]"
                        v-html="link.label"
                        preserve-scroll
                    />
                    <span
                        v-else
                        :class="[
                            'px-4 py-2 rounded-md border transition duration-300',
                            'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        ]"
                        v-html="link.label"
                    />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
