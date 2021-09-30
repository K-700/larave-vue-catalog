<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class GroupsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Group::query()->delete();

        Group::query()->insert([
            ['name' => 'Видеокарты'],
            ['name' => 'Процессоры'],
        ]);
    }
}
