<?php
    $data = json_decode(file_get_contents("php://input"));
    $successful = True;
    $file_data = json_decode(file_get_contents("../data/application.json"));
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];

    // много обработки ошибок
    $author_err;
    $naming_err;
    $count_err;
    $tel_err;
    $index_err;
    $adress_err;
    $comment_err;







    $author =  $data->author;
    $naming =  $data->naming;
    $count = $data->count;
    $tel = $data->tel;
    $index = $data->index;
    $adress = $data->adress;
    $way1 = $data->way1;
    $way2 = $data->way2;
    $comment = $data->comment;

    if ($successful){
        $current_data = array(
            "author" => $author,
            "naming" => $naming,
            "count" => $count,
            "tel" => $tel,
            "index" => $index,
            "adress" => $adress,
            "way1" => $way1,
            "way2" => $way2,
            "comment" => $comment
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