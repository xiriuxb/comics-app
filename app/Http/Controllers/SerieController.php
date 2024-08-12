<?php
namespace App\Http\Controllers;

use App\Enums\SerieStatusTypes;
use App\Http\Requests\StoreSerieRequest;
use App\Models\Editorial;
use App\Models\Serie;
use Inertia\Inertia;

class SerieController extends Controller
{
    public function index()
    {
        return Inertia::render('views/admin/SerieView', ['options' => ['create']]);
    }

    public function create()
    {
        $issue_status = [SerieStatusTypes::Canceled->value, SerieStatusTypes::Finished->value, SerieStatusTypes::Open->value];
        $data = Editorial::all(['id', 'name', 'code']);
        return Inertia::render(
            'admin/serie/SerieForm', 
            [
                'options' => ['create'], 
                'title' => 'Admin Serie', 
                'editorials' => $data,
                'statuses' => $issue_status
            ]
        );
    }

    public function store(StoreSerieRequest $request) {
        try {
            $newSerie = Serie::create($request->validated());
            return response()->json($newSerie, 201);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

}