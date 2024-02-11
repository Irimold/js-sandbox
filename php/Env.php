<?php

namespace App;

use Dotenv\Dotenv;

class Env {

    public static function init($path = __DIR__)
    {
        $dotenv = Dotenv::createImmutable($path);
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