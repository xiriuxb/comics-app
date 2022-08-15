<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use PhpParser\Node\Stmt\Return_;

class ComicController extends Controller
{
    public function index(Request $request, $superheroe)
    {
        $listado = json_decode(file_get_contents(storage_path() . "/app/series.json"), true);
        return Inertia::render('SeriesComponent', ['series' => $listado[$superheroe], 'superh' => $superheroe]);
    }

    public function indexSerie(Request $request, $superheroe, $serie)
    {
        $franquicia = $this->getFranquicia($superheroe);
        $listado = Storage::allDirectories('comics/' . $superheroe . '/' . $serie);
        $issues = array_map(function ($item) use ($superheroe, $serie) {
            return ['number' => str_replace("comics/" . $superheroe . "/" . $serie, "", $item), 'path' => $item];
        }, $listado);
        sort($issues);
        return Inertia::render('SerieComponent', ['issues' => $issues, 'franquicia' => $franquicia,]);
    }

    public function showComicPage(Request $request, $superheroe, $serie, $issue, $page = 0)
    {

        $franquicia = $this->getFranquicia($superheroe);
        $seriejson = $this->getSerie($serie, $superheroe);
        $url = '/comics/' . $superheroe . '/' . $serie . '/';
        $props = [
            'url' => '',
            'prev_url' => '',
            'next_url' => '',
            'currentPage' => $page,
            'currentIssue' => $issue,
            'franquicia' => $franquicia,
            'serie' => $seriejson,
            'prev_issue' => '#',
            'next_issue' => '#'
        ];
        $issues = Storage::allDirectories('comics/' . $superheroe . '/' . $serie);
        if (intval($issue) < $seriejson['inicia']) {
            $url = $url . $seriejson['inicia'] . '/';
            return redirect($url);
        } elseif (intval($issue)==$seriejson['inicia']){
            $props['next_issue']=$url.($issue + 1);
        } elseif (intval($issue)==sizeof($issues)){
            $props['prev_issue']=$url.($issue - 1);
        } else {
            $props['next_issue']=$url.($issue + 1);
            $props['prev_issue']=$url.($issue - 1);
        }
        $page = intval($page);
        $pages = Storage::allFiles('comics/' . $superheroe . '/' . $serie . '/' . $issue);
        
        if (sizeof($pages) <= $page and sizeof($issues) >= $issue) {
            $issue = intval($issue);
            $props['url']=$url . $issue . '/' . $page;
            $props['prev_url']=$url . $issue . '/' . $page - 1;
            $props['next_url']=$url . ($issue + 1) . '/0';
        }
        elseif($page == 0) {
            $url = $url . $issue . '/';
            $props['url'] = $url . $page;
            $props['prev_url'] = '#';
            $props['next_url'] = $url . $page + 1;
        } else{
            $url = $url . $issue . '/';
            $props['url'] = $url . $page;
            $props['prev_url'] = $url . $page - 1;
            $props['next_url'] = $url . $page + 1;
        }
        return Inertia::render('PageComponent', $props);
    }

    public function getComicPage(Request $request, $superheroe, $serie, $issue, $page = 0)
    {
        $pages = Storage::allFiles('comics/' . $superheroe . '/' . $serie . '/' . $issue);
        try {
            $pageIm = $pages[$page];
        } catch (\Throwable $th) {
            return response()->json(['error' => 'File does not exist'], 404);
        }

        $file = File::get(storage_path('app/') . $pageIm);

        return response($file)->header('Content-Type', 'image');
    }

    private function getFranquicia($franquicia_path)
    {
        $listadoFranquicias = json_decode(file_get_contents(storage_path() . "/app/db.json"), true);
        $fil = array_filter($listadoFranquicias, function ($franquicia) use ($franquicia_path) {
            return $franquicia['path'] == $franquicia_path;
        });
        return $fil[array_key_first($fil)];
    }

    private function getSerie($serie_path, $superheroe)
    {
        $listadoSeries = json_decode(file_get_contents(storage_path() . "/app/series.json"), true);
        $fil = array_filter($listadoSeries[$superheroe], function ($serie) use ($serie_path) {
            return $serie['path'] == $serie_path;
        });
        return $fil[array_key_first($fil)];
    }
}
