<?php
namespace App\Http\Controllers;

use App\Enums\SerieStatusTypes;
use App\Http\Requests\GetSerieRequest;
use App\Http\Requests\Serie\ShowSerieRequest;
use App\Http\Requests\StoreSerieRequest;
use App\Jobs\CreateSerieDirectoryJob;
use App\Models\Editorial;
use App\Models\Serie;
use Inertia\Inertia;

class SerieController extends Controller
{
    public function indexView()
    {
        return Inertia::render('views/admin/SerieView', ['options' => ['create', 'list', 'view'], 'title' => 'Admin Serie']);
    }

    public function listView()
    {
        $editorials = Editorial::all(['id', 'name', 'code']);
        return Inertia::render(
            'admin/serie/SerieList',
            [
                'options' => ['create', 'list', 'view'],
                'title' => 'Admin Serie',
                'editorials' => $editorials
            ]
        );
    }

    public function createView()
    {
        $issue_status = [SerieStatusTypes::Canceled->value, SerieStatusTypes::Finished->value, SerieStatusTypes::Open->value];
        $data = Editorial::all(['id', 'name', 'code']);
        return Inertia::render(
            'admin/serie/SerieForm',
            [
                'options' => ['create', 'list', 'view'],
                'title' => 'Admin Serie',
                'editorials' => $data,
                'statuses' => $issue_status
            ]
        );
    }

    public function serieView()
    {

    }

    public function store(StoreSerieRequest $request)
    {
        try {
            $newSerie = Serie::create($request->validated());
            $serieData = $newSerie->only(['id', 'code', 'name', 'character_id']);
            try {
                CreateSerieDirectoryJob::dispatch($newSerie->editorial1->code, $newSerie->code);
            } catch (\Throwable $jobError) {
                \Log::error('Error al crear el directorio para la serie: ' . $jobError->getMessage());
            }
            return response()->json($serieData, 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function getSeries(GetSerieRequest $request)
    {
        try {
            $validated = $request->validated();
            $editorial = (int) $validated['editorial_id'];
            return Serie::select(['id', 'name', 'code', 'status', 'editorial_id'])
                ->withCount('issues')
                ->where('editorial_id', '=', $editorial)
                ->orderBy('name')
                ->get();
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function showSerie(ShowSerieRequest $request)
    {
        try {
            $validated = $request->validated();
            $id = (int) $validated['serie_id'];
            $serie = Serie::select(['id', 'name', 'code', 'status', 'editorial_id', 'character_id'])
                ->with(['character:id,name'])
                ->where('id', '=', $id)
                ->first();

            return response()->json($serie);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

}