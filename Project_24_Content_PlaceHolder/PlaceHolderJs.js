const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 3000)

function getData(){
  header.innerHTML = `<img src="../Imagens/1.jpg" alt=""></img>`
  title.innerHTML = `Lorem ipsum dolor sit amet.`
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.`
  profile_img.innerHTML = `<img src="../Imagens/raphael-mesquita.jpg" alt="">`
  name.innerHTML =`Raphael Mesquita`
  date.innerHTML = `0ct 08, 2020`

  animated_bgs.forEach( bg => bg.classList.remove('animated-bg'))
  animated_bg_text.forEach( bg => bg.classList.remove('animated-bg-text'))
}

