<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Get atau create cart untuk session saat ini
     */
    private function getOrCreateCart()
    {
        $sessionId = session()->getId();

        return Cart::firstOrCreate(
            ['session_id' => $sessionId]
        );
    }

    /**
     * Tampilkan keranjang belanja
     */
    public function index()
    {
        $cart = $this->getOrCreateCart();

        // Load cart items dengan product relationship
        $cartItems = $cart->items()->with('product')->get();

        // Hitung total harga
        $totalHarga = $cartItems->sum(function ($item) {
            return $item->product->harga * $item->jumlah;
        });

        // Hitung total item
        $totalItem = $cartItems->sum('jumlah');

        return Inertia::render('Cart/Index', [
            'cartItems' => $cartItems,
            'totalHarga' => $totalHarga,
            'totalItem' => $totalItem,
        ]);
    }

    /**
     * Tambah produk ke keranjang
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'jumlah' => 'required|integer|min:1',
        ]);

        $cart = $this->getOrCreateCart();

        // Cek apakah produk sudah ada di keranjang
        $cartItem = $cart->items()->where('product_id', $request->product_id)->first();

        if ($cartItem) {
            // Update jumlah jika sudah ada
            $cartItem->jumlah += $request->jumlah;
            $cartItem->save();
        } else {
            // Tambah item baru
            $cart->items()->create([
                'product_id' => $request->product_id,
                'jumlah' => $request->jumlah,
            ]);
        }

        return redirect()->back()->with('success', 'Produk berhasil ditambahkan ke keranjang');
    }

    /**
     * Update jumlah item di keranjang
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'jumlah' => 'required|integer|min:1',
        ]);

        $cart = $this->getOrCreateCart();
        $cartItem = $cart->items()->findOrFail($id);

        $cartItem->jumlah = $request->jumlah;
        $cartItem->save();

        return redirect()->back()->with('success', 'Jumlah produk berhasil diupdate');
    }

    /**
     * Hapus item dari keranjang
     */
    public function destroy($id)
    {
        $cart = $this->getOrCreateCart();
        $cartItem = $cart->items()->findOrFail($id);
        $cartItem->delete();

        return redirect()->back()->with('success', 'Produk berhasil dihapus dari keranjang');
    }

    /**
     * Get jumlah item di keranjang (untuk badge navbar)
     */
    public function count()
    {
        $cart = $this->getOrCreateCart();
        $count = $cart->items()->sum('jumlah');

        return response()->json(['count' => $count]);
    }
}
