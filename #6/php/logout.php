<?php
    session_start();
    session_reset();
    session_destroy();
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title> ЛБ №6 </title>
        <link type="text/css" rel="stylesheet" href="../css/styles.css"/>
        <!-- <link type="text/css" rel="stylesheet" href="css/start_page.css"/> -->
        <script type="text/javascript" src="../js/jquery-3.6.0.js"> </script>
        <!-- <script type="text/javascript" src="js/start_page.js"> </script> -->
    </head>
    <body>
        <header>
            <img src="../images/book.png" id="header">
        </header>
        <div class="standart_div"> 
            <h2> 
                Форма заказа книги в онлайн магазине 
            </h2>
            <span>
                Вы успешно вышли из личного кабинета
                <br>
                Спасибо, что были с нами!
                <br>
                Через несколько секунд Вы попадете на главную страницу
            </span>
        </div>
    </body>
</html>