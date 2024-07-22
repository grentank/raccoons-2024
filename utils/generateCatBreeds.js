const { faker } = require('@faker-js/faker');

function generateCatBreeds(count) {
  const breeds = [];
  for (let index = 0; index < count; index++) {
    const breed = faker.animal.cat();
    breeds.push(breed);
  }
  return breeds;
}

module.exports = generateCatBreeds;
