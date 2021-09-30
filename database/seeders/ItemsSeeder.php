<?php

namespace Database\Seeders;

use App\Models\Group;
use App\Models\Item;
use App\Models\Producer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = 2000;
        $chunkSize = 1000;

        Item::query()->delete();

        $groupLeavesIds = Group::query()
            ->pluck('id')
            ->toArray();
        $producers = Producer::query()->get();
        for ($i = 0; $i < $count / $chunkSize; $i++) {
            Item::query()->insert(
                Item::factory()
                ->count($chunkSize)
                ->make()
                ->each(function ($item) use ($groupLeavesIds, $producers) {
                    $item->group_id = Arr::random($groupLeavesIds);
                    $item->producer_id = $producers->random()->id;
                })
                ->toArray()
            );
        }
    }
}
