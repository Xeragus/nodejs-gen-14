const cities = require('./data');
let maxPopulation = 0;
let nameOfCityMaxPopulation = '';

const mail = () => {
  console.log('Mailot e ispraten');
}

cities.forEach(city => {
  if (parseInt(city.population) > maxPopulation) {
    maxPopulation = city.population;
    nameOfCityMaxPopulation = city.name;
  }
});

console.log('City with biggest amount of stupid people is: ' + nameOfCityMaxPopulation);
console.log('With population of: ' + maxPopulation);
