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
