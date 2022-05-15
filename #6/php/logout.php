<?php
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    if ($login == null and $password == null){
        echo false;
    } else {
        session_start();
        session_reset();
        session_destroy();
        echo true;
    };
?>