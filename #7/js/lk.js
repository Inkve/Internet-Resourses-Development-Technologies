$('document').ready(function(){
    get_info();
    $("#2_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
});






function get_info(){
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/lk.php");
    xnr.onload = function(){
        let data = JSON.parse(xnr.responseText);
        if (!data["successful"]){
            window.location.replace('login.html')
        } else {
            let login_html = document.createElement("span");
            login_html.innerHTML = data["login"];
            document.getElementById("login_lk").replaceWith(login_html);
            let name_html = document.createElement("span");
            name_html.innerHTML = data["name"];
            document.getElementById("name_lk").replaceWith(name_html);
        };
    };
    xnr.send();
};