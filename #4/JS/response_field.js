class questions{
    static all_questions;
    static questions_div;
    current_number;
    current_position;
    current_name;
    current_div;

    constructor(){
        this.all_questions = [];
        this.questions_div = [];
        this.current_number = 0;
        this.current_position = 0;
        this.current_name = `current_task${this.current_number + 1}`;
        this.current_div = 0;
    };

    generate_checkbox_question(){
        this.all_questions.push(new task_checkbox(`${this.current_number + 1}`, `ЧТО${this.current_number + 1}?`, `Ответ ${this.current_number + 1}_1`, `Ответ ${this.current_number + 1}_2`, `Ответ ${this.current_number + 1}_3`, `Ответ ${this.current_number + 1}_4`, "VVV", `${this.current_name}`));
        this.all_questions[this.current_number].checkbox_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    generate_radiobutton_question(){
        this.all_questions.push(new task_radiobutton(`${this.current_number + 1}`, `ЧТО${this.current_number + 1}?`, `Ответ ${this.current_number + 1}_1`, `Ответ ${this.current_number + 1}_2`, `Ответ ${this.current_number + 1}_3`, `Ответ ${this.current_number + 1}_4`, "VVV", `${this.current_name}`));
        this.all_questions[this.current_number].radiobutton_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    generate_free_answer_question(){
        this.all_questions.push(new task_free_answer(`${this.current_number + 1}`, `ЧТО${this.current_number + 1}?`, `Ответ ${this.current_number + 1}_1`, `Ответ ${this.current_number + 1}_2`, `Ответ ${this.current_number + 1}_3`, `Ответ ${this.current_number + 1}_4`, "VVV", `${this.current_name}`));
        this.all_questions[this.current_number].free_answer_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    generate_selection_question(){
        this.all_questions.push(new task_selection(`${this.current_number + 1}`, `ЧТО${this.current_number + 1}?`, `Ответ ${this.current_number + 1}_1`, `Ответ ${this.current_number + 1}_2`, `Ответ ${this.current_number + 1}_3`, `Ответ ${this.current_number + 1}_4`, "VVV", `${this.current_name}`));
        this.all_questions[this.current_number].selection_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    current_div_update(){
        this.current_div = this.questions_div[0];
    };

    current_div_next(){
        if (this.current_position < (this.current_number - 1)){
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

    start_timer(id_timer){
        timer_klass = new time(id_timer);
        setInterval('timer_klass.timing()', 1000);
    };

    div_random(){
        let  arr = [];
        while (arr.length < (this.current_number)){
            let a = Math.round(Math.random() * (this.current_number - 1))
            console.log('a: ', a);
            if ((arr.indexOf(a) == -1) && ((this.current_number - 2))){
                arr.push(a)
            }
            console.log(' arr: ',  arr);
        }

        let random_divs = [];
        for (let i = 0; i < arr.length; i++){
            random_divs.push(this.questions_div[arr[i]]);
        }
        this.questions_div = random_divs;
    }

}

let qwerty = new questions;
let timer_klass;


function test_start(){
    qwerty.start_timer("timer");

    qwerty.generate_selection_question();
    qwerty.generate_checkbox_question();
    qwerty.generate_radiobutton_question();
    qwerty.generate_free_answer_question();
    qwerty.generate_selection_question();
    qwerty.generate_checkbox_question();
    qwerty.generate_radiobutton_question();
    qwerty.generate_free_answer_question();


    
    

    
    let mix_q = start_form.elements.mix_questions.checked;
    mix_q ? qwerty.div_random() : mix_q;

    qwerty.current_div_update();

    let mix_a = start_form.elements.mix_answers.checked
    console.log('mix_a: ', mix_a);

    block = document.getElementById("response_field");
    div_middle = document.createElement('div');
    div_middle.insertAdjacentHTML("beforeend", '<input type="time" id="timer_on_test" disabled>' + '</br>');
    div_middle.insertAdjacentHTML("beforeend", '<button id="prev" onclick="qwerty.current_div_prev()"> Прошлый </button>' 
    + '<button id="next" onclick="qwerty.current_div_next()" > Следующий </button>');
    
    div_middle.prepend(qwerty.current_div);
    block.replaceWith(div_middle);
}












function finish_test(){
    window.alert("");
};
