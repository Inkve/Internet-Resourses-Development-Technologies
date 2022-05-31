<?php
    $level_number = null;
    $current_time = null;
    $time_on_question = null;
    $question = null;
    $right_answer = null;
    $answers = null;
    $from_begin = true;
    $game_continue = false;
    $wait = false;
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
        $_SESSION["level"] = $level_number;
        $_SESSION["current_time"] = $current_time;
        $_SESSION["time_on_question"] = $time_on_question;
        $_SESSION["question"] = $question;
        $_SESSION["right_answer"] = $right_answer;
        $_SESSION["answers"] = $answers;
        $_SESSION["from_begin"] = $from_begin;
        $_SESSION["game_continue"] = $game_continue;
        $_SESSION["wait"] = $wait;
        echo json_encode([
            "successful" => true,
            "login" => $login,
            "name" =>$name
        ]);
    }
?>