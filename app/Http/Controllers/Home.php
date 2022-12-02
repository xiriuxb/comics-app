<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Home extends Controller
{
    public function __construct() {
    }

    public function index()
    {
        $listado = json_decode(file_get_contents(storage_path() . "/app/db.json"), true);
        return Inertia::render('ListadoComponent',['listado'=>$listado]);
    }
}
