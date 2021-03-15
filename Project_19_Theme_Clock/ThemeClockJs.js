const darkBtn = document.getElementById('darkBtn')
const projectSection = document.querySelector('.projectSection')
const secondsPointer = document.getElementById('secondsPointer')
const hourPointer = document.getElementById('hourPointer')
const minPointer = document.getElementById('minPointer')
const hourDisplay = document.getElementById('hourDisplay')
const minDisplay = document.getElementById('minDisplay')


function setTime() {
  const time = new Date();
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const min = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  secondsPointer.style.transform = `rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  minPointer.style.transform = `rotate(${scale(min, 0, 59, 0, 360)}deg)`
  hourPointer.style.transform = `rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  hourDisplay.textContent = `${hours}:${min < 10 ? `0 ${min}` : min} ${ampm}`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

darkBtn.addEventListener('click', () => {
  darkBtn.classList.toggle('darkBtnActive')
  projectSection.classList.toggle('darkMode')
  
  if(darkBtn.classList.contains('darkBtnActive')){
    darkBtn.textContent = `LIGHT
    MODE`
    minPointer.style.backgroundColor = 'White'
    hourPointer.style.backgroundColor = 'White'

  } else {
    darkBtn.textContent = `DARK
    MODE`
    minPointer.style.backgroundColor = 'Black'
    hourPointer.style.backgroundColor = 'Black'
  }
})

setTime()

setInterval(setTime, 100)

