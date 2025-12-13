import { ref, unref, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, withDirectives, vModelText, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-CUJee67w.js";
import { P as ProductCard } from "./ProductCard-BhvmSdPG.js";
import { Head, Link, router } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    product: Object,
    relatedProducts: Array
  },
  setup(__props) {
    const props = __props;
    const jumlah = ref(1);
    const formatRupiah = (angka) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(angka);
    };
    const decrementJumlah = () => {
      if (jumlah.value > 1) {
        jumlah.value--;
      }
    };
    const incrementJumlah = () => {
      if (jumlah.value < props.product.stok) {
        jumlah.value++;
      }
    };
    const tambahKeKeranjang = () => {
      router.post("/keranjang/tambah", {
        product_id: props.product.id,
        jumlah: jumlah.value
      }, {
        preserveScroll: true,
        onSuccess: () => {
          alert("Produk berhasil ditambahkan ke keranjang!");
          jumlah.value = 1;
          window.location.reload();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.product.nama_produk
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><nav class="flex mb-6 text-sm text-gray-600"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-blue-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2"${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk",
              class: "hover:text-blue-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Produk`);
                } else {
                  return [
                    createTextVNode("Produk")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2"${_scopeId}>/</span><span class="text-gray-900"${_scopeId}>${ssrInterpolate(__props.product.nama_produk)}</span></nav><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", __props.product.gambar_url)}${ssrRenderAttr("alt", __props.product.nama_produk)} class="w-full rounded-lg shadow-lg"${_scopeId}></div><div${_scopeId}><span class="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded mb-3"${_scopeId}>${ssrInterpolate(__props.product.kategori)}</span><h1 class="text-3xl font-bold text-gray-900 mb-4"${_scopeId}>${ssrInterpolate(__props.product.nama_produk)}</h1><div class="mb-6"${_scopeId}><span class="text-4xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(formatRupiah(__props.product.harga))}</span></div><div class="mb-6"${_scopeId}><p class="text-sm font-medium text-gray-700 mb-1"${_scopeId}>Ketersediaan Stok:</p>`);
            if (__props.product.stok > 0) {
              _push2(`<p class="text-green-600 font-semibold"${_scopeId}> Tersedia (${ssrInterpolate(__props.product.stok)} unit) </p>`);
            } else {
              _push2(`<p class="text-red-600 font-semibold"${_scopeId}> Stok Habis </p>`);
            }
            _push2(`</div><div class="mb-6"${_scopeId}><h2 class="text-lg font-semibold text-gray-900 mb-3"${_scopeId}>Deskripsi Produk</h2><div class="text-gray-700 leading-relaxed whitespace-pre-line"${_scopeId}>${ssrInterpolate(__props.product.deskripsi)}</div></div><div class="mb-6"${_scopeId}><p class="text-sm font-medium text-gray-700 mb-2"${_scopeId}>Jumlah:</p><div class="flex items-center gap-3"${_scopeId}><button${ssrIncludeBooleanAttr(jumlah.value <= 1) ? " disabled" : ""} class="w-10 h-10 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"${_scopeId}> - </button><input${ssrRenderAttr("value", jumlah.value)} type="number" min="1"${ssrRenderAttr("max", __props.product.stok)} class="w-20 text-center px-4 py-2 border border-gray-300 rounded-md"${_scopeId}><button${ssrIncludeBooleanAttr(jumlah.value >= __props.product.stok) ? " disabled" : ""} class="w-10 h-10 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"${_scopeId}> + </button></div></div><div class="flex gap-4"${_scopeId}><button${ssrIncludeBooleanAttr(__props.product.stok === 0) ? " disabled" : ""} class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"${_scopeId}> Tambah ke Keranjang </button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/keranjang",
              class: "px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lihat Keranjang `);
                } else {
                  return [
                    createTextVNode(" Lihat Keranjang ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            if (__props.relatedProducts.length > 0) {
              _push2(`<div${_scopeId}><h2 class="text-2xl font-bold text-gray-900 mb-6"${_scopeId}>Produk Terkait</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.relatedProducts, (relatedProduct) => {
                _push2(ssrRenderComponent(ProductCard, {
                  key: relatedProduct.id,
                  product: relatedProduct
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, [
                createVNode("nav", { class: "flex mb-6 text-sm text-gray-600" }, [
                  createVNode(unref(Link), {
                    href: "/",
                    class: "hover:text-blue-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Beranda")
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "mx-2" }, "/"),
                  createVNode(unref(Link), {
                    href: "/produk",
                    class: "hover:text-blue-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Produk")
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "mx-2" }, "/"),
                  createVNode("span", { class: "text-gray-900" }, toDisplayString(__props.product.nama_produk), 1)
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" }, [
                  createVNode("div", null, [
                    createVNode("img", {
                      src: __props.product.gambar_url,
                      alt: __props.product.nama_produk,
                      class: "w-full rounded-lg shadow-lg"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded mb-3" }, toDisplayString(__props.product.kategori), 1),
                    createVNode("h1", { class: "text-3xl font-bold text-gray-900 mb-4" }, toDisplayString(__props.product.nama_produk), 1),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("span", { class: "text-4xl font-bold text-blue-600" }, toDisplayString(formatRupiah(__props.product.harga)), 1)
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-700 mb-1" }, "Ketersediaan Stok:"),
                      __props.product.stok > 0 ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-green-600 font-semibold"
                      }, " Tersedia (" + toDisplayString(__props.product.stok) + " unit) ", 1)) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-red-600 font-semibold"
                      }, " Stok Habis "))
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Deskripsi Produk"),
                      createVNode("div", { class: "text-gray-700 leading-relaxed whitespace-pre-line" }, toDisplayString(__props.product.deskripsi), 1)
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-700 mb-2" }, "Jumlah:"),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("button", {
                          onClick: decrementJumlah,
                          disabled: jumlah.value <= 1,
                          class: "w-10 h-10 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        }, " - ", 8, ["disabled"]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => jumlah.value = $event,
                          type: "number",
                          min: "1",
                          max: __props.product.stok,
                          class: "w-20 text-center px-4 py-2 border border-gray-300 rounded-md"
                        }, null, 8, ["onUpdate:modelValue", "max"]), [
                          [
                            vModelText,
                            jumlah.value,
                            void 0,
                            { number: true }
                          ]
                        ]),
                        createVNode("button", {
                          onClick: incrementJumlah,
                          disabled: jumlah.value >= __props.product.stok,
                          class: "w-10 h-10 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        }, " + ", 8, ["disabled"])
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode("button", {
                        onClick: tambahKeKeranjang,
                        disabled: __props.product.stok === 0,
                        class: "flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      }, " Tambah ke Keranjang ", 8, ["disabled"]),
                      createVNode(unref(Link), {
                        href: "/keranjang",
                        class: "px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Lihat Keranjang ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                __props.relatedProducts.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-6" }, "Produk Terkait"),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.relatedProducts, (relatedProduct) => {
                      return openBlock(), createBlock(ProductCard, {
                        key: relatedProduct.id,
                        product: relatedProduct
                      }, null, 8, ["product"]);
                    }), 128))
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
