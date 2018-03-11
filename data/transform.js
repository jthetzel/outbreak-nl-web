const types = ['measles', 'mumps']
const year = '2016'
const allDataArray = types.map(type => require(`./${type}.json`))
const allData = require(`./${'measles'}.json`)

const dataArray = [].concat.apply([], types.map(type => {
  const array = allData.fact
    .filter(item => item.dims.YEAR === year)
        .map(item => ({ country: item.dims.COUNTRY, [type]: item.Value }))
  return array
}))

const output = dataArray.reduce((object, item) => {
  const { country, ...rest } = item

  object[country] = { ...object[country], ...rest }
  return object
}, {})

console.log(output)
