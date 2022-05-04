<?php
    $data = json_decode(file_get_contents("php://input"));
    echo "Сервер получил следующие данные: $data->login и $data->password";
?>