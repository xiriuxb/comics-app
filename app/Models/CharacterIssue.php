<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CharacterIssue extends Model
{
    use HasFactory;

    protected $fillable = ['character_id', 'issue_id', 'status'];
}
