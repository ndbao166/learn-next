import { faker } from '@faker-js/faker';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getListUsers = async () => {
  console.log('getListUsers call');
  await delay(5000);
  console.log('getListUsers done');
  return [
    { id: 1, name: faker.person.fullName() },
    { id: 2, name: faker.person.fullName() },
    { id: 3, name: faker.person.fullName() },
  ];
};

export { getListUsers };