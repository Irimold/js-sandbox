<?php

namespace App;

use Dotenv\Dotenv;

class Env {

    public static function init()
    {
        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->safeLoad();
    }

    public static function get($key)
    {
        return $_ENV[$key];
    }

    public static function deserialize($key)
    {
        $value = static::get($key);
        return explode(',', $value);
    }

}