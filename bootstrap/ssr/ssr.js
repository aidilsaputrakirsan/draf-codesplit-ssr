import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "E-Commerce Penelitian SSR";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    // Code Splitting: eager: false untuk lazy loading per halaman
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.vue`,
      /* @__PURE__ */ Object.assign({ "./Pages/Cart/Index.vue": () => import("./assets/Index-CBe2Y9su.js"), "./Pages/Products/Index.vue": () => import("./assets/Index-hKw0iolI.js"), "./Pages/Products/Show.vue": () => import("./assets/Show-Cn8zVTRZ.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-Cg5eUm6j.js") })
    ),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
