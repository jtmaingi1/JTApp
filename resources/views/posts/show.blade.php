@extends('layouts.app')

@section('content')
    <a href="/posts" class="btn btn-default">Go Back</a>
    <div class="card">
            <div class="card-header">
                <h1>{{$post->title}}</h1>
                <img style="width:100%" src="/storage/cover_images/{{$post->cover_image}}">

            </div>
    <div class="card-body">
        {!!$post->body!!}
   
    <hr>
    <p class="card-text"><small> Written on {{$post->created_at}} by {{$post->user->name}}</small></p>
  @if(!Auth::guest())
    @if(Auth::user()->id == $post->user_id)
    <p class="card-text"> <a href="/posts/{{$post->id}}/edit" class="btn btn-outline-success float-left">Edit Post</a></p>
    {!!Form::open(['action' => ['PostsController@destroy', $post->id], 'method' =>'POST', 'class' => 'float-right','onsubmit' => 'return confirmDelete()'])!!}
        {{Form::hidden('_method','DELETE')}}
        {{Form::submit('Delete',['class' => 'btn btn-danger'])}}
    {!!Form::close()!!}
    @endif
  @endif
    </div>
    </div>
    <script>
        function confirmDelete(){
        return confirm('Are you sure you want to Delete?');
        }
        </script> 
@endsection
