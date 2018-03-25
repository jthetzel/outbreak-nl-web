import faker from 'faker'

const fetchOutbreak = (n) => {
  const longitude = faker.address.longitude()
  const latitude = faker.address.latitude()
  const number = faker.random.number()
  const response = Promise.resolve({ 'data': 'data', longitude, latitude, number })
  return response
}

export default fetchOutbreak
