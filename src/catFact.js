const fetch = require('node-fetch')
const catFact = ( cb => {
    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(json => cb(json))
})

module.exports = catFact
