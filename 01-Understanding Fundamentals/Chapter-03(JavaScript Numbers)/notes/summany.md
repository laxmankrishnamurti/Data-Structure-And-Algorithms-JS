# What is prime factorization?

I know at this point of stage this question dosen't make sense too much but just for understanding lets know about prime factorization.

Prime factorization is the process of breaking down a number into its smallest prime factors. And believe me guys this is not as much easy as you think. And this is more than of it's own defination.

ex:- 18 :: 18 / 2 = 9; 9 / 3 = 3; 3 / 3 = 1
Hence,
Prime factorization of 18 is :- 2 _ 3 _ 3. which can also represent in this form :- 2 \* 3^2

- Application

  - Cryptography (Fundamental for encryption)
  - Simplifying fractions
  - Finding LCM & GCD | HCF
  - Solving Diophantine Equations

    - Ex :- Finding solution for this equation : 12x + 15y = 1

  - Understanding number properties
  - Efficient computation

## How Floating-point numbers works internally

```javascript
Before going into it's detail, let's analize the result of the code

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual((0.1 + 0.2), 0.3))  //Output :- false
console.log(isEqual(0.3, 0.3))          //Output :- true

You might be woundering that with the same arguments how does it possible to get two different answers? Let's understand it..........

Actually it starts from how computer processor understand floating-point numbers. Because storing an integer value into it's memory is going to be easy as respect to storing a floating-point numbers. Why? -----------> let's understand this

Integer to Binary :- Storing an integer value into computer's memory is easy because each bit of integer has a significant value means it can be only 0 or 1 with a fixed value. But it not goes same as floating-point numbers. Because we already know that a floating-point number may have infinite numbers so it needs to be rounded so that computer can store the floating number.

Because, computer has limited numbers of bits into it's memory such as either it can be 32-bit or 64-bit. Hence,
Computer can only store the value that has limited fixed numbers and that can easily converted into binary format. And one of the biggest challenge with the floating-point number is, it is difficult to convert a floating-point number into binary format. It takes to much steps or process to convert a floating-point number into binary format. So, it becomes more complicated for computer processor to sotre a floating-point numbers. And because of this reason it is harder to compare floating-point number and do some methematical computation, because it can produce tiny errors.

 Hence,
        Keeping all these problems in the mind computer scientist creates a standard way to handle floating-points number in computing which is known as "IEEE-754"


First of all let's learn how to convert a floating-point into binary format. For example let's convert 120.254 into binary format.
Step-00 :: Let's brakdown the number into "Integer" and "Fraction format". Here 120 is the Interger value and the 0.254 is the action value.
Step-01 :: First of all convert the integer value into binary format and then convert the Fraction value into binary format.
*
 * (120)base 2 = (111000)
 (0.254)base 2 = (01000001....)   Approx. value

Step-03 :: Combine both binary representation, which looks like:- 111000.01000001
Step-04 :: Starts applying standardization method of IEEE-754
Step-01 :: Normalize the binary representation in the from :-
(1.m * 2^e-127)   For Single-floating precision   (32-bit)
(1.m * 2^e-1023)  For double-floating precision   (64-bit)
here, m = Mantissa   : e = Exponent
The Normalize value is :- 1.1100001000001 * 2^-5 (because redix point shifted by 5)
Mantissa value is :- 1100001000001

ep-02 :: Evaluate all the values
Mantissa = 1100001000001
Exponent :: (e - 127) = -5;    e = -5 + 127;    e = 122
Convert the exponent into binary representation :: 1111010

Step-03 :: Put all these values into their own place or in it's format
IEEE-754 FORMAT
 (32-bit) Sign-bit(1 bit space)    ::  Exponent(8-bit space)   :: Mantissa(23-bit space)

The binary form of the number in single floating-precision is ::
  SIGN        EXPONENT        MANTISSA
   0         11110100     11000010000010000000000
Final Binary representation looks like this :- 01111010011000010000010000000000

Step-04 :: To convert this into double floating precision we need to just compair the exponent value with this := e - 1023 = Actual exponent vlaue

On the line-number-31 we consider the approximate binary value of the decimal/fraction. It could be anuthing as per our need. This binary value can be different when conputer convert this into more precizable format. It means computer is going to take more bits for accurate computation that can be different from our values.

As of now we understand that how computer treats a floating-point number. So, let's disscuss about our previous problem and try to understand that why this is happening.

function checkEqual(a, b) {
  return a === b;
}

console.log(checkEqual(0.3, 0.3)); //Output : true

Note :- We got "true" because the value is same so it's precision value is also be the same. Because the precision value for the second argument should be the same as first argument because both values are same.

console.log(checkEqual(0.1 + 0.2, 0.3)); //Output : false

Note :- We got "false". Let's understand why this is happening.......

Because, Every floating-point number may have different-different values because of it's precision. For example:- For every time if we put 0.1 as a single argument the processor treates as the same value. But if we want to get 0.1 by adding these two numbers :- 0.05 + 0.05 :: Then it will not going to happen becaue of the Precision of the fraction value.

Hence, the value we are trying to achieve which is 0.3 by adding these two numbers such as (0.1 + 0.2) will not be the same becasue 0.1 has different precision value and 0.2 has different precision value.

 Let's understand in a easy way

 Understand how the processor will store the number
 0.1 = 0.000110010011......
 0.2 = 0.001100110011......
 0.3 = 0.010011001100......

 console.log(0.1 + 0.2)          //Output :- 0.30000000000000004
 sum of 0.1 and 0.2 is :- 0.01001100110011001100111...
 but the actual value of 0.3 is :- 0.01001100110011001100110011001100

 which is not same as we got while adding the two argumants. hence, the result will be false.


You might be woundering that does 0.3 as absolute value and the 0.3 which is sum of two values will never be the same?        -

No, it's not like that. To avoid this small correction we have EPSILON_VALUE. Let's have a look :-

console.log(0.1 + 0.2); //Output :- 0.30000000000000004

function isEqualCheck(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqualCheck(0.1 + 0.2, 0.3)); //Output :- true (as we want)


 What is Number.EPSILON and what it does?

 Number.EPSILON returns the smallest interval between two representable numbers. This is useful for the problem with floating-point approximation as we face the problem previously.

 Number.EPSILON is used in floating-point arithmetic to determine whether the difference between two numbers is small enough to be considered negligible.


console.log(0.1 + 0.2); //Output : 0.30000000000000004
console.log(0.3); //Output : 0.3

console.log(0.1 + 0.2 - 0.3); //Output :- 5.551115123125783e-17

let diff = 5.551115123125783e-17;
console.log(diff < Number.EPSILON); //Output :- true

Note :- It means the difference between sum of 0.1 & 0.2 and 0.3 is smaller than the value of "Number.EPSILON" so that's why it can be negligible. Hence, Both value should be equal.

console.log(Math.abs(0.1 + 0.2 - 0.3)); //Output :- 5.551115123125783e-17
Note :- Math.abs(arguments) calculate the absolute value.
```

# Chapter - 04 (Strings)

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

## What is Encryption?

Encryption is extremely important when protecting people's information online. While browsing on internet we have the message, like :- <b>Your connection to this site is not secure</b>

This likely means the website that we are trying to access does not have the proper <code>Secure Socket Layer(SSL)</code> which is knwon as SSL certificate.

As of now we understand that why Encryption is important. So, let's try to encrypt user's data online.

We know that HTTP connection follows the Client-server Architecture. It states that client sends a request to the server and server receives that request and validate and then respond back. This is how it works. There is only two entity that is envolved in the system. But this about the scenario where a middle man comes up and try to read the server's response. Let say user is trying to login into their bank account so he enter all credentials like :- bank account number, account password, account pin, card details, secret pin...etc.

Once user enter all details and hit submit button then the data will moved to the server, but before reching to the server a middle man stolen the data and keep it's a copy. So, now the middle man has all details about the user's bank account so he can easily withdraw money from the user account and user will get a debit message. Haaaaaa...........

To prevent that we use Encryption. Let's disscuss what are the way that is possible to encrypt data not only encryption but we have to prevent the data from the middle man(Man in the middle attack).

- Way :: 01 (Symmetric Encryption)

we can have a public key to encrypt and decrypt data. Server sends a public key to the client and client encrypt the user data with the help of the server's public key and sent it back to the server. And server can decrypt the data with the same public key. This type of encryption is called <b>Symmetric Encryption</>, because there is a single key.

Problem :: When server is sending the public key the middle man can also get the public key and save a copy of the public key and again when client encrypt the message, the message can be stolen by the middle man(Hacker) and will decrypt the data using the public key that he stolen.

let's try to do something for encryption and decryption

- Way :: 02 (Asymmetric Encryption)

In this type of encryption we have two keys Public key and Private key. Public key is used for encryption and Private key is used for Decryption. Let's deep dive into it.

Server sends the public key to the client and client generates a session key using the public key and encrypt the data and after that client sends the encrypted data to the server. When the encrypted data reached to the server, it will decrypt the data using the private key and sends a response back to the client.

Problem :: When server is sending the public key to the client hacker may copy it. And can send a public key that is generated by the hacker and client did the same and send the encrypted data to the server, and here hacker will attack(acts as a Proxy) and get a copy the encrypted data and because the data is encrypted by the client using hacker's public key hacker can decrypt the data with their own private key.

- Way :: 03 (SSL Certification)

In this way the process will be the same as Asymmetric Encryption but the difference is we will get help from a SSL Certificate provider and we will generate a digital signature for our website. Let's deep dive into it.

Server has Public and Private key, Client has the server's public key. Hacker may have the server's public key. I hope this is clear. Let's more further.

Server will ask a SSL Certificate to the certificate provider. The provider will take our server's public key and it has also Public key and a Private key. So, the provider will generate a signature using our server's public key and it's own public key and send it back to the server.

Now, server will send server's public key and the signature that is created by the SSL certificate service provider to the client. And now client have the server public key, so it will authenticate the public key before encrypting the data. It will simply send the public key and the signature that is sent by the sever, to the SSL certificate service provider and the provider will agian generate a signature and math the received signature, if both are same then encryption is going to happen by the client otherwise it will throw an error.

Advantage :- Let say somehow hacker get the server public key and send to the client that is not equal to the server public key. So, whenever the signature is generated it will not match because the public key is not as same as server public key.

This is how we can Encrypt the user data.

<code>The most commonly used public-key encryption algorithm is the RSA Algorithm.</code>
