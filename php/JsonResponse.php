<?php

namespace App;

class JsonResponse {

    public static function success($message = '', $data = [])
    {
        static::response(200, true, $message, $data);
    }

    public static function failed($message = "It seems like you are missing something? How about taking a nap? you know, maybe it will help you to remember what's missing")
    {
        static::response(400, false, $message);
    }

    public static function unauthorized($data = [])
    {
        static::response(401, false, 'Whoopsie! Run! The ducks are coming with their bonker!!!', $data);
    }

    public static function notFound()
    {
        static::response(404, false, "Do you know Patrick's Secret Box from Spongebob Squarepants? Yup! You just opened it. Uh? you ... don't know it? Oh no! Am I ... too old?!?!?");
    }

    private static function response($httpCode = 200, $success = true, $message = '', $data = [])
    {
        http_response_code($httpCode);
        echo json_encode([
            'success'   => $success,
            'message'   => $message,
            'data'      => $data,
        ]);
        die;
    }

}