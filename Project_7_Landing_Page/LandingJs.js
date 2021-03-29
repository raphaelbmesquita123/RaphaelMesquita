const landingLeftBox = document.querySelector('.landingLeftBox')

const landingRightBox = document.querySelector('.landingRightBox')

landingLeftBox.addEventListener('mouseover', () =>{
    landingLeftBox.classList.add('activated')
})

landingLeftBox.addEventListener('mouseout', () =>{
    landingLeftBox.classList.remove('activated')
})

landingRightBox.addEventListener('mouseover', () =>{
    landingRightBox.classList.add('activated')
})

landingRightBox.addEventListener('mouseout', () =>{
    landingRightBox.classList.remove('activated')
})