const textEl = document.getElementById('autoText')
const speedEl = document.getElementById('number')
const textContent = document.getElementById('textContent')
const ContentButton = document.getElementById('textContentButton')

let text = 'We Love Programming'
let idx = 1
let speed = 300 / speedEl.value

ContentButton.addEventListener('click', () => {
  text = textContent.value
})

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length){
    idx = 1
  }
  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => { speed = 300 / e.target.value})