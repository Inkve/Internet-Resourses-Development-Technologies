function input_check(){
    let input = document.getElementById("input_number");
    let testing = new RegExp("^([0-9]*)$");
    let number = input.value.toString();
    let result = "";
    for (element of number){
        if ((testing.test(element)) && (result.length < 2)){
            result += element;
        } else {
            if (result.length >= 2){
                break;
            };
        };
    };
    result = Number(result);
    result == 0 ? input.value = "Введите какое-нибудь число" : input.value = result;
};