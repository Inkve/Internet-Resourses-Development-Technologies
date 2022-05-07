<html>
<head>
    <meta charset="UTF-8">
    <title> ЛБ №6 </title>
    <link href="css\styles.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="js\jquery-3.6.0.js"> </script>
    <script type="text/javascript" src="js\check_login.js"> </script>
</head>
<body>
    <div class="standart_div"> 
        <h2> Форма заказа книги в онлайн магазине </h2>
        <span> Приветсвуем Вас на странице авторизации! </span>
        <form class="login">
            <span> Ваш логин: </span> <span id="log_err_login" class="error"> </span>
            <input type="text" id="login">
            <span> Ваш пароль: </span> <span id="log_err_password" class="error" class="error"> </span> 
            <input type="password" id="password"> 
        </form>
        <button  id="login_button"> Войти </button>
        <span> Нет аккаунта? Тогда <a href="registration.php"> зарегистрируйся! <a> <span>
    </div>
</body>
</html>