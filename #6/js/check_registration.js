$('document').ready(function(){
    $("#reg_button").click(function(){
        check_registration();
    });
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#reg_2_log").click(function(){
        window.location.replace('login.php');
    });
    document.getElementById("name").addEventListener("input", function(){
        check_name();
    });
    document.getElementById("age").addEventListener("input", function(){
        check_age();
    });
    document.getElementById("mail").addEventListener("input", function(){
        check_no_russian("mail");
    });
    document.getElementById("login").addEventListener("input", function(){
        check_extra("login");
    });
    document.getElementById("password1").addEventListener("input", function(){
        check_extra("password1");
    });
    document.getElementById("password2").addEventListener("input", function(){
        check_extra("password2");
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
        replace(errors, 'name_err', 'reg_err_name', 'name');
        replace(errors, 'age_err', 'reg_err_age', 'age');
        replace(errors, 'mail_err', 'reg_err_mail', 'mail');
        replace(errors, 'login_err', 'reg_err_login', 'login');
        replace(errors, 'password1_err', 'reg_err_password1', 'password1');
        replace(errors, 'password2_err', 'reg_err_password2', 'password2');
        if (errors['successful']){
            document.getElementById("message").innerHTML = "Регистрация прошла успешно! <br> Теперь зайди в свой аккаунт!";
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

function replace(data, field_id, span_id, input_id){
    let log_err = document.getElementById(span_id);
    if (data[field_id] != ""){
        log_err.innerHTML = data[field_id];
        $(`#${input_id}`).hide();
        $(`#${span_id}`).show();
        setTimeout(() => {
            $(`#${span_id}`).hide();
            $(`#${input_id}`).show();
        }, 1500);
    };
};

function check_name(){
    let input = document.getElementById("name");
    let testing = new RegExp("^[а-яА-Я]{1,30}$");
    let result = "";
    for (element of input.value){
        if ((testing.test(element)) && (result.length < 30)){
            result += element;
        };
    };
    result == "" ? input.value = "" : input.value = result;
};

function check_age(){
    let input = document.getElementById("age");
    let testing = new RegExp("^([0-9]*)$");
    let number = input.value.toString();
    let result = "";
    for (element of number){
        if ((testing.test(element)) && (result.length < 3)){
            result += element;
        };
    };
    result = Number(result);
    result == 0 ? input.value = "" : input.value = result;
};

function check_extra(id){
    let input = document.getElementById(id);
    let testing = new RegExp("^([a-z,A-Z,0-9]){1,30}$");
    let result = "";
    for (element of input.value){
        if (testing.test(element)){
            result += element;
        };
    };
    result == "" ? input.value = "" : input.value = result;
};