class task{
    question;
    answer1;
    answer2;
    answer3;
    answer4;
    #right_answer;

    constructor(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans){
        this.question = input_question;
        this.answer1 = input_ans1;
        this.answer2 = input_ans2;
        this.answer3 = input_ans3;
        this.answer4 = input_ans4;
        this.#right_answer = input_rans;
    };
}


class time{
    timer;
    timer_value;
    time_hour;
    time_minutes;
    time_seconds;
    seconds;
    constructor(id_timer){
        this.timer = document.getElementById(id_timer);
        this.time = this.timer.value;
        this.time_hour = Number(this.timer.value.split(':')[0]);
        this.time_minutes = Number(this.timer.value.split(':')[1]);
        this.time_seconds = Number(this.timer.value.split(':')[2]);
        this.seconds = (this.time_hour * 3600) + (this.time_minutes * 60) + (this.time_seconds);
    };
    timing() {
        if (this.seconds > 0){
            this.seconds -= 1;
            let h = Math.trunc(this.seconds / 3600);
            let h1 = (h.toString().length == 2) ? (h) : ('0' + h);
            let m = Math.trunc(((this.seconds - (h * 3600)) / 60));
            let m1 = (m.toString().length == 2) ? (m) : ('0' + m);
            let s = ((this.seconds - (h * 60) - (m * 60)) % 60);
            let s1 = (s.toString().length == 2) ? (s) : ('0' + s);
            timer.value = h1 + ":" + m1 + ":" + s1;
            console.log('timer.value: ', timer.value);
        };
    };
    countdown() {
        let timer_id1 = setTimeout('finish_test()', (this.seconds * 1000));
    };
};




function test_start(){
    let a = document.createElement("checkbox");
    let current_task = new task("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    creation_checkbox(current_task);

    nn = new time('timer');
    nn.countdown();
    setInterval('nn.timing()', 1000)
    console.log('nn: ', nn);

}





function creation_checkbox(current){
    block = document.getElementById("response_field");
    vvb = document.createElement("fhfh");
    vvb.innerHTML = current.question.toString();
    block.insertAdjacentHTML("afterend", vvb.value + "</br>")
    for (i = 1; i < 5; i++){
        let r1 =  current[`answer${i}`].toString();
        console.log('r1: ', r1);
        block.insertAdjacentHTML("afterend", "<input value=r1 type='checkbox'>"+ r1 + '</input>' + '</br>')
    };
}





function finish_test(){
    window.alert("RFGHGGGG");
};