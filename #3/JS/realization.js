var history_human = [];

function test(input_id){
    var input = document.getElementById(input_id);
    var check = document.getElementById("check");
    testing = new RegExp("^(/ /)*([0-9]*)$");
    a = input.value.toString();
    if (!testing.test(a)){
        b = "";
	if (testing.test(a)){
            document.getElementById(input_id).value = testing.exec(a)[0];
	} else {
            for (o of a){
                if (testing.test(o)){
                    b += o;
                }
            }
            document.getElementById(input_id).value = b;
	}
    };
};

function transform(){
//    var image = document.getElementById("image");
    select = document.getElementById("selector");
    option = select.value;
    rundom();
    switch(option){
        case "1":
            transform_cat();
//            image.innerHTML = "<img src='https://thiscatdoesnotexist.com/' width=250 id='images'>";
            break;
        case "2":
            transform_human();
//            image.innerHTML = "<img src='https://thispersondoesnotexist.com/image' width=250 id='images'>";
            break;
    }
};

function transform_cat(){
    var input_cat = document.getElementById("input");
    var result = document.getElementById("result");
    testing = new RegExp("^([0-9]*)$");
    cat_year = input_cat.value.toString();
    if (!testing.test(cat_year)){
        window.alert("Ты читать что-ли не умеешь?! Сказано же, ЦЕЛЫЕ НЕОТРИЦАТЕЛЬНЫЕ ЧИСЛА!");
    } else{
        cat_year = Number(cat_year);
        if ((0 <= cat_year) && (cat_year <= 5)){
            result.innerHTML = cat_year * 7;
            tabler(cat_year, result.innerHTML);
        } else if ((6 <= cat_year) && (cat_year <= 11)) {
            result.innerHTML = (cat_year - 5) * 4 + 35;
            tabler(cat_year, result.innerHTML);
        } else if ((12 <= cat_year) && (cat_year <= 22)) {
            result.innerHTML = (cat_year - 11) * 3 + 59;
            tabler(cat_year, result.innerHTML);
        } else {
            result.innerHTML = "100+";
            window.alert("К сожалению,большинство котов/кошек столько не живет столько");
        }
    }
};

function transform_human(){
    var result = document.getElementById("result");
    var input_human = document.getElementById("input");
    testing = new RegExp("^([0-9]*)$");
    human_year = input_human.value.toString();
    if (!testing.test(human_year)){
        window.alert("Ты читать что-ли не умеешь?! Сказано же, ЦЕЛЫЕ НЕОТРИЦАТЕЛЬНЫЕ ЧИСЛА!");
    } else{
        human_year = Number(human_year);
        if ((0 <= human_year) && (human_year <= 36)){
            result.innerHTML = Math.round(human_year / 7);
            tabler(result.innerHTML, human_year);
        } else if ((37 <= human_year) && (human_year <= 60)) {
            result.innerHTML = Math.round(((human_year - 35) / 4) + 5);
            tabler(result.innerHTML, human_year);
        } else if ((61 <= human_year) && (human_year <= 92)) {
            result.innerHTML = Math.round(((human_year - 59) / 3) + 11);
            tabler(result.innerHTML, human_year);
        } else {
            result.innerHTML = "22+";
            window.alert("К сожалению,большинство людей столько не живет");
      }
    }
};

function tabler(cat,human){
    if (!history_human.includes(human.toString())){
        history_human.push(human.toString());
        let table = document.getElementById("tables")
        let row = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = cat;
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = human;
        row.appendChild(heading_1);
        row.appendChild(heading_2);
        table.appendChild(row);
        checktable.innerHTML = null;
    } else {
        checktable.innerHTML = " Эти значения уже находятся в таблице!"
    }
}


function rundom(){
    let image = document.getElementById("images")
    a = Math.round((Math.random() * 15));  
    image.src = `pictures/cat${a}.jpg`;
}