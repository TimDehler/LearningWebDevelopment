// Hoisting does not work for classes therefore classes need to be created before they can be constructed

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(Rectangle.name); // Output: Rectangle

Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name); // Output Rectangle2

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class User extends Student {
  show() {
    console.log(`The name of the student is: ${this.name}`);
  }
  learn() {
    console.error("NO LEARNING!");
  }
  aging() {
    console.log(`I aged and am now: ${this.age + 1} years old!`);
  }
}

const obj = new User("David", 35);
obj.show();
obj.learn();
obj.aging();
