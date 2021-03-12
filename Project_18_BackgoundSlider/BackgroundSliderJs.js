const imageBody = document.querySelector('.imageSection')
const slideImage = document.querySelectorAll('.slideImage')
const arrowLeft = document.querySelector('.arrowLeft')
const arrowRight = document.querySelector('.arrowRight')

let activeSlide = 0

setBgToImageBody()
function setBgToImageBody (){
  imageBody.style.backgroundImage = slideImage[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slideImage.forEach(slide => {
    slide.classList.remove('activeImage')

    slideImage[activeSlide].classList.add('activeImage')
  })
}

arrowRight.addEventListener('click', () => {
  activeSlide ++

  if(activeSlide > slideImage.length - 1 ){
    activeSlide = 0
  }

  setBgToImageBody()
  setActiveSlide()
})

arrowLeft.addEventListener('click', () => {
  activeSlide --

  if(activeSlide < 0 ){
    activeSlide = slideImage.length-1
  }

  setBgToImageBody()
  setActiveSlide()
})