const arr1 = ["John", 123, { name: "Nimal", email: "nimal@gmail.com" }];
const arr2 = ["Test", "Java"];

const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(arr2.every((value) => value === "Java"));

let arr4 = ["Java", "Node JS", "React", "Python", "Rust"];
arr4.fill("JavaScript", 1);
console.log(arr4);

const numarr = [1, 2, 3, 4, 10, 15, 4];
const arr5 = numarr.filter((value) => value >= 10);
console.log(arr5);

const num = numarr.find((value) => {
  return value === 4;
});
console.log(num);

const numIndex = numarr.findIndex((value) => value === 4);
console.log(numIndex);

numarr.forEach((value) => console.log(value));

const programs = ["Chrome", "Firefox", "Opera"];
console.log(programs.indexOf("Firefoxs"));
console.log(Array.isArray(programs));
console.log(programs.join(" "));

const numarr2 = [1, 2, 3, 4, 10, 15, 4];
console.log(numarr2);
const sum = numarr2.map((value, index, arr) => {
  console.log(arr[index]);
});

console.log(sum);

numarr.push({ name: "John" });
console.log(numarr);

numarr.pop();
console.log(numarr);

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
const sumWithInitial = array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

const reduRight = array.reduceRight((prevValue, currValue) => {
  return prevValue - currValue;
});
