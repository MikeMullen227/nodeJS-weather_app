
const request = require('request')

const forecast = (lat, long, callback) => {
const url = 'https://api.darksky.net/forecast/2fdc967638822edf6f3803cfc783f9a4/' + lat + ',' + long + '?lang=en';
request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined);
        } else if(response.body.error) {
            callback('Unable to get location. Try another search.', undefined)
        } else {
            const temp = response.body.currently.temperature;
             const percent = (response.body.currently.precipProbability) * 100;
            const summary = response.body.daily.data[0].summary
            callback(undefined, `${summary} It is currently ${temp} degrees out. There is a ${percent}% chance of rain.`)
        }
    })

}
 
module.exports = forecast;