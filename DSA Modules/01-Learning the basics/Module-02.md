# Build-up logical thinking

## Patterns problem

_1._

<pre>
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
</pre>

_2._

<pre>
* 
* * 
* * *
* * * *
* * * * *
</pre>

_3._

<pre>
1
1 2 
1 2 3
1 2 3 4
1 2 3 4 5
</pre>

_4._

<pre>
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
</pre>

_5._

<pre>
* * * * *
* * * * 
* * * 
* * 
*
</pre>

_6._

<pre>
1 2 3 4 5 
1 2 3 4
1 2 3
1 2 
1
</pre>

_7._

<pre>
    *
   ***
  *****
 *******
*********
</pre>

_8._

<pre>
*********
 *******
  *****
   ***
    *
</pre>

_9._

<pre>
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
</pre>

_10._

<pre>
*
**
***
****
*****
****
***
**
*
</pre>

_11._

<pre>
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
</pre>

_12._

<pre>
1      1
12    21
123  321
12344321
</pre>

_13._

<pre>
1 
2 3
4 5 6 
7 8 9 10
11 12 13 14 15
</pre>

_14._

<pre>
A
AB
ABC
ABCD
ABCDE
</pre>

```js
function myFromCharCode(num) {
    // Step 1: Input validation
    if (num < 0 || num > 1114111) {
        throw new Error("Invalid code point");
    }

    // Step 2: Convert number to character
    let character = '';

    // For simplicity, we can handle basic ASCII (0 to 127) directly.
    // For higher values, JavaScript's internal representation will suffice.
    // ASCII characters (0 - 127)
    if (num >= 0 && num < 128) {
        // Create an array representing characters from 0 to 127
        const asciiCharacters = //[
            '\0', // NULL
            '\u0001', '\u0002', '\u0003', '\u0004', '\u0005', '\u0006', '\u0007', '\u0008', // Control characters
            '\t', // Tab
            '\n', // New line
            '\u000B', // Vertical Tab
            '\f', // Form Feed
            '\r', // Carriage Return
            '\u000E', '\u000F', '\u0010', '\u0011', '\u0012', '\u0013', '\u0014', '\u0015', '\u0016', '\u0017', // Control characters
            '\u0018', '\u0019', '\u001A', '\u001B', '\u001C', '\u001D', '\u001E', '\u001F', // Control characters
            ' ', // Space
            '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', // ASCII 33-47
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // ASCII 48-57
            ':', ';', '<', '=', '>', '?', '@', // ASCII 58-64
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', // ASCII 65-74
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', // ASCII 75-84
            'U', 'V', 'W', 'X', 'Y', 'Z', // ASCII 85-90
            '[', '\\', ']', '^', '_', '`', // ASCII 91-96
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', // ASCII 97-106
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', // ASCII 107-116
            'u', 'v', 'w', 'x', 'y', 'z', // ASCII 117-122
            '{', '|', '}', '~', // ASCII 123-126
            '\u007F' // DEL
        //];

        // Get the corresponding character from the array
        character = asciiCharacters[num];
    } else {
        // For Unicode characters (128-1114111), use String.fromCharCode
        character = String.fromCharCode(num); // This works for both ASCII and Unicode
    }

    // Step 3: Return the character
    return character;
}

// Example usage
console.log(myFromCharCode(65)); // Output: A
console.log(myFromCharCode(66)); // Output: B
console.log(myFromCharCode(128)); // Output: (Unicode character for U+0080)
console.log(myFromCharCode(1000)); // Output: (Unicode character for U+03E8)

```

_15._

<pre>
ABCDE
ABCD
ABC
AB
A
</pre>

_16._

<pre>
A
B B
C C C
D D D D
E E E E E
</pre>

_17._

<pre>
   A
  ABA
 ABCBA
ABCDCBA
</pre>

_18._

<pre>
E
D E 
C D E
B C D E 
A B C D E
</pre>

_19._

<pre>
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***  
****  ****
**********
</pre>

_20._

<pre>
*        *
**      **
***    ***  
****  ****
**********
****  ****
***    ***  
**      **
*        *
</pre>

_21._

<pre>
****
*  *
*  *
****
</pre>
