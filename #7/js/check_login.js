$('document').ready(function(){
    get_info();
    $("#login_button").click(function(){
        check_login();
    });
    $("#to_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#log_2_reg").click(function(){
        window.location.replace('../html/registration.html');
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
    let login_data = {
        login: login,
        password: password
    };
    $.ajax(
        {
            url: "../php/check_login.php",
            dataType: "JSON",
            type: "POST",
            data: JSON.stringify(login_data),
            success: function(errors){
                replace(errors, 'login_err', 'log_err_login', 'login');
                replace(errors, 'password_err', 'log_err_password', 'password');
                if (errors['successful']){
                    document.getElementById("message").innerHTML = "Авторизация прошла успешно!";
                    setTimeout("window.location.replace('../html/lk.html')", 1000);
                };
            },
            error: function(){
                $("#message").show();
                document.getElementById("message").innerHTML = "Произошла непредвиденная ошибка! Сообщите о проблеме разработчикам!";
                setTimeout(() => {
                    $("#message").hide();
                }, 1500);
            }
        }
    );
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
        }, 2500);
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

function get_info(){
    $.ajax(
        {
            url: "../php/login.php",
            dataType: "JSON",
            type: "POST",
            success: function(values){
                document.getElementById("login").setAttribute("value", values["login_value"]);
                document.getElementById("password").setAttribute("value", values["password_value"]);
            },
            error: function(){
                $("#message").show(); 
                document.getElementById("message").innerHTML = "Произошла непредвиденная ошибка! Сообщите о проблеме разработчикам!";
                setTimeout(() => {
                    $("#message").hide();
                }, 1500);
            }
        }
    );
};