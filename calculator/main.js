var grid = ''
var resultValue = ''
var firstNumber, operator, finalNumber, resultRegex, manipulationCalcule, operatorIndex, limitIndex, firstfinaly
const regex = /(\d+(\.\d+)?|[\+\-\*\/x(){}\[\]])/g
const consecutivos = ['x', '/', '+', '-']


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
      alert(`O resultado é ${resultValue.toFixed(2)} :) `)
    } catch(e) {
      console.log('deu erro rs, digite a operação corretamente')
      alert('Digite a expressao corretamente, para cada operador, dois operandos. E para cada seletor de prioridade, seu fechamento. ', e.message)
      alert('Para positivos use (+n) e negativos (-n)')
    }
  }
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
          precedenceOrder(precedenceIndex) // deve devolver aqui a regex splicetada do conteudo []
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
    if(manipulationCalcule.length > 1 || resultRegex.length > 3) { // se não tiver mais o que calcular
      resultRegex.splice(precedenceIndex, calculeLength)
      resultRegex.splice(precedenceIndex, 0, resultValue)
      manipulationCalcule = resultRegex
    }
  }
  return resultValue
}
    

function coreCalculator() {
  if (validationOperators(manipulationCalcule, consecutivos) === true && consecutivos.includes(manipulationCalcule[0]) === false) {
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


function validationOperators(manipulationCalcule, consecutivos) {
  let contador = 0
  for (let i = 0; i < manipulationCalcule.length; i++) {
      if (consecutivos.includes(manipulationCalcule[i])) {
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
  // possivel erro ao mandar para o precende index, mudando o valor da lista
  if (manipulationCalcule.length > 0) { 
      manipulationCalcule.splice(beforePrevius, 3, resultValue) 
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
          resultRegex.splice(firstOpen, 4) // atualiza a resultRegex
          resultRegex.splice(firstOpen, 0, verifyRational)
          result()
      }
    } 
  }
} 