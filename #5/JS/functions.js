
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


// function change_sign(numbers){
//     if (numbers > 0){
//         return Number("")
//     }
// }




function test(){
    //let three = new rectangle(1000, 572, 200, 100, -0.1, -0.1, `${random_color()}`);


    for (let i = 0; i < 20; i++){
        all_figures.push(random_triangle());
        
        // all_figures.push(random_rectangle());
        // all_figures.push(random_square())
    };
    //all_figures.push(two);
    //all_figures.push(three);
    
    setInterval('draw_all()', 10);


};

function draw_all(){
    let canvas = document.getElementById("draw"); 
    let field_2d = canvas.getContext("2d"); 
    field_2d.clearRect(0,0, 1280, 720);
    for (let i = 0; i < all_figures.length; i++){
        all_figures[i].draw();
    }
};
