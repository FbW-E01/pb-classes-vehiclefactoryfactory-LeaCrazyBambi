function factoryFactory(type) {
  return function Factory(make, model) {
    this.type = type;
    this.make = make;
    this.model = model;
  };
}

const Bicycle = factoryFactory("Bike");
const Car = factoryFactory("Car");
const Boat = factoryFactory("Boat");
const Blimp = factoryFactory("Blimp");
const Train = factoryFactory("Train");

const bicycle1 = new Bicycle("Gazelle", "Dutchy - Dutch Bike");
const train1 = new Train("Atlas", "Trans-Siberian");

console.log(bicycle1);
console.log(train1);

const vehicles = [bicycle1, train1];

for (let i = 0; i < vehicles.length; i++) {
  console.log("Vehicle -" + i + "- ", vehicles[i]);
}

console.log(typeof Bicycle);
console.log(typeof vehicles[0]);
