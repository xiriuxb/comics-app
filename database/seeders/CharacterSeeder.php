<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $characters = [
            ['name' => 'Iron Man', 'code' => 'iron_man'],
            ['name' => 'Captain America', 'code' => 'captain_america'],
            ['name' => 'Thor', 'code' => 'thor'],
            ['name' => 'Hulk', 'code' => 'hulk'],
            ['name' => 'Black Widow', 'code' => 'black_widow'],
            ['name' => 'Hawkeye', 'code' => 'hawkeye'],
            ['name' => 'Spider-Man', 'code' => 'spider_man'],
            ['name' => 'Doctor Strange', 'code' => 'doctor_strange'],
            ['name' => 'Scarlet Witch', 'code' => 'scarlet_witch'],
            ['name' => 'Vision', 'code' => 'vision'],
            ['name' => 'Black Panther', 'code' => 'black_panther'],
            ['name' => 'Ant-Man', 'code' => 'ant_man'],
            ['name' => 'Wasp', 'code' => 'wasp'],
            ['name' => 'Falcon', 'code' => 'falcon'],
            ['name' => 'Winter Soldier', 'code' => 'winter_soldier'],
            ['name' => 'War Machine', 'code' => 'war_machine'],
            ['name' => 'Quicksilver', 'code' => 'quicksilver'],
            ['name' => 'Nick Fury', 'code' => 'nick_fury'],
            ['name' => 'Maria Hill', 'code' => 'maria_hill'],
            ['name' => 'Loki', 'code' => 'loki'],
            ['name' => 'Thanos', 'code' => 'thanos'],
            ['name' => 'Ultron', 'code' => 'ultron'],
            ['name' => 'Red Skull', 'code' => 'red_skull'],
            ['name' => 'Green Goblin', 'code' => 'green_goblin'],
            ['name' => 'Doctor Octopus', 'code' => 'doctor_octopus'],
            ['name' => 'Sandman', 'code' => 'sandman'],
            ['name' => 'Venom', 'code' => 'venom'],
            ['name' => 'Carnage', 'code' => 'carnage'],
            ['name' => 'Mysterio', 'code' => 'mysterio'],
            ['name' => 'Kingpin', 'code' => 'kingpin'],
            ['name' => 'Electro', 'code' => 'electro'],
            ['name' => 'Vulture', 'code' => 'vulture'],
            ['name' => 'Rhino', 'code' => 'rhino'],
            ['name' => 'Shocker', 'code' => 'shocker'],
            ['name' => 'Scorpion', 'code' => 'scorpion'],
            ['name' => 'Lizard', 'code' => 'lizard'],
            ['name' => 'Kraven the Hunter', 'code' => 'kraven_the_hunter'],
            ['name' => 'Juggernaut', 'code' => 'juggernaut'],
            ['name' => 'Magneto', 'code' => 'magneto'],
            ['name' => 'Mystique', 'code' => 'mystique'],
            ['name' => 'Sabretooth', 'code' => 'sabretooth'],
            ['name' => 'Sentinel', 'code' => 'sentinel'],
            ['name' => 'Apocalypse', 'code' => 'apocalypse'],
            ['name' => 'Dark Phoenix', 'code' => 'dark_phoenix'],
            ['name' => 'Storm', 'code' => 'storm'],
            ['name' => 'Cyclops', 'code' => 'cyclops'],
            ['name' => 'Jean Grey', 'code' => 'jean_grey'],
            ['name' => 'Wolverine', 'code' => 'wolverine'],
            ['name' => 'Professor X', 'code' => 'professor_x'],
            ['name' => 'Beast', 'code' => 'beast'],
            ['name' => 'Gambit', 'code' => 'gambit'],
            ['name' => 'Rogue', 'code' => 'rogue'],
            ['name' => 'Nightcrawler', 'code' => 'nightcrawler'],
            ['name' => 'Colossus', 'code' => 'colossus'],
            ['name' => 'Psylocke', 'code' => 'psylocke'],
            ['name' => 'Iceman', 'code' => 'iceman'],
            ['name' => 'Archangel', 'code' => 'archangel'],
            ['name' => 'Havok', 'code' => 'havok'],
            ['name' => 'Polaris', 'code' => 'polaris'],
            ['name' => 'Shadowcat', 'code' => 'shadowcat'],
            ['name' => 'Dazzler', 'code' => 'dazzler'],
            ['name' => 'Bishop', 'code' => 'bishop'],
            ['name' => 'Cable', 'code' => 'cable'],
            ['name' => 'Deadpool', 'code' => 'deadpool'],
            ['name' => 'Domino', 'code' => 'domino'],
            ['name' => 'Shatterstar', 'code' => 'shatterstar'],
            ['name' => 'Warpath', 'code' => 'warpath'],
            ['name' => 'Fantomex', 'code' => 'fantomex'],
            ['name' => 'X-23', 'code' => 'x_23'],
            ['name' => 'Mister Sinister', 'code' => 'mister_sinister'],
            ['name' => 'Mojo', 'code' => 'mojo'],
            ['name' => 'Spiral', 'code' => 'spiral'],
            ['name' => 'Lady Deathstrike', 'code' => 'lady_deathstrike'],
            ['name' => 'Omega Red', 'code' => 'omega_red'],
            ['name' => 'Sauron', 'code' => 'sauron'],
            ['name' => 'Silver Samurai', 'code' => 'silver_samurai'],
            ['name' => 'Madame Hydra', 'code' => 'madame_hydra'],
            ['name' => 'Baron Zemo', 'code' => 'baron_zemo'],
            ['name' => 'Taskmaster', 'code' => 'taskmaster'],
            ['name' => 'Crossbones', 'code' => 'crossbones'],
            ['name' => 'Ares', 'code' => 'ares'],
            ['name' => 'Sentry', 'code' => 'sentry'],
            ['name' => 'Hyperion', 'code' => 'hyperion'],
            ['name' => 'Blue Marvel', 'code' => 'blue_marvel'],
            ['name' => 'Nova', 'code' => 'nova'],
            ['name' => 'Star-Lord', 'code' => 'star_lord'],
            ['name' => 'Gamora', 'code' => 'gamora'],
            ['name' => 'Drax', 'code' => 'drax'],
            ['name' => 'Rocket Raccoon', 'code' => 'rocket_raccoon'],
            ['name' => 'Groot', 'code' => 'groot'],
            ['name' => 'Adam Warlock', 'code' => 'adam_warlock'],
            ['name' => 'Quasar', 'code' => 'quasar'],
            ['name' => 'Beta Ray Bill', 'code' => 'beta_ray_bill'],
            ['name' => 'Silver Surfer', 'code' => 'silver_surfer'],
        ];

        foreach ($characters as $character) {
            Character::create($character);
        }
    }
}
