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
    for (let i = 0; i < 2; i++){
        all_figures.push(random_triangle());
        all_figures[i].first_draw();
    }
    
    setInterval("draw_all()", 10);
     








    // document.getElementById("one").style.borderBottomColor = `${random_color()}`
    // document.getElementById("one").style.borderLeft = `${random_color()}`
    // document.getElementById("one").style.borderTop = `${random_color()}`
    
    // //document.getElementById("one").style.background = `${random_color()}`
    
    // $('pacman').animate({
    //     top : `${random_plus(0, 500)}`,
    //     left : `${random_plus(0, 1000)}`
    // }, 1000)
    // console.log("11")
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


function random_color(){
    color_base = ["antiquewhite", "aqua", "aquamarine", "beige", "bisque", "black", "blanche­dalmond", "blue", "blueviolet",
        "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "corn­flowerblue", "cornsilk", "crimson",
        "cyan", "darkblue", "darkcyan", "dark­goldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
        "darkorange", "darkorchid", "darkred", "darksalmon", "dark­seagreen", "darkslate­blue", "darkslate­gray", "dark­turquoise", 
        "darkviolet", "deeppink", "deepsky­blue", "dimgray", "dodgerblue", "firebrick", "floral­white", "forest­green", "fuchsia",
        "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "green­yellow", "honeydew", "hotpink", "indianred",
        "indigo", "ivory", "khaki", "lavender", "lavender­blush", "lawngreen", "lemon­chiffon", "lightblue", "lightcoral",
        "lightcyan", "lightgolden­rodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "light­seagreen",
        "light­skyblue", "light­slategray","lightsteel­blue", "light­yellow", "lime", "limegreen", "linen", "magenta", "maroon",
        "mediumaqua­marine", "mediumblue", "medium­orchid","medium­purple", "medium­seagreen", "medium­slateblue", "medium­springgreen",
        "medium­turquoise", "medium­violetred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajo­white", "navy", "oldlace",
        "olive", "olivedrab", "orange", "orangered", "orchid", "pale­goldenrod", "palegreen", "pale­turquoise", "pale­violetred", 
        "papayawhip", "peachpuff", "peru", "pink", "plum", "powder­blue", "purple", "red", "rosybrown", "royalblue", "saddle­brown",
        "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "spring­green",
        "steelblue", "tan", "teal", "thistle", "tomato", "turquoise","violet", "wheat","white", "whitesmoke", "yellow", "yellow­green"];
    let number = Math.round(Math.random() * color_base.length);
    return color_base[number];
};