# `Underlying concept of "Objects"`

Understanding how an object works at its **core level** requires delving into how JavaScript (and its underlying engine, like Chrome's V8) handles objects and memory. We'll cover **all aspects** of an object step-by-step, including how the computer evaluates and stores it in binary.

---

### **What is an Object in JavaScript?**

- **Definition**: An object is a collection of key-value pairs where:
  - Keys are strings or symbols.
  - Values can be any data type (primitives or other objects).
  - It can also contain functions (called methods) tied to its keys.

---

### **How Does JavaScript Handle Objects Internally?**

#### **1. Object Initialization**

When we create an object in JavaScript, the engine performs these steps:

```javascript
const obj = {
  name: "Laxman",
  age: 25,
  greet: function () {
    return "Hello";
  },
};
```

##### **Steps Behind the Scenes**:

1. **Memory Allocation**:

   - The variable `obj` is allocated memory in the **stack**.
   - The actual object `{ name: "Laxman", age: 25, ... }` is stored in the **heap** because objects are dynamic and can grow in size.

2. **Reference Storage**:

   - The variable `obj` in the stack holds a **reference (pointer)** to the object in heap memory.

3. **Object Creation**:
   - The JavaScript engine creates a structure in the heap:
     - Keys are stored in a **hash map** (not as ordered arrays).
     - Values are pointers to memory locations where the actual data (e.g., `"Laxman"`, `25`) is stored.

#### **How Does the Computer Store This?**

1. **Heap Memory Structure**:
   - The object is stored as a **key-value map**.
   - Example:
     ```
     obj:
     +-----------------------------------------+
     | Key    | Hash(Key)   | Pointer to Value |
     +-----------------------------------------+
     | "name" | 0x1234abcd  | 0x5678abcd       | --> "Laxman"
     | "age"  | 0x2234abcd  | 0x6678abcd       | --> 25
     | "greet"| 0x3234abcd  | 0x7678abcd       | --> function
     +-----------------------------------------+
     ```
2. **Binary Conversion**:
   - Strings (like `"Laxman"`) are encoded in UTF-16 and stored in memory.
   - Numbers (like `25`) are stored in **IEEE-754 format**.
   - Functions are stored as executable bytecode.

---

#### **2. Object Structure**

Let’s analyze all the components of an object we mentioned and their roles:

1. **The Keyword**: `const`, `let`, or `var` declares the object in the scope.
2. **The Variable Name**: Holds the reference to the object in memory.
3. **`=` Assignment Operator**: Links the variable to the object reference.
4. **`{}` Object Initializer**: Marks the start and end of the object definition.
5. **Keys**:
   - Must be strings or symbols.
   - If not explicitly a string (e.g., numbers), they are coerced into strings internally.
6. **Values**:
   - Can be primitives, objects, or functions.
   - Values are stored in separate memory locations and referenced by the object.
7. **Comma (`,`)**: Separator for key-value pairs.
8. **Methods**:
   - Functions tied to keys.
   - Stored as bytecode in memory.
9. **`this` Context**:
   - A special reference inside methods.
   - Points to the object invoking the method.

---

#### **3. Object Evaluation at Core Level**

- When the JavaScript engine encounters an object:
  - **Parsing**: The engine parses the syntax and creates a tree-like structure (AST).
  - **Compilation**: The object is converted into low-level bytecode.
  - **Storage**: Key-value pairs are stored in a hash table for fast lookups.

#### **Key Lookups**

- When we access `obj.name`:
  1. The engine calculates the hash of `"name"`.
  2. It searches the hash table for this key.
  3. If found, it fetches the memory address of the value and returns it.

---

#### **4. Prototype Chain**

- Every object in JavaScript has an internal link to another object called its **prototype**.
- Example:
  ```javascript
  const obj = { name: "Laxman" };
  obj.toString(); // Works because of the prototype chain
  ```
  - `obj` does not have a `toString` method directly.
  - JavaScript looks up the prototype chain to find `toString` in `Object.prototype`.

---

### **What Happens to Object Methods?**

1. When we define a method inside an object:
   ```javascript
   const obj = {
     greet: function () {
       return "Hello";
     },
   };
   ```
   - The `greet` key points to a memory location where the function bytecode is stored.
2. Functions are "first-class citizens" in JavaScript, so they can also be treated as values.

---

### **Binary Conversion of an Object**

Internally, everything gets converted to **binary (0s and 1s)**:

1. **Strings** are encoded using UTF-16.
   - `"Laxman"` → `[01001100 01100001 01111000 ...]`
2. **Numbers** are converted to IEEE-754 format:
   - `25` → `01000011 10010000 00000000 ...`
3. **Keys** are hashed and stored in the hash map for efficient lookup.
4. **Memory Addresses**:
   - Pointers to heap memory are stored in binary.

---

### **Additions to the List**

Here are some additional aspects of objects in JavaScript:

1. **Prototype**: Every object has a prototype for inheritance.
2. **Descriptors**: Keys in objects have metadata like `writable`, `configurable`, `enumerable`.
   - Example:
     ```javascript
     Object.defineProperty(obj, "name", { writable: false });
     ```
3. **Hidden Properties**:
   - The JavaScript engine uses internal fields (e.g., `[[Prototype]]`) to manage objects.

---

### **Summary**

1. **How Does the Computer Store Objects?**

   - In memory, objects are hash maps stored in the heap.
   - Keys are hashed, and values are pointers to memory locations where the actual data is stored.

2. **What Happens Internally When we Access an Object Property?**

   - The engine calculates the hash of the key, looks it up in the hash table, and retrieves the value.

3. **What Makes an Object in JavaScript?**
   - `{}` syntax, keys, values, methods, prototypes, and descriptors.

Let me know if we'd like me to elaborate on any part! 😊
