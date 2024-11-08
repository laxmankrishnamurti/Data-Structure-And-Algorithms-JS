const name = new String("Laxman");
console.log("name is", name);

const name1 = String("Laxman");
console.log("name is", name1);

const name2 = "Laxmna";
console.log("name is", name2);

/**
 * String access
 */

// In every programming language indexing starts from 0

// Single character

const email = "laxmankrishnamurti@gmail.com";
const index = 2;
console.log(`Character at ${index} index in ${email} is`, email.charAt(index));

// Output -> Character at 2 index in laxmankrishnamurti@gmail.com is x

// Get a sub-string or a group of character

const start = 3;
const end = 10; // (excluded)
console.log(
  `Sub-String from ${start} to ${end} in ${email} is`,
  email.substring(start, end)
);

// Output -> Sub-String from 3 to 10 in laxmankrishnamurti@gmail.com is mankris
