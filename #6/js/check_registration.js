$('document').ready(function(){
    $("#reg_button").click(function(){
        check_registration();
    });
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#reg_2_log").click(function(){
        window.location.replace('login.html');
    });
});

function check_registration(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let mail = document.getElementById("mail").value;
    let login = document.getElementById("login").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/check_registration.php");
    xnr.onload = function(){
        errors = JSON.parse(xnr.responseText);
        let log_err_name = document.getElementById("reg_err_name");
        if (errors['name_err'] != ""){
            log_err_name.innerHTML = errors['name_err'];
            $("#name").hide();
            $("#reg_err_name").show();
            setTimeout('$("#reg_err_name").hide()', 1500);
            setTimeout('$("#name").show()', 1500);
        };
        let log_err_age = document.getElementById("reg_err_age");
        if (errors['age_err'] != ""){
            log_err_age.innerHTML = errors['age_err'];
            $("#age").hide();
            $("#reg_err_age").show();
            setTimeout('$("#reg_err_age").hide()', 1500);
            setTimeout('$("#age").show()', 1500);
        };
        let log_err_mail = document.getElementById("reg_err_mail");
        if (errors['mail_err'] != ""){
            log_err_mail.innerHTML = errors['mail_err'];
            $("#mail").hide();
            $("#reg_err_mail").show();
            setTimeout('$("#reg_err_mail").hide()', 1500);
            setTimeout('$("#mail").show()', 1500);
        };
        let log_err_login = document.getElementById("reg_err_login");
        if (errors['login_err'] != ""){
            log_err_login.innerHTML = errors['login_err'];
            $("#login").hide();
            $("#reg_err_login").show();
            setTimeout('$("#reg_err_login").hide()', 1500);
            setTimeout('$("#login").show()', 1500);
        };
        let log_err_password1 = document.getElementById("reg_err_password1");
        if (errors['password1_err'] != ""){
            log_err_password1.innerHTML = errors['password1_err'];
            $("#password1").hide();
            $("#reg_err_password1").show();
            setTimeout('$("#reg_err_password1").hide()', 1500);
            setTimeout('$("#password1").show()', 1500);
        };
        let log_err_password2 = document.getElementById("reg_err_password2");
        if (errors['password2_err'] != ""){
            log_err_password2.innerHTML = errors['password2_err'];
            $("#password2").hide();
            $("#reg_err_password2").show();
            setTimeout('$("#reg_err_password2").hide()', 1500);
            setTimeout('$("#password2").show()', 1500);
        };



        
        
        if (errors['successful']){
            document.getElementById("message").innerHTML = " <br> Регистрация прошла успешно! <br> Теперь зайди в свой аккаунт!";
            setTimeout("window.location.replace('../index.html')", 1000);
        };
    };
    let reg_data = {
        name: name,
        age: age,
        mail: mail,
        login: login,
        password1: password1,
        password2: password2
    };
    xnr.send(JSON.stringify(reg_data));
};