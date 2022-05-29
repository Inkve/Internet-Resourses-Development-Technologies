$('document').ready(function(){
    get_infos();
    update_links();
    $("#2_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#2_lk").click(function(){
        window.location.replace('../html/lk.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
    setInterval(() => {
        get_info(0);
    }, 1000);

});

function update_links(){
    for (let i = 1; i <= 10; i++){
        document.getElementById(`element_${i}`).addEventListener("click", function(){
            get_info(i);
        });
    };
};

let answered = [];

function get_info(number){
    answered = [];
    if (!number){
        for (let i = 1; i <= 10; i++){
            answered.push(false);
        };
    } else {
        for (let i = 1; i <= 10; i++){
            answered.push(false);
        };
        answered[number-1] = true;
    };
    let data_to_send = {
        "answered": answered
    };
    $.ajax(
        {
            url: "../php/game.php",
            dataType: "JSON",
            type: "POST",
            data: JSON.stringify(data_to_send),
            success: function(resived_data){
                document.getElementById("level").innerHTML = resived_data["level" ];
                document.getElementById("timer").innerHTML = resived_data["time" ];
                document.getElementById("game_question").innerHTML = resived_data["question"];
                for (let i = 1; i <= 10; i++){
                    document.getElementById(`element_${i}`).innerHTML = resived_data["answers"][i-1];
                };
                document.getElementById("message").innerHTML = resived_data["message"];
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
}

function get_infos(){
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
                };
            },
            error: function(){
                window.location.replace('login.html');
            }
        }
    );
};