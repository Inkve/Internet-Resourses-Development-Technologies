let current_task1; 
let current_task2;
let current_task3;
let current_task4;
let current_task5;
let current_task6;
let current_task7;
let current_task8;


function test_start(){
    generate_all();
    
 
    start_timer("timer");
    
    let mix_q = start_form.elements.mix_questions.checked
    console.log('mix_q: ', mix_q);

    let mix_a = start_form.elements.mix_answers.checked
    console.log('mix_a: ', mix_a);

    block = document.getElementById("response_field");
    div_middle = document.createElement('div');
    div_middle.insertAdjacentHTML("beforeend", '<input type="time" id="timer_on_test" disabled>' + '</br>');
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev" onclick="prev_question()"> Прошлый </button>' 
    + '<button id="next" onclick="next_question()" > Следующий </button>');
    
    div_middle.prepend(questions_div[0])
    block.replaceWith(div_middle)
}

function next_question(){
    let y = counter;
    let x = counter + 1;
    questions_div[y].replaceWith(questions_div[x])
    counter++;
}

function prev_question(){
    let y = counter;
    let x = counter - 1;
    questions_div[y].replaceWith(questions_div[x])
    counter--;

}

let counter = 0;
let questions_div = new Array;
function generate_all(){
    current_task1 = new task_checkbox(`ЧТО1?`, `Ответ 1_1`, `Ответ 1_2`, `Ответ 1_3`, `Ответ 1_4`, "VVV", `current_task1`);
    current_task2 = new task_radiobutton(`ЧТО2?`, `Ответ 2_1`, `Ответ 2_2`, `Ответ 2_3`, `Ответ 2_4`, "VVV", `current_task2`);
    current_task3 = new task_checkbox(`ЧТО3?`, `Ответ 3_1`, `Ответ 3_2`, `Ответ 3_3`, `Ответ 3_4`, "VVV", `current_task3`);
    current_task4 = new task_radiobutton(`ЧТО4?`, `Ответ 4_1`, `Ответ 4_2`, `Ответ 4_3`, `Ответ 4_4`, "VVV", `current_task4`);
    current_task1.checkbox_generate_div();
    current_task2.radiobutton_generate_div();
    current_task3.checkbox_generate_div();
    current_task4.radiobutton_generate_div();
    questions_div.push(current_task1.div);
    questions_div.push(current_task2.div);
    questions_div.push(current_task3.div);
    questions_div.push(current_task4.div);
}




function start_timer(id_timer){
    timer_klass = new time(id_timer);
    console.log('timer_klass: ', timer_klass);
    setInterval('timer_klass.timing()', 1000);
};


function finish_test(){
    window.alert("");
};
