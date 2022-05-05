<?php
    $data = json_decode(file_get_contents("php://input"));
    $login_error = "косяк в логине";
    $password_error = "косяк в пароле";
    $login = $data->login;
    $password = $data->password;











    
    $errors = array(
        "login_err" => $login_error,
        "password_err" => $password_error
    );
    echo json_encode($errors);
?>