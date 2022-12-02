<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;

class Login extends Controller
{
    public function index()
    {
        return Inertia::render('LoginView');
    }

    public function login(Request $req){
        $pass = "\$2y$10\$MxKMkAayJlDiu4iTvodYMO1yHowI/C8j1RkymuRMXgPXs4Hzm65eu";
        try{
            if(Hash::check($req->password, $pass)){
                $fact = JWTFactory::sub('userqw1234')->aud('permisos')->permisos(['Leer', 'Escreibir', 'Buscar'])->make();
                $tok = JWTAuth::encode($fact);
                return response()->json(['token'=>$tok->get()]);
            } else {
                return response()->json($data=['errors'=>[]], $status=401);
            }
        } catch (JWTException $e){
            dd($e->getMessage());
        }

    }

    public function logout(){
        try{
            JWTAuth::parseToken()->invalidate();
        } catch(TokenExpiredException $e) {
            return redirect('login');
        } catch (TokenInvalidException $e) {
            return redirect('login');
        } catch (JWTException $e) {
            return redirect('login');
        }
    }
}
