<?php

namespace Database\Factories;

use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\Factory;

class ItemFactory extends Factory
{
    protected $model = Item::class;

    public function definition(): array
    {
        return [
            'name' => rtrim($this->faker->sentence(4), '.'),
            'group_id' => 0,
            'producer_id' => 0,
            'description' => $this->faker->text(),
            'marking' => $this->faker->unique()->numberBetween(100000000, 999999999),
            'price' => $this->faker->numberBetween(10, 100000),
            'image' => $this->faker->imageUrl,
            'color' => $this->faker->safeHexColor,
        ];
    }
}
