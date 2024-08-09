<?php

namespace Database\Seeders;

use App\Models\AuthorType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AuthorType::create(['name'=>'Escritor']);
        AuthorType::create(['name'=>'Dibujante']);
        AuthorType::create(['name'=>'Entintador']);
        AuthorType::create(['name'=>'Traductor']);
        AuthorType::create(['name'=>'Maquetador']);
        AuthorType::create(['name'=>'Tradumaquetador']);
    }
}
