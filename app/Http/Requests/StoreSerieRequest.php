<?php
namespace App\Http\Requests;

use App\Enums\SerieStatusTypes;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSerieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:series,name|string|max:128',
            'code' => 'required|unique:series,code|string|max:128',
            'editorial_id' => 'required|numeric|exists:editorials,id',
            'status' => ['required', Rule::enum(SerieStatusTypes::class)],
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date'
        ];
    }
}