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
    timer = document.getElementById("timer");
    time = timer.value;
    console.log(time.split(":"))
    let a = document.createElement("checkbox");
    let current_task = new task("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    creation_checkbox(current_task);

}





function creation_checkbox(current){
    block = document.getElementById("response_field");

    block.insertAdjacentHTML("afterend", `<input  name=current.answer1 type="checkbox"> </input>` + "</br>")
    block.insertAdjacentHTML("afterend", `<input id="checkbox" name=(current.answer)${2} type="checkbox"> </input>` + "</br>")
    block.insertAdjacentHTML("afterend", `<input id="checkbox" name=current.answer${3} type="checkbox"> </input>` + "</br>")
    block.insertAdjacentHTML("afterend", `<input id="checkbox" name=current.answer${4} type="checkbox"> </input>` + "</br>")
    block.insertAdjacentHTML("afterend", `<input id="checkbox" name=current.answer${5} type="checkbox"> </input>` + "</br>")

    block.insertAdjacentHTML("afterend", current.question + "</br>")
}


