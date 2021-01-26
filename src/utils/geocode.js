const request = require('request')

const geocode = (address, callback) => {
    const access_token = 'pk.eyJ1IjoiaXNtb25kYXl0bXIiLCJhIjoiY2trZDZxdG8wMDdoaTJubzV1cHFhZ3NweiJ9.m03Oh8oOOf20eTwphe5OyQ'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${access_token}&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode