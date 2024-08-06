const jsObject = new Object();

console.log("jsObject :: ", jsObject);
//jsObject ::  {}

let marks = [91, 95, 99, 98, 89, 81, 75];
jsObject.marks = marks;

console.log("jsObject :: ", jsObject);
/*
jsObject ::  {
  marks: [
    91, 95, 99, 98,
    89, 81, 75
  ]
}
*/

console.log("jsObject makrs :: ", jsObject.marks);

/*
jsObject ::  {
  marks: [
    91, 95, 99, 98,
    89, 81, 75
  ]
}
*/

jsObject.title = "JavaScript Object";

console.log("jsObject title :: ", jsObject.title);
//jsObject title ::  JavaScript Object
