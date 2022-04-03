<?php

namespace App\GraphQL\Queries;

use App\Services\ElasticSearchService;
use Illuminate\Container\Container;
use Illuminate\Database\Eloquent\Builder;

class Search
{
    public function __invoke($_, array $args): Builder
    {
        /** @var ElasticSearchService $elasticsearch */
        $elasticsearch = Container::getInstance()->make(ElasticSearchService::class);
        list('searchQuery' => $query) = $args;

        return $elasticsearch
            ->searchInItems($query);
    }
}
