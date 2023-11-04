var grid = ''
var resultValue = ''
var firstNumber, operator, finalNumber, resultRegex, manipulationCalcule, operatorIndex, limitIndex, firstfinaly
const regex = /(\d+(\.\d+)?|[\+\-\*\/x(){}\[\]])/g

resultRegex = ['{', '[', '(', '2', '+', '(', '-', '2', ')', '-', '(','-', '2', ')', ')', '+', '3', ']', '-', '2', '}', '-', '(', '-', '30', ')'] 

// function handleCharacter(character) {
//   grid += character.id
//   gridhtml.innerHTML = grid
//   resultRegex = grid.match(regex)
// }
// function clean() { 
//   grid = grid.slice(0,-1)
//   gridhtml.innerHTML = grid
// }
// function cleanAll() {
//   grid = ''
//   gridhtml.innerHTML = grid
// }

// function validation() {
//   if (grid == '') {
//     alert("Digite a operacao desejada");
//   } else {
//     try {
//       result()
//       gridhtml.innerHTML = resultValue
//     } catch(e) {
//       alert('Digite a expressao corretamente' , e.messsage)
//     }
//   }
// }


function result() {
  manipulationCalcule = resultRegex.slice() 
  if ((precedenceIndex = resultRegex.findIndex(el => el === '(')) !== -1) {
    if (limitIndex = resultRegex.findIndex(limit => limit === ')' ))
        integerCheck()
        precedenceOrder(precedenceIndex)
      }
      if ((precedenceIndex = resultRegex.findIndex(el => el === '[')) !== -1) {
        if (limitIndex = resultRegex.findIndex(limit => limit === ']' )) {
          integerCheck()
          precedenceOrder(precedenceIndex)
        } 
      } 
      if ((precedenceIndex = resultRegex.findIndex(el => el === '{')) !== -1) {
        if (limitIndex = resultRegex.findIndex(limit => limit === '}' )) {
          integerCheck()
          precedenceOrder(precedenceIndex)
        } 
      }
      if (isNaN(resultValue)) {
        throw Error ('Expressao invalida')
      } // recebe o result value e o tratamento de erro ja foi feito
}

function precedenceOrder(precedenceIndex) {
  var initIndex = Number(precedenceIndex+1)
  manipulationCalcule = manipulationCalcule.slice(initIndex, limitIndex)
  calculeLength = (Number(manipulationCalcule.length)) +2
  coreCalculator() // call corecalculator
  resultRegex.splice(precedenceIndex, calculeLength)
  resultRegex.splice(precedenceIndex, 0, resultValue)
  manipulationCalcule = resultRegex
}
    
function coreCalculator() {
  while ((operatorIndex = manipulationCalcule.findIndex(el => el === 'x' || el === '/')) !== -1){
    calculator(operatorIndex-1, operatorIndex, operatorIndex+1)
  }
  while ((operatorIndex = manipulationCalcule.findIndex(el => el === '+' || el === '-')) !== -1) {
    calculator(operatorIndex-1, operatorIndex, operatorIndex+1)
  }
  return resultValue
}
      
function calculator(beforePrevius, previus, afterPrevius){
  firstNumber = Number(manipulationCalcule[beforePrevius])
  operator = manipulationCalcule[previus] 
  finalNumber = Number(manipulationCalcule[afterPrevius])
  console.log("pars calc" ,firstNumber, operator, finalNumber)
  if (operator === '/') {
      resultValue = firstNumber / finalNumber
  }
  if (operator === 'x') {
      resultValue = firstNumber * finalNumber
  }
  if (operator === '+') { 
      resultValue = firstNumber + finalNumber
  }
  if (operator === '-') {
      resultValue = firstNumber - finalNumber
  }
  if (manipulationCalcule.length > 0) {
      manipulationCalcule.splice(beforePrevius, 3, resultValue) 
      console.log(resultValue, manipulationCalcule)
  } else {
      return resultValue
  }
}

result()

function integerCheck() {
  if (firstClose = resultRegex.findIndex(firstFinaly => firstFinaly === ')')) {
    var verifyRational = manipulationCalcule.slice(firstClose-2, firstClose)
    var firstOpen = Number(firstClose-3)
    if (resultRegex[firstOpen] === '(' ) {
      verifyRational = Number(verifyRational.join('')) // take fist numb okay
        if (Math.sign(verifyRational) !== NaN) { 
          resultRegex.splice(firstOpen, 4)
          resultRegex.splice(firstOpen, 0, verifyRational)
          result()
      }
    } 
  }
}