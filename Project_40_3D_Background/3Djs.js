const boxesContainer = document.getElementById('magic-boxes')
const btn = document.getElementById('btn')

function createBoxes () {
    for (let i = 0; i<4; i++){
        for(let j = 0; j<4; j++){
            const box = document.createElement('div')
            console.log(box.style.height)
            box.classList.add('magic-box')
            box.style.backgroundPosition = `${-j * 75}px ${-i * 75}px`
            boxesContainer.appendChild(box)

        }
    }
}


btn.addEventListener('click' , () => {
    boxesContainer.classList.toggle('big')
})




createBoxes()
