<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCharacterRequest;
use App\Models\Character;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CharacterController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        return Inertia::render('views/admin/CharacterView', ['options' => ['create', 'list'], 'title' => 'Admin Character']);
    }

    public function create()
    {
        return Inertia::render('admin/character/CharacterForm', ['options' => ['create', 'list'], 'title' => 'Admin Character']);
    }

    public function list()
    {
        return Inertia::render('admin/character/CharacterList', ['options' => ['create', 'list'], 'title' => 'Admin Character']);
    }

    public function getAllCharacters(Request $request)
    {
        try {
            $editorials = Character::orderBy('name')->get(['id', 'name', 'code']);
            return response()->json($editorials);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function store(StoreCharacterRequest $request)
    {
        try {
            $newCharacter = Character::create($request->validated());
            return response()->json($newCharacter, 201);
        } catch (\Throwable $th) {
            dd($th);  
        }
    }
}
