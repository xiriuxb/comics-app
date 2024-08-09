<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerieIssue extends Model
{
    use HasFactory;

    protected $fillable = ['serie_id', 'issue_id', 'type'];
}
