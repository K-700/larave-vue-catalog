<?php

namespace App\Console\Commands;

use App\Models\Item;
use App\Services\IndexItemService;
use Illuminate\Console\Command;

class ReindexItems extends Command
{
    /** @var string */
    protected $signature = 'elasticsearch:reindex-items';
    /** @var string */
    protected $description = 'Re-index all items in elasticsearch';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle(IndexItemService $indexItemService): int
    {
        if (!$this->confirm("Do you wish re-index all items?\n", false)) {
            $this->info("Re-indexing has been canceled.\n");
            return 0;
        }

        $indexItemService->deleteAll();

        $this->info("Indexing all items...\n");

        $items = Item::query()
            ->cursor();

        $bar = $this->output->createProgressBar();
        foreach ($bar->iterate($items) as $item) {
            $indexItemService->store($item);
        }

        $this->info("\nAll items were indexed.\n");
        return 0;
    }
}
