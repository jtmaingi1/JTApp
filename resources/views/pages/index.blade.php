@extends('layouts.app')

   @section('content')  
   <div class="jumbotron text-center">
    <h1> {{$title}}</h1>
        <p>This is where JT begins to Code with Laravel thanks to "Laravel from Scratch 
        series by Traversy Media Youtube series" </p>
        <p><a class="btn btn-primary btn-lg" href="/login" role="button">Login</a> <a class="btn btn-success btn-lg" href="/register" role="button">Register</a></p>
    </div>

   
      
   @endsection