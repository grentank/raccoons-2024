const { fakerRU: faker } = require('@faker-js/faker');
// import {fakerRU as faker} from '@faker-js/faker';
const generateBicycle = require('./utils/generateBicycle');
const generateCatBreeds = require('./utils/generateCatBreeds');
const fs = require('fs');
// import generateCatBreeds from "./utils/generateCatBreeds";

(function run() {
  const amount = Number(process.argv[2]);
  if (Number.isNaN(amount)) {
    throw new Error('Первый аргумент должен быть числом');
  }
  const breeds = generateCatBreeds(amount);
  const bicycles = generateBicycle(amount);
  const strings = [];
  for (let index = 0; index < amount; index++) {
    const breed = breeds[index];
    const bicycle = bicycles[index];
    const str = `${breed} loves to ride ${bicycle}`;
    strings.push(str);
    // fs.appendFileSync('./output.txt', str, 'utf8');
    // console.log(str);
  }
  fs.writeFileSync('./output.txt', strings.join('\n'), 'utf8');
})();

console.log(faker.person.firstName());
