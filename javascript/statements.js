const age = 2;

// If-else
console.log("==== IF ELSE ====");
if (age >= 10) {
  console.log("Age is more than 10");
} else if (age < 5) {
  console.log("Age is more than 5");
} else {
  console.log("Age is less than 10");
}

// swtich case
console.log("==== SWTICH CASE ====");
const enumValue = "DISCOUNT";

switch (enumValue) {
  case "DISCOUNT": {
    // enumValue === "DISCOUNT"
    console.log("Discounted");
    break;
  }
  case "NOT_DISCOOUNT": {
    console.log("Discount is not given");
    break;
  }
  default: {
    console.log("Default condition triggered");
  }
}

const price = null;

if (price) {
  console.log("Price is not null");
} else {
  console.log("Price is null");
}

if (price !== null) {
  console.log("Price is not null: (price !== null)");
}

const obj = {};

if (obj) {
  console.log("Object is not null"); // A
} else {
  console.log("Object is null"); // B
}

var arr; // undefined

if (arr) {
  console.log("Array is not null"); // A
} else {
  console.log("Array is null"); // B
}

const funct = function test() {};

if (funct) {
  console.log("Function is not null"); // A
} else {
  console.log("Function is null"); // B
}

// Loops
console.log("==== LOOPS ====");
const names = ["John", "Laura", "Jim"];

for (const name of names) {
  console.log(name);
}

for (let index = 0; index <= 2; index++) {
  console.log(names[index]);
}

const person = {
  name: "John",
  email: "john@gmail.com",
};

for (const field in person) {
  console.log(person[field]);
}

let personAge = 0;

while (personAge <= 30) {
  console.log(personAge);
  personAge++;
}

while (true) {
  console.log("True");
  break;
}

do {
  console.log("Do something");
  console.log("Check condition", personAge);
  personAge++;
} while (personAge <= 30);
