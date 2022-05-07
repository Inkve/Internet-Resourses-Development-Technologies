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
        if (errors['login_err'] != ""){
            log_err_login.innerHTML = errors['login_err'];
            $("#login").hide(10);
            $("#log_err_login").show(10);
            setTimeout('$("#log_err_login").hide(10)', 1500);
            setTimeout('$("#login").show(10)', 1500);
        };
        let log_err_password = document.getElementById("log_err_password");
        if (errors['password_err'] != ""){
            log_err_password.innerHTML = errors['password_err'];
            $("#password").hide(10);
            $("#log_err_password").show(10);
            setTimeout('$("#log_err_password").hide(10)', 1500);
            setTimeout('$("#password").show(10)', 1500);
        };
        if (errors['successful']){
            document.getElementById("message").innerHTML = " <br> Авторизация прошла успешно! Если бы тут был личный кабинет, ты бы в него попал";
            //setTimeout("window.location.replace('index.php')", 1000);
        };
    };
    let login_data = {
        login: login,
        password: password
    };
    xnr.send(JSON.stringify(login_data));
    
};