const menuToggleUl = document.querySelector('.menuToggle ul')
const menuButton = document.querySelector('.menuButton')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')

console.log(menuToggleUl)
menuButton.addEventListener('click', () => {
  menuToggleUl.classList.toggle('active')
  span1.classList.toggle('span1Active')
  span2.classList.toggle('span2Active')
})