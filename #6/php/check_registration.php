<?php
    $data = json_decode(file_get_contents("php://input"));
    $name_error = "косяк в имени";
    $age_error = "косяк в возрасте";
    $mail_error = "косяк с почтой";
    $login_error = "косяк с логином";
    $password1_error = "косяк с паролем1";
    $password2_error = "косяк с паролем2";
    $name = $data->name;
    $age = $adata->age;
    $mail = $data->mail;
    $login = $data->login;
    $password1 = $data->password1;
    $password2 = $data->password2;









    $errors = array(
        "name_err" => $name_error,
        "age_err" => $age_error,
        "mail_err" => $mail_error,
        "login_err" => $login_error,
        "password1_err" => $password1_error,
        "password2_err" => $password2_error
    );
    echo json_encode($errors);
?>