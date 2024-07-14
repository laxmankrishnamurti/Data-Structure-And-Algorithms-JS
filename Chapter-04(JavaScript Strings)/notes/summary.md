## what is String?

String is a collection of characters. In JavaScript, String is an type of Object. JavaScript's native String primitive comes with various common string functioon.

//JavaScript native string declaration

```javascript
let username = "Laxman Krishnamurti";
```

string function like :- <code>.charAt(index)</code>, <code>.substring(initial index, final index)</code>....etc

## String Comparison

Most programming language have a function that allows us to compare strings. In JavaScript, this can be done simply by using
less-than(<) and grater-than(>) operators.

- If we are comparing two strings of different lengths, it starts comparing from the start of the string untill the length of
  the smaller string.

## String Search

First of all we have to think that what we are looking for in a particular stinrg. Do we want to serch a string within a string
or just a character or letter within a string?

With that we have two pre-built in function that does that particular task.

- Let say we have to find a particular string within a string. In that case we can use the <code>.indexOf(parameter)</code>.

  - The prameter should be a string and keep in mind that the function is a case-sensitive.
  - This function will return the position of the input string within the string and if nothing is found, then (-1) is returned.

- Let say we want to search the string after a certain index value then we can pass in optional parameter in the same function.

  - <code>.indexOf(parameter-1, index)</code>

- If we want to check whether a string starts from a particular string or not or end with a particular string or not, In this
  situation we use <code>.startWith(paramerter)</code> & <code>.endsWith(parameter)</code> - Both function is also a case-sensitive function

## String Decomposition

Decomposition -> Dividing an string into multiple chunks in the form of an array. We use <code>.split(seperator)</code> functon to split a string and convert it into an array format.

```javascript
let username = "Laxman";
console.log(username.split(""));

//output : ["L", "a", "x", "m", "a", "n"]
```

## String replacement

The <code>.replace(string, replaceString)</code> function helps us to replace a specified string within a string variable with another string.

## What is Regular Expressions?

Regular expressions(regexes) are a set of characters that define a search pattern. Regexes are immensely helpful for checking the validity of user input in javascript. Learning how to use regexes is a massive task of its own, but as a javascript developer, it is important us to know the basics of regexes.

- 1. RegExp has the following two functions.

  - search() :: Tests for matches in a string. This returns the index of the match. To be more precise it finds the first substring match in a regular expression search.
  - match() :: Tests for matches. This return all the matches.

- 2. The JavaScript string object also has the following two regex-related functions that accept the RegExp object as on argument.

  - exec() :: Tests for matches in a string. This returns the first match.
  - test() :: Tests for matches in a string. This returns boolean value.

- 3. Basic Regex rule ::

  - /regexe/ :: write the Regexes between the forward slash.

  - ^ :: Indicate the start of a string/line.

  - \d :: Finds any digit

  - [ abc ] :: Finds any character between the brackets

  - [^abd] :: Finds any character not between the brackets

  - [0-9] :: Finds any digit between the brackets

  - [^0-9] :: Finds any digit not between the brackets

  - [x|y] :: Finds any of the alternatives specified

```javascript
var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n);

//output : 11 (Index of the character D, which is the first character of the matched regex)
```

## Commonly Used Regexes

- 1. Any Numeric Characters

```javascript
var reg = /\d+/;
```

- 2. Only Numeric Characters

```javascript
var reg = /^\d+$/;
```

- 3. Floating Numeric Characters

```javascript
var reg = /^[0-9]*\.[0-9]*[0-9]+$/;
```

- 4. Only Alphanumeric Characters

```javascript
var reg = /[a-zA-Z0-9]/;
```
