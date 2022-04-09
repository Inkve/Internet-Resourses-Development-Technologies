
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
    let one = new triangle(225, 150, 75, 100, 200, 50, 0.1, 0.1, 'pink');
    let two = new triangle(450, 360, 354, 244, 523, 784, 0.1, -0.1, 'orange');
    
    all_figures.push(one);
    all_figures.push(two);
    
    setInterval('draw_all()', 10);


};

function draw_all(){
    let canvas = document.getElementById("draw"); 
    let field_2d = canvas.getContext("2d"); 
    field_2d.clearRect(0,0, 1280, 720);
    for (let i = 0; i < 2; i++){
        all_figures[i].draw();
    }
};
