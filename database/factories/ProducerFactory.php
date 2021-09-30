<?php

namespace Database\Factories;

use App\Models\Producer;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProducerFactory extends Factory
{
    protected $model = Producer::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
        ];
    }
}
