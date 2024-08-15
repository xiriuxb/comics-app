<?php
namespace App\Http\Requests\Character;
use Illuminate\Foundation\Http\FormRequest;

class ShowCharacterRequest extends FormRequest{
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
            's'=>'nullable|string|max:32'
        ];
    }
}