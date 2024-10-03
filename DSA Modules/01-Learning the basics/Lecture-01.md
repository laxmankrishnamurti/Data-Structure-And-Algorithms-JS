# Basic Input/Output

## The Generic Skeleton of C++

It consists of two main components

1. Library inclusion (Headers) ===> Provide Pre-written functions
2. The main function from where execution starts.

```c++
#include<iostream>

int main(){
    // write your code here
    return 0;
}
```

## Output with _cout_

To display outputs in C++, we'll commonly use the _cout_ function from the **iostream** library.

```c++
#include<iostream>

int main(){
    std::cout << "Hey, Laxman!";
    //print multiple times on the terminal
    std::cout << "Hey, Laxman!";
    std::cout << "Hey, Laxman!";
    return 0;
}

//Output
Hey, Laxman!Hey, Laxman!Hey, Laxman!
```

## New-line

There are two ways to print statements in the next line

1. Escape sequence
2. Explicitly add a new line using **std::endl**

```c++
#include<iostream>

int main(){
    std::cout << "Hey, Laxman! \n";
    //print multiple times on the terminal
    std::cout << "Hey, Laxman!" << std::endl;
    std::cout << "Hey, Laxman!" << std::endl;
    return 0;
}

//Output
Hey, Laxman!
Hey, Laxman!
Hey, Laxman!
```

### Difference

1. Escape sequence (\n)
   - Insert a line break but all are in the first line.
   - Low-level operation
   - Will not flush the output buffer
   - Typically faster then any other methods

Buffer ===> We can think it of a temporary memory location where some data is stored while it's being proccessed.

2. std::endl
   - Explicitly add a new line
   - It will flush the output buffer
   - Costly operation

## Avoid using _std::_ namespace again and again.

We just need to add the line at top level of our code(Typically after headers)

```c++
#include<iostream>
using namespace std;

int main(){
    cout << "Hey, Laxman! \n";
    //print multiple times on the terminal
    cout << "Hey, Laxman!" << endl;
    cout << "Hey, Laxman!" << endl;
    return 0;
}

//Output
Hey, Laxman!
Hey, Laxman!
Hey, Laxman!
```

_using namespace std_ helps to reduce clutter and makes our code more readable. However, as our programming projects grow in complexity, consider using it sparingly to avoid potential naming conflicts.

## Taking user input using _cin_

One of the fundamental aspects of programming is taking input from the user. In C++, this is achieved with the help of the _cin_ stream, which allow us to receive input from the user via terminal or console.

```c++
#include<iostream>
using namespace std;

int main(){
    int x;
    int y;
    cout << "Enter the value of x & y : ";
    cin >> x >> y;
    cout << "x is " << x  << " &  y is " << y;
    return 0;
}
```

- Flow of the code
  1. "Enter the value of x & y : " will be printed
  2. Wait for the first user input (Enter the first input and then hit enter or add a space)
  3. Store the first input value to the x variable
  4. Wait for the second input
  5. Store the second input value to the y variable
  6. Print both values

<code>cin >> x >> y ===> First input will assign to x and second to the y variable</code>
<code>cin >> y >> x ===> First input will assign to y and second to the x variable</code>

## To make the process more convenient, there's a shortcut which allows us to include almost all standard libraries at once using _#include<bits/stdc++.h>_

```c++
#include<bits/stdc++.h>
using namespace std;

int main(){
    int x;
    int y;
    cout << "Enter the value of x & y : ";
    cin >> x >> y;
    cout << "x is " << x  << " &  y is " << y;
    return 0;
}
```
