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

    saving(){
        let id_formw = document.getElementById('test_id');
        console.log('id_form: ', id_formw);

        // let a1 = id_form.answer1.checked;
        // console.log('a1: ', a1);
        // let a2 = id_form.answer2.checked;
        // console.log('a2: ', a2);
        // let a3 = id_form.answer3.checked;
        // console.log('a3: ', a3);
        // let a4 = id_form.answer4.checked;
        // console.log('a4: ', a4);
    }
};

class task_checkbox extends task{
    
    fieldset;
    form;
    div;

    constructor(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans){
        super(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans);
        this.fieldset = document.createElement('fieldset');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
    }

    checkbox_generate_form(){
        for (let i = 1; i <= 4; i++){
            this.fieldset.insertAdjacentHTML("beforeend", `<input type="checkbox" id=answer${i} name=answer${i} oninput="checkbox_save('current_task', 'test_id')" >` + this[`answer${i}`] + ' </input> </br>');
        };
        this.form.prepend(this.fieldset);
    };

    checkbox_generate_div(){
        this.fieldset.setAttribute("id","test_id")
        this.div.insertAdjacentHTML("beforeend", `Это вопрос №${1}` + '</br>');
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.checkbox_generate_form();
        this.div.append(this.form)
    }
}



function test_start(){
    let current_task = new task("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );
    //creation_checkbox(current_task);

    start_timer("timer");
    
    let mix_q = start_form.elements.mix_questions.checked
    console.log('mix_q: ', mix_q);

    let mix_a = start_form.elements.mix_answers.checked
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
}

function checkbox_save(checkdox_object, id_form){
    let form = document.querySelectorAll('input.checkbox:checked')
    let a1 = form.answer1.checked;
    console.log('form.elements: ', form.elements);
    console.log('a1: ', a1);
    let a2 = form.elements.answer2.checked;
    console.log('a2: ', a2);
    let a3 = form.elements.answer3.checked;
    console.log('a3: ', a3);
    let a4 = form.elements.answer4.checked;
    console.log('a4: ', a4);
}

let current1 = new task_checkbox("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );

function test(){
    // let mix_q = form.elements.mix_questions.checked
    // console.log('mix_q: ', mix_q);

    // let mix_a = form.elements.mix_answers.checked
    // console.log('mix_a: ', mix_a);
    let i = 1;
    console.log('i: ', i);
    
};



function start_timer(id_timer){
    timer_klass = new time(id_timer);
    console.log('timer_klass: ', timer_klass);
    setInterval('timer_klass.timing()', 1000);
};


function finish_test(){
    window.alert("");
};


