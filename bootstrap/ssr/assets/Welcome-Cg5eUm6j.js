import { unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-CUJee67w.js";
import { Head, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Beranda" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-6"${_scopeId}> Selamat Datang di E-Commerce SSR </h1><p class="text-xl md:text-2xl mb-8 text-gray-100"${_scopeId}> Platform belanja online dengan teknologi Server-Side Rendering untuk performa maksimal </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk",
              class: "inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mulai Belanja `);
                } else {
                  return [
                    createTextVNode(" Mulai Belanja ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"${_scopeId}><h2 class="text-3xl font-bold text-center mb-12 text-gray-900"${_scopeId}>Mengapa Memilih Kami?</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="bg-white p-6 rounded-lg shadow-md text-center"${_scopeId}><div class="text-blue-600 mb-4"${_scopeId}><svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"${_scopeId}></path></svg></div><h3 class="text-xl font-semibold mb-2"${_scopeId}>Performa Cepat</h3><p class="text-gray-600"${_scopeId}> Menggunakan teknologi SSR untuk loading page yang super cepat dan responsif </p></div><div class="bg-white p-6 rounded-lg shadow-md text-center"${_scopeId}><div class="text-purple-600 mb-4"${_scopeId}><svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><h3 class="text-xl font-semibold mb-2"${_scopeId}>Produk Berkualitas</h3><p class="text-gray-600"${_scopeId}> Berbagai pilihan produk original dengan garansi resmi dan harga terjangkau </p></div><div class="bg-white p-6 rounded-lg shadow-md text-center"${_scopeId}><div class="text-green-600 mb-4"${_scopeId}><svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><h3 class="text-xl font-semibold mb-2"${_scopeId}>Harga Terbaik</h3><p class="text-gray-600"${_scopeId}> Dapatkan promo menarik setiap hari dengan harga yang kompetitif </p></div></div></div><div class="bg-gray-100 py-16"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"${_scopeId}><h2 class="text-3xl font-bold mb-4 text-gray-900"${_scopeId}>Siap Untuk Mulai Belanja?</h2><p class="text-xl text-gray-600 mb-8"${_scopeId}> Jelajahi berbagai produk pilihan dan temukan yang Anda butuhkan </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk",
              class: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lihat Semua Produk `);
                } else {
                  return [
                    createTextVNode(" Lihat Semua Produk ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"${_scopeId}><p class="text-sm text-gray-500 italic"${_scopeId}> Project Penelitian Akademis: Implementasi Server-Side Rendering (SSR) dan Code Splitting pada Aplikasi Laravel berbasis Inertia.js untuk Meningkatkan First Contentful Paint (FCP) </p></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" }, [
                  createVNode("h1", { class: "text-4xl md:text-6xl font-bold mb-6" }, " Selamat Datang di E-Commerce SSR "),
                  createVNode("p", { class: "text-xl md:text-2xl mb-8 text-gray-100" }, " Platform belanja online dengan teknologi Server-Side Rendering untuk performa maksimal "),
                  createVNode(unref(Link), {
                    href: "/produk",
                    class: "inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Mulai Belanja ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" }, [
                createVNode("h2", { class: "text-3xl font-bold text-center mb-12 text-gray-900" }, "Mengapa Memilih Kami?"),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "bg-white p-6 rounded-lg shadow-md text-center" }, [
                    createVNode("div", { class: "text-blue-600 mb-4" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-16 h-16 mx-auto",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13 10V3L4 14h7v7l9-11h-7z"
                        })
                      ]))
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Performa Cepat"),
                    createVNode("p", { class: "text-gray-600" }, " Menggunakan teknologi SSR untuk loading page yang super cepat dan responsif ")
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-lg shadow-md text-center" }, [
                    createVNode("div", { class: "text-purple-600 mb-4" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-16 h-16 mx-auto",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]))
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Produk Berkualitas"),
                    createVNode("p", { class: "text-gray-600" }, " Berbagai pilihan produk original dengan garansi resmi dan harga terjangkau ")
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-lg shadow-md text-center" }, [
                    createVNode("div", { class: "text-green-600 mb-4" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-16 h-16 mx-auto",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]))
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Harga Terbaik"),
                    createVNode("p", { class: "text-gray-600" }, " Dapatkan promo menarik setiap hari dengan harga yang kompetitif ")
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-gray-100 py-16" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" }, [
                  createVNode("h2", { class: "text-3xl font-bold mb-4 text-gray-900" }, "Siap Untuk Mulai Belanja?"),
                  createVNode("p", { class: "text-xl text-gray-600 mb-8" }, " Jelajahi berbagai produk pilihan dan temukan yang Anda butuhkan "),
                  createVNode(unref(Link), {
                    href: "/produk",
                    class: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Lihat Semua Produk ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center" }, [
                createVNode("p", { class: "text-sm text-gray-500 italic" }, " Project Penelitian Akademis: Implementasi Server-Side Rendering (SSR) dan Code Splitting pada Aplikasi Laravel berbasis Inertia.js untuk Meningkatkan First Contentful Paint (FCP) ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
