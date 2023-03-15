import '@picocss/pico'
import './style.css'
const range = document.getElementById("range").value
const pinButton = document.getElementById("update-pin")

import './modal'
import TechBeer from './TechBeer'

window.TechBeer = new TechBeer(range)

//Add an event lestener for when pinButton is clicked
pinButton.addEventListener("click", function(){
    window.TechBeer.updatePinCode(document.getElementById("pin").value)
})

//Infinite loop that checks the temperature every 5 seconds
setInterval(window.TechBeer.updateTemperature.bind(window.TechBeer), 10_000)



