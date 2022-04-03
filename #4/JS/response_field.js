class questions{
    static all_numer;
    static all_questions;
    static questions_div;
    current_number;
    current_position;
    current_name;
    current_div;

    constructor(){
        this.all_questions = [];
        this.questions_div = [];
        this.all_numer = 8;
        this.current_number = 0;
        this.current_position = 0;
        this.current_name = `current_task${this.current_number + 1}`;
        this.current_div = 0;
    };

    generate_checkbox_question(){
        this.all_questions.push(new task_checkbox(`${this.current_number + 1}`, `ЧТО${this.current_number + 1}?`, `Ответ ${this.current_number + 1}_1`, `Ответ ${this.current_number + 1}_2`, `Ответ ${this.current_number + 1}_3`, `Ответ ${this.current_number + 1}_4`, "VVV", `${this.current_name}`));
        this.all_questions[this.current_number].checkbox_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div)
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    generate_radiobutton_question(){
        this.all_questions.push(new task_radiobutton(`${this.current_number + 1}`, `ЧТО${this.current_number + 1}?`, `Ответ ${this.current_number + 1}_1`, `Ответ ${this.current_number + 1}_2`, `Ответ ${this.current_number + 1}_3`, `Ответ ${this.current_number + 1}_4`, "VVV", `${this.current_name}`));
        this.all_questions[this.current_number].radiobutton_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div)
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    current_div_update(){
        this.current_div = this.questions_div[0];
    };

    current_div_next(){
        if (this.current_position < this.current_number - 1){
            this.current_position++;
            this.current_div = this.questions_div[this.current_position];
            this.questions_div[this.current_position - 1].replaceWith(this.current_div);
        };
    };

    current_div_prev(){
        if (this.current_position > 0){
            this.current_position--;
            this.current_div = this.questions_div[this.current_position];
            this.questions_div[this.current_position + 1].replaceWith(this.current_div);
        };
    };
}

let qwerty = new questions;


function test_start(){
    qwerty.generate_checkbox_question();
    qwerty.generate_checkbox_question();
    qwerty.generate_checkbox_question();
    qwerty.generate_radiobutton_question();
    qwerty.generate_radiobutton_question();
    qwerty.current_div_update();
    console.log('qwerty: ', qwerty);

    start_timer("timer");
    
    let mix_q = start_form.elements.mix_questions.checked
    console.log('mix_q: ', mix_q);

    let mix_a = start_form.elements.mix_answers.checked
    console.log('mix_a: ', mix_a);

    block = document.getElementById("response_field");
    div_middle = document.createElement('div');
    div_middle.insertAdjacentHTML("beforeend", '<input type="time" id="timer_on_test" disabled>' + '</br>');
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev" onclick="qwerty.current_div_prev()"> Прошлый </button>' 
    + '<button id="next" onclick="qwerty.current_div_next()" > Следующий </button>');
    
    div_middle.prepend(qwerty.current_div)
    console.log('qwerty.questions_div[0]: ', qwerty.current_div);
    block.replaceWith(div_middle)
}

function next_question(){
    if ((0 <= counter) && (counter <= 3)){
        let y = counter;
        let x = counter + 1;
        questions_div[y].replaceWith(questions_div[x])
        counter++;
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
