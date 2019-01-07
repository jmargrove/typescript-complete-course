interface NamedPerson {
  firstName: string;
  age?: number; //? optional
  [propName: string]: any; // dynamic properties, don't know name of key or value
  greeet: (lastname: string) => void; // greet method
}

function greeet(pers: NamedPerson) {
  console.log("hello, " + pers.firstName);
}

function changeName(pers: NamedPerson) {
  pers.firstName = "Anna";
}

const pers = {
  firstName: "james",
  hobbies: ["cooking", "sports"],
  greeet(lastName: string) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
};

// greeet({
//   firstName: "james",
//   age: 27
// });
changeName(pers);
greeet(pers);
pers.greeet("anything");

class Pers implements NamedPerson {
  firstName: string = "";
  lastName: string = "";
  greeet(lastName: string) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
}

const myPers = new Pers();
myPers.firstName = "James";
greeet(myPers);
myPers.greeet("Margrove");

// Function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// interface inheritence

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "max",
  greeet(lastName: string) {
    console.log("Hello", lastName);
  }
};

console.log(oldPerson);
console.log(oldPerson.greeet("Bob"));
