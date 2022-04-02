<?php

namespace App\Services;

use App\Models\Item;
use Elasticsearch\Client;
use JetBrains\PhpStorm\ArrayShape;

class IndexItemService
{
    private Client $elasticsearch;
    private Item $item;

    public array $indexedFields = [
        'id',
        'group_id',
        'producer_id',
        'name',
        'description',
        'marking',
        'price'
    ];

    #[ArrayShape(['index' => "string", 'body' => "array"])]
    protected function getSettings(Item $item): array
    {
        return [
            'index' => $item->getTable(),
            'body' => [
                'settings' => [
                    'analysis' => [
                        "filter" => [
                            "russian_stop" => [
                                "type" => "stop",
                                "stopwords" =>  "_russian_"
                            ],
                            "russian_keywords" => [
                                "type" => "keyword_marker",
                                "keywords" => []
                            ],
                            "russian_stemmer" => [
                                "type" => "stemmer",
                                "language" => "russian"
                            ]
                        ],
                        "analyzer" => [
                            "russian" => [
                                "tokenizer" =>  "standard",
                                "filter" => [
                                    "lowercase",
                                    "russian_stop",
                                    "russian_keywords",
                                    "russian_stemmer"
                                ]
                            ]
                        ]
                    ]
                ],
                "mappings" => [
                    'items' => [
                        "id" => [
                            "type" => "integer",
                        ],
                        "group_id" => [
                            "type" => "integer",
                        ],
                        "producer_id" => [
                            "type" => "integer",
                        ],
                        "name" => [
                            "type" => "string",
                        ],
                        "description" => [
                            "type" => "string",
                        ],
                        "marking" => [
                            "type" => "string",
                        ],
                        "price" => [
                            "type" => "integer",
                        ],
                    ]
                ],
            ]
        ];
    }

    public function __construct(Client $elasticsearch, Item $item)
    {
        $this->elasticsearch = $elasticsearch;
        $this->item = $item;
    }

    public function create(): void
    {
        $this->elasticsearch->indices()->create();
    }

    public function store(Item $item): void
    {
        $this->elasticsearch->index([
            'index' => $item->getTable(),
            'type' => '_doc',
            'id' => $item->getKey(),
            'body' => array_intersect_key(
                $item->attributesToArray(),
                array_flip($this->indexedFields)
            ),
        ]);
    }

    public function delete(Item $item): void
    {
        $this->elasticsearch->delete([
            'index' => $item->getTable(),
            'type' => '_doc',
            'id' => $item->getKey(),
        ]);
    }

    public function deleteAll(): void
    {
        if ($this->elasticsearch
            ->indices()
            ->exists([
                'index' => $this->item->getTable()
            ])
        ) {
            $this->elasticsearch->deleteByQuery([
                'index' => $this->item->getTable(),
                'type' => '_doc',
                'body' => [
                    'query' => [
                        'match_all' => (object)[],
                    ]
                ]
            ]);
        }
    }
}
