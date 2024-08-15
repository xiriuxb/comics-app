<?php
namespace App\Http\Requests\Issue;
use App\Enums\SerieIssueTypes;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreIssueRequest extends FormRequest {
    public function authorize () {
        return true;
    }

    public function rules()
    {
        return [
            'serie_id' => 'required|numeric|max:20|exists:series,id',
            'type'=> ['required', Rule::enum(SerieIssueTypes::class)],
            'number'=> 'required|numeric|max:100|min:0',
            'title'=> 'nullable|string|max:255',
            'release_date' => 'nullable|date',
            'page_count'=>'required|numeric|max:300'
        ];
    }
}

// const issueFormInitialVal = {
//     description: "",
//     cover_image_url: "",
//     isbn: "",
//     lang: "",
//   };