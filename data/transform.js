const fs = require('fs')

const types = ['measles', 'mumps']
const year = '2016'
const allDataArray = types.map(type => require(`./${type}.json`))
const allData = require(`./${'measles'}.json`)
const countries = require('./countries.json')

const dataArray = [].concat.apply([], types.map(type => {
  const array = allData.fact
    .filter(item => item.dims.YEAR === year)
        .map(item => ({ country: item.dims.COUNTRY, [type]: parseInt(item.Value, 10) }))
  return array
}))

const data = dataArray.reduce((object, item) => {
  const { country, ...rest } = item

  object[country] = { ...object[country], ...rest }
  return object
}, {})

const features = countries.features.map(feature => {
  const { ADMIN, ...rest } = feature.properties
  const outbreaks = data[ADMIN]
  if (outbreaks) {
    console.log(outbreaks)
    const total = Object.keys(outbreaks).reduce((sum, key) => {
      // console.log(key)
      // console.log(parseInt(outbreaks[key], 10))
      sum = sum + parseInt(outbreaks[key], 10)

      return sum
    }, 0)
  }
  // console.log(outbreaks)
  feature.properties = { ADMIN, country: ADMIN, ...outbreaks, ...rest }
  // feature.properties = { ADMIN: ADMIN }
  // console.log(feature.properties)
  return feature
})

countries.features = features
console.log(countries.features)
fs.writeFile('../src/outbreakCountries.geojson', JSON.stringify(countries))


// console.log(data)
// console.log(features)
