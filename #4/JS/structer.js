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




function test_start(){
    let a = document.createElement("checkbox");
    let current_task = new task("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    creation_checkbox(current_task);

    timer_klass = new time('timer');
    console.log('timer_klass: ', timer_klass);
    timer_klass.start_timer();

    

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
    window.alert("");
};

function initial(){
    
}

