class figure{
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
    coordinates;
    shown;
    particles_count;

    constructor(_number, x_decrease, y_decrease, color){
        this.number = _number;
        this.arr_x = [];
        this.arr_y = [];
        this.decrease_x = x_decrease;
        this.decrease_y = y_decrease;
        this.color = color;
        this.screen_heigth = window.screen.height * 0.69;
        this.screen_width = window.screen.width * 0.96;
        this.x = 0;
        this.y = 0;  
        this.coordinates = [];
        this.shown = true;
        this.particles_count = 0;
    };

    chek_x_coordinate(){
        for (let i = 0; i < this.arr_x.length; i++){
            if ((this.arr_x[i] <= 0) || (this.arr_x[i] >= this.screen_width)){
                return false;
            };
        };
        return true;
    };

    chek_y_coordinate(){
        for (let i = 0; i < this.arr_y.length; i++){
            if ((this.arr_y[i] <= 0) || (this.arr_y[i] >= this.screen_heigth)){
                return false;
            };
        };
        return true;
    };

    udpate_coordinate(){
        if (this.shown){
            let temp_coordinates = [];
            for (let i = 0; i < this.arr_x.length; i++){
                this.arr_x[i] = this.arr_x[i] + this.decrease_x;
                this.arr_y[i] = this.arr_y[i] + this.decrease_y;
            };
            this.x = this.x + this.decrease_x;
            this.y = this.y + this.decrease_y;
            for (let i = 0; i < this.arr_x.length - 1; i++){
                let xx1 = this.arr_x[i];
                let xy1 = this.arr_y[i];
                let xx2 = this.arr_x[i + 1];
                let xy2 = this.arr_y[i + 1];
                let len = Math.round(Math.sqrt((xx2 - xx1)*(xx2 - xx1) + (xy2 - xy1)*(xy2 - xy1)) / 1.8);
                let dx = (xx2 - xx1) / len;
                let dy = (xy2 - xy1) / len;
                for (let q = 0; q < len; q++){
                    temp_coordinates.push([xx1 + dx * q, xy1 + dy * q]);
                };
                this.coordinates = temp_coordinates;
            };
        };
    };
};

class triangle extends figure{
    constructor(_number, x_1, y_1, x_2, y_2, x_3, y_3, x_decrease, y_decrease, color){
        super(_number, x_decrease, y_decrease, color)
        this.arr_x.push(x_1);
        this.arr_x.push(x_2);
        this.arr_x.push(x_3);
        this.arr_y.push(y_1);
        this.arr_y.push(y_2);
        this.arr_y.push(y_3);
        this.first_draw();
    };

    first_draw(){
        let svg = document.getElementById('svg');
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let coordinates = "";
        for (let i = 0; i < this.arr_x.length; i++){
            coordinates += `${this.arr_x[i]}` + " " + `${this.arr_y[i]}` + " ";
        }
        element.setAttribute("points", `${coordinates}`);
        element.setAttribute("id", `triangle_${this.number}`);
        element.setAttribute("fill", `${random_color()}`);
        svg.append(element);
    };

    draw(){
        if (this.shown){
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
                let element = document.getElementById(`triangle_${this.number}`);
                element.setAttribute("transform", `translate(${this.x}, ${this.y})`);
                this.udpate_coordinate();
            };
        };
    };  

    hide(x_t, y_t){
        $(`#triangle_${this.number}`).hide(5);
        this.shown = false;
        for (let u = 0; u < 3; u++){
            let num = Number(this.number.toString() + this.particles_count.toString());
            let neww = new random_square_particle(num, x_t, y_t);
            particles_arr.push(neww);
            this.particles_count++;
        };
    };
};

class rectangle extends figure{
    constructor(_number, x_1, y_1, length, width, x_decrease, y_decrease, color){
        super(_number, x_decrease, y_decrease, color)
        this.arr_x.push(x_1);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1);
        this.arr_y.push(y_1);
        this.arr_y.push(y_1);
        this.arr_y.push(y_1 + width);
        this.arr_y.push(y_1 + width);
        this.first_draw();
    };

    first_draw(){
        let svg = document.getElementById('svg');
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let coordinates = "";
        for (let i = 0; i < this.arr_x.length; i++){
            coordinates += `${this.arr_x[i]}` + " " + `${this.arr_y[i]}` + " ";
        };
        element.setAttribute("points", `${coordinates}`);
        element.setAttribute("id", `rectangle_${this.number}`);
        element.setAttribute("fill", `${random_color()}`);
        element.addEventListener('click', function() {
            console.log("CLICK!");
        });
        svg.append(element);
    };

    draw(){
        if (this.shown){
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
                let element = document.getElementById(`rectangle_${this.number}`);
                element.setAttribute("transform", `translate(${this.x}, ${this.y})`);
                this.udpate_coordinate();
            };
        };
    };

    hide(x_t, y_t){
        $(`#rectangle_${this.number}`).hide(5);
        this.shown = false;
        for (let u = 0; u < 3; u++){
            let num = Number(this.number.toString() + this.particles_count.toString());
            particles_arr.push(new random_square_particle(num, x_t, y_t));
            this.particles_count++;
        };
    };
};

class particles extends figure{
    percent;
    constructor(_number, x_1, y_1, length, width, x_decrease, y_decrease, color){
        super(_number, x_decrease, y_decrease, color)
        this.arr_x.push(x_1);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1 + length);
        this.arr_x.push(x_1);
        this.arr_y.push(y_1);
        this.arr_y.push(y_1);
        this.arr_y.push(y_1 + width);
        this.arr_y.push(y_1 + width);
        this.first_draw();
        this.percent = 100;
    };

    first_draw(){
        let svg = document.getElementById('svg');
        let element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let coordinates = "";
        for (let i = 0; i < this.arr_x.length; i++){
            coordinates += `${this.arr_x[i]}` + " " + `${this.arr_y[i]}` + " ";
        };
        element.setAttribute("points", `${coordinates}`);
        element.setAttribute("id", `particle_${this.number}`);
        element.setAttribute("fill", `${random_color()}`);
        element.addEventListener('click', function() {
            console.log("CLICK!");
        });
        svg.append(element);
    };

    draw(){
        if (this.shown){
            this.hide();
            let element = document.getElementById(`particle_${this.number}`);
            element.setAttribute("transform", `translate(${this.x}, ${this.y})`);
            element.setAttribute("fill", `${random_color()}`);
            this.udpate_coordinate();
        };
        if (this.percent < 0){
            this.shown = false;
        }
    };

    hide(){
        if (this.percent >= 0){
            $(`#particle_${this.number}`).fadeTo(30, this.percent / 100);
            this.percent = this.percent - 5;
        };
    };
};
