// create a class with name circle which should accept a parameter called radius and whenever we create a new instance we should be able to pass a value of radius

function main() {
  class Circle {
    static PI = 3.14159;

    constructor(radius) {
      this.radius = radius;
    }

    getArea() {
      return Circle.PI * this.radius * this.radius;
    }
    displayInfo() {
      console.log(`This circle has a radius of: ${this.radius}`);
      console.log(`Its area is: ${this.getArea()}`);
    }
  }

  const myBigCircle = new Circle(10);
  myBigCircle.displayInfo();

  const mySmallCircle = new Circle(2);
  mySmallCircle.displayInfo();
}

main();
