<?php
session_start();
$login = "";
$password = "";
if (array_key_exists('login',  $_SESSION)){
    $login = $_SESSION['login'];
};
if (array_key_exists('password',  $_SESSION)){
    $password = $_SESSION['password'];
};
$file_datas = json_decode(file_get_contents("../data/statictics.json"));
echo json_encode([
    "all" => $file_datas,
    "login" => $login
]);
?>