# Chapter - 07 (JavaScript Memory Management)

## Introduction

In any program, a variable takes up some memory. In Low-level programming languages such as C, the programmer must allocate and deallocate memeory manually. In contrast, the V8 JavaScript engine and other moderm javaScript engine have garbage collectors that delete unused variables for the programmer. Despite this memory management done by the javascript engine, however there are common pitfalls that developers can fall into.

## What are Memory Leaks?

A memory leaks is a failure in a program to release discarded memory, causing impaired performance and sometimes even failure. Memory leaks can happen when javascript engine's garbage collectors do not free memory properly.

## Following are key principles outlined to avoid memory leaks during javascript development.

- Reference to an object

```javascript
const foo = {
  bar1: memory(), //5KB
  bar2: memory(), //5KB
};

function clickEvent() {
  console.log(foo.bar1[0]);
}
```

We might expect that <code>clickEvent()</code> function is use 5KB of memory since it is only referencing bar1 from the foo object. However, the truth is that it is using 10KB of memory since it has to load the whole foo object into the function's scope to access bar1 property. We can enhance it like this :-

```javascript
function clickEvent(bar1) {
  console.log(bar1[0]);
}

clickEvent(foo.bar1);
```

- Leaking DOM :: When the two element is no longer in use, this is a memory leak and should be avoided.

- Global window object :: If an object is on the global window object, it is in memeory. Any additional objects declared as a property of window will not be cleared because window is a required object for the browser to run. Remember that any global variable declared will be set as a property of the window object.

```javascript
var username = "Laxman Krishnamurti";
console.log("username :: ", username); //Laxman Krishnamurti
console.log("username by window object :: ", window.username); //Laxman krishnamurti
```

- Limiting object reference :: Do not pass entire object as an agrument into a function. Always remember to limit the amount of scope the function pulls and pass the property of an object only into functions instead of the entire object. This is because the object's memory footprint can be very large.

```javascript
let obj = {
  username: "Kawya Krishnamurti",
  watchHistory: ["An Array of 1,000,000 elements"],
};

function getUsername(obj) {
  console.log("username is : ", obj.username);
}

getUsername(obj); //Do not do this. Function's scope will also going to take up space in the memory as the size of the obj argument. Function dosen't need watchHistory data, although it has occupied space that dosen't required.
```

- The delete operator :: Always remember that the delete operator can be used to delete an unwanted object property (though it does not work on nonobjects).
