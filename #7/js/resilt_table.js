$('document').ready(function(){
    get_infos();
    get_info();
    $("#2_main").click(function(){
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
                    let names = ["Логин", "Количество попыток", "Максимальный уровень"];
                    for (let i = 0; i < 3; i++){
                        let td = document.createElement("td");
                        td.innerHTML = names[i];
                        thead_tr.append(td);
                    };
                    thead.append(thead_tr);
                    table.append(thead);
                    let tbody = document.createElement("tbody");
                    all_data.forEach(element_array => {
                        let tbody_tr = document.createElement("tr");
                        for (key in element_array){
                            if (key == login){
                                tbody_tr.setAttribute("class", "light");
                            }
                            let td = document.createElement("td");
                            td.innerHTML = key;
                            tbody_tr.append(td);
                            for (key2 in element_array[key]){
                                let td = document.createElement("td");
                                td.innerHTML = element_array[key][key2];
                                tbody_tr.append(td);
                            };
                        };
                        tbody.append(tbody_tr); 
                    });
                    table.append(tbody);
                    document.getElementById("result_table").replaceWith(table);
                };
            },
            error: function(){
                window.location.replace('login.html');
            }
        }
    );
};