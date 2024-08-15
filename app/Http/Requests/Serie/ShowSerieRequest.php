<?php
namespace App\Http\Requests\Serie;

use Illuminate\Foundation\Http\FormRequest;


class ShowSerieRequest extends FormRequest
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
            'serie_id' => 'required|numeric|max:20|exists:series,id'
        ];
    }

    public function prepareForValidation()
    {
        $this->merge([
            'serie_id' => $this->route('serie_id'),
        ]);
    }
}
