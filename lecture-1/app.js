const cities = [
  {
    name: 'Skopje',
    population: '6000000'
  },
  {
    name: 'Barcelona',
    population: '9000000'
  },
  {
    name: 'Bilbao',
    population: '30000000'
  }
];

let maxPopulation = 0;
let nameOfCityMaxPopulation = '';

cities.forEach(city => {
  if (parseInt(city.population) > maxPopulation) {
    maxPopulation = city.population;
    nameOfCityMaxPopulation = city.name;
  }
});

console.log('City with biggest amount of stupid people is: ' + nameOfCityMaxPopulation);
console.log('With population of: ' + maxPopulation);

// cities.forEach(function x(city) {

// })


// 1. Inicijalizirame max promenliva so minimalna vrednost
// 2. Iterirame niz nizata i za sekoj element:
// 2.1 Proveruvame dali toj element e pogolem od maksimumot
// 2.1.1 Ako e pogolem, maksimumot lazhe
// 2.1.1.1 Ako maksimumot ne e vistinski maksimum, negovata vrednost
// postavi ja na vrednosta na elementot koj e tekovno pogolem od nego
// 2.1.2 Ako e pomal, znaci maksimumot e vistinski maksimum
