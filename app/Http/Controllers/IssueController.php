<?php
namespace App\Http\Controllers;
use App\Enums\SerieIssueTypes;
use App\Http\Requests\Issue\StoreIssueRequest;
use App\Models\Editorial;
use App\Models\Issue;
use App\Models\SerieIssue;
use Inertia\Inertia;
use Request;

class IssueController
{

    public function index()
    {
        return Inertia::render('views/admin/IssueView', ['options' => ['create'], 'title' => 'Issue Admin']);
    }

    public function createView()
    {
        $data = Editorial::all(['id', 'name', 'code']);
        $issueTypes = [SerieIssueTypes::Main->value, SerieIssueTypes::Other->value, SerieIssueTypes::TieIn->value];
        return Inertia::render(
            'admin/issue/IssueForm',
            [
                'options' => ['create'],
                'title' => 'Issue Admin',
                'editorials' => $data,
                'issue_types' => $issueTypes
            ]
        );
    }

    public function store(StoreIssueRequest $request)
    {
        try {
            $validated = $request->validated();
            $serieIssue = SerieIssue::where('serie_id', '=', $validated['serie_id'])->where('number', '=', $validated['number'])->count();
            throw_if($serieIssue != 0, 'Serie already has that issue');
            $newIssue = Issue::create($validated);
            $newSerieIssue = SerieIssue::create(
                [
                    'serie_id'=>$validated['serie_id'],
                    'issue_id'=>$newIssue['id'],
                    'number'=>$validated['number'],
                    'type'=>$validated['type']
                ]
            );
            return response()->json($newIssue, 201);
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public function getIssue(Request $request)
    {
        return Issue::where('id', 1)->get();
    }
}