<?php

namespace Database\Factories;

use App\Models\Group;
use Illuminate\Database\Eloquent\Factories\Factory;

class GroupFactory extends Factory
{
    protected $model = Group::class;

    public function definition(): array
    {
        return [
            'name' => rtrim($this->faker->sentence(2), '.'),
            'parent_id' => 0,
        ];
    }
}
