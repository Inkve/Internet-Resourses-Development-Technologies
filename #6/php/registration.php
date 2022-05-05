<html>
<head>
    <meta charset="UTF-8">
    <title> ЛБ №6 </title>
    <link href="..\css\styles.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="..\js\jquery-3.6.0.js"> </script>
    <script type="text/javascript" src="..\js\check_registration.js"> </script>
</head>
<body>
    <?php include "#6\php\check_registration.php" ?>
    <div class="standart_div"> 
        <h2> Форма заказа книги в онлайн магазине </h2>
        <span> Приветсвуем Вас на странице регистрации! </span>
        <form class="registration">
            <span> Вашe имя: </span> <span id="reg_err_name"> </span> 
            <input type="text" id="name"> 
            <span> Ваш возраст: </span> <span id="reg_err_age"> </span> 
            <input type="text" id="age"> 
            <span> Ваша почта: </span> <span id="reg_err_mail"> </span> 
            <input type="mail" id="mail">  <span id="reg_err_login"> </span> 
            <span> Ваш будущий логин: </span>
            <input type="text" id="login"> 
            <span> Ваш будущий пароль: </span> <span id="reg_err_password1"> </span> 
            <input type="password" id="password1"> 
            <span> Повторение пароля: </span> <span id="reg_err_password2"> </span> 
            <input type="password" id="password1"> 
        </form>
        <button  id="reg_button"> Зарегирироваться </button>
    </div>
</body>
</html>