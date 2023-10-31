var grid = []
var precedence = ["(","[","{"]
var operators = ["x","/"]
var operacao = ""
var firstNumber, operator, finalNumber, resultRegex, openParenteses, closeParenteses, contentParenteses, lengthPatenteses, newRegex

function handleCharacter(character) {
  if (character.id === 'cleanDigit'){
    grid = grid.slice(0, -1)
  } else if (character.id === 'cleanAll') {
    grid = ''
  } else {
    grid += character.id
  }
  gridhtml.innerHTML = grid
  const regex = /(\d+)|(\w)|(%)|(\+)|(-)|[/(\d+\.\d+)/)|(\w)|(%)|(\+)|(-)(\d+)/)/]/g
  resultRegex = grid.match(regex)
}

function verificationData() {
  if (grid == '') {
    alert("Digite a operacao desejada");
  }
}

function findIndex(arr) {
  const indexes = []
  for (let i in arr) {
    console.log(arr[i])
    if (arr[i] === 'x' || arr[i] === '/') {
      indexes.push(i)
    }
  }
  return indexes
}

operators.map(el, positions => { 
  var positions = findIndex(resultRegex)
  if (positions.length !== 0) {
    positions.forEach(position => {
      var beforePosition = position - 1
      var afterPosition = position + 1
      console.log("positions by map" ,beforePosition, position, afterPosition)
      calculator(beforePosition, position, afterPosition)
    })
  } else {
    position = resultRegex[1];
    beforePosition = resultRegex[0];
    afterPosition = resultRegex[2];
    console.log(resultRegex,firstNumber,operator,finalNumber);      
    result = calculator(firstNumber, operator, finalNumber)
}})

function calculator(beforePosition, position, afterPosition){
  firstNumber = Number(grid.find((e, i) => i === beforePosition))
  operator = grid.find((element, index) => index === position)
  finalNumber = Number(grid.find((element, index) => index === afterPosition))
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
  grid.splice(beforePosition, 3, result)
  return result
}

function responseCalculator() {
  grid = result
  console.log(result)
  gridhtml.innerHTML = result
}