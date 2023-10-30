document.addEventListener("onclick", handleCharacter);

var grid = [];
var precedence = ["(","[","{"];
var operators = ["x","/","+","-"];
var operacao = "";
var firstNumber, operator, finalNumber, resultRegex, openParenteses, closeParenteses, contentParenteses, lengthPatenteses, newRegex;

function handleCharacter(character){
if (character.id === "cleanDigit"){
  grid = grid.slice(0,-1);
} else if (character.id === "cleanAll") {
  grid = "";
} else if (validation()) {
  grid += character.id;
};
gridhtml.innerHTML = grid;

function verificationData(responseVerification, errorOperator) {
  if (grid == "") {
    alert("Digite a operacao desejada");
  } else if (
    // precende +1: error
  )
}

const regex = /(\d+)|(\w)|(%)|(\+)|(-)|[/(\d+\.\d+)/)|(\w)|(%)|(\+)|(-)(\d+)/)/]/g;
// (\d+\.\d+)|(\w)|(%)|(\+)|(-)|\([(\d+\.\d+)|(\w)|(%)|(\+)|(-)(\d+\.\d+)\)]
resultRegex = grid.match(regex);
console.log("result regex", resultRegex);


function find_index (arr, value) {
  const indexes = [];
    for (let = i in arr) {
        if (arr[i] === value);   {
          indexes.push(i);
      }; 
  };
};

function operations {
  operators.map(el => { 
    position = operators.map((el) => el === find_index(grid));
    if (position !== -1) {
        var beforePosition = position-1;
        var afterPosition = position+1;
        console.log("positions by map" ,beforePosition, position, afterPosition);
        calculator(beforePosition, position, afterPosition);
    };
  });
};

function calculator(beforePosition, position, afterPosition){
    firstNumber = Number(grid.find((e, i) => i === beforePosition));
    operator = grid.find((element, index) => index === position);
    finalNumber = Number(grid.find((element, index) => index === afterPosition));
    console.log("pars calc" ,firstNumber, operator, finalNumber);

  if (operator === "%") {
      result = firstNumber / finalNumber;
  } else if (operator === "x") {
      result = firstNumber * finalNumber; 
  } else if (operator === "+") { 
      result = firstNumber + finalNumber;
  } else if (operator === "-") {
      result = firstNumber - finalNumber;
  };

  grid.splice(beforePosition, 3, result);
    console.log("grid" ,grid);
    console.log("operacao" ,result);
  return result;
};

function responseCalculator() {
  if (verificationData().response === "false") {
      alert(responseVerification());
  };
  grid = result;
  gridhtml.innerHTML = result;
};
