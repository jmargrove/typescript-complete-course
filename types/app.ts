// string
let myName: string = "James";

// number
let myAge: number = 31;

// boolean
let hadHobbies: boolean = false;

//  array
let hobbies: string[] = ["cooking", "sports"];

// tuples
let address: [string, number] = ["superstreet", 66];

// enum
enum Color {
  Grey,
  Green = 100, // can override the values, and continues incrementing from there, the next value is 101
  Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

let car: any = "BMW";
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  // returns a string
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  // returns nothing
  console.log("hello");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 2));

// function types.
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(3, 8));
// myMultiply = sayHello;
// console.log(myMultiply());

// objects

let userData: { name: string; age: number } = {
  name: "James",
  age: 31
};

// complex objec
let complex: { data: number[]; output: () => number[] } = {
  data: [100, 3.99, 10],
  output: function(): number[] {
    return this.data;
  }
};

// type alias
type Complex = { data: number[]; output: () => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(): number[] {
    return this.data;
  }
};

// union types
type Age = number | string;
let myRealRealAge: Age = 27; //
myRealRealAge = "27";

// check types
let finalValue = " A is a string";
if (typeof finalValue == "string") {
  console.log("this is a final type");
}

// never
function neverReturns(): never {
  throw new Error("New error");
}

// Nullable
let canBeNull: number | null = 12;
canBeNull = null;
