import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const formatRupiah = (angka) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(angka);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300" }, _attrs))} data-v-909c6725>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/produk/${__props.product.id}`,
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.product.gambar_url)}${ssrRenderAttr("alt", __props.product.nama_produk)} class="w-full h-48 object-cover" data-v-909c6725${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: __props.product.gambar_url,
                alt: __props.product.nama_produk,
                class: "w-full h-48 object-cover"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-4" data-v-909c6725><span class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-2" data-v-909c6725>${ssrInterpolate(__props.product.kategori)}</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/produk/${__props.product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2" data-v-909c6725${_scopeId}>${ssrInterpolate(__props.product.nama_produk)}</h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2" }, toDisplayString(__props.product.nama_produk), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-2xl font-bold text-blue-600 mb-3" data-v-909c6725>${ssrInterpolate(formatRupiah(__props.product.harga))}</p><p class="text-sm text-gray-600 mb-4" data-v-909c6725>`);
      if (__props.product.stok > 0) {
        _push(`<span class="text-green-600" data-v-909c6725> Stok: ${ssrInterpolate(__props.product.stok)}</span>`);
      } else {
        _push(`<span class="text-red-600" data-v-909c6725> Stok Habis </span>`);
      }
      _push(`</p><div class="flex gap-2" data-v-909c6725>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/produk/${__props.product.id}`,
        class: "flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-center font-medium hover:bg-gray-300 transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Detail `);
          } else {
            return [
              createTextVNode(" Lihat Detail ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button${ssrIncludeBooleanAttr(__props.product.stok === 0) ? " disabled" : ""} class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed" data-v-909c6725> + Keranjang </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-909c6725"]]);
export {
  ProductCard as P
};
