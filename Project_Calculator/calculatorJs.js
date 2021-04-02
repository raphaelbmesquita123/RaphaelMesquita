const btnAC = document.querySelector('.btnAC')
const displayText = document.querySelector('.displayText')
const allButtons = document.querySelectorAll('button')
const btnEqual = document.querySelector('.btnEqual')
const calculatorColor = document.getElementById('calculatorColor')
const calculadora = document.querySelector('.calculadora')
const allbtnsColor = document.getElementById('allbtnsColor')
const textColor = document.getElementById('textColor')
const symbol = document.querySelectorAll('.symbol')
const symbolColor = document.getElementById('symbolColor')
const acColor = document.getElementById('acColor')
const acSymbols = document.querySelectorAll('.acSymbol')
const buttonsColor = document.querySelectorAll('.calculadora button')

acColor.addEventListener('input', () => {
  acSymbols.forEach(acSymbol => {
    acSymbol.style.color = `${acColor.value}`
  })
})

symbolColor.addEventListener('input', () => {
  symbol.forEach(symbol => {
    symbol.style.color = `${symbolColor.value}`
  })
})


textColor.addEventListener('input', () => {
  allButtons.forEach(button => {
    button.style.color = `${textColor.value}`
  })
})

allbtnsColor.addEventListener('input', () => {
  buttonsColor.forEach(button => {
    button.style.backgroundColor = `${allbtnsColor.value}`
  })
})


calculatorColor.addEventListener('input', () =>{
  calculadora.style.backgroundColor = `${calculatorColor.value}`
})


let btnArray = []

allButtons.forEach(function(btn) {
  btn.addEventListener('click', function(){
    if(btnArray.length < 14){
      if(btn.className === 'btn1'){
        btnArray.push(1)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn2'){
        btnArray.push(2)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn3'){
        btnArray.push(3)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn4'){
        btnArray.push(4)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn5'){
        btnArray.push(5)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn6'){
        btnArray.push(6)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn7'){
        btnArray.push(7)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn8'){
        btnArray.push(8)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn9'){
        btnArray.push(9)
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btn0'){
        btnArray.push(0)
        displayText.textContent = btnArray.join('')
      } else if (btn.className.includes('btnOpenBrackets')){
        btnArray.push('(')
        displayText.textContent = btnArray.join('')
      } else if (btn.className.includes('btnCloseBrackets')){
        btnArray.push(')')
        displayText.textContent = btnArray.join('')
      } else if (btn.className.includes('btnDEL')){
        btnArray.pop('')
        displayText.textContent = btnArray.join('')
      } else if (btn.className.includes('btnPlus')){
        btnArray.push('+')
        displayText.textContent = btnArray.join('')
      } else if(btn.className.includes('btnDivided')){
        btnArray.push('/')
        displayText.textContent = btnArray.join('')
      }else if (btn.className.includes('btnMultiply')){
        btnArray.push('*')
        displayText.textContent = btnArray.join('')
      } else if (btn.className.includes('btnMinus')){
        btnArray.push('-')
        displayText.textContent = btnArray.join('')
      } else if (btn.className.includes('btnComma')){
        btnArray.push('.')
        displayText.textContent = btnArray.join('')
      }
    }
    
  })
})


function getLength (number){
  return number.toString().length
}


btnAC.addEventListener('click', () =>{
  displayText.textContent = ''
  btnArray = []
})

btnEqual.addEventListener('click', () => {
  let result = eval(btnArray.join(''))
  let resultString = result.toString()

  if(getLength(result) > 14){
    displayText.textContent = resultString.slice(0,13)
  } else{
    displayText.textContent = result
  }
  
  
  btnArray = []
})

