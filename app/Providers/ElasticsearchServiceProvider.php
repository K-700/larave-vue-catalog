<?php

namespace App\Providers;

use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;
use Illuminate\Support\ServiceProvider;

class ElasticsearchServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(Client::class, function() {
            return ClientBuilder::create()
                ->setHosts(config('services.elasticsearch.hosts'))
                ->build();
        });
    }
}
