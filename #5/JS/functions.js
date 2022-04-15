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
let particles_arr = [];

function test(){
    document.getElementById('btn').disabled = true;
    number = document.getElementById("input_number").value;
    while (number){
        if (number){
            all_figures.push(random_triangle(number));
            number--;
        };
        if (number){
            all_figures.push(random_rectangle(number));
            number--;
        };
        if (number){
            all_figures.push(random_square(number));
            number--;
        };
    };
    draw_all();
};

function draw_all(){
    for (let i = 0; i < all_figures.length; i++){
        all_figures[i].draw();
    }
    for (let i = 0; i < particles_arr.length; i++){
        particles_arr[i].draw();
    }

    check();
    window.requestAnimationFrame(draw_all);
};

function check(){
    for (let y = 0; y < all_figures.length; y++){
        for (let i = 1; i < all_figures.length; i++){
            if (y != i){
                for (let p = 0; p < all_figures[y].coordinates.length; p++){
                    for (let t = 0; t < all_figures[i].coordinates.length; t++){
                        if (all_figures[y].shown && all_figures[i].shown){
                            if ((Math.abs(all_figures[i].coordinates[t][0] - all_figures[y].coordinates[p][0]) <= 3) && (Math.abs(all_figures[i].coordinates[t][1] - all_figures[y].coordinates[p][1]) <= 3)){
                                all_figures[y].hide(all_figures[i].coordinates[t][0], all_figures[i].coordinates[t][1]);
                                all_figures[i].hide(all_figures[i].coordinates[t][0], all_figures[i].coordinates[t][1]);
                                if (y > i){
                                    all_figures.splice(y, 1);
                                    all_figures.splice(i, 1);
                                } else {
                                    all_figures.splice(i, 1);
                                    all_figures.splice(y, 1);
                                }
                                return ""
                            };
                        };
                    };
                };
            };
        };
    };
};


