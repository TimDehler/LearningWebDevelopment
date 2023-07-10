const personName = {
  firstName: "Taylor",
  lastName: "Jackson",
};

function greet(wish, message) {
  return `${this.firstName}, ${wish}. ${message}`;
}

let result = greet.apply(personName, ["Good morning", "How are you?"]);

console.log(result);

const car = {
  name: "BMW",
  description() {
    return `The ${this.name} is of ${this.color} color`;
  },
};

const bike = {
  name: "Duke",
  color: "black",
};

let output = car.description.apply(bike);

console.log(output);
