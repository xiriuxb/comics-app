<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serie extends Model
{
    use HasFactory;

    protected $fillable = ['editorial_id', 'name', 'code', 'description', 'start_date', 'end_date', 'status', 'character_id'];

    public function issues()
    {
        return $this->hasMany(SerieIssue::class);
    }

    public function editorial()
    {
        return $this->belongsTo(Editorial::class);
    }

    public function character()
    {
        return $this->belongsTo(Character::class);
    }
}
