<?php
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    if ($login == null and $password == null){
        echo json_encode([
            "successful" => false,
            "login" => "",
            "data" => ""
        ]);
    } else {
        $file_data = json_decode(file_get_contents("../data/application.json"));
        $temp_user_data = [];
        foreach ($file_data as $element){
            if (property_exists($element, $login)){
                array_push($temp_user_data, $element->$login);
            };    
        };
        echo json_encode([
            "successful" => true,
            "login" => $login,
            "data" => $temp_user_data
        ]);
    };
?>