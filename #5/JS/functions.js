$('document').ready(function(){
    $("#btn").click(function(){
        test();
        });
});

function input_check(){
    let input = document.getElementById("input_number");
    let testing = new RegExp("^([0-9]*)$");
    let number = input.value.toString();
    let result = "";
    for (element of number){
        if ((testing.test(element)) && (result.length < 2)){
            result += element;
        } else {
            if (result.length >= 2){
                break;
            };
        };
    };
    result = Number(result);
    result == 0 ? input.value = "Введите какое-нибудь число" : input.value = result;
};
  

let all_figures = [];

function test(){
    for (let i = 0; i < 500; i++){
        all_figures.push(random_triangle(i));
        all_figures.push(random_rectangle(i));
    }

    for (let i = 0; i < all_figures.length; i++){
        all_figures[i].first_draw();
    }

    setInterval("draw_all()", 10);
}





function draw_all(){
    for (let i = 0; i < all_figures.length; i++){
        all_figures[i].draw();
    }
};


function random_plus(min, max){
    let x = Math.random() * max;
    while (x < min){
        x = Math.random() * max;
    }
    return x
};


