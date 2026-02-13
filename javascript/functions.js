// this -> A special keyward that referes to an object in  JavaScript

const person = {
  name: "Alice",
  sayName: function () {
    console.log(this.name + " says woof!");
  },
};

person.sayName();
// this = person

const sayNameFunc = person.sayName; // Extract the function
sayNameFunc();
// this = undefined

const team = {
  name: "Warriors",

  // Regular function - dynamic this
  regularFunc: function () {
    console.log(this.name);
  },

  // Arrow function - lexical this
  arrowFunc: () => {
    console.log(this.name);
  },
};

team.regularFunc(); // 'Warriors' ✅
team.arrowFunc(); // undefined (this = global scope)

const regular = team.regularFunc;
const arrow = team.arrowFunc;

regular(); // undefined (lost reference)
arrow(); // still undefined (inherited from global scope)
