<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\Api\ReservationController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('ChekRole:user')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('ChekRole:user')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware('ChekRole:user')->group(function () {
    Route::get('/vehicules', [VehiculeController::class, 'index']);
    Route::get('/vehicules/{vehicule}', [VehiculeController::class, 'show']);
   
});

Route::middleware('ChekRole:commercial')->group(function () {
    Route::get('/reservations', [ReservationController::class, 'index']);
    Route::post('/vehicules', [VehiculeController::class, 'store']);
    Route::put('/vehicules/{vehicule}', [VehiculeController::class, 'update']);
    Route::delete('/vehicules/{vehicule}', [VehiculeController::class, 'destroy']);
    Route::post('/reservations', [ReservationController::class, 'store']);
    Route::get('/reservations/{reservation}', [ReservationController::class, 'show']);
    Route::put('/reservations/{reservation}', [ReservationController::class, 'update']);
    Route::delete('/reservations/{reservation}', [ReservationController::class, 'destroy']);
});

