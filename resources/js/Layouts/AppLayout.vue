<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import { ref } from 'vue';

const navbarRef = ref(null);

// Function untuk refresh cart count dari child components
const refreshCartCount = () => {
    if (navbarRef.value) {
        navbarRef.value.refreshCartCount();
    }
};

// Expose untuk digunakan dari pages
defineExpose({
    refreshCartCount
});
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar ref="navbarRef" />

        <!-- Main Content -->
        <main class="flex-grow">
            <slot />
        </main>

        <Footer />
    </div>
</template>
