<?php
    $login = '';
    $password = '';
    session_start();
    if (isset($_SESSION['login'])){
        $login = $_SESSION['login'];
        $password = $_SESSION['password'];
    } else {
        session_destroy();
    };
?>

<?php 
    echo
        json_encode([
            "login_value" => "$login",
            "password_value" => "$password"
        ]);
?>