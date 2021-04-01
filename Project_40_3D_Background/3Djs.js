const boxesContainer = document.getElementById('magic-boxes')
const btn = document.getElementById('btn')


function createBoxes () {
    for (let i = 0; i<4; i++){
        for(let j = 0; j<4; j++){
            const box = document.createElement('div')
            box.classList.add('magic-box')
            if(window.screen.width < 400){
                box.style.backgroundPosition = `${-j * 75}px ${-i * 75}px`
            } else {
                box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            }

            boxesContainer.appendChild(box)

        }
    }
}

btn.addEventListener('click' , () => {
    boxesContainer.classList.toggle('big')
})

createBoxes()

