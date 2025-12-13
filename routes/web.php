<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Halaman Welcome / Landing Page
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

// Routes untuk Product
Route::get('/produk', [ProductController::class, 'index'])->name('products.index');
Route::get('/produk/{id}', [ProductController::class, 'show'])->name('products.show');

// Routes untuk Cart
Route::get('/keranjang', [CartController::class, 'index'])->name('cart.index');
Route::post('/keranjang/tambah', [CartController::class, 'store'])->name('cart.store');
Route::patch('/keranjang/update/{id}', [CartController::class, 'update'])->name('cart.update');
Route::delete('/keranjang/hapus/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
Route::get('/keranjang/count', [CartController::class, 'count'])->name('cart.count');
