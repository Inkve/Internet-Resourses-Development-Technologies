<html>
    <head>
        <meta charset="UTF-8">
        <title> ЛБ №6 </title>
        <link type="text/css" rel="stylesheet" href="../css/styles.css"/>
        <link type="text/css" rel="stylesheet" href="../css/registration.css"/>
        <script type="text/javascript" src="..\js\jquery-3.6.0.js"> </script>
        <script type="text/javascript" src="..\js\check_registration.js"> </script>
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
                Приветствуем Вас на странице регистрации! 
            </span>
            <form class="registration">
                <span> Вашe имя: </span> <span id="reg_err_name" class="error"> </span> 
                <input type="text" id="name" placeholder="Имя"> 
                <span> Ваш возраст: </span> <span id="reg_err_age" class="error"> </span> 
                <input type="text" id="age" placeholder="Возраст"> 
                <span> Ваша почта: </span> <span id="reg_err_mail"  class="error"> </span> 
                <input type="mail" id="mail" placeholder="Почта">  
                <span> Ваш будущий логин: </span> <span id="reg_err_login" class="error"> </span> 
                <input type="text" id="login" placeholder="Логин"> 
                <span> Ваш будущий пароль: </span> <span id="reg_err_password1" class="error"> </span> 
                <input type="password" id="password1" placeholder="Пароль"> 
                <span> Повторение пароля: </span> <span id="reg_err_password2" class="error"> </span> 
                <input type="password" id="password2" placeholder="Повторение пароля"> 
            </form>
            <button  id="reg_button"> 
                Зарегирироваться 
            </button>
            <span> 
                Уже есть аккаунт? Тогда 
                <span id="reg_2_log" class="link">зайди</span> 
                в него! 
            </span> 
            <span id="message" class="message"> </span>
        </div>
    </body>
</html>