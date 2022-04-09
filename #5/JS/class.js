class triangle{
    peak_1_x;
    peak_1_y;
    peak_2_x;
    peak_2_y;
    peak_3_x;
    peak_3_y;
    decrease_x;
    decrease_y;
    color;

    constructor(x_1, y_1, x_2, y_2, x_3, y_3, x_decrease, y_decrease, color){
        this.peak_1_x = x_1;
        this.peak_1_y = y_1;
        this.peak_2_x = x_2;
        this.peak_2_y = y_2;
        this.peak_3_x = x_3;
        this.peak_3_y = y_3;
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;
    };

    draw(){
    let canvas = document.getElementById("draw");
    let field_2d = canvas.getContext('2d');
    field_2d.beginPath();
    field_2d.moveTo(this.peak_1_x, this.peak_1_y);
    field_2d.lineTo(this.peak_2_x, this.peak_2_y);
    field_2d.lineTo(this.peak_3_x, this.peak_3_y);
    field_2d.closePath();
    field_2d.fillStyle = this.color;
    field_2d.fill();
    this.udpate_coordinate();
    };

    udpate_coordinate(){
        this.peak_1_x = this.peak_1_x + this.decrease_x;
        this.peak_1_y = this.peak_1_y + this.decrease_y;
        this.peak_2_x = this.peak_2_x + this.decrease_x;
        this.peak_2_y = this.peak_2_y + this.decrease_y;
        this.peak_3_x = this.peak_3_x + this.decrease_x;
        this.peak_3_y = this.peak_3_y + this.decrease_y;
    };
};

class rectangle{
    peak_1_x;
    peak_1_y;
    peak_2_x;
    peak_2_y;
    peak_3_x;
    peak_3_y;
    peak_4_x;
    peak_4_y;
    decrease_x;
    decrease_y;
    color;

    constructor(x_1, y_1, length, width, x_decrease, y_decrease, color){
        this.peak_1_x = x_1;
        this.peak_1_y = y_1;
        this.peak_2_x = this.peak_1_x + length;
        this.peak_2_y = y_1;
        this.peak_3_x = this.peak_1_x + length;
        this.peak_3_y = this.peak_1_y + width;
        this.peak_4_x = this.peak_1_x;
        this.peak_4_y = this.peak_1_y + width;
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;
    };

    draw(){
    let canvas = document.getElementById("draw");
    let field_2d = canvas.getContext('2d');
    field_2d.beginPath();
    field_2d.moveTo(this.peak_1_x, this.peak_1_y);
    field_2d.lineTo(this.peak_2_x, this.peak_2_y);
    field_2d.lineTo(this.peak_3_x, this.peak_3_y);
    field_2d.lineTo(this.peak_4_x, this.peak_4_y);
    field_2d.closePath();
    field_2d.fillStyle = this.color;
    field_2d.fill();
    this.udpate_coordinate();
    };

    udpate_coordinate(){
        this.peak_1_x = this.peak_1_x + this.decrease_x;
        this.peak_1_y = this.peak_1_y + this.decrease_y;
        this.peak_2_x = this.peak_2_x + this.decrease_x;
        this.peak_2_y = this.peak_2_y + this.decrease_y;
        this.peak_3_x = this.peak_3_x + this.decrease_x;
        this.peak_3_y = this.peak_3_y + this.decrease_y;
        this.peak_4_x = this.peak_4_x + this.decrease_x;
        this.peak_4_y = this.peak_4_y + this.decrease_y;
    };
};


