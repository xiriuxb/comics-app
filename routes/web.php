<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

Route::get('/', [\App\Http\Controllers\Home::class,'index']);

Route::get('/comics/{superheroe}', [\App\Http\Controllers\ComicController::class,'index']);

Route::get('/comics/{superheroe}/{serie}', [\App\Http\Controllers\ComicController::class,'indexSerie']);

Route::get('/comics/{superheroe}/{serie}/{issue}/{page?}', [\App\Http\Controllers\ComicController::class,'showComicPage']);

Route::get('/login', [\App\Http\Controllers\Login::class,'index']);
