$('document').ready(function(){
    $("#login_button").click(function(){
    check_login();
    });
});

function check_login(){
    let login = document.getElementById("login").value;
    console.log('login: ', login);
    let password = document.getElementById("password").value;
    console.log('password: ', password);
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "check_login.php");
    xnr.onload = function(){
        console.log(xnr.responseText);
    };
    let login_data = `{
        "login": ${login},
        "password": ${password}
    }`;
    xnr.send(login_data);
};