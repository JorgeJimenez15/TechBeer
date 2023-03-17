import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

Chart.register(LineController)
Chart.register(LineElement)
Chart.register(PointElement)
Chart.register(CategoryScale)
Chart.register(LinearScale)

export default class TechBeer {
    constructor() {
        this.pin = '0000'
        this.temperature = {
            number: 41,
            range: 32,
            state: 'cold'
        }
        this.sentence = {
            index: Math.floor(Math.random() * 10),
            hot: [
                'Watch out, it\'s hot as heck!',
                'Be careful, it\'s steaming hot!',
                'This drink is piping hot, but it\'ll cool off in a sec',
                'It\'s hot enough to burn your tongue, but give it a moment to cool down',
                'Don\'t drink it just yet, it\'s still pretty hot',
                'It\'s like lava in a cup, but it\'ll chill out soon',
                'This drink is a scorcher, but it won\'t be for long',
                'Just wait a sec, it\'s hot as blazes right now',
                'Careful, it\'s like a hot sauna in there',
                'It\'s hot enough to start a fire, but it\'ll cool down in no time'
            ],
            cold: [
                'This drink is ice-cold and ready to quench your thirst!',
                'Chill out with this cold drink, it\'s perfectly refreshing',
                'This drink is as cold as an iceberg, take a sip and cool down',
                'Ready to rock and roll, this drink is chilled to perfection',
                'It\'s frosty and refreshing, take a sip of this cold drink',
                'This drink is cooler than the other side of the pillow, time to sip away',
                'You\'re in for a treat, this drink is as cold as a polar bear\'s nose',
                'Take a break and chill out with this cold drink',
                'This drink is so cold, it\'ll give you brain freeze in the best way possible',
                'It\'s chilled and ready for you, go ahead and take a swig'
            ]
        }
        this.chart = new Chart(document.getElementById('temperature-chart'), {
            type: 'line',
            data: {
                labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
                datasets: [{
                    label: 'Temperature',
                    data: [68, 77, 68, 64, 48, 41],
                    borderColor: '#00acc1',
                    tension: 0.4
                }]
            }
        })

        // Update functions
        this.update()
        this.updateSentence()

        // Intervals
        this.updateInterval = setInterval(this.update.bind(this), 5_000)
        this.sentenceInterval = setInterval(this.updateSentence.bind(this), 10_000)

        // Event listeners
        // Update
        document.getElementById('range').addEventListener('input', event => {
            document.getElementById('range-text').innerText = event.target.value
        })
        document.getElementById('color').addEventListener('input', event => {
            document.getElementById('color-text').innerText = event.target.value
        })

        // Click
        document.getElementById('login-btn').addEventListener('click', this.login.bind(this))
        document.getElementById('modify-temperature-range-btn').addEventListener('click', this.modifyTemperatureRange.bind(this))
        document.getElementById('modify-led-color-btn').addEventListener('click', this.modifyLedColor.bind(this))
        document.getElementById('update-pin-code-btn').addEventListener('click', this.updatePinCode.bind(this))
    }

    async api(action, data) {
        console.log(action)
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                action,
                data,
                pin: this.pin
            })
        })

        return await response.text()
    }

    convertToFahrenheit(celsius) {
        return celsius * 1.8 + 32
    }

    // API Requests
    async login() {
        const pin = document.getElementById('pin')
        const response = await this.api('login', pin.value)

        if (response === 'Success') {
            document.getElementById('login').style.display = 'none'
            document.getElementById('dashboard').style.display = 'block'
        }

        pin.value = ''
    }

    async update() {
        // Update temperature
        const response = await this.api('get-current-temperature', '')

        this.temperature.number = this.convertToFahrenheit(response)
        this.temperature.state = this.temperature.number > this.temperature.range ? 'hot' : 'cold'

        document.getElementById('temperature').innerText = this.temperature.state === 'cold' ? `🧊 ${this.temperature.number} °F` : `🔥 ${this.temperature.number} °F`
    }

    updateSentence() {
        if (this.sentence.index === 10) this.sentence.index = 0

        document.getElementById('sentence').innerText = this.sentence[this.temperature.state][this.sentence.index++]
    }

    async modifyTemperatureRange() {
        const newRange = document.getElementById('range').value
        const response = await this.api('modify-temperature-range', newRange)

        if (response === 'Success') this.temperature.range = newRange
    }

    async modifyLedColor() {}

    async updatePinCode() {
        const newPin = document.getElementById('newpin').value
        const response = await this.api('update-pin-code', newPin)

        if (response === 'Success') this.pin = newPin
    }
}