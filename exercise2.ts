// Exercise 1
// var double = function(value) {
//   return value * 2;
// };
// console.log(double(10));

const double = (value: number) => value * 2;

// Exercise 2
// var greet = function(name) {
//   if (name === undefined) {
//     name = "Max";
//   }
//   console.log("Hello, " + name);
// };
// greet();
const greet = (name: string = "Max"): void => {
  console.log(`Hello, ${name}`);
};
greet("Anna");

// Exercise 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numbers));
// Exercise 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
var testResults: number[] = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
var scientist: { firstName: string; experience: number } = {
  firstName: "Will",
  experience: 12
};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience);
