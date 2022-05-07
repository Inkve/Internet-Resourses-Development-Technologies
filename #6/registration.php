<html>
<head>
    <meta charset="UTF-8">
    <title> ЛБ №6 </title>
    <link href="css\styles.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="js\jquery-3.6.0.js"> </script>
    <script type="text/javascript" src="js\check_registration.js"> </script>
</head>
<body>
    <div class="standart_div"> 
        <h2> Форма заказа книги в онлайн магазине </h2>
        <span> Приветствуем Вас на странице регистрации! </span>
        <span id="message" class="message"> </span>
        <form class="registration">
            <span> Вашe имя: </span> <span id="reg_err_name" class="error"> </span> 
            <input type="text" id="name"> 
            <span> Ваш возраст: </span> <span id="reg_err_age" class="error"> </span> 
            <input type="text" id="age"> 
            <span> Ваша почта: </span> <span id="reg_err_mail"  class="error"> </span> 
            <input type="mail" id="mail">  <span id="reg_err_login" class="error"> </span> 
            <span> Ваш будущий логин: </span>
            <input type="text" id="login"> 
            <span> Ваш будущий пароль: </span> <span id="reg_err_password1" class="error"> </span> 
            <input type="password" id="password1"> 
            <span> Повторение пароля: </span> <span id="reg_err_password2" class="error"> </span> 
            <input type="password" id="password2"> 
        </form>
        <button  id="reg_button"> Зарегирироваться </button>
        <span> Уже есть аккаунт? Тогда <a href="login.php"> зайди </a> в него! <span>
    </div>
</body>
</html>