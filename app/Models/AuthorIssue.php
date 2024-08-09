<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthorIssue extends Model
{
    use HasFactory;

    protected $fillable = ['issue_id', 'author_id'];
}
