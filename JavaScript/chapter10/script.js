//Classes and Objects

//Creating Objects
/*Method1*/

const student = {
  fullName: "Aasthayuli",
  marks: 95.8, //States
  printMarks: function () {
    //Behaviour or Method
    console.log("marks=", this.marks);
  },
  //We can access all these entities in console in the Browser
};
// All the objects have a special property called protoptype.
//This prototype is actually consisting of in-built special methods and properties for the object.

//Example
let arr = ["Apple", "Mango ", "Banana"];
console.log(arr);
console.log("Type of array:", typeof arr);

//We can create our own prototype too
console.log("\n\nConcept of Prototype.");

const employee = {
  calcTax1() {
    console.log("Tax is 10%");
  },
  calcTax2: function () {
    console.log("Tax is 20%");
  },
};

const karanArjun = {
  salary: 50000,
};
const karanArjun2 = {
  salary: 60000,
};
const karanArjun3 = {
  salary: 70000,
};
const karanArjun4 = {
  salary: 80000,
  calcTax1() {
    console.log("Tax is 30%"); //It will dominate over the prototype function
  },
};
const karanArjun5 = {
  salary: 90000,
};
karanArjun.__proto__ = employee;
console.log(karanArjun.calcTax1());

karanArjun2.__proto__ = employee;
console.log(karanArjun2.calcTax1());

karanArjun3.__proto__ = employee;
console.log(karanArjun3.calcTax1());

karanArjun4.__proto__ = employee;
console.log(karanArjun4.calcTax1());

karanArjun5.__proto__ = employee;
console.log(karanArjun5.calcTax1());

/*Method2 to Create Objects*/
console.log("\n\nConcept of Class and objects.");
class ToyotaCar {
  //Constructor is present implicitly or we can create our own custom constructor
  constructor(brand) {
    console.log("Creating new object...");
    this.brandName = brand;
  }
  start() {
    console.log("Car is Started");
  }

  stop() {
    console.log("Car is Stopped");
  }

  // setBrand(brand) {
  //   this.brandName = brand;
  // }
}

console.log(ToyotaCar);
let fortuner = new ToyotaCar();
// fortuner.setBrand("Fortuner");
console.log(fortuner);
console.log(typeof fortuner);
console.log(fortuner.start());

let lexus = new ToyotaCar("Lexus");
// lexus.setBrand("Lexus");
console.log(lexus);

//Inheritance
console.log("\n\nConcept of Inheritance.");
class parent {
  hello() {
    console.log("Hello");
  }
}

class child extends parent {}

let obj = new child();
obj.hello(); //works well

class person {
  constructor(name) {
    this.species = "homo sapiens";
    this.Name = name;
    console.log("Exits Parent constructor");
  }
  eat() {
    console.log("Can eat!");
  }

  sleep() {
    console.log("Can sleep!");
  }

  work() {
    console.log("Do nothing!");
  }
}

let p1 = new person("Sara Ali Khan");
console.log(p1);
p1.eat();
p1.sleep();
p1.work();
class Engineer extends person {
  constructor(branch) {
    console.log("Enter Child constructor");
    console.log("Enter Parent constructor");
    super(); //To invoke Parent class constructor and necessary for work child constructor
    this.Branch = branch;
    console.log("Exits Child constructor");
  }
  work() {
    console.log("Can solve problems and code!");
  }
}

class Doctor extends person {
  constructor(name) {
    super(name);
  }
  work() {
    super.eat();
    console.log("Can treat patients and heal people!");
  }
}

let Aasthayuliobj = new Engineer();
console.log(Aasthayuliobj);
Aasthayuliobj.eat();
Aasthayuliobj.work();

let engg = new Engineer("Computer Science");
console.log(engg);

let dr = new Doctor("Dr. XYZ");
console.log(dr);
dr.work();

//Error Handling
//try-catch

console.log("\n\nConcept of Error handling.");
let a = 10;
let b = 5;
console.log("a", a);
console.log("b", b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
try {
  console.log("a+b=", a + c);
} catch (err) {
  console.log(err);
}
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
