const buttonToast = document.getElementById('buttonToast')
const toasts = document.getElementById('toasts')

buttonToast.addEventListener('click', () => createNotification())
function createNotification(){
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.innerText = 'You can not continue'
  toasts.appendChild(notif)
  setTimeout(() => {
    notif.remove()
  }, 3000)
}
