"use strict";
function greeet(pers) {
    console.log("hello, " + pers.firstName);
}
function changeName(pers) {
    pers.firstName = "Anna";
}
var pers = {
    firstName: "james",
    hobbies: ["cooking", "sports"],
    greeet: function (lastName) {
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
var Pers = /** @class */ (function () {
    function Pers() {
        this.firstName = "";
        this.lastName = "";
    }
    Pers.prototype.greeet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Pers;
}());
var myPers = new Pers();
myPers.firstName = "James";
greeet(myPers);
myPers.greeet("Margrove");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "max",
    greeet: function (lastName) {
        console.log("Hello", lastName);
    }
};
console.log(oldPerson);
console.log(oldPerson.greeet("Bob"));
