const faker = require('faker');

console.log(faker.name.firstName());
console.log(faker.name.lastName());
console.log(faker.address.streetAddress());
console.log(faker.helpers.createCard()); 