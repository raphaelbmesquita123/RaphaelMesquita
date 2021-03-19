const imageContent = document.querySelector('.imageContent')
const upButton = document.getElementById('upButton')
const downButton = document.getElementById('downButton')


const creatImageContent = function(){
  for(let i = 1; i < 6; i++){
    const imageContentPhoto = document.createElement("div")
    imageContentPhoto.classList.add('imageContentPhoto')
    imageContentPhoto.style.backgroundImage = `url(../Imagens/${i}.jpg)`
    imageContent.appendChild(imageContentPhoto)
  }
}

creatImageContent()

const imageContentPhoto = document.querySelectorAll('.imageContentPhoto')
const textContentText = document.querySelectorAll('.textContentText')

let acumulator = 0

upButton.addEventListener('click', () => {
  acumulator ++
  imageContentPhoto.forEach((image) => {
    if(acumulator === 0){
      image.style.transform = `translateY(0%)`
    } if (acumulator === 1){
      image.style.transform = `translateY(-100%)`
    } if (acumulator === 2){
      image.style.transform = `translateY(-200%)`
    } if (acumulator === 3){
      image.style.transform = `translateY(-300%)`
    } if (acumulator === 4) {
      image.style.transform = `translateY(-400%)`
    } if (acumulator > 4){
      image.style.transform = `translateY(0%)`
      acumulator = 4
    }
  })

  textContentText.forEach((text) => {
    if(acumulator === 0){
      text.style.transform = `translateY(-400%)`
    } if (acumulator === 1){
      text.style.transform = `translateY(-300%)`
    } if (acumulator === 2){
      text.style.transform = `translateY(-200%)`
    } if (acumulator === 3){
      text.style.transform = `translateY(-100%)`
    } if (acumulator === 4) {
      text.style.transform = `translateY(0%)`
    } if (acumulator > 4){
      text.style.transform = `translateY(-400%)`
      acumulator = 4
    }
  })
})

downButton.addEventListener('click', () => {
  acumulator --
  imageContentPhoto.forEach((image) => {
    if(acumulator === 0){
      image.style.transform = `translateY(0%)`
    } if (acumulator === 1){
      image.style.transform = `translateY(-100%)`
    } if (acumulator === 2){
      image.style.transform = `translateY(-200%)`
    } if (acumulator === 3){
      image.style.transform = `translateY(-300%)`
    } if (acumulator === 4) {
      image.style.transform = `translateY(-400%)`
    } if (acumulator < 0){
      image.style.transform = `translateY(0%)`
      acumulator = 0
    }
  })

  textContentText.forEach((text) => {
    if(acumulator === 0){
      text.style.transform = `translateY(-400%)`
    } if (acumulator === 1){
      text.style.transform = `translateY(-300%)`
    } if (acumulator === 2){
      text.style.transform = `translateY(-200%)`
    } if (acumulator === 3){
      text.style.transform = `translateY(-100%)`
    } if (acumulator === 4) {
      text.style.transform = `translateY(0%)`
    } if (acumulator < 0){
      text.style.transform = `translateY(-400%)`
      acumulator = 0
    }
  })
})


