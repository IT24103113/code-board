// Functions
function printPerson(person) {
  console.log(person);
}

console.log("Type of the printPerson: ", typeof printPerson);
console.log("Instance of the printPerson: ", printPerson instanceof Object);

// // Array
const arr = ["Apple", "Orange", "Banana"];

/**
 * arr = {
 *  0: "Apple",
 *  1: "Orange"
 * }
 */

console.log("\nType of the arr: ", typeof arr);
console.log("Instance of the arr: ", arr instanceof Object);

// // Object
const obj = { name: "John" };

console.log("\nType of the obj: ", typeof obj);
console.log("Instance of the obj: ", obj instanceof Object);
