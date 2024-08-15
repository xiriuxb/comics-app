<?php

namespace App\Http\Controllers;

use App\Http\Requests\Character\ShowCharacterRequest;
use App\Http\Requests\StoreCharacterRequest;
use App\Models\Character;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CharacterController extends Controller
{
    public function __construct()
    {
    }

    public function indexView()
    {
        return Inertia::render('views/admin/CharacterView', ['options' => ['create', 'list'], 'title' => 'Admin Character']);
    }

    public function createView()
    {
        return Inertia::render('admin/character/CharacterForm', ['options' => ['create', 'list'], 'title' => 'Admin Character']);
    }

    public function listView()
    {
        return Inertia::render('admin/character/CharacterList', ['options' => ['create', 'list'], 'title' => 'Admin Character']);
    }

    public function getAllCharacters(ShowCharacterRequest $request)
    {
        $validated = $request->validated();
        try {
            $query = Character::orderBy('name')->select(['id', 'name', 'code']);

            if (isset($validated['s']) && !empty($validated['s'])) {
                $query->where('name', 'like', '%' . $validated['s'] . '%');
            }
            $characters = $query->get();
            return response()->json($characters);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function store(StoreCharacterRequest $request)
    {
        try {
            $newCharacter = Character::create($request->validated())->select(['id', 'code', 'character_id']);
            return response()->json($newCharacter, 201);
        } catch (\Throwable $th) {
            dd($th);  
        }
    }
}
