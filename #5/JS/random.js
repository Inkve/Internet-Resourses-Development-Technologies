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
    }
    return random_sign(x)
};

function random_int_plus(min, max){
    let x = Math.round(Math.random() * max);
    while (x < min){
        x = Math.round(Math.random() * max);
    }
    return x
};

function random_plus(min, max){
    let x = Math.random() * max;
    while (x < min){
        x = Math.random() * max;
    }
    return x
};

function random_triangle(number){
    let x = random_int_plus(71, window.screen.width * 0.97 - 71);
    let y = random_int_plus(71, window.screen.height * 0.73 - 71);
    let instance = new triangle(number, x, y, x + random_int(25, 70), y + random_int(25, 70), x + random_int(25, 70), y + random_int(25, 70),
                                random_int(1, 3), random_int(1, 3), `${random_color()}`);
    return instance;
};

function random_rectangle(number){
    let x = random_int_plus(51, window.screen.width * 0.97 - 51);
    let y = random_int_plus(51, window.screen.height * 0.73 - 51);
    let instance = new rectangle(number, x, y, random_int(15, 50), random_int(15, 50), random_int(1, 3), random_int(1, 3), `${random_color()}`);
    return instance;
};

function random_square(number){
    let x = random_int_plus(51, window.screen.width * 0.97 - 51);
    let y = random_int_plus(51, window.screen.height * 0.73 - 51);
    let z = random_int(15, 50);
    let instance = new rectangle(number, x, y, z, z, random_int(1, 3), random_int(1, 3), `${random_color()}`);
    return instance;
};

function random_square_particle(number, x, y){
    let z = random_int(15, 30);
    let instance = new particles(number, x, y, z, z, random_int(1, 5), random_int(1, 5), `${random_color()}`);
    return instance;
};