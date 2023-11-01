var grid = []
var precedence = ["(","[","{"]
var operacao = ""
var firstNumber, operator, finalNumber, resultRegex, openParenteses, closeParenteses, contentParenteses, lengthPatenteses, newRegex

function handleCharacter(character) {
  if (character.id === 'cleanDigit'){
    grid = grid.slice(0, -1)
  } else if (character.id === 'cleanAll') {
    grid = ''
  } else {
    grid += character.id
    gridhtml.innerHTML = grid
    const regex = /(\d+)|(\w)|(%)|(\+)|(-)|[/(\d+\.\d+)/)|(\w)|(%)|(\+)|(-)(\d+)/)/]/g
    resultRegex = grid.match(regex)
    if (character.id === 'result') {
      coreCalculator()
      grid = result
      gridhtml.innerHTML = grid
    }
  } // need call the validations after precedence
}

function verificationData() {
  if (grid == '') {
    alert("Digite a operacao desejada");
  }
}

function coreCalculator() {
  var operatorIndex;

  while ((operatorIndex = resultRegex.findIndex(el => el === 'x' || el === '/')) !== -1) {
    var previus = Number(operatorIndex) 
    var beforePrevius = Number(previus-1)
    var afterPrevius = Number(previus+1)
    console.log("positions by map precedence" ,beforePrevius, previus, afterPrevius)
    calculator(beforePrevius, previus, afterPrevius)
  }
  console.log(result)

  while ((operatorIndex = resultRegex.findIndex(el => el === '+' || el === '-')) !== -1) {
    var previus = Number(operatorIndex) 
    var beforePrevius = Number(previus-1)
    var afterPrevius = Number(previus+1)
    console.log("positions by map precedence" ,beforePrevius, previus, afterPrevius)
    calculator(beforePrevius, previus, afterPrevius)
  }
}

function calculator(beforePrevius, previus, afterPrevius){
    firstNumber = Number(resultRegex[beforePrevius])
    operator = resultRegex[previus] 
    finalNumber = Number(resultRegex[afterPrevius]) //
    console.log("pars calc" ,firstNumber, operator, finalNumber)
    if (operator === "/") {
        result = firstNumber / finalNumber
    }
    if (operator === "x") {
        result = firstNumber * finalNumber;
    }
    if (operator === "+") { 
        result = firstNumber + finalNumber
    }
    if (operator === "-") {
        result = firstNumber - finalNumber
    }
    resultRegex.splice(beforePrevius, 3, result) // 
    console.log(result, resultRegex)
}

console.log(coreCalculator())