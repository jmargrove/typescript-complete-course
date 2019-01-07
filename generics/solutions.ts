console.log("###########");
class MyMap<T extends number | string> {
  private map: { [key: string]: T } = {}; // initial value is an array

  setItem(key: string, item: T) {
    if (this.map) {
      this.map[key] = item;
    } else {
      console.log("Error: have not defined map yet.");
    }
  }

  getItem(key: string) {
    if (this.map) {
      return this.map[key];
    } else {
      console.log("Error: have not defined map yet.");
    }
  }
  clear() {
    this.map = {};
  }
  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
