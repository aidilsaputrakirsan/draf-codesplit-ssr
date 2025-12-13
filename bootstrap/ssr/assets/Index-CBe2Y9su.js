import { unref, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-CUJee67w.js";
import { Head, Link, router } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    cartItems: Array,
    totalHarga: Number,
    totalItem: Number
  },
  setup(__props) {
    const formatRupiah = (angka) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(angka);
    };
    const updateJumlah = (itemId, jumlahBaru) => {
      if (jumlahBaru < 1) return;
      router.patch(`/keranjang/update/${itemId}`, {
        jumlah: jumlahBaru
      }, {
        preserveScroll: true
      });
    };
    const hapusItem = (itemId) => {
      if (confirm("Apakah Anda yakin ingin menghapus produk ini dari keranjang?")) {
        router.delete(`/keranjang/hapus/${itemId}`, {
          preserveScroll: true
        });
      }
    };
    const checkout = () => {
      alert("Fitur checkout sedang dalam pengembangan. Terima kasih telah berbelanja!");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Keranjang Belanja" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><div class="mb-8"${_scopeId}><h1 class="text-3xl font-bold text-gray-900 mb-2"${_scopeId}>Keranjang Belanja</h1><p class="text-gray-600"${_scopeId}>Kelola produk yang ingin Anda beli</p></div>`);
            if (__props.cartItems.length > 0) {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-2 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.cartItems, (item) => {
                _push2(`<div class="bg-white rounded-lg shadow-md p-4 flex gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: `/produk/${item.product.id}`,
                  class: "flex-shrink-0"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", item.product.gambar_url)}${ssrRenderAttr("alt", item.product.nama_produk)} class="w-24 h-24 object-cover rounded-md"${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: item.product.gambar_url,
                          alt: item.product.nama_produk,
                          class: "w-24 h-24 object-cover rounded-md"
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="flex-grow"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: `/produk/${item.product.id}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="font-semibold text-gray-900 hover:text-blue-600 mb-1"${_scopeId2}>${ssrInterpolate(item.product.nama_produk)}</h3>`);
                    } else {
                      return [
                        createVNode("h3", { class: "font-semibold text-gray-900 hover:text-blue-600 mb-1" }, toDisplayString(item.product.nama_produk), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="text-sm text-gray-600 mb-2"${_scopeId}>${ssrInterpolate(item.product.kategori)}</p><p class="text-lg font-bold text-blue-600 mb-3"${_scopeId}>${ssrInterpolate(formatRupiah(item.product.harga))}</p><div class="flex items-center gap-3"${_scopeId}><button${ssrIncludeBooleanAttr(item.jumlah <= 1) ? " disabled" : ""} class="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"${_scopeId}> - </button><input${ssrRenderAttr("value", item.jumlah)} type="number" min="1"${ssrRenderAttr("max", item.product.stok)} class="w-16 text-center px-2 py-1 border border-gray-300 rounded-md"${_scopeId}><button${ssrIncludeBooleanAttr(item.jumlah >= item.product.stok) ? " disabled" : ""} class="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"${_scopeId}> + </button><button class="ml-auto text-red-600 hover:text-red-800 font-medium"${_scopeId}> Hapus </button></div></div><div class="flex-shrink-0 text-right"${_scopeId}><p class="text-sm text-gray-600 mb-1"${_scopeId}>Subtotal</p><p class="text-xl font-bold text-gray-900"${_scopeId}>${ssrInterpolate(formatRupiah(item.product.harga * item.jumlah))}</p></div></div>`);
              });
              _push2(`<!--]--></div><div class="lg:col-span-1"${_scopeId}><div class="bg-white rounded-lg shadow-md p-6 sticky top-24"${_scopeId}><h2 class="text-xl font-bold text-gray-900 mb-4"${_scopeId}>Ringkasan Pesanan</h2><div class="space-y-3 mb-6"${_scopeId}><div class="flex justify-between text-gray-700"${_scopeId}><span${_scopeId}>Jumlah Item:</span><span class="font-semibold"${_scopeId}>${ssrInterpolate(__props.totalItem)}</span></div><div class="flex justify-between text-gray-700"${_scopeId}><span${_scopeId}>Subtotal:</span><span class="font-semibold"${_scopeId}>${ssrInterpolate(formatRupiah(__props.totalHarga))}</span></div><div class="border-t pt-3 flex justify-between text-lg font-bold text-gray-900"${_scopeId}><span${_scopeId}>Total:</span><span class="text-blue-600"${_scopeId}>${ssrInterpolate(formatRupiah(__props.totalHarga))}</span></div></div><button class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"${_scopeId}> Lanjutkan ke Checkout </button>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/produk",
                class: "block w-full text-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lanjutkan Belanja `);
                  } else {
                    return [
                      createTextVNode(" Lanjutkan Belanja ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<div class="text-center py-16"${_scopeId}><svg class="w-32 h-32 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg><h2 class="text-2xl font-bold text-gray-900 mb-2"${_scopeId}>Keranjang Anda Kosong</h2><p class="text-gray-600 mb-6"${_scopeId}>Belum ada produk yang ditambahkan ke keranjang</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/produk",
                class: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
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
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, [
                createVNode("div", { class: "mb-8" }, [
                  createVNode("h1", { class: "text-3xl font-bold text-gray-900 mb-2" }, "Keranjang Belanja"),
                  createVNode("p", { class: "text-gray-600" }, "Kelola produk yang ingin Anda beli")
                ]),
                __props.cartItems.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 lg:grid-cols-3 gap-8"
                }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.cartItems, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.id,
                        class: "bg-white rounded-lg shadow-md p-4 flex gap-4"
                      }, [
                        createVNode(unref(Link), {
                          href: `/produk/${item.product.id}`,
                          class: "flex-shrink-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: item.product.gambar_url,
                              alt: item.product.nama_produk,
                              class: "w-24 h-24 object-cover rounded-md"
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("div", { class: "flex-grow" }, [
                          createVNode(unref(Link), {
                            href: `/produk/${item.product.id}`
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "font-semibold text-gray-900 hover:text-blue-600 mb-1" }, toDisplayString(item.product.nama_produk), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("p", { class: "text-sm text-gray-600 mb-2" }, toDisplayString(item.product.kategori), 1),
                          createVNode("p", { class: "text-lg font-bold text-blue-600 mb-3" }, toDisplayString(formatRupiah(item.product.harga)), 1),
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("button", {
                              onClick: ($event) => updateJumlah(item.id, item.jumlah - 1),
                              disabled: item.jumlah <= 1,
                              class: "w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            }, " - ", 8, ["onClick", "disabled"]),
                            createVNode("input", {
                              value: item.jumlah,
                              onChange: ($event) => updateJumlah(item.id, $event.target.value),
                              type: "number",
                              min: "1",
                              max: item.product.stok,
                              class: "w-16 text-center px-2 py-1 border border-gray-300 rounded-md"
                            }, null, 40, ["value", "onChange", "max"]),
                            createVNode("button", {
                              onClick: ($event) => updateJumlah(item.id, item.jumlah + 1),
                              disabled: item.jumlah >= item.product.stok,
                              class: "w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            }, " + ", 8, ["onClick", "disabled"]),
                            createVNode("button", {
                              onClick: ($event) => hapusItem(item.id),
                              class: "ml-auto text-red-600 hover:text-red-800 font-medium"
                            }, " Hapus ", 8, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "flex-shrink-0 text-right" }, [
                          createVNode("p", { class: "text-sm text-gray-600 mb-1" }, "Subtotal"),
                          createVNode("p", { class: "text-xl font-bold text-gray-900" }, toDisplayString(formatRupiah(item.product.harga * item.jumlah)), 1)
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "lg:col-span-1" }, [
                    createVNode("div", { class: "bg-white rounded-lg shadow-md p-6 sticky top-24" }, [
                      createVNode("h2", { class: "text-xl font-bold text-gray-900 mb-4" }, "Ringkasan Pesanan"),
                      createVNode("div", { class: "space-y-3 mb-6" }, [
                        createVNode("div", { class: "flex justify-between text-gray-700" }, [
                          createVNode("span", null, "Jumlah Item:"),
                          createVNode("span", { class: "font-semibold" }, toDisplayString(__props.totalItem), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between text-gray-700" }, [
                          createVNode("span", null, "Subtotal:"),
                          createVNode("span", { class: "font-semibold" }, toDisplayString(formatRupiah(__props.totalHarga)), 1)
                        ]),
                        createVNode("div", { class: "border-t pt-3 flex justify-between text-lg font-bold text-gray-900" }, [
                          createVNode("span", null, "Total:"),
                          createVNode("span", { class: "text-blue-600" }, toDisplayString(formatRupiah(__props.totalHarga)), 1)
                        ])
                      ]),
                      createVNode("button", {
                        onClick: checkout,
                        class: "w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                      }, " Lanjutkan ke Checkout "),
                      createVNode(unref(Link), {
                        href: "/produk",
                        class: "block w-full text-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Lanjutkan Belanja ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-16"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-32 h-32 mx-auto text-gray-400 mb-6",
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
                  createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-2" }, "Keranjang Anda Kosong"),
                  createVNode("p", { class: "text-gray-600 mb-6" }, "Belum ada produk yang ditambahkan ke keranjang"),
                  createVNode(unref(Link), {
                    href: "/produk",
                    class: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Mulai Belanja ")
                    ]),
                    _: 1
                  })
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
