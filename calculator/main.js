var grid = ''
var resultValue = ''
var firstNumber, operator, finalNumber, resultRegex, manipulationCalcule, operatorIndex, limitIndex, firstfinaly
const regex = /(\d+(\.\d+)?|[\+\-\*\/x(){}\[\]])/g
const consecutive = ['x', '/', '+', '-']


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
  console.log(resultRegex)
  if (grid == '') {
    alert("Digite a operacao desejada");
  } else {
    try {
      result()
      gridhtml.innerHTML = resultValue.toFixed(2)
      console.log(`O resultado é ${resultValue.toFixed(2)} :) `)
    } catch(e) {
      console.log('deu erro rs, digite a operação corretamente')
      alert('Digite a expressao corretamente, para cada operador, dois operandos. E para cada seletor de prioridade, seu fechamento. ', e.message)
      alert('Para positivos use (+n) e negativos (-n)')
    }
  }
}

function calculeSquareRoot() {
    try {
      var gridhtml = document.getElementById('gridhtml')
      var num = parseFloat(gridhtml.innerHTML)
      var result = Math.sqrt(num);
      if (isNaN(num)) {
        throw new Error('O valor inserido não é um número válido.');
      }
      gridhtml.innerHTML = result.toFixed(2)
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('O resultado não é um valor finito.')
      } 
    } catch (e) {
      alert("Digite apenas o número para o cálculo da raiz. " + e)
    }
}

function calculeExpoent() {
  try {
    var gridhtml = document.getElementById('gridhtml')
    var num = parseFloat(gridhtml.innerHTML)
    if (isNaN(num)) {
      throw new Error('O valor inserido não é um número válido.');
    }
    var result = Math.pow(num,2)
    alert('Para poder calcular valores maiores, está convertido em unidade dos EUA')
    gridhtml.innerHTML = result.toLocaleString('en-US', { maximumFractionDigits: 5 })
  } catch (e) {
    alert("Digite apenas o número para o cálculo do número elevado a 2. " + e)
  }
}

function calculeFactorial(num) {
  try {
    var gridhtml = document.getElementById('gridhtml')
    var num = parseFloat(gridhtml.innerHTML)
    if (isNaN(num) || num < 0) {
      throw new Error('Digite um número válido e não negativo para calcular o fatorial.');
    }
    var maxValue = 170 // pra evitar que o resultado exceda o limite em JavaScript (infinity)
    if (isNaN(num) || num > maxValue ) {
      throw new Error('Digite um número válido e não negativo para calcular o fatorial.');
    }
    var result = factorial(num)
    gridhtml.innerHTML = result.toFixed(2);
  } catch (e) {
    alert("Digite apenas o número para o cálculo do fatorial. " + e)
  }
}
function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
      result *= i;
  }
  return result;
}

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
    if (resultRegex.length > 1) {
        coreCalculator()
      }
  if (isNaN(resultValue)) {
      throw Error ('Expressao invalida')
  } else {
      resultRegex = manipulationCalcule
      return resultValue
  }
}


function precedenceOrder(precedenceIndex) {
  if (manipulationCalcule.length > 1) {
    var initIndex = Number(precedenceIndex+1)
    manipulationCalcule = manipulationCalcule.slice(initIndex, limitIndex)
    calculeLength = (Number(manipulationCalcule.length)) +2
    coreCalculator() 
    if(manipulationCalcule.length > 1 || resultRegex.length > 3) { 
      resultRegex.splice(precedenceIndex, calculeLength)
      resultRegex.splice(precedenceIndex, 0, resultValue)
      manipulationCalcule = resultRegex
    }
  }
  return resultValue
}
    

function coreCalculator() {
  if (validationOperators(manipulationCalcule, consecutive) === true && consecutive.includes(manipulationCalcule[0]) === false) {
      while ((operatorIndex = manipulationCalcule.findIndex(el => el === 'x' || el === '/')) !== -1){
        calculator(operatorIndex-1, operatorIndex, operatorIndex+1)
      }
      while ((operatorIndex = manipulationCalcule.findIndex(el => el === '+' || el === '-')) !== -1) {
        calculator(operatorIndex-1, operatorIndex, operatorIndex+1)
      }
      return resultValue
    } else { 
    manipulationCalcule = []
    return resultValue = NaN
  }
}


function validationOperators(manipulationCalcule, consecutive) {
  let contador = 0
  for (let i = 0; i < manipulationCalcule.length; i++) {
      if (consecutive.includes(manipulationCalcule[i])) {
      contador++
          if (contador >= 2) {
            alert('Você deve digitar um operador por vez')
          return false
      }
      } else {
          contador = 0
      }
  }
  if (manipulationCalcule.length > 2 ) {
    return true;
  }
}


function calculator(beforePrevious, previous, afterPrevious){
  firstNumber = Number(manipulationCalcule[beforePrevious])
  operator = manipulationCalcule[previous] 
  finalNumber = Number(manipulationCalcule[afterPrevious])
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
      manipulationCalcule.splice(beforePrevious, 3, resultValue) 
      console.log(resultValue, manipulationCalcule)
  }
  return resultValue
}


function integerCheck() {
  if (firstClose = resultRegex.findIndex(firstFinaly => firstFinaly === ')')) {
    var verifyRational = manipulationCalcule.slice(firstClose-2, firstClose)
    var firstOpen = Number(firstClose-3)
    if (resultRegex[firstOpen] === '(' ) {
      verifyRational = Number(verifyRational.join('')) 
        if (Math.sign(verifyRational) !== NaN) { 
          resultRegex.splice(firstOpen, 4)
          resultRegex.splice(firstOpen, 0, verifyRational)
          result()
      }
    } 
  }
} 