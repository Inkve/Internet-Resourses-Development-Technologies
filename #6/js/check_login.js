$('document').ready(function(){
    $("#login_button").click(function(){
    check_login();
    });
});

function check_login(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "check_login.php");
    xnr.onload = function(){
        errors = JSON.parse(xnr.responseText);
        let log_err_login = document.getElementById("log_err_login");
        log_err_login.innerHTML = errors['login_err'];
        let log_err_password = document.getElementById("log_err_password");
        log_err_password.innerHTML = errors['password_err'];
        if (errors['successful']){
            document.getElementById("message").innerHTML = "Авторизация прошла успешно! Если бы тут был личный кабинет, ты бы в него попал";
            //setTimeout("window.location.replace('index.php')", 1000);
        };
    };
    let login_data = {
        login: login,
        password: password
    };
    xnr.send(JSON.stringify(login_data));
    
};