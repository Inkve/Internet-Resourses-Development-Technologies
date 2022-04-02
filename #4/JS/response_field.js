

function seen(){
    // forma = document.getElementById("forma_id")
    // let a = `forma.${ttr}.checked`;
    let q = document.getElementById("mm").checked
    console.log('q: ', q);
    // console.log('a: ', a);
}



let current_task1; 
let current_task2;
let current_task3;


function test_start(){
    current_task1 = new task_checkbox("ЧТО1?", "Ответ 1_1", "Ответ 1_2", "Ответ 1_3", "Ответ 1_4", "VVV", "current_task1" );
    current_task2 = new task_radiobutton("ЧТО2?", "Ответ 2_1", "Ответ 2_2", "Ответ 2_3", "Ответ 2_4", "VVV", "current_task2");
    //creation_checkbox(current_task);

    start_timer("timer");
    
    let mix_q = start_form.elements.mix_questions.checked
    console.log('mix_q: ', mix_q);

    let mix_a = start_form.elements.mix_answers.checked
    console.log('mix_a: ', mix_a);

    block = document.getElementById("response_field");
    div_middle = document.createElement('div');
    div_middle.insertAdjacentHTML("beforeend", '<input type="time" id="timer_on_test" disabled>' + '</br>');
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev" onclick="current_task1.div.replaceWith(current_task2.div)"> Прошлый </button>' 
    + '<button id="next" onclick="current_task2.div.replaceWith(current_task1.div)" > Следующий </button>');
    current_task1.checkbox_generate_div()
    current_task2.radiobutton_generate_div()
    div_middle.prepend(current_task1.div)
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

//let current1 = new task_checkbox("ЧТО?", "Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "VVV" );

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
