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
    name;
    fieldset;
    form;
    div;
    field1;
    field2;
    field3;
    field4;

    constructor(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans, name){
        super(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans);
        this.name = name;
        this.fieldset = document.createElement('fieldset');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
    }

    checkbox_generate_form(){
        for (let i = 1; i <= 4; i++){
            let checkbox_element = document.createElement('input');
            checkbox_element.setAttribute("type", "checkbox")
            checkbox_element.setAttribute("id", `answer${i}`)
            checkbox_element.setAttribute("name", `answer${i}`)
            checkbox_element.setAttribute("value", `answer${i}`)
            checkbox_element.setAttribute("oninput", `${this.name}.checkbox_save()`)
            let checkbox_text = document.createElement('span');
            checkbox_text.insertAdjacentHTML("beforeend", `${this[`answer${i}`]}`)
            checkbox_text.insertAdjacentHTML("beforeend", "</br>")
            this.fieldset.append(checkbox_element);
            this.fieldset.append(checkbox_text);
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

    checkbox_save(){
        for (let i = 1; i < 5; i++){
            this[`field${i}`] = document.getElementById(`answer${i}`).checked
            console.log(`this[field${i}]: `, this[`field${i}`]);
        }
    }
}

class task_radiobutton extends task{
    name;
    fieldset;
    form;
    div;
    field1;
    field2;
    field3;
    field4;

    constructor(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans, name){
        super(input_question, input_ans1, input_ans2, input_ans3, input_ans4, input_rans);
        this.name = name;
        this.fieldset = document.createElement('fieldset');
        this.form = document.createElement('form');
        this.div = document.createElement('div');
    }

    radiobutton_generate_form(){
        for (let i = 1; i <= 4; i++){
            let radiobutton_element = document.createElement('input');
            radiobutton_element.setAttribute("type", "radio")
            radiobutton_element.setAttribute("id", `answer${i}`)
            radiobutton_element.setAttribute("name", "radio")
            radiobutton_element.setAttribute("value", `answer${i}`)
            radiobutton_element.setAttribute("oninput", `${this.name}.radiobutton_save()`)
            let radiobutton_text = document.createElement('span');
            radiobutton_text.insertAdjacentHTML("beforeend", `${this[`answer${i}`]}`)
            radiobutton_text.insertAdjacentHTML("beforeend", "</br>")
            this.fieldset.append(radiobutton_element);
            this.fieldset.append(radiobutton_text);
        };
        this.form.prepend(this.fieldset);
    };

    radiobutton_generate_div(){
        this.fieldset.setAttribute("id","test_id")
        this.div.insertAdjacentHTML("beforeend", `Это вопрос №${1}` + '</br>');
        this.div.insertAdjacentHTML("beforeend", 'Название вопроса: ' + this.question + '</br>');
        this.radiobutton_generate_form();
        this.div.append(this.form)
    }

    radiobutton_save(){
        for (let i = 1; i < 5; i++){
            this[`field${i}`] = document.getElementById(`answer${i}`).checked
            console.log(`this[field${i}]: `, this[`field${i}`]);
        }
    }
}





