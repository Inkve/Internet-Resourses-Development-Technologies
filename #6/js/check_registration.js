$('document').ready(function(){
    $("#reg_button").click(function(){
    check_registration();
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
    xnr.open("POST", "check_registration.php");
    xnr.onload = function(){
        errors = JSON.parse(xnr.responseText);
        let log_err_name = document.getElementById("reg_err_name");
        log_err_name.innerHTML = errors['name_err'];
        let log_err_age = document.getElementById("reg_err_age");
        log_err_age.innerHTML = errors['age_err'];
        let log_err_mail = document.getElementById("reg_err_mail");
        log_err_mail.innerHTML = errors['mail_err'];
        let log_err_login = document.getElementById("reg_err_login");
        log_err_login.innerHTML = errors['login_err'];
        let log_err_password1 = document.getElementById("reg_err_password1");
        log_err_password1.innerHTML = errors['password1_err'];
        let log_err_password2 = document.getElementById("reg_err_password2");
        log_err_password2.innerHTML = errors['password2_err'];
        
        if (errors['successful']){
            document.getElementById("message").innerHTML = "Регистрация прошла успешно! <br> Теперь зайди в свой аккаунт!";
            setTimeout("window.location.replace('index.php')", 1000);
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