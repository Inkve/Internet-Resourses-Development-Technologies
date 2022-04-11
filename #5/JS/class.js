class triangle{
    arr_x;
    arr_y;
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

    first_draw(){
        let svg = document.getElementById('svg');
        let t = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        let coordinates = "";
        for (let i = 0; i < this.arr_x.length; i++){
            coordinates += `${this.arr_x[i]}` + " " + `${this.arr_y[i]}` + " "
        }
        t.setAttribute("points", `${coordinates}`)
        t.setAttribute("fill", `${random_color()}`)
        t.setAttribute("id", "one")
        svg.append(t);
    }

    draw(){
        if (!this.chek_x_coordinate() || !this.chek_y_coordinate()){
            if (!this.chek_x_coordinate() && this.chek_y_coordinate()){
                this.decrease_x = -this.decrease_x * 0.9;
                this.decrease_y = this.decrease_y * 0.9;
            } else if (this.chek_x_coordinate() && !this.chek_y_coordinate()){
                this.decrease_x = this.decrease_x * 0.9;
                this.decrease_y = -this.decrease_y * 0.9;
            } else {
                this.decrease_x = -this.decrease_x * 0.9;
                this.decrease_y = -this.decrease_y * 0.9;
            };
            this.udpate_coordinate();
            this.draw();    
        } else{
            let t = document.getElementById("one");
            t.setAttribute("transform", `translate(${Math.min.apply(null, this.arr_x)}, ${Math.min.apply(null, this.arr_y)})`);
            this.udpate_coordinate();
        };
    }

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