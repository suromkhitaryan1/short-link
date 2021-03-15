<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShortLinkStore extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'link' => 'required|max:255|url',
        ];
    }
    public function messages()
    {
        return [
            'link.required' => "Required URL.",
            'link.url' => "Maximum file size to upload is 10MB ",
        ];
    }
}
