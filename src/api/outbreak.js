import faker from 'faker'

console.log(faker)

const fetchOutbreak = (n) => {
  const longitude = faker.address.longitude()
  const latitude = faker.address.latitude()
  const number = faker.random.number()
  const response = Promise.resolve({ 'data': 'data', longitude, latitude, number })
  return response
}
// tpml93@gmail.com

export default fetchOutbreak
