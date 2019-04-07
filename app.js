const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

var userCity;
const command = process.argv[2];
const command2 = process.argv[3];
if(process.argv.length > 3) {
     userCity = command + ' ' + command2
} else {
     userCity = command;
}



if(userCity) {
    geocode(userCity, (error, data) => {
        if(error){
            return console.log('Error: ', error);
        } else {
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if(error) {
                    return console.log('Error', error)
                }
                
                console.log(data.location)
                console.log(forecastData)
            })
        }    
    })
    
} else {
    console.log('please enter a city name')
}

