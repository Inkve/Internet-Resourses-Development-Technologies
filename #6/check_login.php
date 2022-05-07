<?php
    $data = json_decode(file_get_contents("php://input"));
    $login_error = "";
    $password_error = "";
    $login = $data->login;
    $password = $data->password;
    $successful = true;

    $file_data = json_decode(file_get_contents("data\users.json"));

    foreach ($file_data as $element){
        if ($element->login == $login){
            if ($element->password == $password){
                $login_error = "";
                $successful = true;
                break;
            } else {
                $password_error = "Неправильный пароль!";
                $successful = false;
                break;
            };
        } else {
            $login_error = "Такой пользователь не зарегистрирован!";
            $successful = false;
        };
    };
    








    
    $errors = array(
        "login_err" => $login_error,
        "password_err" => $password_error
    );
    echo json_encode($errors);
?>