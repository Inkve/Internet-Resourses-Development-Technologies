function random_color(){
    color_base = ["antiquewhite", "aqua", "aquamarine", "beige", "bisque", "blanche­dalmond", "blue", "blueviolet",
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

function random_sign(numbers){
    let x = Math.random();
    if (x >= 0.5){
        return numbers;
    } else {
        return Number("-" + numbers);
    };
};

function random_int(min, max){
    let x = Math.round(Math.random() * max);
    while (x < min){
        x = Math.round(Math.random() * max);
    };
    return random_sign(x);
};

function random_int_plus(min, max){
    let x = Math.round(Math.random() * max);
    while (x < min){
        x = Math.round(Math.random() * max);
    };
    return x;
};

function random_plus(min, max){
    let x = Math.random() * max;
    while (x < min){
        x = Math.random() * max;
    };
    return x;
};

function generate_all(number){
    let temp_all = [];
    let allow_x = [];
    let allow_y = [];
    let x1 = Math.round((Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.96) / Math.round(Math.sqrt(number) + 3)) ;
    let y1 = Math.round((Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.68) / Math.round(Math.sqrt(number) + 3));
    for (let i = 0; i <= Math.round(Math.sqrt(number)); i++){
        for (let y = 0; y <= Math.round(Math.sqrt(number)); y++){
            allow_x.push(random_int_plus(x1 * i, x1 * (i + 1)));
            allow_y.push(random_int_plus(y1 * y, y1 * (y + 1)));
        };
    };
    while (number){
        if (number){
            let instance = new triangle(number, allow_x[number], allow_y[number], allow_x[number] + random_int_plus(x1 * 0.2, x1 * 0.6), allow_y[number] + random_int_plus(y1 * 0.2, y1 * 0.6), 
                                        allow_x[number] + random_int_plus(x1 * 0.2, x1 * 0.6), allow_y[number] + random_int_plus(y1 * 0.2, y1 * 0.6), random_int(1, 3), random_int(1, 3), 
                                        `${random_color()}`);
            temp_all.push(instance);
            number--;
        };
        if (number){
            let instance = new rectangle(number, allow_x[number], allow_y[number], random_int_plus(x1 * 0.2, x1 * 0.6), random_int_plus(y1 * 0.2, y1 * 0.6), random_int(1, 3), random_int(1, 3), `${random_color()}`);
            temp_all.push(instance);
            number--;
        };
        if (number){
            let z = random_int_plus(x1 * 0.2, x1 * 0.6);
            let instance = new rectangle(number, allow_x[number], allow_y[number], z, z, random_int(1, 3), random_int(1, 3), `${random_color()}`);
            temp_all.push(instance);
            number--;
        };
    };
    all_figures = temp_all;
};

function random_square_particle(number, x, y){
    let z = random_int(15, 30);
    let instance = new particles(number, x, y, z, z, random_int(1, 5), random_int(1, 5), `${random_color()}`);
    return instance;
};