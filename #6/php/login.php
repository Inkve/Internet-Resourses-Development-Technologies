<?php
    $login = '';
    $password = '';
    session_start();
    if (isset($_SESSION['login'])){
        $login = $_SESSION['login'];
        $password = $_SESSION['password'];
    } else {
        session_destroy();
    };
?>

<html>
    <head>
        <meta charset="UTF-8">
        <title> ЛБ №6 </title>
        <link type="text/css" rel="stylesheet" href="../css/styles.css"/>
        <link type="text/css" rel="stylesheet" href="../css/login.css"/>
        <script type="text/javascript" src="../js/jquery-3.6.0.js"> </script>
        <script type="text/javascript" src="../js/check_login.js"> </script>
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
                Приветствуем Вас на странице авторизации! 
            </span>
            <form class="login">
                <span> Ваш логин: </span> <span id="log_err_login" class="error"> </span>
                <?php echo "<input type='text' id='login' placeholder='Логин' value=$login>"?>
                <span> Ваш пароль: </span> <span id="log_err_password" class="error" class="error"> </span> 
                <?php echo "<input type='password' id='password' placeholder='Пароль' value=$password>"?>
            </form>
            <button  id="login_button"> 
                Войти 
            </button>
            <span> 
                Нет аккаунта? Тогда <span id="log_2_reg" class="link">зарегистрируйся!</span>
            </span>
            <span id="message" class="message"> </span>
        </div>
    </body>
</html>