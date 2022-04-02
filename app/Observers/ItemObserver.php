<?php

namespace App\Observers;

use App\Models\Item;
use App\Services\IndexItemService;

class ItemObserver
{
    protected IndexItemService $indexItemService;

    public function __construct(IndexItemService $indexItemService)
    {
        $this->indexItemService = $indexItemService;
    }

    public function saved(Item $item)
    {
        $this->indexItemService->store($item);
    }

    public function deleted(Item $item)
    {
        $this->indexItemService->delete($item);
    }
}
