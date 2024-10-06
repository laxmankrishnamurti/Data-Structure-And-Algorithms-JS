# Basic Input/Output

## Input

In JavaScript to input a value we use _promt()_ method.

```javascript
let userInput = promt("What is your name?");
if (userInput) {
  console.log("username is", userInput);
}
```

Before rendering the DOM on the webpage browser will ask to the user to input their name.

# Output

To display value on the console/terminal(in node.js) we use _console.log()_. Typically, it is mostly used for debugging purpose(Regular logging).

- console ===> Object, provided by javascript (We can think of it like a class)
- log() ===> This is a method of the object

There several methods in console object for example :-

- console.error(message) ===> To display errors on the console.
- console.warn(message) ===> To diaply warnings on the console.
- console.info(value) ===> It's a way to differentiate between regular logging (console.log) and messages that are meant to convey general information or updates.

```javascript
console.log("This is a regular log message"); ===> Align with terminal color
console.info("This is an informational message"); ===> No color (But some browser marked with blue color)
console.warn("This is a warning message"); ===> Marked with yellow color
console.error("This is an error message"); ===> Marked with red color
```
