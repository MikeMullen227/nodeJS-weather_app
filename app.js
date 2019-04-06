const request = require('request');
const url = 'https://api.darksky.net/forecast/2fdc967638822edf6f3803cfc783f9a4/37.8267,-122.4233?lang=es'

// request({url: url, json:true}, (error, response) => {
//     console.log(response.body.currently)
//     const temp = response.body.currently.temperature;
//     const percent = (response.body.currently.precipProbability) * 100;
//     const summary = response.body.daily.data[0].summary
//     console.log(`${summary} It is currently ${temp} degrees out. There is a ${percent}% chance of rain.`)
// })


const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW11bGxlbjIyNyIsImEiOiJjanU0eDVxajQxMnN5NDRxZ2ZtNGttZjQxIn0.hkpBwafE_ZRMFtBXKQuSuA&limit=1'

request({url: url2, json:true}, (error, response) => {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log(`The latitude is ${lat} and the longitude is ${long}.`)
})