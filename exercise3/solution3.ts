class Car {
  public name: string;
  public acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public honk() {
    console.log("Toooooooooot!");
  }
  public accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const myCar = new Car("BMW");
myCar.honk(); /// print toot
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);

// Excersise 2
class BaseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// excersise 3
class Person {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length > 3) {
      this._firstName = name;
    } else {
      this.firstName = "";
    }
  }
}

const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
