<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Item extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function group(): HasOne
    {
        return $this->hasOne(Group::class);
    }

    public function producer(): HasOne
    {
        return $this->hasOne(Producer::class);
    }
}
