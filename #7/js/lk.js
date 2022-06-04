$('document').ready(function(){
    get_info();
    $("#to_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#2_game").click(function(){
        window.location.replace('game.html');
    });
    $("#2_results").click(function(){
        window.location.replace('../html/results_table.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
    $("#lk_2_rules").click(function(){
        window.location.assign('../html/rules.html');
    });
});

function get_info(){
    $.ajax(
        {
            url: "../php/lk.php",
            dataType: "JSON",
            type: "POST",
            success: function(data){
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
            },
            error: function(){
                window.location.replace('login.html');
            }
        }
    );
};