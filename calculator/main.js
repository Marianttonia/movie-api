var grid = [];
var operacao = "";

function test (display){
  if (display.id === "clean"){
    grid = grid.slice(0,-1);
    console.log(grid);
  } else {
    grid += display.id;
  }
  gridhtml.innerHTML = grid;
  console.log(grid);
};

function calculator (display, operators) {
    if (operators === "+") { 
        operacao = display + display;
    };
    if (operators === "-") {
        operacao = display - display;
    };
    if (operators === "%") {
        operacao = display / display;
    };
    if (operators === "x") {
        operacao = display * display; 
    };
    return operacao;
};

function validation(calculator, display) {
    if (operacao === "") {
        alert("Digite a operacao desejada");
    } else {
        alert("O valor da operacao e: " , calculator(operators, display));
    };
};
