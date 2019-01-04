const prompt = require('prompt-promise')

const models = require('./models')

prompt('Artist Name?')
  .then(function (artistName) {
    return models.Artist.create({
      name: artistName
    })
  })
  .then(function (artist) {
    console.log(artist.id)
  })