var question_answer = [-1,-1,-1,-1];
const coffee = ['Expresso', 'Latte', 'Cappuccino', 'Americano', 'Hot Drip Coffee', 'Mocha']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setQ1(ans){
    resetButtons("1");
    var buttonColor = document.getElementsByClassName("ans1")[ans-1];
    buttonColor.style.backgroundColor = "rgb(128, 131, 131)";
    buttonColor.style.color = "white";
    question_answer[0] = ans;
}

function setQ2(ans){
    resetButtons("2");
    var buttonColor = document.getElementsByClassName("ans2")[ans-1];
    buttonColor.style.backgroundColor = "rgb(128, 131, 131)";
    buttonColor.style.color = "white";
    question_answer[1] = ans;
}

function setQ3(ans){
    resetButtons("3");
    var buttonColor = document.getElementsByClassName("ans3")[ans-1];
    buttonColor.style.backgroundColor = "rgb(128, 131, 131)";
    buttonColor.style.color = "white";
    question_answer[2] = ans;
}

function setQ4(ans){
    resetButtons("4");
    var buttonColor = document.getElementsByClassName("ans4")[ans-1];
    buttonColor.style.backgroundColor = "rgb(128, 131, 131)";
    buttonColor.style.color = "white";
    question_answer[3] = ans;
}


function compileResults(){
    var result_body = document.querySelector("#result-body");

    var result = [];

    if (question_answer[0] == 1 || question_answer[1] == 2){
        result.push('Expresso');
    }
    else{
        result.push('Hot Drip Cofee')
    }

    if (question_answer[2] == 1){
        result.push('Cappuccino');
        result.push('Latte');
    }
    else if (question_answer[2] == 2){
        result.push('Flat White');
        result.push('Macchiato');
    }
    else if (question_answer[2] == 3){
        result.push('White Chocolate Mocha');
    }
    else{
        result.push('Cappuccino');
        result.push('Latte');
        result.push('White Chocolate Mocha');
        result.push('Flat White');
    }

    if (question_answer[3] == 1){
        result.push('Expresso');
    }
    else if (question_answer[3] == 2){
        result.push('Flat White');
        result.push('Macchiato');
        result.push('Cappuccino');
        result.push('Latte');
    }
    else if (question_answer[3] == 3){
        result.push('White Chocolate Mocha');
    }
    else{
        result.push('Flat White');
        result.push('Macchiato');
        result.push('Cappuccino');
        result.push('Latte');
        result.push('Expresso');
        result.push('White Chocolate Mocha');
    }

    if (question_answer[1] == 4){
        result_body.innerHTML = `You Got Matched With Decaf ${result[getRandomInt(result.length)]}`;
    }
    else{
        result_body.innerHTML = `You Got Matched With ${result[getRandomInt(result.length)]}`;
    }
    

}

function resetButtons(num){
    var elements = document.getElementsByClassName("ans"+num);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="white";
        elements[i].style.color="black";
    }

}
