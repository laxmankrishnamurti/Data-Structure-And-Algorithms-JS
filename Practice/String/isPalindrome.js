var isPalindrome = function (s) {
  //Edge case
  if (s.length === 0) {
    return true;
  }

  //Removing non-alphanumeric characters
  let phrase = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s.charAt(i).charCodeAt(0) >= 48 && s.charAt(i).charCodeAt(0) <= 57) ||
      (s.charAt(i).charCodeAt(0) >= 65 && s.charAt(i).charCodeAt(0) <= 90) ||
      (s.charAt(i).charCodeAt(0) >= 97 && s.charAt(i).charCodeAt(0) <= 122)
    ) {
      phrase += s.charAt(i);
    }
  }
  phrase = phrase.toLowerCase();

  //Reversing the phrase
  let reversePhrase = "";
  for (let i = phrase.length - 1; i >= 0; i--) {
    reversePhrase += phrase.charAt(i);
  }

  if (phrase === reversePhrase) {
    return true;
  }

  return false;
};

let result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result);

// Optimized solution

function isPalindromeOpt(str) {
  let alphanumeric = str.replace(/[^a-zA-Z0-9]/g, "");

  // to lowercase
  let lowercase = alphanumeric.toLowerCase();

  let i = 0;
  let j = lowercase.length - 1;

  while (i < j) {
    if (lowercase[i] !== lowercase[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

let result1 = isPalindromeOpt("A man, a plan, a canal: Panama");
console.log(result1);
