<!-- 21ВП2 Левин Андрей вариант 15 -->
<html>
<head>
    <meta charset="UTF-8">
    <title> ЛБ №6 </title>
    <link href="..\css\styles.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="..\js\jquery-3.6.0.js"> </script>
    <script type="text/javascript" src="..\js\check.js"> </script>
</head>
<body>
    <?php include "#6\php\check_login.php" ?>
    <div class="standart_div"> 
        <h2> Форма заказа книги в онлайн магазине </h2>
        <span> Приветсвуем Вас на странице авторизации! </span>
        <form class="login">
            <span> Ваш логин: </span>
            <input type="text" id="login"> <span id="log_err_login"> </span> 
            <span> Ваш пароль: </span>
            <input type="text" id="password"> <span id="log_err_password"> </span> 
        </form>
        <button  id="login_button"> Войти </button>
    </div>
</body>
</html>