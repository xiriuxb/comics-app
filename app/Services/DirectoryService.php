<?php
namespace App\Services;

class DirectoryService
{
    public function createSerieDirectory($editorial, $serie)
    {
        $path = storage_path("app/comics/{$editorial}/{$serie}");
        if (!file_exists($path)) {
            mkdir($path, 0744, true);
        }
        return $path;
    }
}
