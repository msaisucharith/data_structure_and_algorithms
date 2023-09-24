// constructor
// constructor is function it will create instance of class
// when we new key word in for creating object the constructor will new object

class Bus {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  print = () => {
    console.log(this.name);
  };
}

// by using prototype we can add properties and methods in object or class
Bus.prototype.range = 5490;

const bus1 = new Bus("veera", 1);
console.log(bus1.range);
