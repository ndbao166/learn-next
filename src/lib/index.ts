import { faker } from '@faker-js/faker';
import { unstable_cache } from 'next/cache';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getPostCache = unstable_cache(async () => {
  await delay(5000);
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
  }
}, ['posts'], { revalidate: 10, tags: ['posts'] });


const getListComments = async () => {
  return Array.from({ length: 10 }, () => faker.lorem.sentence());
};

export { getPostCache, getListComments };