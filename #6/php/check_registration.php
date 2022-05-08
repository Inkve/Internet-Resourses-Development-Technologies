<?php
    $data = json_decode(file_get_contents("php://input"));
    $name_error = "";
    $age_error = "";
    $mail_error = "";
    $login_error = "";
    $password1_error = "";
    $password2_error = "";
    $name = $data->name;
    $age = $data->age;
    $mail = $data->mail;
    $login = $data->login;
    $password1 = $data->password1;
    $password2 = $data->password2;
    $successful = True;
    $file_data = json_decode(file_get_contents("../data/users.json"));
    
    if ($name == null){
        $name_error = "Поле Имя не может быть пустым!";
        $successful = false;
    };
    if ($age == null){
        $age_error = "Поле Возраст не может быть пустым!";
        $successful = false;
    };
    if ($mail == null){
        $mail_error = "Поле Почта не может быть пустым!";
        $successful = false;
    };
    if ($login == null){
        $login_error = "Поле Логин не может быть пустым!";
        $successful = false;
    };
    foreach ($file_data as $element){
        if ($element->login == $login){
            $login_error = "Пользователь с таким логином уже существует!";
            $successful = false;
        };
    };
    if ($password1 == null){
        $password1_error = "Поле Пароль не может быть пустым!";
        $successful = false;
    };
    if ($password2 == null){
        $password2_error = "Поле Повторение пароля не может быть пустым!";
        $successful = false;
    };
    if ($password1 != $password2){
        $password2_error = "Пароли различны!";
        $successful = false;
    };



    if ($successful){
        $current_user = array(
            "name" => $name,
            "age" => $age,
            "mail" => $mail,
            "login" => $login,
            "password" => $password1
        );
        array_push($file_data, $current_user);
        file_put_contents("../data/users.json", json_encode($file_data));
    };
    $errors = array(
        "name_err" => $name_error,
        "age_err" => $age_error,
        "mail_err" => $mail_error,
        "login_err" => $login_error,
        "password1_err" => $password1_error,
        "password2_err" => $password2_error,
        "successful" => $successful
    );
    echo json_encode($errors);
?>