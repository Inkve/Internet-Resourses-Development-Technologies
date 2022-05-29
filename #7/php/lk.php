<?php
    $file_data = json_decode(file_get_contents("../data/temp_data.json"));
    $level_number = null;
    $current_time = null;
    $time_on_question = 10;
    $question = null;
    $right_answer = null;
    $answers = null;
    $from_begin = true;
    $game_continue = false;
    $wait = false;
    $data_2_file = [
        "level" => $level_number,
        "current_time" => $current_time,
        "time_on_question" => $time_on_question,
        "question" => $question,
        "right_answer" => $right_answer,
        "answers" => $answers,
        "from_begin" => $from_begin,
        "game_continue" => $game_continue,
        "wait" => $wait
    ];
    file_put_contents("../data/temp_data.json", json_encode(array($data_2_file)));

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