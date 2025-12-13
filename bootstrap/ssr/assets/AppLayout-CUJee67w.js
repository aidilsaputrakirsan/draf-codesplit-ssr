import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, createBlock, createVNode, createCommentVNode, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const cartCount = ref(0);
    const fetchCartCount = async () => {
      try {
        const response = await fetch("/keranjang/count");
        const data = await response.json();
        cartCount.value = data.count;
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };
    onMounted(() => {
      fetchCartCount();
    });
    __expose({
      refreshCartCount: fetchCartCount
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-md sticky top-0 z-50" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-2xl font-bold text-gray-900 hover:text-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` E-Commerce SSR `);
          } else {
            return [
              createTextVNode(" E-Commerce SSR ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex items-center space-x-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/produk",
        class: "text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Produk `);
          } else {
            return [
              createTextVNode(" Produk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/keranjang",
        class: "relative text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg><span class="ml-1"${_scopeId}>Keranjang</span>`);
            if (cartCount.value > 0) {
              _push2(`<span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"${_scopeId}>${ssrInterpolate(cartCount.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6 inline-block",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                })
              ])),
              createVNode("span", { class: "ml-1" }, "Keranjang"),
              cartCount.value > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
              }, toDisplayString(cartCount.value), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden"><button type="button" class="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white mt-auto" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div><h3 class="text-lg font-semibold mb-4">Tentang Kami</h3><p class="text-gray-300 text-sm"> E-Commerce SSR adalah platform belanja online yang menyediakan berbagai produk berkualitas dengan harga terjangkau. </p></div><div><h3 class="text-lg font-semibold mb-4">Link Cepat</h3><ul class="space-y-2 text-sm"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-gray-300 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/produk",
        class: "text-gray-300 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Produk `);
          } else {
            return [
              createTextVNode(" Produk ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/keranjang",
        class: "text-gray-300 hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Keranjang `);
          } else {
            return [
              createTextVNode(" Keranjang ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-4">Kontak</h3><ul class="space-y-2 text-sm text-gray-300"><li>Email: info@ecommerce-ssr.com</li><li>Telepon: +62 812-3456-7890</li><li>Alamat: Jakarta, Indonesia</li></ul></div></div><div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400"><p>© 2025 E-Commerce SSR. Project Penelitian Akademis - Implementasi SSR &amp; Code Splitting</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const navbarRef = ref(null);
    const refreshCartCount = () => {
      if (navbarRef.value) {
        navbarRef.value.refreshCartCount();
      }
    };
    __expose({
      refreshCartCount
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        ref_key: "navbarRef",
        ref: navbarRef
      }, null, _parent));
      _push(`<main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
