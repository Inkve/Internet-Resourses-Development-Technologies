$('document').ready(function(){
    $("#login_button").click(function(){
        check_login();
    });
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#log_2_reg").click(function(){
        window.location.replace('registration.html');
    });
});

function check_login(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/check_login.php");
    xnr.onload = function(){
        errors = JSON.parse(xnr.responseText);
        let log_err_login = document.getElementById("log_err_login");
        if (errors['login_err'] != ""){
            log_err_login.innerHTML = errors['login_err'];
            $("#login").hide();
            $("#log_err_login").show();
            setTimeout('$("#log_err_login").hide()', 1500);
            setTimeout('$("#login").show()', 1500);
        };
        let log_err_password = document.getElementById("log_err_password");
        if (errors['password_err'] != ""){
            log_err_password.innerHTML = errors['password_err'];
            $("#password").hide();
            $("#log_err_password").show();
            setTimeout('$("#log_err_password").hide()', 1500);
            setTimeout('$("#password").show()', 1500);
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