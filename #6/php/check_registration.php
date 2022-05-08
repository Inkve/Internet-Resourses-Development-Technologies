<?php
    $data = json_decode(file_get_contents("php://input"));
    $successful = True;
    $file_data = json_decode(file_get_contents("../data/users.json"));
    $name_error = check_name($data);
    if ($name_error != ""){
        $successful = false;
    };
    $age_error = check_age($data);
    if ($age_error != ""){
        $successful = false;
    };
    $mail_error = check_mail($data);
    if ($mail_error != ""){
        $successful = false;
    };
    $login_error = check_login($data, $file_data);
    if ($login_error != ""){
        $successful = false;
    };
    $password_ = check_password($data);
    $password1_error = $password_[0];
    if ($password1_error != ""){
        $successful = false;
    };
    $password2_error = $password_[1];
    if ($password2_error != ""){
        $successful = false;
    };
    if ($successful){
        $current_user = array(
            "name" => $data->name,
            "age" => $data->age,
            "mail" => $data->mail,
            "login" => $data->login,
            "password" => $data->password1
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

<?php
function check_name($data){
    $name = $data->name;
    $pattern_name = '/^[а-яА-Я]{1,30}+$/iu';
    if ($name == null){
        return "Поле Имя не может быть пустым!";
    };
    if (!preg_match($pattern_name, $name)){
        return "В поле Имя допустимы лишь буквы кириллицы";
    };
    return '';
};
?>

<?php
function check_age($data){
    $age = $data->age;
    $pattern_age = '/^(?:100|[1-9]\d|[1-9])$/';
    if ($age == null){
        return "Поле Возраст не может быть пустым!";
    };
    if ($age > 100){
        return "Укажите Ваш реальный возраст";
    };
    if (!preg_match($pattern_age, $age)){
        return "В поле Возраст допустимы лишь цифры";
    };
    return '';
};
?>

<?php
function check_mail($data){
    $mail = $data->mail;
    if ($mail == null){
        return "Поле Почта не может быть пустым!";
    };
    if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        return "Некорректная почта!";
    };
    return '';
};
?>

<?php
function check_login($data, $file_data){
    $login = $data->login;
    if ($login == null){
        return "Поле Логин не может быть пустым!";
    };
    if (!preg_match('/^[a-zA-z]{1}[a-zA-Z1-9]{0,20}$/', $login)){
        return 'Логин должен начинаться с буквы!';
    };
    foreach ($file_data as $element){
        if ($element->login == $login){
            return "Пользователь с таким логином уже существует!";
        };
    };
    if (preg_match('/^[a-zA-z]{1}[a-zA-Z1-9]{0,2}$/', $login)){
        return 'Длина Логина как минимум 4 символа!';
    };
    return '';
};
?>

<?php
function check_password($data){
    $password1 = $data->password1;
    $password2 = $data->password2;
    $password2_error = "";
    $pattern_password = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/';
    if ($password1 == null){
        $password1_error = "Поле Пароль не может быть пустым!";
    };
    if (preg_match('/^([a-z]){1,12}$/', $password1)){
        $password1_error = "Добавьте хотя-бы одну заглавную букву и цифру!";
    };
    if (preg_match('/^([A-Z]){1,12}$/', $password1)){
        $password1_error = "Добавьте хотя-бы одну строчную букву и цифру!";
    };
    if (preg_match('/^([1-9]){1,12}$/', $password1)){
        $password1_error = "Добавьте хотя-бы одну строчную и заглавные буквы!";
    };
    if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{1,12}$/', $password1)){
        $password1_error = "Добавьте хотя-бы одну цифру!";
    };
    if (preg_match('/(?=.*[a-z])(?=.*\d)[a-z\d]{1,12}$/', $password1)){
        $password1_error = "Добавьте хотя-бы одну заглавную букву!";
    };
    if (preg_match('/(?=.*[A-Z])(?=.*\d)[A-Z\d]{1,12}$/', $password1)){
        $password1_error = "Добавьте хотя-бы одну строчную букву!";
    };
    if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,5}$/', $password1)){
        $password1_error = "Как минимум 6 символов!";
    };
    if (preg_match($pattern_password, $password1)){
        $password1_error = "";
    };
    if ($password2 == null){
        $password2_error = "Поле Пароль не может быть пустым!";
    };
    if (preg_match('/^([a-z]){1,12}$/', $password2)){
        $password2_error = "Добавьте хотя-бы одну заглавную букву и цифру!";
    };
    if (preg_match('/^([A-Z]){1,12}$/', $password2)){
        $password2_error = "Добавьте хотя-бы одну строчную букву и цифру!";
    };
    if (preg_match('/^([1-9]){1,12}$/', $password2)){
        $password2_error = "Добавьте хотя-бы одну строчную и заглавные буквы!";
    };
    if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{1,12}$/', $password2)){
        $password2_error = "Добавьте хотя-бы одну цифру!";
    };
    if (preg_match('/(?=.*[a-z])(?=.*\d)[a-z\d]{1,12}$/', $password2)){
        $password2_error = "Добавьте хотя-бы одну заглавную букву!";
    };
    if (preg_match('/(?=.*[A-Z])(?=.*\d)[A-Z\d]{1,12}$/', $password2)){
        $password2_error = "Добавьте хотя-бы одну строчную букву!";
    };
    if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,5}$/', $password2)){
        $password2_error = "Как минимум 6 символов!";
    };
    if (preg_match($pattern_password, $password2)){
        $password2_error = "";
    };
    if ($password1 != $password2){
        $password2_error = "Пароли различны!";
    };
    return [$password1_error, $password2_error];
};
?>