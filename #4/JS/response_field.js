let qwerty = new questions;
let timer_klass;

function test_start(){
    qwerty.start_timer("timer");

    let mix_a = start_form.elements.mix_answers.checked;
    mix_a ? qwerty.random_answers = 1 : mix_a;

    qwerty.generate_selection_question('Задачами пожарной профилактики являются:', ["!Создание превентивных мер, которые направлены на исключение возможности возникновения пожаров и минимизацию их последствий", "Организация мер по минимизации разрушительного воздействия огня на людей и материальные ценности", "Ограничение распространения огня", "Ничего"], "!Создание превентивных мер, которые направлены на исключение возможности возникновения пожаров и минимизацию их последствий");
    qwerty.generate_checkbox_question('Какой вид противопожарного инструктажа проходят работники при устройстве на работу?', ["!Целевой", "Выдуманный", "Плановый", "!Первичный"], ["!Первичный", "!Целевой"]);
    qwerty.generate_radiobutton_question('Опасными факторами пожара являются:', ["Пламя, искры и тепловой поток; снижение видимости в дыму", "Снижение концентрации кислорода в воздухе; повышение температуры окружающей среды; вероятный взрыв", "!Повышенная концентрация отравляющих продуктов горения и термического разложения; пламя, искры и тепловой поток; снижение видимости в дыму; снижение концентрации кислорода в воздухе", "Всё"], "!Повышенная концентрация отравляющих продуктов горения и термического разложения; пламя, искры и тепловой поток; снижение видимости в дыму; снижение концентрации кислорода в воздухе");
    qwerty.generate_free_answer_question('Развивающийся стихийно и неконтролируемый процесс горения, который приводит к уничтожению материальных ценностей и представляет опасность для жизни людей, что это?', ["Ответ4_1", "Ответ4_2", "Ответ4_3", "Ответ4_4"], "Пожар");
    qwerty.generate_selection_question('К вторичным проявлениям опасных факторов пожара, которые оказывают воздействие на материальные ценности и людей, относятся:', ["!Вещества, предназначенные для огнетушения", "Токсичные продукты горения", "Дым", "Кислород"], "!Вещества, предназначенные для огнетушения");
    qwerty.generate_checkbox_question(' Укажите удаленность площадок для курения от мест хранения известкового ила, удаленного из ацетиленового генератора:', ["5 метров", "Не менее 7 метров", "!Не менее 10 метров", "Не менее 40 метров"], "!Не менее 10 метров");
    qwerty.generate_radiobutton_question('Расстояние между прожекторами и горючими конструкциями составляет:', ["Не менее 5 метров", "!Определяется техпаспортом прожектора", "Не менее 10 метров", "Не менее 40 метров"], "!Определяется техпаспортом прожектора");
    qwerty.generate_free_answer_question('В какой цвет окрашивают пожарные шкафы?', ["Ответ8_1", "Ответ8_2", "Ответ8_3", "Ответ8_4"], "Красный");

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
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev" onclick="qwerty.current_div_prev()" class="standart"> Прошлый вопрос! </button>' 
    + '<button id="next" onclick="qwerty.current_div_next()" class="standart"> Следующий вопрос! </button>');
    
    div_middle.prepend(qwerty.current_div);
    div_middle.prepend(temp_number);

    let button_divs = document.createElement("div");
    qwerty.generate_buttons();
    for (let i = 0; i < qwerty.current_number; i++){
        button_divs.append(qwerty.button_div[i]);
    }

    div_middle.append(button_divs);
    div_middle.insertAdjacentHTML("beforeend", '<button id="finish" onclick="qwerty.finish_test()" class="standart"> Закончить тест! </button>');
    block.replaceWith(div_middle);
}













