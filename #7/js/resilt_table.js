$('document').ready(function(){
    get_infos();
    get_info();
    $("#to_main").click(function(){
        window.location.replace('../index.html');
    });
    $("#2_lk").click(function(){
        window.location.replace('../html/lk.html');
    });
    $("#2_lks").click(function(){
        window.location.replace('../html/lk.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
});

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

function get_info(){
    $.ajax(
        {
            url: "../php/results.php",
            dataType: "JSON",
            type: "POST",
            success: function(data){
                all_data = data["all"];
                login = data["login"];
                if (all_data.length == 0){
                    let no_history = document.createElement("span");
                    no_history.innerHTML =  "Еще никто не играл в нашу игру!";
                    document.getElementById("result_table").replaceWith(no_history);
                } else {
                    let table = document.createElement("table");
                    table.setAttribute("border", "1")
                    let  thead = document.createElement("thead");
                    let thead_tr = document.createElement("tr");
                    let names = ["Место", "Логин", "Максимальный уровень", "Количество сыгранных игр"];
                    for (let i = 0; i < names.length; i++){
                        let td = document.createElement("td");
                        td.innerHTML = names[i];
                        thead_tr.append(td);
                    };
                    thead.append(thead_tr);
                    table.append(thead);
                    let tbody = document.createElement("tbody");
                    all_data.forEach(element => {
                        let tbody_tr = document.createElement("tr");
                        if (login == element["login"]){
                            tbody_tr.setAttribute("class", "light")
                        };
                        let td1 = document.createElement("td");
                        let td2 = document.createElement("td");
                        let td3 = document.createElement("td");
                        let td4 = document.createElement("td");
                        td1.innerHTML = all_data.indexOf(element) + 1;
                        td2.innerHTML = element["login"];
                        td3.innerHTML = element["max_level"];
                        td4.innerHTML = element["play_number"];
                        tbody_tr.append(td1);
                        tbody_tr.append(td2);
                        tbody_tr.append(td3);
                        tbody_tr.append(td4);
                        tbody.append(tbody_tr); 
                    });
                    table.append(tbody);
                    document.getElementById("result_table").replaceWith(table);
                };
            },
            error: function(){
                window.location.replace('../html/login.html');
            }
        }
    );
};