# JavaScript String

**_A string is a collection of characters. That's it._**

```js
const name = new String("Laxman");
console.log("name is", name);

const name1 = String("Laxman");
console.log("name is", name1);

const name2 = "Laxmna";
console.log("name is", name2);
```

_Helper -> ChatGPT_

In JavaScript, strings can be created in three main ways, as you've shown in the examples. Let’s go through each one and understand the differences.

### 1. `new String("Laxman")`

```javascript
const name = new String("Laxman");
console.log("name is", name);
```

- **Explanation**: `new String("Laxman")` creates a **String object** rather than a primitive string. When you use the `new` keyword, you’re calling the `String` constructor, which creates a wrapper around the primitive string value `"Laxman"`.
- **Type**: This results in an **object** rather than a primitive string. You can check this with `typeof name`, which would return `"object"`.
- **Properties and Methods**: The String object has additional properties and methods because it’s an instance of JavaScript's built-in `String` class. However, String objects are rarely used directly, as they can add unnecessary complexity.
- **Memory & Performance**: Since it’s an object, it takes up more memory and is generally slower than a primitive string.

### 2. `String("Laxman")`

```javascript
const name1 = String("Laxman");
console.log("name is", name1);
```

- **Explanation**: Calling `String("Laxman")` without the `new` keyword does **not** create an object. Instead, it directly converts the provided argument (`"Laxman"`) to a primitive string. If the argument is already a string, it simply returns that primitive.
- **Type**: This results in a **primitive string** (not an object). `typeof name1` will return `"string"`.
- **Usage**: This form is widely used to ensure a value is a string without creating an extra object wrapper.
- **Memory & Performance**: It’s more efficient in terms of memory and speed compared to creating a `String` object.

### 3. `"Laxman"`

```javascript
const name2 = "Laxman";
console.log("name is", name2);
```

- **Explanation**: Using double or single quotes (`"Laxman"` or `'Laxman'`) creates a **primitive string** directly.
- **Type**: This is a **primitive string** as well, so `typeof name2` will return `"string"`.
- **Usage**: This is the most common way to create strings in JavaScript, as it’s simple and efficient.

### Comparison and Key Points

- **Primitive String vs. String Object**: In JavaScript, primitive strings (created by literal syntax or `String()` without `new`) are lightweight, immutable, and have limited functionality compared to String objects. However, when you try to access properties or methods on a primitive string, JavaScript temporarily wraps it in a String object so you can use methods like `.toUpperCase()`.
- **JavaScript String Object**: The `String` object in JavaScript is a **built-in wrapper** class that provides methods and properties for manipulating strings. When you call methods on a primitive string, JavaScript internally creates a temporary `String` object so the method can be executed and then discards it.
- **Classes and Pre-Built Objects**: JavaScript has pre-built classes like `String`, `Number`, and `Boolean`, which allow primitive types to be wrapped in objects with additional methods and properties. So, JavaScript doesn’t create strings as objects by default but allows you to wrap them as objects when necessary.

In general, avoid `new String()` because it can lead to unexpected behavior when comparing or working with strings due to its object nature.

### Q :: so, if javascript has it's own pre-built in classes and it uses classes to create objects wrapper so why do we not call it as a class based programming language like Object Oriented Programming language? Generally we knew JavaScript because of it's prototype and inheritance nature this same mathed is also exist in class based programming language like C++, JAVA.........etc what's the reason.

_Helper -> ChatGPT_

Great question! JavaScript indeed has many Object-Oriented Programming (OOP) features, but it is fundamentally different from classical class-based OOP languages like Java or C++. Here’s why JavaScript is considered a **prototype-based** language rather than a **class-based** language, even though it now has `class` syntax and built-in constructors like `String`, `Number`, etc.

### 1. **Prototype-Based vs. Class-Based Structure**

- **Prototype-Based**: In JavaScript, **every object can have a prototype**—an object from which it inherits properties and methods. Rather than creating new objects from a class blueprint, JavaScript objects are created from other objects. This is called **prototypal inheritance**.
- **Class-Based**: In languages like Java and C++, classes are blueprints for creating objects. Objects are instances of classes, and the inheritance system is based on defining hierarchies of classes. Objects don’t inherit directly from other objects; instead, they inherit through a class structure.

JavaScript objects directly inherit from other objects, which is the essence of prototype-based programming. This is more flexible than a strict class structure, as you can dynamically change the prototype of an object or add methods/properties to it at runtime.

### 2. **Constructor Functions and Classes in JavaScript**

- JavaScript has **constructor functions** (like `new String()`) and, more recently, **ES6 classes**. These give JavaScript the appearance of a class-based structure, but under the hood, it’s still based on prototypes.
- When you define a class in JavaScript using the `class` keyword, it’s actually syntactic sugar over the prototypal inheritance model. The class syntax just makes it look more like class-based OOP languages, but it still creates prototype chains behind the scenes.

### 3. **Flexibility and Dynamic Nature**

- In JavaScript, objects are more flexible because you can modify them on the fly. For example, you can add or remove properties or even change their prototype at runtime.
- In class-based languages, objects have a more rigid structure. Once an instance is created from a class, its structure usually remains the same, and it strictly adheres to the class’s blueprint.

### 4. **Difference in Inheritance**

- **Class-Based**: Inheritance in class-based languages is typically **hierarchical**. A class inherits from another class in a parent-child relationship.
- **Prototype-Based**: In JavaScript, inheritance is **delegated** rather than strictly hierarchical. Objects delegate behavior to their prototype, which can itself have its own prototype, forming a chain. This prototype chain is more dynamic and allows for a flexible "inheritance" that can be altered at runtime.

### 5. **Why JavaScript Is Not Purely OOP**

- JavaScript is a **multi-paradigm language**; it supports OOP, functional programming, and procedural programming styles. While it has object-oriented features, it doesn’t enforce OOP principles the way a class-based language like Java or C++ does.
- JavaScript doesn’t have access modifiers (like `public`, `private`, `protected` in Java) for strict encapsulation (although the introduction of `#privateFields` syntax in recent versions adds some encapsulation).
- It also lacks certain strict class-based language features like interfaces, abstract classes, and true inheritance hierarchies.

### Summary

JavaScript uses prototypes to enable a form of OOP, but its foundation is more flexible and dynamic than class-based OOP. The `class` keyword in JavaScript is a more recent addition to make it easier for developers familiar with traditional OOP languages, but JavaScript still fundamentally relies on prototype chains, not a true class hierarchy.

So while JavaScript can do many of the same things as class-based languages, it does so with its own unique, prototype-oriented approach. This flexibility is one of JavaScript’s strengths, allowing it to adapt to different programming styles, but it’s also why it’s not purely considered a class-based OOP language.

## String Access

Most programming language have a function that allows us to compare strings. In JavaScript, this can be done simply by using comparison operators.

Helpful for sorting algorithms
If we are comparing two stinrg with different lengths, it starts comparing from the start of the string until the length of the smaller string.

Internally it uses ASCII value to compare two characters within a string.

## String Search

This is used to find a string within a string. This takes two parameter, are :-

- The string which we want to find, this is a required parameter
- It also takes an index value to search, this is an optional parameter.
- At the end if the string is present within the parent string it will return the index value of the string.
- If not, it will return -1
