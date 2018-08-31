<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    // Create a Method
    public function index(){
        $title = 'Welcome to Mr. JT\'s profile!';
       // return view('pages.index', compact('title'));
       return view('pages.index')->with('title', $title);
    }

    public function about(){
        $title = 'About JTApp';
        return view('pages.about')->with('title', $title);
    }

    public function services(){
        $data = array(
            'title'=>'JT Services',
            'services'=> ['Web Design', 'Programming','SEO']

        );
        return view('pages.services')->with($data);
    }

    public function test(){
        $title = 'About JTApp';
        return view('pages.test')->with('title', $title);
    }
}
