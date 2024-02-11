<?php

namespace App;

class Git {

    public static function pull()
    {
        shell_exec('git pull');
        JsonResponse::success('Successfully pulled the latest changes');
    }


    public static function updateOrigin()
    {
        $origin = Env::get('GIT_ORIGIN');

        shell_exec("git remote set-url origin {$origin}");
        shell_exec("git checkout origin/main -f");
        shell_exec('git pull');

        JsonResponse::success('Successfully updated the origin');
    }

}