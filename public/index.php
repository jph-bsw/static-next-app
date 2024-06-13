<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
$path = $_SERVER['REQUEST_URI'];

switch ($lang){
    case "de":
        header("Location: ./de/");
        break;
    case "en":
        header("Location: ./en/");
        break;
    case "fr":
        header("Location: ./fr/");
        break;        
    default:
        header("Location: ./en/"); // Sie können hier die Standardsprache festlegen
        break;
}