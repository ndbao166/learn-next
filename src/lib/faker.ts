import { faker } from '@faker-js/faker'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getRandomUser = async () => {
  await delay(2000)
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
  }
}
