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
    $file_data = json_decode(file_get_contents("data\users.json"));

    foreach ($file_data as $element){
        if ($element->login == $login){
            $login_error = "Пользователь с таким логином уже существует!";
            $successful = false;
            break;
        };
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
        file_put_contents("data\users.json", json_encode($file_data));
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