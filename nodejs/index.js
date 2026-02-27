const fs = require("fs"); // Core module
const myModule = require("./myModule"); // Local module
const chalk = require("chalk"); // Third-party module

const person = {
  name: "John",
  email: "john@gmail.com",
};

fs.writeFile("person.json", JSON.stringify(person), () => {
  console.log("Person file is created");
});

console.log(myModule);

myModule.myFunction();

console.log(chalk.blue("Hello world"));
