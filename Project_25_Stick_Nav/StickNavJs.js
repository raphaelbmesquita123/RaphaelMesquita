const navProject = document.querySelector('.navProject')

window.addEventListener('scroll', fixNav)

function fixNav() {
  if(window.scrollY > navProject.offsetHeight + 150){
    navProject.classList.add('activeNavProject')
  } else{
    navProject.classList.remove('activeNavProject')
  }
}