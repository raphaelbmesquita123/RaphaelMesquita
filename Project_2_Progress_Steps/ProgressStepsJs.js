const colorPorgress = document.getElementById('colorProgress')
const circle2 = document.getElementById('circle2')
const circle3 = document.getElementById('circle3')
const circle4 = document.getElementById('circle4')
const circle5 = document.getElementById('circle5')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')


let counter = 0

nextBtn.addEventListener('click', () => {
  counter += 1
  colorPorgress.style.width = `${counter * 25}%`
  console.log(counter)
  if(counter >= 1){
    circle2.classList.add('borderCollor')
    prevBtn.disabled = false
  }if (counter >= 2){
    circle3.classList.add('borderCollor')
  }if (counter >= 3 ){
    circle4.classList.add('borderCollor')
  }if (counter >= 4){
    circle5.classList.add('borderCollor')
    nextBtn.disabled = true
  }
}) 

prevBtn.addEventListener('click', () => {
  counter -= 1
  colorPorgress.style.width = `${counter * 25}%`
  
  if(counter < 1){
    circle2.classList.remove('borderCollor')
    prevBtn.disabled = true
  }if (counter < 2){
    circle3.classList.remove('borderCollor')
  }if (counter < 3 ){
    circle4.classList.remove('borderCollor')
  }if (counter < 4){
    circle5.classList.remove('borderCollor')
    nextBtn.disabled = false
  }
}) 