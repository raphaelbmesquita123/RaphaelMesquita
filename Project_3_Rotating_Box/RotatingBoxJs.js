const btnX = document.querySelector('.btnX')
const btnO = document.querySelector('.btnO')
const boxButtons = document.querySelector('.imageBoxButtons')
const imageBox = document.querySelector('.imageBox')

btnO.addEventListener('click', () =>{
  boxButtons.classList.add('BoxButtonsRotate')
  imageBox.classList.add('imageBoxRotate')
})

btnX.addEventListener('click', () =>{
  boxButtons.classList.remove('BoxButtonsRotate')
  imageBox.classList.remove('imageBoxRotate')
})