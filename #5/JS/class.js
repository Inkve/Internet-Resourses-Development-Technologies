class triangle{
    arr_x;
    arr_y
    decrease_x;
    decrease_y;
    color;
    screen_width;
    screen_heigth;

    constructor(x_1, y_1, x_2, y_2, x_3, y_3, x_decrease, y_decrease, color){
        this.arr_x = [];
        this.arr_y = [];
        this.arr_x.push(x_1);
        this.arr_x.push(x_2);
        this.arr_x.push(x_3);
        this.arr_y.push(y_1);
        this.arr_y.push(y_2);
        this.arr_y.push(y_3);
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;
        this.screen_heigth = 720;
        this.screen_width = 1280;
    };

    draw(){
        if (!this.chek_x_coordinate() || !this.chek_y_coordinate()){
            if (!this.chek_x_coordinate() && this.chek_y_coordinate()){
                this.decrease_x = -this.decrease_x;
                this.decrease_y = this.decrease_y;
            } else if (this.chek_x_coordinate() && !this.chek_y_coordinate()){
                this.decrease_x = this.decrease_x;
                this.decrease_y = -this.decrease_y;
            } else {
                this.decrease_x = -this.decrease_x;
                this.decrease_y = -this.decrease_y;
            };
            this.udpate_coordinate();
            this.draw();    
        } else{
            let canvas = document.getElementById("draw");
            let field_2d = canvas.getContext('2d');
            field_2d.beginPath();
            field_2d.moveTo(this.arr_x[0], this.arr_y[0]);
            for (let i = 1; i < this.arr_x.length; i++){
                field_2d.lineTo(this.arr_x[i], this.arr_y[i]);
            };
            field_2d.closePath();
            field_2d.fillStyle = this.color;
            field_2d.fill();
            this.udpate_coordinate();
        };
    };

    chek_x_coordinate(){
        let flag = true;
        for (let i = 0; i <this.arr_x.length; i++){
            if ((this.arr_x[i] <= 0) || (this.arr_x[i] >= this.screen_width)){
                flag = false;
                break;
            };
        };
        return flag;
    };

    chek_y_coordinate(){
        let flag = true;
        for (let i = 0; i < this.arr_y.length; i++){
            if ((this.arr_y[i] <= 0) || (this.arr_y[i] >= this.screen_heigth)){
                flag = false;
                break;
            };
        };
        return flag;
    };

    udpate_coordinate(){
        for (let i = 0; i < this.arr_x.length; i++){
            this.arr_x[i] = this.arr_x[i] + this.decrease_x;
            this.arr_y[i] = this.arr_y[i] + this.decrease_y;
        };
    };
};

class rectangle{
    arr_x;
    arr_y
    decrease_x;
    decrease_y;
    color;
    screen_width;
    screen_heigth;

    constructor(x_1, y_1, length, width, x_decrease, y_decrease, color){
        this.arr_x = [];
        this.arr_y = [];
        this.arr_x.push(x_1);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1);
        this.peak_1_x = x_1;
        this.peak_1_y = y_1;
        this.peak_2_x = this.peak_1_x + length;
        this.peak_2_y = y_1;

        this.peak_3_y = this.peak_1_y + width;
        this.peak_4_y = this.peak_1_y + width;
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;


        this.arr_x = [];
        this.arr_y = [];
        this.arr_x.push(x_1);
        this.arr_x.push(x_2);
        this.arr_x.push(x_3);
        this.arr_y.push(y_1);
        this.arr_y.push(y_2);
        this.arr_y.push(y_3);
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;
        this.screen_heigth = 720;
        this.screen_width = 1280;

    };

    draw(){
        if (!this.chek_x_coordinate() || !this.chek_y_coordinate()){
            if (!this.chek_x_coordinate() && this.chek_y_coordinate()){
                this.decrease_x = -this.decrease_x;
                this.decrease_y = this.decrease_y;
            } else if (this.chek_x_coordinate() && !this.chek_y_coordinate()){
                this.decrease_x = this.decrease_x;
                this.decrease_y = -this.decrease_y;
            } else {
                this.decrease_x = -this.decrease_x;
                this.decrease_y = -this.decrease_y;
            };
            this.udpate_coordinate();
            this.draw();    
        } else{
            let canvas = document.getElementById("draw");
            let field_2d = canvas.getContext('2d');
            field_2d.beginPath();
            field_2d.moveTo(this.arr_x[0], this.arr_y[0]);
            for (let i = 1; i < this.arr_x.length; i++){
                field_2d.lineTo(this.arr_x[i], this.arr_y[i]);
            };
            field_2d.closePath();
            field_2d.fillStyle = this.color;
            field_2d.fill();
            this.udpate_coordinate();
        };
    };

    chek_x_coordinate(){
        let flag = true;
        for (let i = 0; i <this.arr_x.length; i++){
            if ((this.arr_x[i] <= 0) || (this.arr_x[i] >= this.screen_width)){
                flag = false;
                break;
            };
        };
        return flag;
    };

    chek_y_coordinate(){
        let flag = true;
        for (let i = 0; i < this.arr_y.length; i++){
            if ((this.arr_y[i] <= 0) || (this.arr_y[i] >= this.screen_heigth)){
                flag = false;
                break;
            };
        };
        return flag;
    };

    udpate_coordinate(){
        for (let i = 0; i < this.arr_x.length; i++){
            this.arr_x[i] = this.arr_x[i] + this.decrease_x;
            this.arr_y[i] = this.arr_y[i] + this.decrease_y;
        };
    };
};


