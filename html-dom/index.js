console.dir(document);

const timeout = window.setTimeout(() => {
  console.log("Called after 3 seconds");
}, 3000);

window.clearTimeout(timeout);

function handleButton(event) {
  console.log("Handle button", event);
}

const root = document.getElementById("root"); // O(1)
root.innerHTML = `
    <h1 id="header">Login Form</h1>
    <input name="email" type="email" placeholder="Enter email" id="email" class="input-field" />
    <input type="password" placeholder="Enter password" id="password" />
    <button onclick="handleButton">Login</button>
  `;

const header = document.getElementById("header");
header.style.color = "green";
header.style.fontFamily = "Consolas";

const inputByName = document.getElementsByName("email");
console.log(inputByName);

const inputElements = document.getElementsByTagName("input");
console.log(inputElements);

const inputClassField = document.getElementsByClassName("input-field");
console.log(inputClassField);

const loginButton = document.getElementById("submit");
loginButton.onclick = function handleLoginPress(event) {
  console.log(event);
  document.open();
  document.writeln("Login Submitted");
  document.write("Write method called"); // This is now deprecated
  document.close();
};

header.onmousemove = function handleMouseMove() {
  console.log("Mouse moved");
};

const emailField = document.getElementById("email");
emailField.onkeydown = function handleKeyDown(event) {
  console.log(event);
  if (event.keyCode === 13) {
    console.log("Handling Form Submit");
  }
};

emailField.onchage = function handleOnChange(event) {
  console.log(event);
};

emailField.onselect = function handleOnSelect(event) {
  console.log(event.target);
};
