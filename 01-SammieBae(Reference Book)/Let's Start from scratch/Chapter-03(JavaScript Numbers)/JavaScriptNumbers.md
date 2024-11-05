# Chapter - 03 (JavaScript Numbers)

---

This chapter will focus on :-

**1. JavaScript number operations**
**2. Number representation**
**3. Number objects**
**4. Common number algorithms**
**5. Random number generation**

---

## JavaScript number operations

Number operations of a programming language allow us to compute numerical values.

**Universal operators which is used almost every programming language**

- (+) ===> Addition
- (-) ===> Subtraction
- (/) ===> Division
- (\*) ===> Multiplication
- (%) ===> Modulus

---

## Number system

JavaScript uses a **_64-bit floating point_** representation for numbers. It means in JavaScript, numbers are always stored as _64-bit floating point values_, even if they appear as integers. This is because JavaScript was designed to simplify number handling by using a single numeric type for all values. This means all numbers, whether they look like integers (e.g., 22) or decimals (e.g., 22.5), are represented internally in the same format: double-precision floating-point (64 bits).

This floating-point representation allows JavaScript to handle a large range of values with both very large and very small numbers, as well as fractional values, all within a single consistent type.

**_While learning JavaScript one thing that we should keep in mind is, the language is dynamic so it behaves differently like other programming language such as C++, Java, ...etc. There are lot more concepts in JavaScript which shows different nature. Like- If we talk about Array then there is an interesting fact is that, In JavaScript there is no specific type for array. The array which we declare in JavaScript is not the actual array instead it is an object. And within the object there are methods which give functionalities to push, pop, shift,.....etc elements in the array._**

### **Understanding the 64-bit Floating-Point Representation (IEEE 754)**

In IEEE-754 64-bit floating-point format, each number is represented in binary using 64 bits divided into three main parts.

- **1. Sign bit :: 1-bit(0 -> for positive and 1 -> for negative)**
- **2. Exponent :: 11-bits (which represent the power of two for the number)**
- **3. Mantissa :: Significand -> 52 -> bits (which represent the actual digit of the number in binary)**

#### **_Let's convert 22 into 64-bit floating-point binary value and then we'll prove it with a mathematical formula_**

Let’s calculate the value `22` in the **64-bit IEEE 754 floating-point** representation from scratch, using the modified formula:

---

### The formula to calculate a floating-point number using IEEE 754 (64-bit) representation is:

    value = (-1)^sign * 2^(e - 1023) * (1 + Σ from t=1 to 52 of (b_(52-t) * 2^(-t)))

where:

- **sign** is the sign bit (0 for positive, 1 for negative),
- **e** is the exponent (11 bits),
- **b\_(52-t)** represents each bit in the mantissa (52 bits in total),
- \( t \) ranges from 1 to 52 for the mantissa bits.

---

\[
\text{value} = (-1)^{\text{sign}} \ 2^{(e - 1023)} \times \left(1 + \sum*{t=1}^{52} b*{52-t} \times 2^{-t}\right)
\]

---

### Step 1: Convert `22` to Binary

First, let’s convert `22` into binary:

\[
22\_{10} = 10110_2
\]

In binary, `22` is represented as `10110`.

### Step 2: Normalize the Binary Representation

In IEEE 754, the binary number must be normalized so that there’s **one non-zero digit before the binary point**.

To normalize `10110`, we can rewrite it as:

\[
10110 = 1.0110 \times 2^4
\]

### Step 3: Identify the Components for IEEE 754

#### 1. Sign Bit

Since `22` is positive, the **sign bit** is `0`.

#### 2. Exponent

- The exponent in the normalized form is `4` (from \( 2^4 \) in `1.0110 × 2^4`).
- To find the **biased exponent** in 64-bit floating point, we add the **bias of 1023**:
  \[
  \text{biased exponent} = 4 + 1023 = 1027
  \]
- In binary, `1027` is represented as:
  \[
  1027\_{10} = 10000000011_2
  \]
  So, the **exponent bits** are `10000000011`.

#### 3. Mantissa (Fractional Part)

The fractional part after the `1.` in `1.0110` is `0110`.

To fill the **52 bits** of the mantissa:

1. Start with `0110`.
2. Pad with zeros to reach 52 bits: `0110000000000000000000000000000000000000000000000000`.

So, the **mantissa** is `0110000000000000000000000000000000000000000000000000`.

### Step 4: Combine All Parts

Putting it all together:

1. **Sign bit**: `0`
2. **Exponent**: `10000000011`
3. **Mantissa**: `0110000000000000000000000000000000000000000000000000`

So, the 64-bit representation of `22` is:

\[
0 \ 10000000011 \ 0110000000000000000000000000000000000000000000000000
\]

### Step 5: Verify by Plugging into the Formula

Let’s confirm by using the IEEE 754 formula.

#### Using the Formula Components

1. **Sign**: \( (-1)^0 = 1 \)
2. **Exponent**: \( 2^{(1027 - 1023)} = 2^4 = 16 \)
3. **Mantissa**: \( 1 + \sum*{t=1}^{52} b*{52-t} \times 2^{-t} \)

Only the first few bits of the mantissa are `1` (`0110...`), so:

\[
1 + (0 \cdot 2^{-1}) + (1 \cdot 2^{-2}) + (1 \cdot 2^{-3}) + (0 \cdot 2^{-4}) = 1 + 0 + 0.25 + 0.125 + 0 = 1.375
\]

#### Final Calculation

\[
\text{value} = 1 \times 16 \times 1.375 = 22
\]

### Final Answer

The calculated 64-bit floating-point representation for `22` matches the expected value. Thus, `22` is represented in 64-bit floating point as:

\[
0 \ 10000000011 \ 0110000000000000000000000000000000000000000000000000
\]

[Watch the video](https://www.youtube.com/watch?v=yvdtwKF87Ts)

---

## Estimation

<code>Note :: With decimal fractions, this floating-point number system causes some rounding errors in JavaScript. For example 0.1 and 0.2 cannot be represented precisely. Hence,</code>

```js
console.log(0.1 + 0.2 === 0.3);
console.log(1 / 10);

//Outputs ===> false, 0.1
```

### Let's understand the estimation behavious

The behavior you're seeing is due to how JavaScript (and most other programming languages) handles floating-point numbers, which are stored in a binary format. JavaScript uses a standard called IEEE 754 for representing floating-point numbers, which can lead to precision issues with certain decimal numbers.

1. **Why `0.1 + 0.2 !== 0.3`**:

   - In binary, some decimal numbers (like `0.1` and `0.2`) cannot be represented exactly. When these numbers are stored in memory, they are approximated, which leads to slight precision errors.
   - When you add `0.1` and `0.2` in JavaScript, you get `0.30000000000000004` instead of `0.3`. This is why `0.1 + 0.2 === 0.3` returns `false`.

2. **Why `1 / 10` gives `0.1`**:
   - Although `0.1` cannot be represented exactly in binary, the approximation used by JavaScript rounds it to `0.1` when displayed. However, this is not a true exact representation, as internally it still has a tiny error, which you can observe with more complex operations (like `0.1 + 0.2`).

In general, if precision is critical, libraries like **Decimal.js** or **Big.js** can help manage these floating-point arithmetic issues.

### How 0.1, 0.2 or any other floating-point number fits into _Binary representation_

Let’s dive into how `0.1` and `0.2` are represented in binary using IEEE 754 double precision format and examine why adding them produces a slight error.

IEEE 754 double precision format uses **64 bits**:

- **1 bit** for the sign
- **11 bits** for the exponent
- **52 bits** for the fraction (or mantissa)

This format allows for very large or small numbers but also introduces precision limitations.

### Step 1: Converting 0.1 and 0.2 to Binary

1. **Binary of 0.1**:

   - The binary representation of `0.1` in IEEE 754 double precision is approximately:
     ```
     0.0001100110011001100110011001100110011001100110011001101...
     ```
   - When represented as a 64-bit IEEE 754 double precision, it becomes:
     ```
     0 01111111011 1001100110011001100110011001100110011001100110011010
     ```
     This binary number does not exactly represent `0.1` but is the closest approximation that can fit within 64 bits.

2. **Binary of 0.2**:
   - Similarly, the binary representation of `0.2` is:
     ```
     0.0011001100110011001100110011001100110011001100110011010...
     ```
   - In 64-bit IEEE 754 double precision format, it becomes:
     ```
     0 01111111100 1001100110011001100110011001100110011001100110011010
     ```

### Step 2: Adding 0.1 and 0.2 in IEEE 754

When you add these two binary numbers in IEEE 754, their approximations lead to a slight error. Instead of `0.3`, the result is slightly more than `0.3`. Specifically, it becomes:

```
0.30000000000000004
```

This is due to the small rounding errors in the binary representations of `0.1` and `0.2`.

## Why This Happens

In base 10, `0.1` and `0.2` have finite decimal representations. But in base 2 (binary), they turn into repeating decimals that cannot be stored exactly in a finite number of bits. IEEE 754 approximates these numbers, but the approximations introduce tiny inaccuracies. When you add them up, these inaccuracies accumulate, leading to a result that is very close to—but not exactly—`0.3`.

## How to convert 0.1 into _Binary format_

To understand how `0.1` is represented as `0.0001100110011001100110011001100110011001100110011001101...` in binary, let's go through the steps of converting a decimal fraction to its binary form.

### Step-by-Step Conversion of 0.1 to Binary

When converting a decimal fraction like `0.1` to binary, you repeatedly multiply the fraction by `2` and track the integer part of the result. Here's how it works for `0.1`:

1. **Multiply `0.1` by `2`**:

   - \( 0.1 \times 2 = 0.2 \)
   - **Integer part**: `0` (keep this as the first binary digit after the decimal)
   - **Fractional part**: `0.2` (continue with this fraction)

2. **Multiply `0.2` by `2`**:

   - \( 0.2 \times 2 = 0.4 \)
   - **Integer part**: `0`
   - **Fractional part**: `0.4`

3. **Multiply `0.4` by `2`**:

   - \( 0.4 \times 2 = 0.8 \)
   - **Integer part**: `0`
   - **Fractional part**: `0.8`

4. **Multiply `0.8` by `2`**:

   - \( 0.8 \times 2 = 1.6 \)
   - **Integer part**: `1`
   - **Fractional part**: `0.6`

5. **Multiply `0.6` by `2`**:

   - \( 0.6 \times 2 = 1.2 \)
   - **Integer part**: `1`
   - **Fractional part**: `0.2`

6. **Multiply `0.2` by `2`**:
   - \( 0.2 \times 2 = 0.4 \)
   - **Integer part**: `0`
   - **Fractional part**: `0.4`

Now, we see a repeating pattern emerging: `0011`.

So, if we continue, the binary representation of `0.1` becomes:

```
0.0001100110011001100110011001100110011001100110011001100110011...
```

### Why It's an Infinite Repeating Binary

In binary, `0.1` has a repeating fraction because `0.1` cannot be represented as a finite binary fraction. Similar to how `1/3` is represented as `0.3333...` in decimal, `0.1` has an infinitely repeating pattern in binary.

### Representation in IEEE 754 Double Precision

The IEEE 754 format approximates this repeating binary fraction within 64 bits, which is why `0.1` is represented approximately rather than exactly.

---

## JavaScript Number Object

Luckily, there are some built-in properties of the number object in javascript that help work around this.

```js
Math.floor(0.9); // 0 (round down to nearest integer)
Math.round(4.3); // 4 (round to nearest integer)
Math.round(4.7); // 5 (round to nearest integer)
Math.ceil(0.9); // 1  (round up to nearest integer)
```

[Practice file](./practice.js)

**_Remember the Number.EPSILON is the smallest difference between two representable numbers._**
