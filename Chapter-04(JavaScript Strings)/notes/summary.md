# what is String?

String is a collection of characters. In JavaScript, String is an type of Object. JavaScript's native String primitive comes with various common string functioon. 

//JavaScript native string declaration

```javascript
let username = "Laxman Krishnamurti"
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
situation we use <code>.startWith(paramerter)</code> & <code>.endsWith(parameter)</code>
    - Both function is also a case-sensitive function