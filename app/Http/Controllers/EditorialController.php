<?php
namespace App\Http\Controllers;

use App\Models\Editorial;
use Illuminate\Http\Request;

class EditorialController extends Controller
{
    public function __construct()
    {
    }
    public function getAllEditorials(Request $request)
    {
        $editorials = Editorial::all(['id', 'code', 'name', 'description']);
        return response()->json($editorials);
    }
}