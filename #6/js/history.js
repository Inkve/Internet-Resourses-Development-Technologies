$('document').ready(function(){
    get_info();
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#his_2_lk").click(function(){
        window.location.replace('../html/lk.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
});

function get_info(){
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/history.php");
    xnr.onload = function(){
        let data = JSON.parse(xnr.responseText);
        console.log('data: ', data["data"]);
        if (!data["successful"]){
            window.location.replace('login.html')
        } else {
            let login_html = document.createElement("span");
            login_html.innerHTML = data["login"];
            document.getElementById("login_lk").replaceWith(login_html);
            if (data["data"].length == 0){
                let no_history = document.createElement("span");
                no_history.innerHTML =  "У Вас еще нет заявок, но оставить ее можно ";
                document.getElementById("history_new").replaceWith(no_history);
            } else {
                let table = document.createElement("table");
                table.setAttribute("border", "1")
                let  thead = document.createElement("thead");
                let thead_tr = document.createElement("tr");
                let names = ["Номер заявки", "Автор", "Название", "Количество", "Телефон", "Индекс",
                            "Адрес", "Способ доставки", "Комментарий"];
                for (let i = 0; i < 9; i++){
                    let td = document.createElement("td");
                    td.innerHTML = names[i];
                    thead_tr.append(td);
                };
                thead.append(thead_tr);
                table.append(thead);
                let tbody = document.createElement("tbody");
                data["data"].forEach(element_array => {
                    console.log('element_array: ', element_array);
                    let tbody_tr = document.createElement("tr");
                    let was = false;
                    for (key in element_array){
                        if (key != "way1" && key != "way2"){
                            let td = document.createElement("td");
                            td.innerHTML = element_array[key];
                            tbody_tr.append(td);
                        } else {
                            if (!was){
                                let td = document.createElement("td");
                                if (element_array["way1"]){
                                    td.innerHTML = "Курьер";
                                } else {
                                    td.innerHTML = "Почта";
                                };
                                was = true;
                                tbody_tr.append(td);
                            };
                        };
                    };
                    tbody.append(tbody_tr); 
                });
                table.append(tbody);
                document.getElementById("history_table").replaceWith(table);
            };
        };
    };
    xnr.send();
};