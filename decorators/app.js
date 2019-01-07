"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("Decorators");
function logged(constructorFunction) {
    console.log(constructorFunction);
}
var Per = /** @class */ (function () {
    function Per() {
        console.log("Hi");
    }
    Per = __decorate([
        logged
    ], Per);
    return Per;
}());
// Factory
function logging(value) {
    return value ? logged : function () { return null; };
}
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars = __decorate([
        logging(false)
    ], Cars);
    return Cars;
}());
// Advance
function printAble(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log("Printing Hi!", this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green plant";
    }
    Plant = __decorate([
        logging(true),
        printAble
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// Method decorator
// Property decorators
function editable(value) {
    return function (target, propName, discriptor) {
        target;
        propName;
        discriptor.writable = value;
    };
}
function overWritable(value) {
    return function (target, propName) {
        target;
        propName;
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overWritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
// const project = new Project("super project");
// project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// };
// project.calcBudget();
// parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log("Target", target);
    console.log("Method name", methodName);
    console.log("Param index", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        mode;
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
