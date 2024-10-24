<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index(Request $request) {
        $data = [
            [
                "id" => 1,
                "name" => "Simón Bolivar",
                "email" => "simon.bolivar@gmail.com",
            ],
            [
                "id" => 2,
                "name" => "Antonio Jose de Sucre",
                "email" => "sucre@gmail.com",
            ],
            [
                "id" => 3,
                "name" => "Juan Pérez",
                "email" => "juan.perez@gmail.com",
            ]
        ];

        return response()->json($data, 200);
    }
}
