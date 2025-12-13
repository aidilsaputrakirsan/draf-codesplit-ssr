/**
 * Client-Side Entry Point dengan Code Splitting
 *
 * Code Splitting diimplementasikan menggunakan dynamic import
 * sehingga setiap halaman di-load secara terpisah (lazy loading)
 */

import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // Code Splitting: eager: false memastikan setiap page di-load terpisah
    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue', { eager: false })
    ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
