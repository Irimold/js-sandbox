<?php

namespace App;

class Cors {

    public static function check() 
    {
        if (empty($_SERVER['HTTP_ORIGIN'])) {
            JsonResponse::unauthorized(['error' => 'No http origin']);
        }

        $origin = $_SERVER['HTTP_ORIGIN'];

        $allowedOrigins = Env::deserialize('ALLOW_ORIGINS');
        if (!in_array($origin, $allowedOrigins)) {
            JsonResponse::unauthorized(['error' => 'origin invalid', 'allowed origin' => $allowedOrigins]);
        }

        header("Access-Control-Allow-Origin: {$origin}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            $allowedMethods = Env::get('ALLOW_METHODS');
        
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
                header("Access-Control-Allow-Methods: {$allowedMethods}");
            }
            
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
            }
        
            die;
        }
    }

}
