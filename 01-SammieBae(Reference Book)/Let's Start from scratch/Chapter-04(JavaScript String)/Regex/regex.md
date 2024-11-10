# Basics of Regular Expressions

Before getting started let's clearify that why we use **_Regular Expressions_**.

While working on a project we use sting data type in most of the time and we need to validate the string for security reasons to secure our application. In order to do that we don't have extra methods in JavaScript like if we want to filter by traditional method it takes lot of time and efforts but on the other hand if we use **_Regular Expressions_** it makes our task very easy and simple. How, let's see.

So, Regular Expressions are used to filter, sort, search any character or a sub-string in the string. Lets understand a little bit more.

- Regular Expression is a set of characters.
- It starts with **_/(forward slash)_** and also ends up with the **_/(forward slash)_**
- Between this, we write the logic for filter, search, ......etc.
- And then we apply the _regex_ on a particular string

**To make it clear let's categories the Regular Expression**

**1. Counting or Special Characters**
**2. Character grouping**
**3. Look ahead**
**4. Look behind**

## **Methods**

- RegExp has the following two functions:

  1. **_str.search(regex)_** ::: Test for matches in the string. This returns the index of the match.
  2. **_str.match(regex)_** ::: Test for matches, This returns all the matches.

- The JavaScript String object also has the following two regex-based functions that accept the RegExp object as the argument.
  1. **_regex.exec(str)_** ::: Tests for matches in a string. This returns the first matche.
  2. **_regex.test(str)_** ::: Tests for matches in a string. This returns true or false.
