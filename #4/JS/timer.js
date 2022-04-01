class time{
    #timer;
    #time_hour;
    #time_minutes;
    #time_seconds;
    #seconds;
    constructor(id_timer){
        this.#timer = document.getElementById(id_timer);
        this.#time_hour = Number(this.#timer.value.split(':')[0]);
        this.#time_minutes = Number(this.#timer.value.split(':')[1]);
        this.#time_seconds = Number(this.#timer.value.split(':')[2]);
        this.#seconds = (this.#time_hour * 3600) + (this.#time_minutes * 60) + (this.#time_seconds);
    };
    timing() {
        if (this.#seconds > 0){
            this.#seconds -= 1;
            let h = Math.trunc(this.#seconds / 3600);
            let h1 = (h.toString().length == 2) ? (h) : ('0' + h);
            let m = Math.trunc(((this.#seconds - (h * 3600)) / 60));
            let m1 = (m.toString().length == 2) ? (m) : ('0' + m);
            let s = ((this.#seconds - (h * 60) - (m * 60)) % 60);
            let s1 = (s.toString().length == 2) ? (s) : ('0' + s);
            timer.value = h1 + ":" + m1 + ":" + s1;
            console.log('timer.value: ', timer.value);
        };
    };
    #countdown() {
        let timer_id_finish = setTimeout('finish_test()', (this.#seconds * 1000));
    };
    start_timer(){
        this.#countdown();
        let timer_id_cound = setInterval('timer_klass.timing()', 1000);
    };
};