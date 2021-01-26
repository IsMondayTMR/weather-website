const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const access_key = '7e4e55048b0b3443024c82c66ad6d71e'
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude},${longitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            if (body == null) {
            callback('Unable to get data', undefined)
            }
            else{
            console.log(body)
            callback(undefined, body.location.country + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degree.')
            }
        }
    })
}

// callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')

module.exports = forecast