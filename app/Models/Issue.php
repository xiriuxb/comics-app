<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'title', 'description', 'release_date', 'page_count', 'cover_img_url', 'isbn', 'lang'];
}
