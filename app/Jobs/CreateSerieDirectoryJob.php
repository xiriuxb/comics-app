<?php

namespace App\Jobs;

use App\Services\DirectoryService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateSerieDirectoryJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $editorial;
    protected $serie;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($editorial, $serie)
    {
        $this->editorial = $editorial;
        $this->serie = $serie;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $directoryService = app(DirectoryService::class);
        $directoryService->createSerieDirectory($this->editorial, $this->serie);
    }
}
