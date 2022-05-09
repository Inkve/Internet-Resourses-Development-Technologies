<?php
    session_start();
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    if ($login == null and $password == null){
        header('Location: login.php');
    };
    $file_data = json_decode(file_get_contents("../data/users.json"));
    foreach ($file_data as $element){
        if ($element->login == $login){
            if ($element->password == $password){
               $name = $element->name;
               $age = $element->age;
               $mail = $element->mail;
            };
        };
    };
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title> ЛБ №6 </title>
        <link type="text/css" rel="stylesheet" href="../css/styles.css"/>
        <link type="text/css" rel="stylesheet" href="../css/lk.css"/>
        <script type="text/javascript" src="../js/jquery-3.6.0.js"> </script>
        <script type="text/javascript" src="../js/lk.js"> </script>
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
            <div>
                <span> Приветствуем Вас, <?php echo $name ?>, в личном кабинете! </span> 
                <br>
                <span> Здесь Вы можете сделать заявку на доставку книги </span>
            </div>
            <form class="lk">
                <span> Автор книги: </span> <span id="app_err_author" class="error"> </span>
                <input type="text" id="author" placeholder="Автор">
                <span> Название книги: </span> <span id="app_err_naming" class="error"> </span>
                <input type="text" id="naming" placeholder="Название">
                <span> Количество: </span> <span id="app_err_count" class="error"> </span>
                <input type="text" id="count" placeholder="Количество">
                <span> Ваш телефон: </span> <span id="app_err_tel" class="error"> </span>
                <input type="tel" id="tel" placeholder="Телефон">
                <span> Ваш индекс: </span> <span id="app_err_index" class="error"> </span>
                <input type="text" id="index" placeholder="Индекс">
                <span> Ваш адрес: </span> <span id="app_err_adress" class="error"> </span>
                <input type="text" id="adress" placeholder="Адрес">
                <span> Способ доставки: </span> 
                    <label >
                        <input type="radio" name="way" id="way1" value="way1" class="inputs">Курьерская доставка</input>
                    </label>
                    <label >
                        <input type="radio" name="way" id="way2" value="way2" class="inputs">Доставка почтой</input>
                    </label>
                <span> Комментарий: </span> <span id="app_err_comment" class="error"> </span>
                <input type="text" id="comment" placeholder="Комментарий">
            </form>
            <button id="send_app"> Отправить! </button> 
            <span id="message" class="message"> </span>
        </div>
    </body>
</html>