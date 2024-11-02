// name = "laxman";
console.log("name", name);

name = "laxman";
var name;

function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log("bottom", bottom);
  //   console.log("name is ", age);
  function scope2() {
    const age = 22;
    console.log("getting value from parent block scope", top);
    if (true) {
      console.log("bottom inside scope2", bottom);
    }
  }

  scope2();
  var bottom;
}

// console.log("bottom at outside", bottom);
// scope1();
