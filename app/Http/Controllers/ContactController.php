<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class ContactController extends Controller
{
    //
    public function savemsg(Request $request){
        $this->validate($request, [
            'name' => 'required',
            'mail' => 'required',
            'message' => 'required'
        ]);

        return 123;

    }
}
