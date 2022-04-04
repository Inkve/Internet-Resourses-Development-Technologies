let qwerty = new questions;
let timer_klass;

function test_start(){
    qwerty.start_timer("timer");

    let mix_a = start_form.elements.mix_answers.checked;
    mix_a ? qwerty.random_answers = 1 : mix_a;

    qwerty.generate_selection_question('ЧТО1', ["Ответ1_1", "Ответ1_2", "Ответ1_3", "Ответ1_4"], "Ответ1_3");
    qwerty.generate_checkbox_question('ЧТО2', ["Ответ2_1", "Ответ2_2", "Ответ2_3", "Ответ2_4"], "Ответ2_1");
    qwerty.generate_radiobutton_question('ЧТО3', ["Ответ3_1", "Ответ3_2", "Ответ3_3", "Ответ3_4"], "Ответ3_4");
    qwerty.generate_free_answer_question('ЧТО4', ["Ответ4_1", "Ответ4_2", "Ответ4_3", "Ответ4_4"], "Ответ4_1");
    qwerty.generate_selection_question('ЧТО5', ["Ответ5_1", "Ответ5_2", "Ответ5_3", "Ответ5_4"], "Ответ5_3");
    qwerty.generate_checkbox_question('ЧТО6', ["Ответ6_1", "Ответ6_2", "Ответ6_3", "Ответ6_4"], "Ответ6_4");
    qwerty.generate_radiobutton_question('ЧТО7', ["Ответ7_1", "Ответ7_2", "Ответ7_3", "Ответ7_4"], "Ответ7_2");
    qwerty.generate_free_answer_question('ЧТО8', ["Ответ8_1", "Ответ8_2", "Ответ8_3", "Ответ8_4"], "Ответ8_3");

    let mix_q = start_form.elements.mix_questions.checked;
    mix_q ? qwerty.div_random() : mix_q;

    qwerty.current_div_update();

    block = document.getElementById("response_field");
    let temp_number = document.createElement('span');
    temp_number.setAttribute("id", "temp_number");
    temp_number.insertAdjacentHTML("beforeend", 'Это вопрос №1' +  '</br>');
    div_middle = document.createElement('div');
    div_middle.setAttribute("class", "div_middle");
    div_middle.setAttribute("id", "div_middle");
    div_middle.insertAdjacentHTML("beforeend", '<input type="time" id="timer_on_test" disabled>' + '</br>');
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev" onclick="qwerty.current_div_prev()"> Прошлый вопрос! </button>' 
    + '<button id="next" onclick="qwerty.current_div_next()" > Следующий вопрос! </button>');
    
    div_middle.prepend(qwerty.current_div);
    div_middle.prepend(temp_number);

    let button_divs = document.createElement("div");
    qwerty.generate_buttons();
    for (let i = 0; i < qwerty.current_number; i++){
        button_divs.append(qwerty.button_div[i]);
    }

    div_middle.append(button_divs);

    div_middle.insertAdjacentHTML("beforeend", '<button id="finish" onclick="qwerty.finish_test()"> Закончить тест! </button>');
    block.replaceWith(div_middle);
}













