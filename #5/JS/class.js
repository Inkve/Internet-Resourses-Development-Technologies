class triangle{
    number;
    arr_x;
    arr_y;
    decrease_x;
    decrease_y;
    color;
    screen_width;
    screen_heigth;
    x;
    y;

    constructor(_number, x_1, y_1, x_2, y_2, x_3, y_3, x_decrease, y_decrease, color){
        this.number = _number;
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
        this.screen_heigth = window.screen.height * 0.73;
        this.screen_width = window.screen.width * 0.97;
        this.x = 0;
        this.y = 0;  
    };

    first_draw(){
        let svg = document.getElementById('svg');
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let coordinates = "";
        for (let i = 0; i < this.arr_x.length; i++){
            coordinates += `${this.arr_x[i]}` + " " + `${this.arr_y[i]}` + " "
        }
        element.setAttribute("points", `${coordinates}`)
        element.setAttribute("id", `triangle_${this.number}`)
        element.setAttribute("fill", `${random_color()}`)
        element.addEventListener('click', function() {
            console.log("CLICK!");
        });
        svg.append(element);
    }

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
            let t = document.getElementById(`triangle_${this.number}`);
            t.setAttribute("transform", `translate(${this.x}, ${this.y})`);
            this.udpate_coordinate();
        };
    }

    chek_x_coordinate(){
        let flag = true;
        for (let i = 0; i < this.arr_x.length; i++){
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
        this.x = this.x + this.decrease_x;
        this.y = this.y + this.decrease_y;
    };
};

class rectangle{
    number;
    arr_x;
    arr_y
    decrease_x;
    decrease_y;
    color;
    screen_width;
    screen_heigth;
    x;
    y;

    constructor(_number, x_1, y_1, length, width, x_decrease, y_decrease, color){
        this.number = _number;
        this.arr_x = [];
        this.arr_y = [];
        this.arr_x.push(x_1);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1);
        this.arr_y.push(y_1);
        this.arr_y.push(y_1);
        this.arr_y.push(y_1 + width);
        this.arr_y.push(y_1 + width);
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;
        this.screen_heigth = window.screen.height * 0.73;
        this.screen_width = window.screen.width * 0.97;
        this.x = 0;
        this.y = 0;  
    };

    first_draw(){
        let svg = document.getElementById('svg');
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let coordinates = "";
        for (let i = 0; i < this.arr_x.length; i++){
            coordinates += `${this.arr_x[i]}` + " " + `${this.arr_y[i]}` + " "
        }
        element.setAttribute("points", `${coordinates}`)
        element.setAttribute("id", `rectangle_${this.number}`)
        element.setAttribute("fill", `${random_color()}`)
        element.addEventListener('click', function() {
            console.log("CLICK!");
        });
        svg.append(element);
    }

    draw(){
        let check_x = this.chek_x_coordinate();
        
        let check_y = this.chek_y_coordinate();
        if (!check_x || !check_y){
            if (!check_x && check_y){
                this.decrease_x = -this.decrease_x;
                this.decrease_y = this.decrease_y;
            } else if (check_x && !check_y){
                this.decrease_x = this.decrease_x;
                this.decrease_y = -this.decrease_y;
            } else {
                this.decrease_x = -this.decrease_x;
                this.decrease_y = -this.decrease_y;
            };
            this.udpate_coordinate();
            this.draw();    
        } else{
            let t = document.getElementById(`rectangle_${this.number}`);
            t.setAttribute("transform", `translate(${this.x}, ${this.y})`);
            this.udpate_coordinate();
        };
    };

    chek_x_coordinate(){
        let flag = true;
        for (let i = 0; i < this.arr_x.length; i++){
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
        this.x = this.x + this.decrease_x;
        this.y = this.y + this.decrease_y;
    };
};