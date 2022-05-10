<?php
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    if ($login == null and $password == null){
        header('Location: login.php');
    };
    $file_data = json_decode(file_get_contents("../data/application.json"));
    $temp_user_data = [];
    foreach ($file_data as $element){
        if (property_exists($element, $login)){
            array_push($temp_user_data, $element->$login);
        };    
    };
?>

<html>
    <head>
        <meta charset="UTF-8">
        <title> ЛБ №6 </title>
        <link type="text/css" rel="stylesheet" href="../css/styles.css"/>
        <link type="text/css" rel="stylesheet" href="../css/history.css"/>
        <script type="text/javascript" src="../js/jquery-3.6.0.js"> </script>
        <script type="text/javascript" src="../js/history.js"> </script>
    </head>
    <body>
        <header>
            <img src="../images/book.png" id="header">
            <span id="right_login"> 
                Вы зашли под логином: <?php echo $login, "<br>" ?>
                <span class="link" id="right_exit"> Выйти </span>
            </span>
        </header>
        <div class="standart_div"> 
            <h2> 
                Форма заказа книги в онлайн магазине 
            </h2>
            <?php
            if (count($temp_user_data) == 0){
                echo "
                <span> 
                        У Вас еще нет заявок, но оставить ее можно <span class='link' id='his_2_lk'>здесь</span>!
                </span>";
            } else {
                echo "
                <table border='1'>
                    <thead>
                        <tr> 
                            <td> Номер заявки </td>
                            <td> Автор </td>
                            <td> Название </td>
                            <td> Количество </td>
                            <td> Телефон </td>
                            <td> Индекс </td>
                            <td> Адрес </td>
                            <td> Способ доставки </td>
                            <td> Комментарий </td>
                        </tr>
                    </thead>
                    <tbody>";
                        foreach ($temp_user_data as $elements){
                            echo generate_str($elements);
                        };
                    echo "</tbody>
                </table>
                <span> 
                        Оставить еще одну заявку можно <span class='link' id='his_2_lk'>здесь</span>!
                </span>
                ";
            };
        ?>
        </div>
    </body>
</html>


<?php
function generate_str($element){
    $result = "<tr> 
                <td> $element->number </td>
                <td> $element->author </td>
                <td> $element->naming </td>
                <td> $element->count </td>
                <td> $element->tel </td>
                <td> $element->index </td>
                <td> $element->adress </td>";
    if ($element->way1){
        $result .= " <td> Курьер </td>";
    } else {
        $result .= " <td> Почта </td>";
    };
    $result .= " <td> $element->comment </td>
            </tr>";
    return $result;
};
?>
