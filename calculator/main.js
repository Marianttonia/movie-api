var grid = ''
var resultValue = ''
var firstNumber, operator, finalNumber, resultRegex, manipulationCalcule, operatorIndex, limitIndex, firstfinaly
const regex = /(\d+(\.\d+)?|[\+\-\*\/x(){}\[\]])/g

function handleCharacter(character) {
  grid += character.id
  gridhtml.innerHTML = grid
  resultRegex = grid.match(regex)
}
function clean() { 
  grid = grid.slice(0,-1)
  gridhtml.innerHTML = grid
}
function cleanAll() {
  grid = ''
  gridhtml.innerHTML = grid
}

function validation() {
  if (grid == '') {
    alert("Digite a operacao desejada");
  } else {
    try {
      result()
      gridhtml.innerHTML = resultValue
    } catch(e) {
      alert('Digite a expressao corretamente' , e.messsage)
    }
  }
}

function precedenceOrder(precedenceIndex) {
  var initIndex = Number(precedenceIndex+1)
  manipulationCalcule = manipulationCalcule.slice(initIndex, limitIndex)
  calculeLength = (Number(manipulationCalcule.length)) +2
  coreCalculator()
  resultRegex.splice(precedenceIndex, calculeLength)
  resultRegex.splice(precedenceIndex, 0, resultValue)
  manipulationCalcule = resultRegex
}
function result() {
  manipulationCalcule = resultRegex.slice() 
  if ((precedenceIndex = resultRegex.findIndex(el => el === '(')) !== -1) {
      if (limitIndex = resultRegex.findIndex(limit => limit === ')' )) {
        if (firstFinal = resultRegex.findIndex(firstFinaly => firstFinaly === ')' )) {
          var verifyRational = manipulationCalcule.slice(firstFinal-2, firstFinal)
          verifyRational = verifyRational.join('')
          console.log(verifyRational)
          if (Math.sign(verifyRational)=== -1) { 
            //return res and callback rescurive diret 
            console.log('verifyrational' ,verifyRational)
          }
        }
          precedenceOrder(precedenceIndex)
      } 
  } console.log(resultRegex)
  if ((precedenceIndex = resultRegex.findIndex(el => el === '[')) !== -1) {
      if (limitIndex = resultRegex.findIndex(limit => limit === ']' )) {
          precedenceOrder(precedenceIndex)
      } 
  } 
  if ((precedenceIndex = resultRegex.findIndex(el => el === '{')) !== -1) {
      if (limitIndex = resultRegex.findIndex(limit => limit === '}' )) {
          precedenceOrder(precedenceIndex)
      } 
  }
  coreCalculator()
  if (isNaN(resultValue)) {
    throw Error ('Expressao invalida')
  }
}

function coreCalculator() {
  if ((operatorIndex = manipulationCalcule.findIndex(el => el === 'x' || el === '/')) !== -1) {
      calculator(operatorIndex-1, operatorIndex, operatorIndex+1)
  }
  if ((operatorIndex = manipulationCalcule.findIndex(el => el === '+' || el === '-')) !== -1) {
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
