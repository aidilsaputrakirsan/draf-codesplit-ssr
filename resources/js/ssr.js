/**
 * SSR Entry Point dengan Code Splitting
 *
 * File ini digunakan untuk Server-Side Rendering dengan Inertia.js
 * Berbeda dengan app.js yang untuk client-side, file ini render di server (Node.js)
 *
 * Code Splitting: Setiap halaman di-bundle terpisah untuk optimasi loading
 */

import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        // Code Splitting: eager: false untuk lazy loading per halaman
        resolve: (name) => resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue', { eager: false })
        ),
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin);
        },
    })
);
