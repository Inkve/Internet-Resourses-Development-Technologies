$('document').ready(function(){
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#start_2_reg").click(function(){
        window.location.replace('php/registration.php');
    });
    $("#start_2_log").click(function(){
        window.location.replace('php/login.php');
    });
});