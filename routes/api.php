<?php

use App\Http\Controllers\EditorialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/comics/{superheroe}/{serie}/{issue}/{page?}', [\App\Http\Controllers\ComicController::class,'getComicPage']);

Route::post('/login', [\App\Http\Controllers\Login::class,'login']);

Route::post('/logout', [\App\Http\Controllers\Login::class,'logout']);

Route::get('/editorials',[EditorialController::class, 'getAllEditorials']);