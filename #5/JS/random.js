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
    console.log('number: ', number);
    console.log('olor_base.length: ', color_base.length);
    return color_base[number];
};