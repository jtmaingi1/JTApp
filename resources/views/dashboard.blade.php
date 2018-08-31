@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <a href="/posts/create" class="btn btn-primary">Create Post</a>
                    You are logged in!
                    <h3>Your blog Posts</h3>
                    @if(count($posts) > 0)
                    <table class="table table-striped">
                        @foreach($posts as $post)
                        <tr>
                            <td><a href="/posts/{{$post->id}}">{{$post->title}} </a></td>
                            <td><a href="/posts/{{$post->id}}/edit" class="btn btn-success">EDIT</a></td>
                            <td>  {!!Form::open(['action' => ['PostsController@destroy', $post->id], 'method' =>'POST', 'class' => 'float-right','onsubmit' => 'return confirmDelete()'])!!}
                                    {{Form::hidden('_method','DELETE')}}
                                    {{Form::submit('Delete',['class' => 'btn btn-danger'])}}
                                {!!Form::close()!!}
                            </td>
                        </tr>
                        @endforeach
                    </table>
                    @else
                    <p> You have no posts </p>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    function confirmDelete(){
    return confirm('Are you sure you want to Delete?');
    }
    </script> 
@endsection
