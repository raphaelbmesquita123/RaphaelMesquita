const timesLiked = document.getElementById('timesLiked')
const loveMe = document.querySelector('.loveMe')
const heartInside = document.getElementById('heartInside')
let timesClicked = 0

loveMe.addEventListener('dblclick', () => {
  timesLiked.textContent = ++timesClicked
  heartInside.style.opacity = '100%'
  setTimeout(() => {
    heartInside.style.opacity = '0%'
  }, 500);
})

