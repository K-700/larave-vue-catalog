<?php

namespace App\Services;

use App\Models\Item;
use Elasticsearch\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class ElasticSearchService
{
    private Client $elasticsearch;
    private Item $item;

    public function __construct(Client $elasticsearch, Item $item)
    {
        $this->elasticsearch = $elasticsearch;
        $this->item = $item;
    }

    public function searchInItems(string $query): Builder
    {
        $items = $this->elasticsearch->search([
            'index' => $this->item->getTable(),
            'type' => '_doc',
            'body' => [
                'size' => 1000,
                'query' => [
                    'multi_match' => [
                        'fields' => ['name', 'marking', 'description'],
                        'query' => $query,
                        'fuzziness' => 'AUTO',
                    ]
                ]
            ]
        ]);

        $ids = Arr::pluck($items['hits']['hits'], '_id');

        return Item::query()
            ->whereIn('id', $ids)
            ->orderByRaw('FIELD(id, ' . implode(',', $ids) . ')');
    }
}
