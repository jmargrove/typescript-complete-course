console.log("Decorators");

function logged(constructorFunction: Function) {
  console.log(constructorFunction);
}

@logged
class Per {
  constructor() {
    console.log("Hi");
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : () => null;
}

@logging(false)
class Cars {}

// Advance
function printAble(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log("Printing Hi!", this);
  };
}

@logging(true)
@printAble
class Plant {
  name = "Green plant";
}

const plant = new Plant();
(<any>plant).print();

// Method decorator
// Property decorators
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    discriptor: PropertyDescriptor
  ) {
    target;
    propName;
    discriptor.writable = value;
  };
}

function overWritable(value: boolean) {
  return function(target: any, propName: string): any {
    target;
    propName;
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project {
  @overWritable(false)
  projectName: string | undefined;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

// const project = new Project("super project");
// project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// };
// project.calcBudget();

// parameter decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target", target);
  console.log("Method name", methodName);
  console.log("Param index", paramIndex);
}

class Course {
  name: string | undefined;
  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    mode;
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course("Super course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
