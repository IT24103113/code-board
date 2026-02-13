// Declaration
function printNameDeclaration(name) {
  console.log(name);
}

printNameDeclaration("John");

// Expression
const printName = function (name) {
  console.log(name);
};

printName("John");

// Arrow Function
const printNameArrowSL = (name) => console.log(name);

const addNumbers = (num1, num2) => num1 + num2;

const addNumbersCB = (num1, num2) => {
  return num1 + num2;
};

const printNameArrowML = (name) => {
  console.log(name);
};

printNameArrowSL("John");

// Anonymous Arrow Function
// const printNameArrowML = ()
// You have to call the function wher it is declared in
// anonymous arrow function
((name) => {
  console.log(name);
})("John");

const createPersonObj = (name, email, phoneNumber) => {
  // indicating function implementation
  return {
    name,
    email,
    phoneNumber,
  };
};

const createPerson = (name, email, phoneNumber) => ({
  name,
  email,
  phoneNumber,
});

const person = createPersonObj("John", "john@gamil.com", "08877654325");
console.log(person);

const newPerson = createPerson("John New", "johnnew@gamil.com", "08877654325");
console.log(newPerson);
