$('document').ready(function(){
    get_info();
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
    $("#right_exit").click(function(){
        window.location.replace('../html/logout.html');
    });
    $("#history").click(function(){
        window.location.assign('../html/history.html');
    });
    $("#send_app").click(function(){
        check_app();
    });
    document.getElementById("count").addEventListener("input", function(){
        check_number("count");
    });
    document.getElementById("index").addEventListener("input", function(){
        check_number("index");
    });
});

function check_app(){
    let author = document.getElementById("author").value;
    let naming = document.getElementById("naming").value;
    let count = document.getElementById("count").value;
    let tel = document.getElementById("tel").value;
    let index = document.getElementById("index").value;
    let adress = document.getElementById("adress").value;
    let way1 = document.getElementById("way1").checked;
    let way2 = document.getElementById("way2").checked;
    let comment = document.getElementById("comment").value;
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/check_lk.php");
    xnr.onload = function(){
        errors = JSON.parse(xnr.responseText);
        replace(errors, 'author_err', 'app_err_author', 'author');
        replace(errors, 'naming_err', 'app_err_naming', 'naming');
        replace(errors, 'count_err', 'app_err_count', 'count');
        replace(errors, 'tel_err', 'app_err_tel', 'tel');
        replace(errors, 'index_err', 'app_err_index', 'index');
        replace(errors, 'adress_err', 'app_err_adress', 'adress');
        replace(errors, 'comment_err', 'app_err_comment', 'comment');
        if (errors['successful']){
            $("#message").show();
                document.getElementById("message").innerHTML = "Ваша заявка принята!";
            setTimeout(() => {
                $("#message").hide();
            }, 2000);
        };
    };
    let app_data = {
        author: author,
        naming: naming,
        count: count,
        tel: tel,
        index: index,
        adress: adress,
        way1: way1,
        way2: way2,
        comment: comment
    };
    xnr.send(JSON.stringify(app_data));
}

function replace(data, field_id, span_id, input_id){
    let log_err = document.getElementById(span_id);
    if (data[field_id] != ""){
        log_err.innerHTML = data[field_id];
        $(`#${input_id}`).hide();
        $(`#${span_id}`).show();
        setTimeout(() => {
            $(`#${span_id}`).hide();
            $(`#${input_id}`).show();
        }, 1500);
    };
};

function check_number(id){
    let input = document.getElementById(id);
    let testing = new RegExp("^([0-9]*)$");
    let number = input.value.toString();
    let result = "";
    for (element of number){
        if ((testing.test(element))){
            result += element;
        };
    };
    result = Number(result);
    result == 0 ? input.value = "" : input.value = result;
};

function get_info(){
    let xnr = new XMLHttpRequest();
    xnr.open("POST", "../php/lk.php");
    xnr.onload = function(){
        let data = JSON.parse(xnr.responseText);
        console.log('data: ', data);
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