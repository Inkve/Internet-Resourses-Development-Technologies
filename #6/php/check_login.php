<?php
    $data = json_decode(file_get_contents("php://input"));
    $login_error = "ffg";
    $password_error = "ffef";
    $login = $data->login;
    $password = $data->password;











    
    $errors = array(
        "login_err" => $login_error,
        "password_err" => $password_error
    );
    echo json_encode($errors);
?>