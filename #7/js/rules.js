$('document').ready(function(){
    $("#to_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#back").click(function(){
        history.back();
    });
});