const panels = document.querySelectorAll(".panelPanel")

panels.forEach((panel) => {
    panel.addEventListener('click', () => {+
        removeActiveClasses()
        panel.classList.add('activePanel')
    })
})

function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('activePanel')
    })
}