<?php
    $data = json_decode(file_get_contents("php://input"));
    $login_error = "Такой пользователь не зарегистрирован!";
    $password_error = "";
    $login = $data->login;
    $password = $data->password;
    $successful = false;
    if ($login == null){
        $login_error = "Поле Логин не может быть пустым!";
    };
    $file_data = json_decode(file_get_contents("../data/users.json"));
    foreach ($file_data as $element){
        if ($element->login == $login){
            if ($element->password == $password){
                $login_error = "";
                $successful = true;
                break;
            } else {
                $login_error = "";
                $password_error = "Неправильный пароль!";
                $successful = false;
                break;
            };
        };
    };
    if ($successful){
        session_start();
        $_SESSION['login'] = $login;
        $_SESSION['password'] = $password;
    }
    $errors = array(
        "login_err" => $login_error,
        "password_err" => $password_error,
        "successful" => $successful
    );
    echo json_encode($errors);
?>