"use strict";
// string
var myName = "James";
// number
var myAge = 31;
// boolean
var hadHobbies = false;
//  array
var hobbies = ["cooking", "sports"];
// tuples
var address = ["superstreet", 66];
// enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var car = "BMW";
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    // returns a string
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    // returns nothing
    console.log("hello");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 2));
// function types.
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(3, 8));
// myMultiply = sayHello;
// console.log(myMultiply());
// objects
var userData = {
    name: "James",
    age: 31
};
// complex objec
var complex = {
    data: [100, 3.99, 10],
    output: function () {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function () {
        return this.data;
    }
};
var myRealRealAge = 27; //
myRealRealAge = "27";
// check types
var finalValue = " A is a string";
if (typeof finalValue == "string") {
    console.log("this is a final type");
}
// never
function neverReturns() {
    throw new Error("New error");
}
// Nullable
var canBeNull = 12;
canBeNull = null;
