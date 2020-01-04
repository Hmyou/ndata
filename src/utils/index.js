import axios from 'axios'

export const getData_countryCodeToName = function() {
    if (location.protocol.indexOf('http') > -1) {
        return new Promise((resolve, reject) => {
            axios.get('/data/country_code_to_name.json').then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = './data/country_code_to_name.js'
            document.body.appendChild(script)
            script.onload = () => {
                resolve(window.country_code_to_name)
            }
        })
    }
}

export const getData_nobelPrizeByWinner = function() {
    if (location.protocol.indexOf('http') > -1) {
        return new Promise((resolve, reject) => {
            axios.get('/data/nobel_prize_by_winner.json').then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = './data/nobel_prize_by_winner.js'
            document.body.appendChild(script)
            script.onload = () => {
                resolve(window.nobel_prize_by_winner)
            }
        })
    }
}
