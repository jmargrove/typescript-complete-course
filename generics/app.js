"use strict";
// simple generic
function echo(data) {
    return data;
}
console.log(echo("Max").length);
console.log(echo(27));
console.log(echo({ name: "James", age: 12 }));
// Better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "James", age: 12 }));
// built in generics
var testRes = [1.94, 2.33]; // array is a generic type by default
testRes.push(-2.99);
console.log(testRes);
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["apples", "nuts"]);
// Generic types
var echo2 = betterEcho;
console.log(echo2("something"));
// Creating Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        if (this.base && this.multiplyValue) {
            return +this.multiplyValue * +this.base;
        }
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.base = "40";
simpleMath.multiplyValue = 5;
console.log(simpleMath.calculate());
