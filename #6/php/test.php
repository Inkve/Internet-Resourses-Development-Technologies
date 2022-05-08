<?php
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    $file_data = json_decode(file_get_contents("../data/users.json"));
    foreach ($file_data as $element){
        if ($element->login == $login){
            if ($element->password == $password){
               $name = $element->name;
               $age = $element->age;
               $mail = $element->mail;
            };
        };
    };
?>