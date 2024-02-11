<?php

require __DIR__."/../vendor/autoload.php";

use App\Cors;
use App\Env;
use App\Git;
use App\JsonResponse;

Env::init(__DIR__.'/..');
Cors::check();

if (empty($_POST['todo'])) {
    JsonResponse::failed('');
}

switch (strtolower($_POST['todo'])) {
    case 'pull':
        Git::pull();
        break;

    case 'update-origin':
        Git::updateOrigin();
        break;
    
    default:
        JsonResponse::notFound();
        break;
}