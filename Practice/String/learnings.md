# KEY TAKEAWAYS

The regular expression /[^a-zA-Z0-9]/g in the replace function is used to remove all characters from a string that are not alphanumeric (i.e., not letters or numbers). Let's break down the regex and how it works:

1. /[^a-zA-Z0-9]/
   - // ===> RegEx starting and ending point
   - [] ===> Square brackets define a character set. Any character inside the square brackets is allowed (matched). For example, [a-z] means "any lowercase letter from 'a' to 'z'."
   - a-zA-Z0-9: This is the set of allowed characters.
     - a-z: Matches any lowercase letter (a to z).
     - A-Z: Matches any uppercase letter (A to Z).
     - 0-9: Matches any digit (0 to 9).
   - ^: The caret (^) inside square brackets negates the character set, meaning "any character not in this set."

So, [^a-zA-Z0-9] matches any character that is not a letter (a-z or A-Z) or a number (0-9).

2. /g (Global Flag)
   The /g flag means "global," which tells the regular expression engine to search for all matches in the string, not just the first one.

3. " " (Replacement String)
   The replace method replaces all matches of the regex with an empty string (""), effectively removing them.

```js
let str = "A man, a plan, a canal: Panama";
let alphanumeric = str.replace(/[^a-zA-Z0-9]/g, "");
console.log(alphanumeric); // Output: "AmanaplanacanalPanama"
```

#### How It Works in the code:

1. The regex /[^a-zA-Z0-9]/g finds all characters in the string that are not letters or digits (like spaces, punctuation marks, etc.).
2. The replace method replaces each of these characters with an empty string "".
3. The final result is a string containing only alphanumeric characters.

In this case, it removes the spaces, commas, exclamation marks, etc., leaving only "AmanaplanacanalPanama".
