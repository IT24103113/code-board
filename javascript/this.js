// Learning this keyword in JS

// default binding
// default: this -> (browser: Window) (strict: undefined)
console.log("==== 1. Default binding ====");
function printName() {
  console.log(this); // global context
}

printName();

const teacher = {
  name: "John",
  job: "Teacher",
};

// Implicit binding
console.log("==== 2. Implicit binding ====");
const person = {
  name: "Rusiru",
  greet: function () {
    console.log(this); // person
  },
};

person.greet();

// Explicit binding
console.log("==== 3. Explicit binding ====");
const greetUser = person.greet.bind(teacher); // Binding an object to a function reference
// bind function returns a copy of the function, so that we can call it
greetUser(); // standalone function: this -> global context

const programmer = {
  name: "Eddy",
  code: function (programmingLanguage) {
    console.log(this, programmingLanguage);
    return programmingLanguage;
  },
};

const programLang = programmer.code.apply(programmer, ["JavaScript"]);
// apply function returns the final vlaue of the execution, so we cannot call it just like we have done in bind function
console.log(programLang);

const programLang2 = programmer.code.call(programmer, "TypeScript");
console.log(programLang2);

// Constructor binding
function Person(name, job) {
  this.name = name;
  this.job = job;
  console.log(this);
  this.printDetails = function () {
    // console.log(this); // this -> instance of the person object
  };
}

console.log("==== 4. Constructor binding ====");
const projectManager = new Person("John", "Project Manager");
projectManager.printDetails(); // this -> person object (John)
Person("Rusiru", "Engineer"); // this -> global context

class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  printVehicleDeatils() {
    console.log(this); // this -> instance of the vehicle object
  }
}

const vehicle = new Vehicle("Axio", "Toyota");
vehicle.printVehicleDeatils();

console.log("==== Arrow Functions ====");

// In regualar functions, they have their own this binding
// That's why we can bind an object using Explicit binding
//
// Arrow functions, they do not have their own this binding
// Therefore, we cannot bind an object using Explicit binding
// Also, AF are not pointing to the current object (context)
//
// Arrow functions completely ignore the object they're attached to.
// They only care about where the code is written (lexical scope).

const phone = {
  name: "Samsumg S24",
  model: "S24",
  price: 120000,
  printInfoRF: function () {
    console.log("Calling from RF", this); // this -> person
    const printInfoAF = () => {
      console.log("Calling from AF inside the RF: ", this); // this -> printInfo's this -> person; this (AF) -> person
    };

    printInfoAF();
  },
  printInfoAF: () => {
    console.log("Calling from outter AF: ", this);
  },
};

phone.printInfoRF();
phone.printInfoAF();
