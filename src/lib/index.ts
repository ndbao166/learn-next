import { faker } from '@faker-js/faker';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getListUsers = async () => {
  console.log('getListUsers call');
  await delay(5000);
  console.log('getListUsers done');
  return Array.from({ length: 10 }, () => getUser());
};

const getUser = async () => {
  return { 
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  };
};

export { getListUsers, getUser };