const fs = require('fs')

const TYPES = ['measles', 'mumps']
const YEAR = '2016'
const countries = require('./countries.json')

const input = TYPES.reduce((object, key) => {
  const data = require(`./${key}.json`).fact
        .filter(item => item.dims.YEAR === YEAR)
        .map(item => ({ country: item.dims.COUNTRY, [key]: parseInt(item.Value, 10) }))
  object[key] = data
  return object
}, {})

const inputFlat = [].concat.apply([], Object.keys(input).map(key => {
  const flat = input[key].map(item => ({ ...item, type: key }))
  return flat
}))

const output = inputFlat.reduce((object, item) => {
  const { country, type, ...rest } = item
  // console.log(country, rest)
  object[country] = { ...object[country], ...rest }
  // console.log(object[country])
  return object
}, {})

const features = countries.features.map(feature => {
  const { ADMIN, ...rest } = feature.properties
  const outbreaks = output[ADMIN]
    const total = outbreaks ? Object.keys(outbreaks).reduce((sum, key) => {
      sum = sum + parseInt(outbreaks[key], 10)

      return sum
    }, 0) : 0
  // console.log(outbreaks)
  feature.properties = { ADMIN, country: ADMIN, total, ...outbreaks, ...rest }
  // feature.properties = { ADMIN: ADMIN }
  // console.log(feature.properties)
  return feature
})

countries.features = features

// console.log(output)
console.log(features)

fs.writeFile('../src/outbreakCountries.geojson', JSON.stringify(countries))
