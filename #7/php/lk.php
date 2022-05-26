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
    if ($login == null and $password == null){
        echo json_encode([
            "successful" => false,
            "login" => "",
            "name" => ""
        ]);
    } else {
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
        echo json_encode([
            "successful" => true,
            "login" => $login,
            "name" =>$name
        ]);
    }
?>