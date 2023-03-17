import '@picocss/pico'
import './style.css'

const temprange = document.getElementById('temprange')
const pinButton = document.getElementById('update-pin-code-btn')


import './modal'
import TechBeer from './TechBeer'

window.TechBeer = new TechBeer()

temprange.addEventListener('click', (event) => {
    window.TechBeer.updateRange()
})

pinButton.addEventListener('click', (event) => {
    window.TechBeer.updatePinCode()
})

