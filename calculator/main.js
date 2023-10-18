var grid = [];
var operacao = "";
var firstNumber, operator, finalNumber, resultRegex;

function handleCharacter(character){
  if (character.id === "cleanDigit"){
    grid = grid.slice(0,-1);
  } else if (character.id === "cleanAll") {
    grid = "";
  } else {
    grid += character.id;
  };
  gridhtml.innerHTML = grid;
 
  const regex = /(\d+)|(\w)|(%)|(-)|(\+)|(\d+)/g;
  resultRegex = grid?.match(regex);
  firstNumber = Number(resultRegex[0]);
  operator = resultRegex[1];
  finalNumber = Number(resultRegex[2]);
};

function calculator (firstNumber, operator, finalNumber) {
    if (operator === "+") { 
        operacao = firstNumber + finalNumber;
    };
    if (operator === "-") {
        operacao = firstNumber - finalNumber;
    };
    if (operator === "%") {
        operacao = firstNumber / finalNumber;
    };
    if (operator === "x") {
        operacao = firstNumber * finalNumber; 
    };
    return operacao;
};

function validation() {
    if (grid === "") {
        alert("Digite a operacao desejada");
    } else {
      i = 0;
      while (i < resultRegex.length) {
        var result = calculator(firstNumber, operator, finalNumber);
        firstNumber = Number(result);
        operator = resultRegex[1];
        finalNumber = Number(resultRegex[2]);
        console.log(resultRegex,firstNumber,operator,finalNumber);
        i++;
        };
      
        result = calculator(firstNumber, operator, finalNumber);
        gridhtml.innerHTML = result;
        grid = result;
    };
};
