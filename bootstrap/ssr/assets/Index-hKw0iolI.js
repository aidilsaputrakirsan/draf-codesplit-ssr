import { ref, watch, unref, withCtx, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-CUJee67w.js";
import { P as ProductCard } from "./ProductCard-BhvmSdPG.js";
import { router, Head, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: Object,
    kategoriList: Array,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.search || "");
    const kategori = ref(props.filters.kategori || "");
    const sort = ref(props.filters.sort || "created_at");
    const direction = ref(props.filters.direction || "desc");
    watch([search, kategori, sort, direction], () => {
      router.get("/produk", {
        search: search.value,
        kategori: kategori.value,
        sort: sort.value,
        direction: direction.value
      }, {
        preserveState: true,
        preserveScroll: true
      });
    });
    const resetFilters = () => {
      search.value = "";
      kategori.value = "";
      sort.value = "created_at";
      direction.value = "desc";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Daftar Produk" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><div class="mb-8"${_scopeId}><h1 class="text-3xl font-bold text-gray-900 mb-2"${_scopeId}>Daftar Produk</h1><p class="text-gray-600"${_scopeId}>Temukan berbagai produk pilihan untuk kebutuhan Anda</p></div><div class="bg-white p-6 rounded-lg shadow-md mb-8"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-4"${_scopeId}><div class="md:col-span-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Cari Produk</label><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Masukkan nama produk..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Kategori</label><select class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(kategori.value) ? ssrLooseContain(kategori.value, "") : ssrLooseEqual(kategori.value, "")) ? " selected" : ""}${_scopeId}>Semua Kategori</option><!--[-->`);
            ssrRenderList(__props.kategoriList, (kat) => {
              _push2(`<option${ssrRenderAttr("value", kat)}${ssrIncludeBooleanAttr(Array.isArray(kategori.value) ? ssrLooseContain(kategori.value, kat) : ssrLooseEqual(kategori.value, kat)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(kat)}</option>`);
            });
            _push2(`<!--]--></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Urutkan</label><select class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"${_scopeId}><option value="created_at"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "created_at") : ssrLooseEqual(sort.value, "created_at")) ? " selected" : ""}${_scopeId}>Terbaru</option><option value="nama_produk"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "nama_produk") : ssrLooseEqual(sort.value, "nama_produk")) ? " selected" : ""}${_scopeId}>Nama (A-Z)</option><option value="harga"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "harga") : ssrLooseEqual(sort.value, "harga")) ? " selected" : ""}${_scopeId}>Harga</option></select></div></div><div class="flex items-center justify-between mt-4"${_scopeId}><div class="flex items-center"${_scopeId}><label class="inline-flex items-center"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(direction.value === "desc") ? " checked" : ""} class="form-checkbox h-5 w-5 text-blue-600"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Urutkan Terbalik</span></label></div><button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"${_scopeId}> Reset Filter </button></div></div>`);
            if (__props.products.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"${_scopeId}><!--[-->`);
              ssrRenderList(__props.products.data, (product) => {
                _push2(ssrRenderComponent(ProductCard, {
                  key: product.id,
                  product
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-12"${_scopeId}><svg class="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><h3 class="text-xl font-semibold text-gray-700 mb-2"${_scopeId}>Produk Tidak Ditemukan</h3><p class="text-gray-500 mb-4"${_scopeId}>Tidak ada produk yang sesuai dengan pencarian Anda</p><button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"${_scopeId}> Reset Pencarian </button></div>`);
            }
            if (__props.products.links.length > 3) {
              _push2(`<div class="flex justify-center items-center gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.products.links, (link) => {
                _push2(`<!--[-->`);
                if (link.url) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: [
                      "px-4 py-2 rounded-md border transition duration-300",
                      link.active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    ],
                    "preserve-scroll": ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="${ssrRenderClass([
                    "px-4 py-2 rounded-md border transition duration-300",
                    "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  ])}"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, [
                createVNode("div", { class: "mb-8" }, [
                  createVNode("h1", { class: "text-3xl font-bold text-gray-900 mb-2" }, "Daftar Produk"),
                  createVNode("p", { class: "text-gray-600" }, "Temukan berbagai produk pilihan untuk kebutuhan Anda")
                ]),
                createVNode("div", { class: "bg-white p-6 rounded-lg shadow-md mb-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
                    createVNode("div", { class: "md:col-span-2" }, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Cari Produk"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => search.value = $event,
                        type: "text",
                        placeholder: "Masukkan nama produk...",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Kategori"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => kategori.value = $event,
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      }, [
                        createVNode("option", { value: "" }, "Semua Kategori"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.kategoriList, (kat) => {
                          return openBlock(), createBlock("option", {
                            key: kat,
                            value: kat
                          }, toDisplayString(kat), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, kategori.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Urutkan"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => sort.value = $event,
                        class: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      }, [
                        createVNode("option", { value: "created_at" }, "Terbaru"),
                        createVNode("option", { value: "nama_produk" }, "Nama (A-Z)"),
                        createVNode("option", { value: "harga" }, "Harga")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, sort.value]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("label", { class: "inline-flex items-center" }, [
                        createVNode("input", {
                          type: "checkbox",
                          checked: direction.value === "desc",
                          onChange: ($event) => direction.value = direction.value === "asc" ? "desc" : "asc",
                          class: "form-checkbox h-5 w-5 text-blue-600"
                        }, null, 40, ["checked", "onChange"]),
                        createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Urutkan Terbalik")
                      ])
                    ]),
                    createVNode("button", {
                      onClick: resetFilters,
                      class: "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
                    }, " Reset Filter ")
                  ])
                ]),
                __props.products.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (product) => {
                    return openBlock(), createBlock(ProductCard, {
                      key: product.id,
                      product
                    }, null, 8, ["product"]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-12"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-24 h-24 mx-auto text-gray-400 mb-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ])),
                  createVNode("h3", { class: "text-xl font-semibold text-gray-700 mb-2" }, "Produk Tidak Ditemukan"),
                  createVNode("p", { class: "text-gray-500 mb-4" }, "Tidak ada produk yang sesuai dengan pencarian Anda"),
                  createVNode("button", {
                    onClick: resetFilters,
                    class: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  }, " Reset Pencarian ")
                ])),
                __props.products.links.length > 3 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex justify-center items-center gap-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.products.links, (link) => {
                    return openBlock(), createBlock(Fragment, {
                      key: link.label
                    }, [
                      link.url ? (openBlock(), createBlock(unref(Link), {
                        key: 0,
                        href: link.url,
                        class: [
                          "px-4 py-2 rounded-md border transition duration-300",
                          link.active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        ],
                        innerHTML: link.label,
                        "preserve-scroll": ""
                      }, null, 8, ["href", "class", "innerHTML"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: [
                          "px-4 py-2 rounded-md border transition duration-300",
                          "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                        ],
                        innerHTML: link.label
                      }, null, 8, ["innerHTML"]))
                    ], 64);
                  }), 128))
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
