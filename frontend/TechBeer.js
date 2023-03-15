import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

Chart.register(LineController)
Chart.register(LineElement)
Chart.register(PointElement)
Chart.register(CategoryScale)
Chart.register(LinearScale)

export default class TechBeer {
    constructor(range) {
        this.pin = '0000'
        this.range = range
        this.temperature = {
            number: 41,
            state: 'cold'
        }
        this.sentence = {
            index: 0,
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
            warm: [
                'Hold up, this drink needs a bit of time to cool down',
                'It\'s a bit warm, give it a minute to cool off for the best taste',
                'It\'s warm, but don\'t worry, it\'ll be even better once it cools down',
                'It\'s not quite cold yet, give it some time to chill out before sipping',
                'This drink is a bit warm, take a break and let it cool off',
                'It\'s a bit tepid, give it some time to chill before you take a sip',
                'It\'s not quite cold enough to enjoy, wait for it to cool down a bit more',
                'It\'s warm, but if you give it some time, it\'ll be a refreshing treat',
                'Take a breather, this drink is warming up, but it\'ll be worth the wait',
                'It\'s not quite chilled, give it a few more minutes to cool down before drinking'
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

        this.sentence.index = Math.floor(Math.random() * 10)
        this.sentenceInterval = setInterval(this.updateSentence.bind(this), 10_000)
        this.updateSentence()
    }

    async api(action, data) {
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                action,
                data,
                pin: this.pin
            })
        })

        return await response.json()
    }

    convertToFahrenheit(celsius) {
        return celsius * 1.8 + 32
    }

    updateTemperature() {
        this.api("get-current-temperature", 0, this.pin).then((response) => {
            this.temperature.number = this.convertToFahrenheit(response)
            this.temperature.state = this.temperature.number > this.range ? 'hot' : this.temperature.number <= this.range ? 'warm' : 'cold'
            document.getElementById('temperature').innerText = this.temperature.state === 'cold' ? `🧊 ${this.temperature.number} °F` : `🔥 ${this.temperature.number} °F`
        })
    }

    updatePinCode(value){
        this.api("update-pin-code", value).then((response) => {
            if (response.success) {
                this.pin = value
                document.getElementById('pin').innerText = this.pin
            }
        })
    }
    updateSentence() {
        if (this.sentence.index === 10) this.sentence.index = 0

        document.getElementById('sentence').innerText = this.sentence[this.temperature.state][this.sentence.index++]
    }
}