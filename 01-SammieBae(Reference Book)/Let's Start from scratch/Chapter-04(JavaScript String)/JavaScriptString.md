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

**_indexOf(string, index)_**

**This function is case sensitive.**

- The string which we want to find, this is a required parameter
- It also takes an index value to search, this is an optional parameter.
- At the end if the string is present within the parent string it will return the index value of the string.
- If not, it will return -1

## String Decomposition

We can use string decompositor to split a string into parts.

- We use **_.split(separator)_** to split a string into parts
- Returns an array

## String Replace

As the name suggests it is used to replace a string in a parent string

- It takes two arguments
  - The original string
  - The new string which we want to use in the place of original string

## Regular Expressions

Regular expressions (regexes) are a set of characters that defines a search pattern. JavaScript also comes with the native object **_RegExp_**, which is used for regular expressions.

The **_Constructor_** for the **_RegExp object takes two parameters_**

**1. The reqular expression**
**2. The optional match settings**

**i -> Perform case-insensitive matching**
**g -> Perform a global match (find all matches rather than stopping after first match)**
**m -> Perform multiline matching**

Regular Expressions has the following two functions :-

- _search()_ :: Tests for matches in a string. This returns the index of the match.
- _match()_ :: Tests for matches. This returns all the matches.

The JavaScript String object also has the following two regex-related functions that accept the RegExp object as an argument.

- _exec()_ :: Tests for matches in a string. This returns the first match.
- _test()_ :: Tests for matches in a string. This returns true or false.

### **_Basic Regular Expression Rules_**

Keep in mind _Regular Expression_ is a way to filter, seach, modify or delete any character from the string. Do not treat it as a complex concept. It is. But not for now. Don't make things complicated, understand as it is.

**Here are the basic regex rules**

**1. ^ ===> Indicates the start of a string/line**
**2. \d ==> Finds any digit**
**3. [abc] ===> Finds any characters between the brackets**
**4. [^abc] ===> Finds any character not between the brackets**
**5. [0-9] ===> Finds any digit between the brackets**
**6. [^0-9] ===> Finds any digit not between the brackets**
**7. [x|y] ===> Finds any of the alternatives specified**

## Query String

Lets sort the URI in the key-value format.

**_category=4&product_id=23948&query=lcd+tv_**

```js
var uri = "category=4&product_id=23948&query=lcd+tv";
var queryString = {};

const matches = uri.matchAll(/([^?=&]+)(=([^&]*))/g);
console.log("matches :: ", matches);
const matchesArray = [...matches];
console.log("matchesArray", matchesArray);
```

```bash
# Output

Matches :: Object [RegExp String Iterator] {}

matchesArray [
  [
    'category=4',
    'category',
    '=4',
    '4',
    index: 0,
    input: 'category=4&product_id=23948&query=lcd+tv',
    groups: undefined
  ],
  [
    'product_id=23948',
    'product_id',
    '=23948',
    '23948',
    index: 11,
    input: 'category=4&product_id=23948&query=lcd+tv',
    groups: undefined
  ],
  [
    'query=lcd+tv',
    'query',
    '=lcd+tv',
    'lcd+tv',
    index: 28,
    input: 'category=4&product_id=23948&query=lcd+tv',
    groups: undefined
  ]
]
```

### **Lets understand how the regex will work**

This regular expression `/([^?=&]+)(=([^&]*))/` is useful for extracting key-value pairs from query strings in URLs. Let’s break down each part of this pattern to understand how it works.

#### Overall Structure

The regular expression is divided into two main parts:

1. **`([^?=&]+)`** - Matches the key of the key-value pair.
2. **`(=([^&]*))`** - Matches the equal sign and the value part of the key-value pair (if any).

#### Breakdown of Each Part

#### `/`...`/`

- These are the delimiters for the regular expression. Everything inside them defines the regex pattern.

#### `([^?=&]+)`

- This section captures the **key** in the key-value pair.

- **`(`...`)`**: Parentheses denote a capturing group. This part captures everything it matches as a separate group, which can be accessed later in code or during regex evaluation.

- **`[^?=&]`**: This is a **character class** that matches any character **except** `?`, `=`, or `&`. Here’s the breakdown:
  - **`[^...]`**: This syntax represents a negated character set, meaning "match any character that is **not** within these brackets."
  - **`?`, `=`, `&`**: These are the characters being excluded from the match because they’re typically found in URLs and would signify the start of a query string (`?`) or delimit key-value pairs (`=` and `&`).
- **`+`**: This **quantifier** means "match one or more of the previous character." It ensures that the key part consists of at least one valid character but could be longer.

#### `(=([^&]*))`

- This section captures the **value** part in the key-value pair, including the `=` character and the value that follows it (if any).

- **`=`**: Matches the equal sign (`=`) exactly. This part isn't within a character class or quantifier, so it only matches one `=` character.

- **`(`...`)`**: The second set of parentheses forms a capturing group that captures the value after the equal sign.

- **`([^&]*)`**: Matches the value part of the key-value pair, up until it encounters an ampersand (`&`) or reaches the end of the string. Here's a breakdown:

  - **`[^&]`**: A negated character class, matching any character **except** `&`. This prevents capturing multiple key-value pairs by ensuring the match stops at the next `&` (or the end).

  - **`*`**: A quantifier meaning "match zero or more of the previous character." This allows values to be empty or longer.

### Summary of How It Works

Together, this regex matches:

- A sequence of characters that doesn’t contain `?`, `=`, or `&` (the key).
- An `=` character.
- A sequence of characters that doesn’t contain `&` (the value).

### **_Lets clearify this a little bit more_**

Sure! Let's go deeper into each aspect, focusing on how groups are created, how they start and stop, and how the regex engine processes each character. We'll also explore how the regex engine uses backtracking to search for patterns.

---

#### Regex Pattern in Detail

The regex pattern:

```regex
/([^?=&]+)(=([^&]*))/g
```

has the following elements:

1. **`([^?=&]+)`** — Group 1: Captures the **key** part of the key-value pair.
2. **`=`** — Matches the equal sign `=`.
3. **`([^&]*)`** — Group 2 (within Group 3): Captures the **value** part of the key-value pair.

Each set of parentheses `()` defines a **capturing group**. This means that each group can extract part of the string separately, which helps you get both the key and the value for each match.

Let's go step-by-step through how this works with the sample query string:

#### Step-by-Step Example

Given the query string:

```plaintext
category=4&product_id=2014&query=lcd+tv
```

Let’s follow the regex engine as it matches each part.

#### 1. Initialization

The regex engine starts from the **beginning of the query string**. The `/g` flag ensures the regex will continue matching globally across the entire string until there are no more matches.

#### 2. First Match Attempt

##### a. **`([^?=&]+)` — First Capturing Group**

- The regex engine begins at the first character `c` in `category=4&product_id=2014&query=lcd+tv`.
- **Character-by-character evaluation**:

  - `c`: Matches because it’s not `?`, `=`, or `&`.
  - `a`: Matches.
  - `t`: Matches.
  - `e`: Matches.
  - `g`: Matches.
  - `o`: Matches.
  - `r`: Matches.
  - `y`: Matches.

- **Stopping Condition**: The engine stops when it encounters `=`, as `=` is excluded from the set `[^?=&]`.
- The matched substring so far is `"category"`, which is stored in **Group 1**.

##### b. **`=` — Matches Equal Sign**

- The engine expects the exact character `=` next, and it finds it. This part isn’t in a capturing group, so it’s not stored separately.

##### c. **`([^&]*)` — Third Capturing Group (Group 3)**

- **Character-by-character evaluation**:
  - `4`: Matches because it’s not `&`.
- **Stopping Condition**: The engine stops when it encounters `&`, which isn’t allowed in this group.
- The matched substring for the value is `"4"`, stored in **Group 3**.

##### Summary of First Match

- Full match: `category=4`
- Captured Groups:
  - **Group 1**: `"category"`
  - **Group 3**: `"4"`

#### 3. Moving to the Next Position (`&`)

After finding a full match `category=4`, the regex engine moves to the next character after `&` and continues searching.

#### 4. Second Match Attempt (`product_id=2014&`)

The same process is repeated for `product_id=2014&`:

- **Group 1 (`([^?=&]+)`)** matches `"product_id"`.
- **Equal sign `=`** matches.
- **Group 3 (`([^&]*)`)** matches `"2014"`.

**Summary of Second Match**

- Full match: `product_id=2014`
- Captured Groups:
  - **Group 1**: `"product_id"`
  - **Group 3**: `"2014"`

#### 5. Third Match Attempt (`query=lcd+tv`)

Lastly, for `query=lcd+tv`:

- **Group 1 (`([^?=&]+)`)** matches `"query"`.
- **Equal sign `=`** matches.
- **Group 3 (`([^&]*)`)** matches `"lcd+tv"`.

**Summary of Third Match**

- Full match: `query=lcd+tv`
- Captured Groups:
  - **Group 1**: `"query"`
  - **Group 3**: `"lcd+tv"`

---

#### Internal Working of the Regex Engine

Now, let’s go deeper into how regex engines process patterns like these. Regex engines use an approach called **backtracking** to evaluate patterns step-by-step.

#### Steps of Regex Processing and Backtracking

1. **Start Matching from the Left**: The engine begins matching from the first character of the target string.
2. **Evaluate Each Token**: It reads the regex pattern from left to right, checking each token against the characters in the target string.

3. **Store Matches in Groups**: Whenever a group (indicated by parentheses) matches a part of the string, the engine stores it separately.

4. **Backtracking if No Match**: If a part of the regex fails to match, the engine will **backtrack** to previous points in the pattern and string, trying alternative paths. However, in our example, each part matches sequentially, so no backtracking occurs.

5. **Proceed After a Match**: When a full match is found, the engine moves to the next character after the match (thanks to the `g` flag), and the process repeats.

6. **End on Exhaustion**: The regex engine continues this process until it reaches the end of the string and no more matches are possible.

---

#### Why This Works for Query Strings

Since the regex ignores `?`, `=`, and `&` in `([^?=&]+)`, it effectively isolates each key and value. The `g` flag ensures that we get each key-value pair in the entire query string, moving forward each time a match is found.

#### Final Summary of Each Part

- **Group 1**: Matches a sequence of characters that aren’t `?`, `=`, or `&`, capturing each key.
- **`=`**: Ensures that there’s an equal sign between the key and the value.
- **Group 3**: Matches any characters except `&`, capturing each value up to the next `&` or end of the string.
- **Backtracking**: If a pattern fails, the regex engine can backtrack to try alternative matches, but in this pattern, matches occur sequentially, so backtracking doesn’t happen.

---

**_Note_**

When you see a **character class** in the format `[^ ... ]`, it creates a **negated set**, meaning it matches any character **except** the ones listed inside the brackets. This effectively makes it a **stopping condition** for those characters, as the regex engine will stop matching when it encounters any of them.

In our case:

- **`[^?=&]`** matches any character except `?`, `=`, or `&`. This means it keeps matching characters until it hits one of these, which stops the match for that group.
- **`[^&]`** matches any character except `&`, stopping the match when it reaches an ampersand.

This behavior is exactly what’s needed to separate keys and values in the query string example.

So, to confirm: yes, `[^...]` with the `^` sign does act as a stopping condition for the specified characters in regex.

### _Let's summarize the solution why we are extracting the matches in the form of array._

Certainly! Let's take this code step-by-step and break down exactly what's happening. We’ll start with each line in isolation, then discuss why you're seeing the output `Object [RegExp String Iterator] {}`.

#### Code Breakdown

Here’s the code you're working with:

```javascript
var uri = "category=4&product_id=23948&query=lcd+tv";
var queryString = {};

const matches = uri.matchAll(/([^?=&]+)(=([^&]*))/g);
console.log("matches", matches);
```

#### 1. Defining `uri`

```javascript
var uri = "category=4&product_id=23948&query=lcd+tv";
```

- This defines a string `uri` with some URL parameters.
- In this example, `uri` holds a query string format containing three key-value pairs:
  - `category=4`
  - `product_id=23948`
  - `query=lcd+tv`

#### 2. Initializing an Empty Object `queryString`

```javascript
var queryString = {};
```

- This creates an empty object `queryString` where we might intend to store the parsed key-value pairs later on.

#### 3. `matchAll` Usage

```javascript
const matches = uri.matchAll(/([^?=&]+)(=([^&]*))/g);
```

- **`uri.matchAll(...)`**: The `matchAll` method is applied to `uri`, the string containing the query.
- **Regex Pattern**: The regular expression `/([^?=&]+)(=([^&]*))/g` is used to find key-value pairs.

  Let's break down the pattern in this regex, which has the global flag `g` to search across the whole string:

  - `([^?=&]+)`: This captures any sequence of characters that aren’t `?`, `=`, or `&`—representing the **key** in the key-value pair.
  - `=`: Matches the equal sign `=`, which separates keys and values.
  - `([^&]*)`: This captures any sequence of characters that aren’t `&`—representing the **value** in the key-value pair.

- **What `matchAll` Returns**: Unlike `match`, which returns an array of matches or `null`, `matchAll` returns a **`RegExp String Iterator`**. This iterator provides access to all the matches of the regex in the string, but you have to **iterate over it** to see each match.

#### 4. Logging `matches`

```javascript
console.log("matches", matches);
```

When you log `matches`, you see `Object [RegExp String Iterator] {}`. This output indicates that `matches` is not a simple array; it’s an **iterator**.

- The iterator doesn’t directly hold all the match data in a way you can immediately view in the console.
- Instead, you must **convert it into an array** to view each match in detail.

### How to View Each Match in `matches`

To see the content of each match, you can use the spread operator `[...]` to convert the iterator into an array:

```javascript
const matchesArray = [...matches];
console.log("matchesArray", matchesArray);
```

This will give you an array of arrays, where each inner array corresponds to a match and includes:

- `match[0]`: The full matched string (e.g., `category=4`).
- `match[1]`: The first capturing group, which is the **key** (e.g., `category`).
- `match[3]`: The third capturing group, which is the **value** (e.g., `4`).

#### Example Output of `matchesArray`

After running `const matchesArray = [...matches]`, `matchesArray` should look like this:

```javascript
[
  ["category=4", "category", "=4", "4"],
  ["product_id=23948", "product_id", "=23948", "23948"],
  ["query=lcd+tv", "query", "=lcd+tv", "lcd+tv"],
];
```

### Final Explanation with Array Conversion

After converting the iterator to an array, you can process each match:

```javascript
matchesArray.forEach((match) => {
  const key = match[1]; // Extract the key
  const value = match[3]; // Extract the value
  queryString[key] = value; // Store key-value pairs in the object
});

console.log(queryString);
```

This code will:

- Loop through each match.
- Extract the `key` from `match[1]` and the `value` from `match[3]`.
- Add each key-value pair to the `queryString` object.

#### Final Output of `queryString`

```javascript
{
  category: "4",
  product_id: "23948",
  query: "lcd+tv"
}
```

### Summary of Key Points

- `matchAll` returns a **`RegExp String Iterator`**, which is not directly viewable in the console as an array.
- Use `[...matches]` to **convert the iterator into an array**.
- Each element in this array will include the full match and capturing groups, which can then be accessed and processed.

```js
// Another way to solve the problem

uri.replace(new RegExp("([^?=&]+)(=([^&]*))", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});

console.log("queryString", queryString);
```

### **_Let's understand the solution and we will also know about the $-based parameter_**

let’s break down this solution step-by-step. This code uses `replace` with a regular expression and a **replacement function** to extract key-value pairs and add them to an object, `queryString`.

Here’s the code again:

```javascript
uri.replace(new RegExp("([^?=&]+)(=([^&]*))", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});
```

#### Code Breakdown

#### 1. `uri.replace(...)`

- **`uri.replace(...)`**: The `replace` method in JavaScript is used here, not to actually replace anything in the `uri` string, but to use its **replacement function** feature.
- Normally, `replace` substitutes matched parts of the string with a new value. But when given a **function as the second argument**, it will:
  - Run the function for each match found by the regular expression.
  - Pass the matched parts (whole match and capturing groups) as arguments to the function.
- The output of `replace` is ignored here because we are only interested in using the function’s side effects, which add data to `queryString`.

#### 2. Regular Expression `new RegExp("([^?=&]+)(=([^&]*))", "g")`

- **`new RegExp("([^?=&]+)(=([^&]*))", "g")`**: This creates a regular expression similar to the one we discussed previously, with the global flag `g`.
  - `([^?=&]+)`: Matches any sequence of characters that aren’t `?`, `=`, or `&`, which represents the **key** in the query string.
  - `(=([^&]*))`: Matches an equal sign `=` followed by any characters that aren’t `&`, representing the **value**.
  - **Capturing Groups**:
    - Group 1 (`$1`): Captures the key.
    - Group 2 (`$2`): Captures the equal sign `=` along with the value (combined, as one match).
    - Group 3 (`$3`): Captures the value only (without the equal sign).

#### 3. Replacement Function

```javascript
function ($0, $1, $2, $3) {
  queryString[$1] = $3;
}
```

This function is called for each match that the regex finds, with the matched values as arguments:

- **`$0`**: The full matched substring (e.g., `category=4`).
- **`$1`**: The first capturing group, which is the **key** (e.g., `category`).
- **`$2`**: The second capturing group, which is the **equal sign** followed by the value (e.g., `=4`). This is not used in the function.
- **`$3`**: The third capturing group, which is the **value** (e.g., `4`).

Inside the function:

- **`queryString[$1] = $3`**:
  - Adds an entry to the `queryString` object with:
    - `$1` (the key) as the property name.
    - `$3` (the value) as the property’s value.

#### Example Walkthrough

Let’s see how this would work with `uri = "category=4&product_id=23948&query=lcd+tv"`:

1. **First Match (`category=4`)**:

   - `$0`: `"category=4"`
   - `$1`: `"category"` (key)
   - `$2`: `"=4"`
   - `$3`: `"4"` (value)
   - Result: Adds `queryString["category"] = "4"`

2. **Second Match (`product_id=23948`)**:

   - `$0`: `"product_id=23948"`
   - `$1`: `"product_id"` (key)
   - `$2`: `"=23948"`
   - `$3`: `"23948"` (value)
   - Result: Adds `queryString["product_id"] = "23948"`

3. **Third Match (`query=lcd+tv`)**:
   - `$0`: `"query=lcd+tv"`
   - `$1`: `"query"` (key)
   - `$2`: `"=lcd+tv"`
   - `$3`: `"lcd+tv"` (value)
   - Result: Adds `queryString["query"] = "lcd+tv"`

#### Final Result of `queryString`

After processing all matches, `queryString` will contain:

```javascript
{
  category: "4",
  product_id: "23948",
  query: "lcd+tv"
}
```

#### Summary of How This Works

1. **`replace` method** is called on `uri` with a regex and a replacement function.
2. **Regex** finds each key-value pair in `uri`.
3. **Replacement function** runs for each match, capturing the key and value, and adding them to `queryString`.
4. **Result** is that `queryString` ends up containing all key-value pairs from the query string.

This technique is a clever use of `replace` as a way to iterate over matches without actually modifying the original string.

**_Theory_**

Your explanation is mostly correct, but let’s clarify a few key points to make sure everything is accurate:

1. **How `replace` Works with a Function**:

   - You’re right that normally `replace` substitutes matched strings with a static value or string.
   - When you pass a **function as the second argument**, `replace` does not replace with a static string; instead, it **executes the function for each match**.
   - For each match that the regex finds, `replace` calls the function and automatically passes the match details as arguments to this function.
   - This allows us to handle each match individually inside the function without changing the original string.

2. **What Happens When a Match is Found**:

   - When the regex engine finds a match (a key-value pair in this case), it triggers the `replace` function.
   - The function receives all relevant information about the match as parameters, so we can extract and use parts of the match directly within the function.
   - By using `queryString[$1] = $3;`, the function takes the captured `key` and `value` from the match, storing them in `queryString` without actually modifying the `uri` string.

3. **The `$` Signs in Parameter Names**:
   - The `$0`, `$1`, `$2`, etc., are not special syntax in JavaScript. They’re just **parameter names** for the function and could be named anything.
   - The `$` symbol here is a convention often used to **indicate positional parameters related to regex capturing groups**.
   - `$0` corresponds to the **entire matched string**.
   - `$1`, `$2`, etc., correspond to **capturing groups** in the regex, where `$1` is the first captured group, `$2` is the second, and so on.
   - JavaScript doesn’t require these parameter names to have a `$`; they could just as well be named `match`, `key`, `equals`, `value`, or any other descriptive name.

## **Encoding**

Encoding is a general concept in computer science that represents characters in a specialized format for efficient transmission or storage.

- **Base64 Encoding**
  - In Base64 Encoding we have two functions that are used to encode a string.
    - **btoa()** function creates a Base64-encoded ASCII string from a string. Each character in the striing is treated as a byte (8bits: eight 0 and 1s)
    - **atob()** function decodes the string of data that has beenencoded using Base64 encoding.

```js
const normalString = "Hello! My name is Laxman Krishnamurti";
const encodedString = btoa(normalString);
console.log("encodedString", encodedString);

const decodedString = atob(encodedString);
console.log("decodedString", decodedString);
```

```bash
# Output

encodedString SGVsbG8hIE15IG5hbWUgaXMgTGF4bWFuIEtyaXNobmFtdXJ0aQ==
decodedString Hello! My name is Laxman Krishnamurti
```
