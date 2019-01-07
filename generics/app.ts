// simple generic
function echo(data: any) {
  return data;
}

console.log(echo("Max").length);
console.log(echo(27));
console.log(echo({ name: "James", age: 12 }));

// Better generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "James", age: 12 }));

// built in generics
const testRes: Array<number> = [1.94, 2.33]; // array is a generic type by default
testRes.push(-2.99);
console.log(testRes);

// arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll(["apples", "nuts"]);

// Generic types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("something"));

// Creating Generic Classes
class SimpleMath<T extends number | string, U extends number | string> {
  base: T | undefined;
  multiplyValue: U | undefined;
  calculate(): number | undefined {
    if (this.base && this.multiplyValue) {
      return +this.multiplyValue * +this.base;
    }
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.base = "40";
simpleMath.multiplyValue = 5;
console.log(simpleMath.calculate());
