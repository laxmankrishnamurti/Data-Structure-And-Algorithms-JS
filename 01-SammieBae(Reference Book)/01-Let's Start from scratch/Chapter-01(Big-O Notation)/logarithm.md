# Logarithm

- Logarithm gives us the rule to simplify some mathematical calculation.

- Any positive real number _N_, can be represented in two ways :-
  1. Exponantial representation
  2. Logarithmic representation

<pre>
let N = 36. 

- Exponantial representation
    - 6^2 = 36

Where, 
6 = Base
2 = Power/Exponent/Degree

- Logarithmic representation
    - log6(36) = 2

Where,
6 = Base
36 = N
2 = Power/Exponent/Degree
</pre>

- In Exponantial representation we try to get the N, with the help of the base case and the exponent.
- On the other hand in Logarithmic representation we try to get the value of the exponent, with the help of N and the base case.

- Hence, we can say that Exponantial representation is nothing but a way to calculate _anti-log values_. One thing that which we should keep in mind is that the _log_ itself dosen't hold any kind of values this is just a symbol to represent logatithmic expression.

## Formal representation

- Exponantial representation

  - a(^x) = N
    - Anti-log of x to the base a is N

- Logarithmic representation
  - log(a)N = x
    - Log of N to the base of a is x.

### **Constraints**

**N should be a positive real number**

- We don't rely on negative N becasue it may gives an imaginary answers. Let's see

  - <pre>
        let x = 2; base = -2; 
            result would be -2(^2) === 4 (acceptable)
    
        let x = -5; base = -2;
            result would be -2(^5) === -32 (acceptable)
    
        let x = 1/2; base = -2;
             result would be -2(^1/2) = square root of -2 ===> Imaginary value ===> 2i (not-acceptable)
    </pre>
