<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('/hi', function () {
    return '<h1> Hi JT welcome To Laravel</h1>';
});


Route::get('/users/{id}/{name}', function($id, $name) {
    return 'This is user '.$name.' with a user id of: '.$id;

});

*/

Route::get('/', 'PagesController@index');

Route::get('/about', 'PagesController@about');

Route::get('/services', 'PagesController@services');

Route::get('/test', 'PagesController@test');

Route::resource('posts','PostsController');
Auth::routes();

Route::get('/dashboard', 'DashboardController@index');

Route::post('inc/contact','ContactController@savemsg');