<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'session_id',
    ];

    // Relasi ke CartItem
    public function items()
    {
        return $this->hasMany(CartItem::class);
    }

    // Helper method untuk menghitung total harga
    public function totalHarga()
    {
        return $this->items->sum(function ($item) {
            return $item->product->harga * $item->jumlah;
        });
    }

    // Helper method untuk menghitung total item
    public function totalItem()
    {
        return $this->items->sum('jumlah');
    }
}
