<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Tampilkan daftar produk dengan fitur search, filter, sort, dan pagination
     */
    public function index(Request $request)
    {
        $query = Product::query();

        // Search berdasarkan nama produk
        if ($request->filled('search')) {
            $query->where('nama_produk', 'like', '%' . $request->search . '%');
        }

        // Filter berdasarkan kategori
        if ($request->filled('kategori')) {
            $query->where('kategori', $request->kategori);
        }

        // Sort berdasarkan field dan direction
        $sortField = $request->get('sort', 'created_at');
        $sortDirection = $request->get('direction', 'desc');

        // Validasi sort field untuk keamanan
        $allowedSortFields = ['nama_produk', 'harga', 'created_at'];
        if (in_array($sortField, $allowedSortFields)) {
            $query->orderBy($sortField, $sortDirection);
        }

        // Pagination 10 produk per halaman
        $products = $query->paginate(10)->withQueryString();

        // Ambil daftar kategori unik untuk filter dropdown
        $kategoriList = Product::select('kategori')->distinct()->pluck('kategori');

        return Inertia::render('Products/Index', [
            'products' => $products,
            'kategoriList' => $kategoriList,
            'filters' => $request->only(['search', 'kategori', 'sort', 'direction']),
        ]);
    }

    /**
     * Tampilkan detail produk dengan related products
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);

        // Ambil 4 produk terkait dari kategori yang sama, exclude produk saat ini
        $relatedProducts = Product::where('kategori', $product->kategori)
            ->where('id', '!=', $product->id)
            ->inRandomOrder()
            ->limit(4)
            ->get();

        return Inertia::render('Products/Show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}
