const request = require('request');
// const url = 'https://api.darksky.net/forecast/2fdc967638822edf6f3803cfc783f9a4/37.8267,-122.4233?lang=es'

// request({
//             url: url,
//             json: true
//         }, (error, response) => {
//             if (error) {
//                 console.log('unable to to connect to the weather service')
//             } else if (response.body.error) {
//                 console.log('unable to get location')
//             } else {
//                 const temp = response.body.currently.temperature;
//                 const percent = (response.body.currently.precipProbability) * 100;
//                 const summary = response.body.daily.data[0].summary
//                 console.log(`${summary} It is currently ${temp} degrees out. There is a ${percent}% chance of rain.`)
//             }
//         })


         const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoibW11bGxlbjIyNyIsImEiOiJjanU0eDVxajQxMnN5NDRxZ2ZtNGttZjQxIn0.hkpBwafE_ZRMFtBXKQuSuA&limit=1'

        request({url: geoCodeUrl, json:true}, (error, response) => {
            if(error) {
                console.log('unable to to connect to the geolocation service')
            } else if(response.body.features.length === 0) {
                console.log('unable to get location')
            } else {    
                const lat = response.body.features[0].center[1]
                const long = response.body.features[0].center[0]
                console.log(`The latitude is ${lat} and the longitude is ${long}.`)
            }

        })