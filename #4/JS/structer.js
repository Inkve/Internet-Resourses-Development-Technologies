class task{
    number;
    question;
    answer;
    right_answer;

    constructor(input_number, input_question, input_answer, input_rans){
        this.number = input_number;
        this.question = input_question;
        this.answer = input_answer;
        this.right_answer = input_rans;
    };
};

class task_checkbox extends task{
    name;
    fieldset;
    form;
    div;
    field1;
    field2;
    field3;
    field4;
    user_answer;
    user_score;

    constructor(input_number, input_question, input_answer, input_rans, name){
        super(input_number, input_question, input_answer, input_rans);
        this.name = name;
        this.fieldset = document.createElement('fieldset');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
        this.field1 = 0;
        this.field2 = 0;
        this.field3 = 0;
        this.field4 = 0;
        this.user_answer = [];
        this.user_score = 0;
    }

    checkbox_generate_form(){
        for (let i = 0; i <= 3; i++){
            let checkbox_element = document.createElement('input');
            checkbox_element.setAttribute("type", "checkbox");
            checkbox_element.setAttribute("id", `answer${i}`);
            checkbox_element.setAttribute("name", `answer${i}`);
            checkbox_element.setAttribute("value", `answer${i}`);
            checkbox_element.setAttribute("oninput", `qwerty.all_questions[${this.number - 1}].checkbox_save()`);
            let checkbox_text = document.createElement('span');
            checkbox_text.insertAdjacentHTML("beforeend", `${this.answer[`${i}`]}`);
            checkbox_text.insertAdjacentHTML("beforeend", "</br>");
            this.fieldset.append(checkbox_element);
            this.fieldset.append(checkbox_text);
        };
        this.form.prepend(this.fieldset);
    };

    checkbox_generate_div(){
        this.fieldset.setAttribute("id","test_id");
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.checkbox_generate_form();
        this.div.append(this.form);
    };

    checkbox_save(){
        for (let i = 1; i < 5; i++){
            this[`field${i}`] = document.getElementById(`answer${i-1}`).checked;
        };
        this.checkbox_check()
    };

    checkbox_check(){
        for (let q = 1; q < 5; q++){
            let temp = this[`field${q}`]
            if (temp == true){
                if (this.user_answer.indexOf(this.answer[q-1]) == -1){
                    this.user_answer.push(this.answer[q-1]);
                }; 
            };
            if (temp == false){
                if (this.user_answer.indexOf(this.answer[q-1]) != -1){
                this.user_answer.pop(this.answer[q-1]);
                };
            };
        };
        
        if (this.user_answer == this.right_answer){
            this.user_score = 1;
        } else {
            this.user_score = 0;
        };

    }
};

class task_radiobutton extends task{
    name;
    fieldset;
    form;
    div;
    field1;
    field2;
    field3;
    field4;
    user_answer;
    user_score;


    constructor(input_number, input_question, input_answer, input_rans, name){
        super(input_number, input_question, input_answer, input_rans);
        this.name = name;
        this.fieldset = document.createElement('fieldset');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
        this.field1 = 0;
        this.field2 = 0;
        this.field3 = 0;
        this.field4 = 0;
        this.user_answer = [];
        this.user_score = 0;
    };

    radiobutton_generate_form(){
        for (let i = 0; i <= 3; i++){
            let radiobutton_element = document.createElement('input');
            radiobutton_element.setAttribute("type", "radio");
            radiobutton_element.setAttribute("id", `answer${i}`);
            radiobutton_element.setAttribute("name", "radio");
            radiobutton_element.setAttribute("value", `answer${i}`);
            radiobutton_element.setAttribute("oninput", `qwerty.all_questions[${this.number - 1}].radiobutton_save()`);
            let radiobutton_text = document.createElement('span');
            radiobutton_text.insertAdjacentHTML("beforeend", `${this.answer[`${i}`]}`);
            radiobutton_text.insertAdjacentHTML("beforeend", "</br>");
            this.fieldset.append(radiobutton_element);
            this.fieldset.append(radiobutton_text);
        };
        this.form.prepend(this.fieldset);
    };

    radiobutton_generate_div(){
        this.fieldset.setAttribute("id","test_id");
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.radiobutton_generate_form();
        this.div.append(this.form);
    };

    radiobutton_save(){
        for (let i = 1; i < 5; i++){
            this[`field${i}`] = document.getElementById(`answer${i - 1}`).checked;
            console.log(`this[field${i}]: `, this[`field${i}`]);
        };
        this.radiobutton_check();
    };

    radiobutton_check(){
        for (let q = 1; q < 5; q++){
            let temp = this[`field${q}`]
            if (temp == true){
                if (this.user_answer.indexOf(this.answer[q-1]) == -1){
                    this.user_answer.push(this.answer[q-1]);
                }; 
            };
            if (temp == false){
                if (this.user_answer.indexOf(this.answer[q-1]) != -1){
                this.user_answer.pop(this.answer[q-1]);
                };
            };
        };
        
        if (this.user_answer == this.right_answer){
            this.user_score = 1;
        } else {
            this.user_score = 0;
        };
    };

};

class task_free_answer extends task{
    name;
    fieldset;
    form;
    div;
    field1;

    constructor(input_number, input_question, input_answer, input_rans, name){
        super(input_number, input_question, input_answer, input_rans);
        this.name = name;
        this.fieldset = document.createElement('fieldset');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
        this.field1 = 0;
    }

    free_answer_generate_form(){
        let i = 1;
        let free_answer_element = document.createElement('input');
        free_answer_element.setAttribute("type", "text");
        free_answer_element.setAttribute("id", `answer${i}`);
        free_answer_element.setAttribute("name", `answer${i}`);
        free_answer_element.setAttribute("oninput", `qwerty.all_questions[${this.number - 1}].free_answer_save()`);
        let free_answer_text = document.createElement('span');
        this.fieldset.append(free_answer_element);
        this.fieldset.append(free_answer_text);
        this.form.prepend(this.fieldset);
    };

    free_answer_generate_div(){
        this.fieldset.setAttribute("id","test_id");
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.free_answer_generate_form();
        this.div.append(this.form);
    };

    free_answer_save(){
        let i = 1;
        this[`field${i}`] = document.getElementById(`answer${i}`).value;
        console.log('`answer${i}`: ', `answer${i}`);
        console.log(`this[field${i}]: `, this[`field${i}`]);
    };
};

class task_selection extends task{
    name;
    fieldset;
    form;
    div;
    field1;

    constructor(input_number, input_question, input_answer, input_rans, name){
        super(input_number, input_question, input_answer, input_rans);
        this.name = name;
        this.fieldset = document.createElement('select');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
        this.field1 = 0;
    };

    selection_generate_form(){
        for (let i = -1; i <= 3; i++){
            if (i == -1){
                let selection_element = document.createElement('option');
                selection_element.disabled = true;
                selection_element.selected = true;
                selection_element.hidden = true;
                this.fieldset.append(selection_element);
            };
            if (i != -1){
                let selection_element = document.createElement('option');
                selection_element.setAttribute("id", `answer${i}`);
                selection_element.setAttribute("name", `answer${i}`);
                selection_element.setAttribute("value", `${this.answer[`${i}`]}`);
                let selection_text = document.createElement('span');
                selection_text.insertAdjacentHTML("beforeend", `${this.answer[`${i}`]}`);
                selection_text.insertAdjacentHTML("beforeend", "</br>");
                selection_element.append(selection_text);
                this.fieldset.append(selection_element);
            };
        };
        this.form.prepend(this.fieldset);
    };

    selection_generate_div(){
        this.fieldset.setAttribute("id", "test_id");
        this.fieldset.setAttribute("onchange", `qwerty.all_questions[${this.number - 1}].selection_save()`);
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.selection_generate_form();
        this.div.append(this.form);
    };

    selection_save(){
        for (let i = 1; i < 5; i++){
            this[`field${i}`] = document.getElementById(`answer${i}`).selected;
            console.log(`this[field${i}]: `, this[`field${i}`]);
        };
    };
};

class questions{
    static all_questions;
    static questions_div;
    current_number;
    current_position;
    current_name;
    current_div;
    button_div;
    button_number;
    random_answers;
    timer_interval;
    user_answer;
    user_score;
    all_score;

    constructor(){
        this.all_questions = [];
        this.questions_div = [];
        this.current_number = 0;
        this.current_position = 0;
        this.current_name = `current_task${this.current_number + 1}`;
        this.current_div = 0;
        this.button_div = [];
        this.button_number = 0;
        this.random_answers = 0;
        this.timer_interval = 0;
        this.all_score = 0;
    };

    generate_checkbox_question(input_question, input_answer, input_rans){
        if (this.random_answers == 1){
            let  arr = [];
            while (arr.length < 4){
                let a = Math.round(Math.random() * (4));
                if ((arr.indexOf(a) == -1) && ((a <= 3))){
                    arr.push(a);
                };
            }; 
            let random_answer = [];
            for (let i = 0; i < arr.length; i++){
                random_answer.push(input_answer[arr[i]]);
            };
            input_answer = random_answer;
        };
        this.all_questions.push(new task_checkbox(`${this.current_number + 1}`, input_question, input_answer, input_rans, `${this.current_name}`));
        this.all_questions[this.current_number].checkbox_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    checkbox_check(){

    }

    generate_radiobutton_question(input_question, input_answer, input_rans){
        if (this.random_answers == 1){
            let  arr = [];
            while (arr.length < 4){
                let a = Math.round(Math.random() * (4));
                if ((arr.indexOf(a) == -1) && ((a <= 3))){
                    arr.push(a);
                };
            }; 
            let random_answer = [];
            for (let i = 0; i < arr.length; i++){
                random_answer.push(input_answer[arr[i]]);
            };
            input_answer = random_answer;
        };
        this.all_questions.push(new task_radiobutton(`${this.current_number + 1}`, input_question, input_answer, input_rans, `${this.current_name}`));
        this.all_questions[this.current_number].radiobutton_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    generate_free_answer_question(input_question, input_answer, input_rans){
        this.all_questions.push(new task_free_answer(`${this.current_number + 1}`, input_question, input_answer, input_rans, `${this.current_name}`));
        this.all_questions[this.current_number].free_answer_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    generate_selection_question(input_question, input_answer, input_rans){
        if (this.random_answers == 1){
            let  arr = [];
            while (arr.length < 4){
                let a = Math.round(Math.random() * (4));
                if ((arr.indexOf(a) == -1) && ((a <= 3))){
                    arr.push(a);
                };
            }; 
            let random_answer = [];
            for (let i = 0; i < arr.length; i++){
                random_answer.push(input_answer[arr[i]]);
            };
            input_answer = random_answer;
        };
        this.all_questions.push(new task_selection(`${this.current_number + 1}`, input_question, input_answer, input_rans, `${this.current_name}`));
        this.all_questions[this.current_number].selection_generate_div();
        this.questions_div.push(this.all_questions[this.current_number].div);
        this.current_number++;
        this.current_name = `current_task${this.current_number + 1}`;
    }

    current_div_update(){
        this.current_div = this.questions_div[0];
        this.current_position = 0;
    };

    current_div_next(){
        if (this.current_position < (this.current_number - 1)){
            this.current_position++;
            this.current_div = this.questions_div[this.current_position];
            this.questions_div[this.current_position - 1].replaceWith(this.current_div);
            let qwea = document.createElement('span');
            let qweb = document.getElementById("temp_number");
            qwea.setAttribute("id", "temp_number");
            qwea.insertAdjacentHTML("beforeend", 'Это вопрос №' + `${this.current_position + 1}` +  '</br>');
            qweb.replaceWith(qwea);
        };
    };

    current_div_prev(){
        if (this.current_position > 0){
            this.current_position--;
            console.log('current_position: ', this.current_position);
            this.current_div = this.questions_div[this.current_position];
            this.questions_div[this.current_position + 1].replaceWith(this.current_div);
            let qwea = document.createElement('span');
            let qweb = document.getElementById("temp_number");
            qwea.setAttribute("id", "temp_number");
            qwea.insertAdjacentHTML("beforeend", 'Это вопрос №' + `${this.current_position + 1}` +  '</br>');
            qweb.replaceWith(qwea);
        };
    };

    start_timer(id_timer){
        timer_klass = new time(id_timer);
        this.timer_interval = setInterval('timer_klass.timing()', 1000);
    };

    div_random(){
        let  arr = [];
        while (arr.length < (this.current_number)){
            let a = Math.round(Math.random() * (this.current_number - 1));
            if ((arr.indexOf(a) == -1) && ((this.current_number - 2))){
                arr.push(a);
            }
        }

        let random_divs = [];
        for (let i = 0; i < arr.length; i++){
            random_divs.push(this.questions_div[arr[i]]);
        }
        this.questions_div = random_divs;
    }

    div_need(number){
        console.log('number: ', number);
        this.current_div = this.questions_div[number];
        this.questions_div[this.current_position].replaceWith(this.current_div);
        this.current_position = number;
        let qwea = document.createElement('span');
        let qweb = document.getElementById("temp_number");
        qwea.setAttribute("id", "temp_number");
        qwea.insertAdjacentHTML("beforeend", 'Это вопрос №' + `${this.current_position + 1}` +  '</br>');
        qweb.replaceWith(qwea);
    }


    generate_buttons(){
        for (let i = 0; i < this.current_number; i++){
            let btn = document.createElement('button');
            btn.setAttribute("onclick", `qwerty.div_need(${i})`);
            btn.append(`${i + 1}`);
            this.button_div.push(btn);
        }
    }

    finish_test(){
        clearInterval(this.timer_interval);
        block = document.getElementById("div_middle");
        let finish_div = document.createElement('div');
        let table = document.createElement('table');
        table.setAttribute("class", "finish_table")
        let table_thead = document.createElement('thead');

        let sample_thead = ["Номер вопроса", "Ваш ответ", "Правильный ответ", "Балл"];
        for (let column = 0; column < sample_thead.length; column++){
            let th = document.createElement('th');
            th.insertAdjacentHTML("beforeend", `${sample_thead[column]}`);
            table_thead.append(th);
        }
        table.append(table_thead);

        let table_tbody = document.createElement('tbody');
        for (let line = 0; line < this.current_number; line++){
            let tr = document.createElement('tr');
            let th1 = document.createElement('th');
            th1.insertAdjacentHTML("beforeend", `${line + 1}`);
            tr.append(th1);

           


            
            console.log('this.all_questions[line].field1;: ', this.all_questions[line].field1);
            console.log('this.field1: ', this.field1);



            for (let column = 1; column < sample_thead.length; column++){
                let th = document.createElement('th');
                th.insertAdjacentHTML("beforeend", `${line}` + `${column}`);
                tr.append(th);
            }
            table_tbody.append(tr);
        };
        table.append(table_tbody);
        finish_div.append(table);
        block.replaceWith(finish_div);
    };


}

