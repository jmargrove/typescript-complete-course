"use strict";
console.log("###########");
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {}; // initial value is an array
    }
    MyMap.prototype.setItem = function (key, item) {
        if (this.map) {
            this.map[key] = item;
        }
        else {
            console.log("Error: have not defined map yet.");
        }
    };
    MyMap.prototype.getItem = function (key) {
        if (this.map) {
            return this.map[key];
        }
        else {
            console.log("Error: have not defined map yet.");
        }
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
