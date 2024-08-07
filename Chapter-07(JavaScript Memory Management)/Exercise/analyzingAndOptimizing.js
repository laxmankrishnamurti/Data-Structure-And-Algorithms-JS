// Task - 01

function someLargeArray() {
  return new Array(1000000);
}

var exampleObject = {
  prop1: someLargeArray(),
  prop2: someLargeArray(),
};

// function printProperty(obj) {
//   console.log(obj["prop1"]);
// }

// printProperty(exampleObject);

//Optimized code

function printProperty(prop) {
  console.log(prop);
}

// printProperty(exampleObject["prop1"]);

//Reason :: An Excessive amount of memory is used in printProperty() because the entire object is being loaded into the function's scope.

//Task - 02

var RED = 0,
  GREEN = 1,
  BLUE = 2;

function redGreenBlueCount(arr) {
  var counter = new Array(3).fill(0);
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }

  return counter;
}

console.log(redGreenBlueCount([0, 1, 1, 1, 2, 2, 2]));

// Optimized code

function redGreenBlueCountOptimized(arr) {
  var RED = 0,
    GREEN = 1,
    BLUE = 2;

  var counter = new Array(3).fill(0);
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }

  return counter;
}

console.log(redGreenBlueCountOptimized([0, 1, 1, 1, 2, 2, 2]));

//Reason :: There is no need to declare variable in global scope

//Task - 03

/*
<button id="one">Button 1</button>
<button id="two">Button 2</button>
*/

var one = document.querySelector("#one");
var two = document.querySelector("#two");

// function callBackExample() {
//   one.removeEventListener("", callBackExample);
// }

// one.addEventListener("click", function () {
//   two.remove();
//   console.log(two);
// });

// two.addEventListener("click", function () {
//   one.remove();
//   console.log(one);
// });

//Optimized code

function removeOne() {
  var one = document.querySelector("#one");
  if (!one) {
    window.alert("Button One has been deleted");
    return;
  }
  one.remove();
  one.removeEventListener("click", removeTwo);
}

function removeTwo() {
  var two = document.querySelector("#two");
  if (!two) {
    window.alert("Button Two has been deleted");
    return;
  }
  two.remove();
  two.removeEventListener("click", removeOne);
}

one.addEventListener("click", removeTwo);
two.addEventListener("click", removeOne);

//Problem :: when element are removed, they are still referenced by the callback function.
