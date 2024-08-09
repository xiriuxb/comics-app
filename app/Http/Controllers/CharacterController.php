<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCharacterRequest;
use App\Models\Character;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    public function __construct()
    {}
    
    public function getAllCharacters(Request $request)
    {
        $editorials = Character::all(['id', 'name', 'code']);
        return response()->json($editorials);
    }

    public function store(StoreCharacterRequest $request){
        return response()->json(['data'=>'ok']);
        // $newCharacter = Character::create($request->validated());
        // return response()->json($newCharacter, 201);
    }
}
