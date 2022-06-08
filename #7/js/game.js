let firework;
$('document').ready(function(){
    get_infos();
    $("#to_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#rules").click(function(){
        window.location.assign('../html/rules.html');
    });
    $("#starts").click(function(){
        update_links();
        start_game();
    });
    $("#2_lk").click(function(){
        window.location.replace('../html/lk.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
    firework = JS_FIREWORKS.Fireworks({
        id : 'fireworks-canvas',
        hue : 1200,
        particleCount : 200,
        delay : 1,
        minDelay : 10,
        maxDelay : 30,
        boundaries : { // of respawn and target
            top: 10,
            bottom: document.documentElement.clientHeight * 0.1,
            left: 10,
            right: document.documentElement.clientWidth * 0.2
        },
        fireworkSpeed : 1,
        fireworkAcceleration : 1.05,
        particleFriction : .95,
        particleGravity : 1.8
    });
});

let game;

function update_links(){
    for (let i = 1; i <= 10; i++){
        document.getElementById(`element_${i}`).addEventListener("click", function(){
            get_info(i);
        });
    };
};

let answered = [];

function start_game(){
    document.getElementById("div_game_menu").style.visibility = "hidden";
    game = setInterval(() => {
        get_info(0);
    }, 500);
};

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
                document.getElementById("level").innerHTML = resived_data["level"];
                document.getElementById("timer").innerHTML = resived_data["time" ];
                document.getElementById("game_question").innerHTML = resived_data["question"];
                for (let i = 1; i <= 10; i++){
                    document.getElementById(`element_${i}`).innerHTML = resived_data["answers"][i-1];
                };
                if  (resived_data["message"] == "Правильно!"){
                    firework.start();
                    let eq = document.getElementById("equal");
                    eq.src = "../images/equal.png";
                    document.getElementById("element_q3").innerHTML = resived_data["user_answer"];
                    clearInterval(game);
                    setTimeout(() => {
                        game = setInterval(() => {
                            get_info(0);
                        }, 500);
                        document.getElementById("element_q3").innerHTML = "?";
                    }, 1500);
                    setTimeout(() => {
                        firework.stop();
                    }, 2500);
                };
                if  (resived_data["message"] == "Время вышло!"){
                    clearInterval(game);
                    document.getElementById("element_q3").innerHTML = resived_data["user_answer"];
                    setTimeout(() => {
                        game = setInterval(() => {
                            get_info(0);
                        }, 500);
                        document.getElementById("element_q3").innerHTML = "?";
                    }, 1200);
                };
                if  (resived_data["message"] == "Неправильно!"){
                    clearInterval(game);
                    document.getElementById("element_q3").innerHTML = resived_data["user_answer"];
                    let eq = document.getElementById("equal");
                    eq.src = "../images/not_equal.png";
                    setTimeout(() => {
                        game = setInterval(() => {
                            get_info(0);
                        }, 500);
                        eq.src = "../images/equal.png";
                        document.getElementById("element_q3").innerHTML = "?";
                    }, 1200);
                };
                if  (resived_data["message"] == "Конец"){
                    clearInterval(game);
                    document.getElementById("element_q3").innerHTML = resived_data["user_answer"];
                    document.getElementById("div_game_menu").style.visibility = "visible";
                    let menu = document.createElement("div");
                    menu.setAttribute("id", "menu");
                    menu.innerHTML = `Игра окончена! <br>
                    Ваш счет: ${resived_data["level"] - 1}`;
                    let str_div = document.createElement("div");
                    str_div.setAttribute("class", "str_div");
                    let start_btn = document.createElement("button");
                    start_btn.setAttribute("class", "menu_btn");
                    start_btn.innerHTML = "Заново!";
                    start_btn.addEventListener("click", function(){
                        start_game();
                        document.getElementById("element_q3").innerHTML = "?";
                    });
                    let lk_btn = document.createElement("button");
                    lk_btn.setAttribute("class", "menu_btn");
                    lk_btn.innerHTML = "В ЛК!";
                    lk_btn.addEventListener("click", function(){
                        window.location.replace('../html/lk.html');
                    });
                    str_div.append(lk_btn);
                    str_div.append(start_btn);
                    menu.append(str_div);
                    document.getElementById("menu").replaceWith(menu);
                };
                let lives = Number(resived_data["lives"]);
                let one = document.getElementById("one");
                let two = document.getElementById("two");
                let three = document.getElementById("three");
                switch(lives){
                    case 3:
                        one.src = "../images/heart.png";
                        two.src = "../images/heart.png";
                        three.src = "../images/heart.png";
                        break
                    case 2:
                        one.src = "../images/heart.png";
                        two.src = "../images/heart.png";
                        three.src = "../images/heart_f.png";
                        break
                    case 1:
                        one.src = "../images/heart.png";
                        two.src = "../images/heart_f.png";
                        three.src = "../images/heart_f.png";
                        break
                    default:
                        one.src = "../images/heart_f.png";
                        two.src = "../images/heart_f.png";
                        three.src = "../images/heart_f.png";
                        break
                }
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