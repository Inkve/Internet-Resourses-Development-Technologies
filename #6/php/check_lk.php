<?php
    $data = json_decode(file_get_contents("php://input"));
    $successful = True;
    $file_data = json_decode(file_get_contents("../data/application.json"));
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    $author_err = check_author($data);
    if ($author_err != null){
        $successful = false;
    };
    $naming_err = check_naming($data);
    if ($naming_err != null){
        $successful = false;
    };
    $count_err = check_count($data);
    if ($count_err != null){
        $successful = false;
    };
    $tel_err = check_tel($data);
    if ($tel_err != null){
        $successful = false;
    };
    $index_err = check_index($data);
    if ($index_err != null){
        $successful = false;
    };
    $adress_err = check_adress($data);
    if ($adress_err != null){
        $successful = false;
    };
    $comment_err = check_radio($data);
    if ($comment_err != null){
        $successful = false;
    };
    if ($successful){
        $current_data = array(
            "author" => $data->author,
            "naming" => $data->naming,
            "count" => $data->count,
            "tel" => $data->tel,
            "index" => $data->index,
            "adress" => $data->adress,
            "way1" => $data->way1,
            "way2" => $data->way2,
            "comment" => $data->comment
        );
        $user_data = array(
            $login => $current_data
        );
        array_push($file_data, $user_data);
        file_put_contents("../data/application.json", json_encode($file_data));
    };
    $errors = array(
        "author_err" => $author_err,
        "naming_err" => $naming_err,
        "count_err" => $count_err,
        "tel_err" => $tel_err,
        "index_err" => $index_err,
        "adress_err" => $adress_err,
        "comment_err" => $comment_err,
        "successful" => $successful
    );
    echo json_encode($errors);
?>

<?php 
    function check_author($data){
        $author =  $data->author;
        $author_err = "";
        if ($author == null){
            $author_err = "Поля Автор не может быть пустым!";
        };
        return $author_err;
    };
?>

<?php 
    function check_naming($data){
        $naming =  $data->naming;
        $naming_err = "";
        if ($naming == null){
            $naming_err = "Поля Название не может быть пустым!";
        };
        return $naming_err;
    };
?>

<?php 
    function check_count($data){
        $count = $data->count;
        $count_err = "";
        $pattern_count = '/^(?:100|[1-9]\d|[1-9])$/';
        if (!preg_match($pattern_count, $count)){
            $count_err = "В поле Количество допустимы лишь цифры!";
        };
        if ($count == null){
            $count_err = "Поля Количество не может быть пустым!";
        };
        if ($count > 50){
            $count_err = "Слишком много!";
        };
        return $count_err;
    };
?>

<?php 
    function check_tel($data){
        $tel = $data->tel;
        $tel_err = "";
        if ($tel == null){
            $tel_err = "Поля Номер не может быть пустым!";
        };
        $pattern_tel = '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/';
        if (!preg_match($pattern_tel, $tel)){
            $tel_err = "Некорректный номер!";
        };
        return $tel_err;
    };
?>

<?php 
    function check_index($data){
        $index = $data->index;
        $index_err = "";
        if ($index == null){
            $index_err = "Поля Индекс не может быть пустым!";
        };
        $pattern_index = '/^(\d{6})$/';
        if (!preg_match($pattern_index, $index)){
            $index_err = "Некорректный индекс!";
        };
        return $index_err;
    };
?>

<?php 
    function check_adress($data){
        $adress = $data->adress;
        $adress_err = "";
        if ($adress == null){
            $adress_err = "Поля Адрес не может быть пустым!";
        };
        return $adress_err;
    };
?>

<?php 
    function check_radio($data){
        $way1 = $data->way1;
        $way2 = $data->way2;
        $way_err = "";
        if ($way1 == false and $way2 == false){
            $way_err = "Выберите способ доставки!";
        };
        return $way_err;
    };
?>