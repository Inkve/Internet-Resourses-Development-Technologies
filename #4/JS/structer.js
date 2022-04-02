class task{
    question;
    answer1;
    answer2;
    answer3;
    answer4;
    right_answer;

    constructor(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans){
        this.question = input_question;
        this.answer1 = input_ans1;
        this.answer2 = input_ans2;
        this.answer3 = input_ans3;
        this.answer4 = input_ans4;
        this.right_answer = input_rans;
    };
};

class task_checkbox extends task{
    form;
    div;

    constructor(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans){
        super(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans);
        this.form = document.createElement('form');
        this.div = document.createElement('div');
    }

    checkbox_generate_form(){
        for (let i = 1; i <= 4; i++){
            this.form.insertAdjacentHTML("beforeend", `<input type="checkbox" id=answer${i} name=answer${i}>` + this[`answer${i}`] + ' </input> </br>');
        };
    };

    checkbox_generate_div(){
        this.div.insertAdjacentHTML("beforeend", `Это вопрос №${1}` + '</br>');
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.checkbox_generate_form();
        this.div.append(this.form)
    }
}




function test_start(){
    let a = document.createElement("checkbox");
    let current_task = new task("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    //creation_checkbox(current_task);

    start_timer("timer");
    
    let mix_q = form.elements.mix_questions.checked
    console.log('mix_q: ', mix_q);

    let mix_a = form.elements.mix_answers.checked
    console.log('mix_a: ', mix_a);

    block = document.getElementById("response_field");
    div_middle = document.createElement('div');
    div_middle.insertAdjacentHTML("beforeend", '<input type="time" id="timer_on_test" disabled>' + '</br>');
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev"> Прошлый </button>' + '<button id="prev"> Следующий </button>');
    

    

    
    let current1 = new task_checkbox("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    console.log('current1: ', current1);
    current1.checkbox_generate_div()

    div_middle.prepend(current1.div)
    block.replaceWith(div_middle)

    // vvb = document.createElement("fhfh");
    // vvb.innerHTML = current.question.toString();
    // block.insertAdjacentHTML("afterend", vvb.value + "</br>")
    // for (i = 1; i < 5; i++){
    //     let r1 =  current[`answer${i}`].toString();
    //     console.log('r1: ', r1);
    //     block.insertAdjacentHTML("afterend", "<input value=r1 type='checkbox'>"+ r1 + '</input>' + '</br>')
    // };
    
    
    // <div>
    //         <div>
    //             Это вопрос №1 </br>
    //             Название вопроса
    //             <form id="form1">
    //                 <input type="checkbox" id="ans1" name="ans1"> Ответ_1 </input> </br>
    //                 <input type="checkbox" id="ans2" name="ans2"> Ответ_2 </input> </br>
    //                 <input type="checkbox" id="ans3" name="ans3"> Ответ_3 </input> </br>
    //                 <input type="checkbox" id="ans4" name="ans4"> Ответ_4 </input> </br>
    //             </form>
    //         </div>
    //        
    //     </div>"



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


function start_timer(id_timer){
    timer_klass = new time(id_timer);
    console.log('timer_klass: ', timer_klass);
    setInterval('timer_klass.timing()', 1000);
};


function finish_test(){
    window.alert("");
};

function initial(){
    let current = new task("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    line0 = document.getElementById("response_field");
    line1 = document.createElement("span");
    line1.innerHTML = "</br>" + 'Это очень важный опрос' + "</br>";
    for (i = 1; i < 5; i++){
        let r1 =  current[`answer${i}`].toString();
        `line${i++}.innerHTML = "<input value=r1 type='checkbox'>" + r1 + '</input>' + '</br>'`
        `line${i}.appendChild(line${i++});`
    };

//     ddffd = 'dhdhhdhd'
//     console.log('line1: ', line1);
//     line0.insertAdjacentText("afterend", `${line1}`);
//     line0.insertAdjacentText("afterend", `${ddffd}`);
}

//<button onclick="test_start()"> Начать! </button>

//<input type="time" value="00:30:00" min="00:05:00" step="1" max="01:00:00" id="timer" required> 