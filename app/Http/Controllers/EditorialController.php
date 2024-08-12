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
        try {
            $editorials = Editorial::all(['id', 'code', 'name']);
            return response()->json($editorials);
        } catch (\Throwable $th) {
            dd($th);
        }
    }
}