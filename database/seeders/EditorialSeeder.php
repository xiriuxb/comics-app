<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Editorial;

class EditorialSeeder extends Seeder
{
    public function run()
    {
        Editorial::create(['name' => 'Marvel', 'code' => 'marvel', 'path'=>'/marvel']);
        Editorial::create(['name' => 'DC', 'code' => 'dc', 'path'=>'/dc']);
        Editorial::create(['name' => 'Dark Horse', 'code' => 'dark_horse', 'path'=>'/dark_horse']);
        Editorial::create(['name' => 'Aspen', 'code' => 'aspen', 'path'=>'/aspen']);
        Editorial::create(['name' => 'Dynamite', 'code' => 'dynamite', 'path'=>'/dynamite']);
        Editorial::create(['name' => 'Independiente', 'code' => 'independiente', 'path'=>'/independant']);
    }
}