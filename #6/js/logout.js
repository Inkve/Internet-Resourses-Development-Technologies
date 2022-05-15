$('document').ready(function(){
    get_info();
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
});

function get_info(){
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/logout.php");
    xnr.onload = function(){
        if (!xnr.responseText){
            window.location.replace('login.html')
        } else {
            setTimeout(() => {
                window.location.replace('../index.html');
            }, 3500);
        };
    };
    xnr.send();
};