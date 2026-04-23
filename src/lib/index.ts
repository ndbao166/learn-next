import { faker } from '@faker-js/faker';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getPost = async () => {
  console.log('getPost');
  await delay(5000);
  console.log('getPost done');
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
  }
};


const getListComments = async () => {
  return Array.from({ length: 10 }, () => faker.lorem.sentence());
};

export { getPost, getListComments };