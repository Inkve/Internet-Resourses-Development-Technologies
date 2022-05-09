$('document').ready(function(){
    $("#login_button").click(function(){
        check_login();
    });
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#log_2_reg").click(function(){
        window.location.replace('registration.php');
    });
    document.getElementById("login").addEventListener("input", function(){
        check_extra("login");
    });
    document.getElementById("password").addEventListener("input", function(){
        check_extra("password");
    });
});

function check_login(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "check_login.php");
    xnr.onload = function(){
        console.log('xnr.responseText: ', xnr.responseText);
        errors = JSON.parse(xnr.responseText);
        replace(errors, 'login_err', 'log_err_login', 'login');
        replace(errors, 'password_err', 'log_err_password', 'password');
        if (errors['successful']){
            document.getElementById("message").innerHTML = " <br> Авторизация прошла успешно!";
            setTimeout("window.location.replace('lk.php')", 1000);
        };
    };
    let login_data = {
        login: login,
        password: password
    };
    xnr.send(JSON.stringify(login_data));
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