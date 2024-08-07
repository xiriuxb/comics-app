<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Editorial;

class EditorialSeeder extends Seeder
{
    public function run()
    {
        Editorial::create(['name' => 'Marvel', 'code' => 'marvel']);
        Editorial::create(['name' => 'DC', 'code' => 'dc']);
        Editorial::create(['name' => 'Dark Horse', 'code' => 'dark_horse']);
    }
}