const { faker } = require('@faker-js/faker');

function generateBicycle(count) {
  return new Array(count)
    .fill(null)
    .map(() => faker.vehicle.bicycle());
}

module.exports = generateBicycle;
