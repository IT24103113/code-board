console.dir(document);

const root = document.getElementById("root"); // O(1)
root.innerHTML = `
    <h1 id="header">Login Form</h1>
    <input name="email" type="email" placeholder="Enter email" id="email" class="input-field" />
    <input type="password" placeholder="Enter password" id="password" />
    <button id="submit">Login</button>
  `;

const header = document.getElementById("header");
header.style.color = "green";
header.style.fontFamily = "Consolas";
header.style.direction = "rtl";

const inputByName = document.getElementsByName("email");
console.log(inputByName);

const inputElements = document.getElementsByTagName("input");
console.log(inputElements);

const inputClassField = document.getElementsByClassName("input-field");
console.log(inputClassField);

const loginButton = document.getElementById("submit");
loginButton.onclick = function handleLoginPress() {
  document.open();
  document.writeln("Login Submitted");
  document.write("Write method called"); // This is now deprecated
  document.close();
};
