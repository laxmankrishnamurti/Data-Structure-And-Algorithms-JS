# What does it mean by scope?

The scope is what defines the access to Javascript variables. "To be more precise scope simply states that the place where a JavaScript variable is accessable" OR "The place where we can access a variable that place of called the scope of that varibale."

# Variable declaration using "var" keyword.

var is one keyword that is used to declare a variable. But this type of variable declaration is being different from the variable that is declared by using "let" and "const". Because it is a type of global variable that can float everywhere.

let say we declare a function at the top of the script and after that we delcare a variale using var keyword at the bottom of the script; now you might be thinking that we cannot access the varibale before it's declaration but you are wrong. Because i told you earlier that this type of variable declaration works slightly different. Even though we can reassign it's variable value in the function as well.

This is something known as "Variable Hoisting".

<pre>
    function hello(){
        username = "Laxman"
        console.log("Hello ", username);
    }

    hello()

    var username;

    //Output :- Hello Laxman
</pre>

If we do the same thing by declaraing "let" or "const" we got an refference error. The most important point that we should keep in our mind is because of the "username" varibale(declare via var-keyword) is floating to the top so that's why we would able to initialized it's value.

# What is function scope?

Function scope referes to the context within a function where variable are accessible. What does it mean? let's understand...

If we declare a variable inside a function is only accessable within that function and will not accessable outside of the function, called "Function scope".

<pre>
    function functionScope(){
        let username1 = "Laxman"
        var username2 = "Harshad"

        console.log("username1 is : ", username1);
    }

    functionScope()
    console.log("username2 is : ", username2);  //error :- ReferenceError: username2 is not defined
</pre>

In function scope, it dosen't matter that what's the operator we are using to declare a variable will not be accessable outside of the function scope.

It is same a inner functions, like that :-

<pre>
    function outerFunction(){
        var outerVariable = "Outer"

        function innerFunction(){
            var innerVariable = "Inner" 
            console.log("Outer variable is : ", outerVariable); //Output :- Outer
            console.log("Inner variable is : ", innerVariable); //Inner  :- Inner
        }

        innerFunction()
        
        console.log("Outer variable is : ", outerVariable); //Output :- Outer
        console.log("Inner variable is : ", innerVariable); //Inner :- Reference Error
    }

    outerFunction()

    console.log("Outer variable is : ", outerVariable); //Output :- ReferenceError
    console.log("Inner variable is : ", innerVariable); //Output :- ReferenceError
</pre>

```javascript
console.log("Hello world");
```
