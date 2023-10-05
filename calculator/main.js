// document.body.innerHTML = "<h1>Calculator</h1>";

// var operators = document.querySelector(".operators");
// var num1 = document.getElementById("1");
// var num2 = document.querySelector(".numbers");

// var name = document.createElement("bold").textContent("oi")
// // console.log(`name`, name)
// num1.appendChild(name);

var display = "";

function test (tag) {
    display = tag.id;
    console.log("temp", tag);
    console.log(display);
};    


function example(number1, number2) {
    console.log(number1 / number2)
}


function calculator () {
    if (operators == "+") { 
        operacao = num1 + num2;
    };
    if (operators == "-") {
        operacao = num1 - num2;
    };
    if (operators == "%") {
        operacao = num1 / num2;
    };
    if (operators == "x") {
        operacao = num1 * num2; 
    };
    return operacao;
};

function validation() {
    var operacao = ""
    if (operacao == "") {
        document.write("Digite a operacao desejada");
    } else {
        document.write("O valor da operacao e: " , calculator(operacao));
    };
};
