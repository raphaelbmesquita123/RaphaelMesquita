const btnAC = document.querySelector('.btnAC')
const displayText = document.querySelector('.displayText')
const allButtons = document.querySelectorAll('button')
const btnEqual = document.querySelector('.btnEqual')
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
      } else if (btn.className === 'btnOpenBrackets'){
        btnArray.push('(')
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btnCloseBrackets'){
        btnArray.push(')')
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btnDEL'){
        btnArray.pop('')
        displayText.textContent = btnArray.join('')

      } else if (btn.className === 'btnPlus'){
        btnArray.push('+')
        displayText.textContent = btnArray.join('')

      } else if(btn.className === 'btnDivided'){
        btnArray.push('/')
        displayText.textContent = btnArray.join('')
      }else if (btn.className === 'btnMultiply'){
        btnArray.push('*')
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btnMinus'){
        btnArray.push('-')
        displayText.textContent = btnArray.join('')
      } else if (btn.className === 'btnComma'){
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
  console.log(resultString)
  if(getLength(result) > 14){
    displayText.textContent = resultString.slice(0,13)
  } else{
    displayText.textContent = result
  }
  
  
  btnArray = []
})

