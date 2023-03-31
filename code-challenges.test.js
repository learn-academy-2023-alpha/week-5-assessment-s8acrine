// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// Pseudocode:
// Create a function leetSpeakify
// Input: A string
// Output: A string with the following modifications:
// a -> 4
// e -> 3
// i -> 1
// o -> 0
// Can use string.replace method multiple times to swich each character. This seems memory intensive, so let's go with a simple set of if then loops.
// First, take the string and turn it into an array with .split("") to seperate each character into it's own index in the array
// Now we can .map over the array taking in value,index, and array as arguments, taking each modification as an if statement.
// if the character is one of the modified characters (make sure to account for uppercase with || ), we can set the value at the index to the modified value.
// Once the loop has finished, we will want to take the mapped array and turn it back into a string with .join("") and then return.

// a) Create a test with expect statements using the variables provided.

describe("leetSpeakify", () => {
  const secretCodeWord1 = "Lackadaisical"; // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook"; // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric"; // Expected output: "3cc3ntr1c"
  it("Modifies a, e, i, and o characters in a string to a number", () => {
    expect(leetSpeakify(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(leetSpeakify(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(leetSpeakify(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});
// b) Create the function that makes the test pass.
const leetSpeakify = (string) => {
  return string
    .split("")
    .map((v, i, a) => {
      if (v === "a" || v === "A") {
        return (a[i] = "4");
      } else if (v === "e" || v === "E") {
        return (a[i] = "3");
      } else if (v === "i" || v === "I") {
        return (a[i] = "1");
      } else if (v === "o" || v === "O") {
        return (a[i] = "0");
      } else {
        return v;
      }
    })
    .join("");
};
// ┌[aaron@ACMBP] [/dev/ttys001] [code-challenges ⚡] [1]
// └[~/Desktop/week-5-assessment-s8acrine]> yarn jest
//  PASS  ./code-challenges.test.js
//   leetSpeakify
//     ✓ Modifies a, e, i, and o characters in a string to a number (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.478 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//Pseudocode:
// Create a function fruitFinder
// Input: two arguments, an array of strings, and a single letter string
// Output: An array containing only those strings which contain the provided letter
// return a .filtered array from the given array
// filter condition is all values which contain the given letter
// use .toLowerCase on each value to account for capitals
// use .includes() to test each string in the array

// a) Create a test with expects statement using the variable provided.

describe("fruitFinder", () => {
  const fruitArray = [
    "Mango",
    "Cherry",
    "Apricot",
    "Blueberry",
    "Peach",
    "Kiwi",
  ];
  const letterA = "a"; // Expected output: ["Mango", "Apricot", "Peach"]
  const letterE = "e"; // Expected output: ["Cherry", "Blueberry", "Peach"]
  it("Returns items from the array which contain the provided letter", () => {
    expect(fruitFinder(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(fruitFinder(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// ✕ Returns items from the array which contain the provided letter
// ● fruitFinder › Returns items from the array which contain the provided letter
// ReferenceError: fruitFinder is not defined

// b) Create the function that makes the test pass.
const fruitFinder = (array, letter) => {
  return array.filter((word) => word.toLowerCase().includes(letter));
};

// PASS  ./code-challenges.test.js
// leetSpeakify
//   ✓ Modifies a, e, i, and o characters in a string to a number (2 ms)
// fruitFinder
//   ✓ Returns items from the array which contain the provided letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.414 s, estimated 1 s

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudocode:
// Create a function fullHouse
// Input: an array of exactly 5 numbers
// Output: Boolean expression of true if array consists of 3 of one number and 2 of another, otherwhise return false
// Sort the array using .sort() method. No argument needed as we only want the like numbers together, the order isn't important
// Add a checker to make sure no one is cheating, if the length of the array is not 5, declare a cheater at the table!
// if the first three values are equal, and the last two values are equal, return true
// if the first two values are equal, and the last three values are equal, return true
// in all other cases, return false

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  const hand1 = [5, 5, 5, 3, 3]; // Expected output: true
  const hand2 = [5, 5, 3, 3, 4]; // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]; // Expected output: false
  const hand4 = [7, 2, 7, 2, 7]; // Expected output: true
  const hand5 = [1, 2, 2, 1, 4, 1]; // Expected output: "There's a cheater at the table!"

  it("determines if a given hand of five cards is a full house", () => {
    expect(fullHouse(hand1)).toEqual(true);
    expect(fullHouse(hand2)).toEqual(false);
    expect(fullHouse(hand3)).toEqual(false);
    expect(fullHouse(hand4)).toEqual(true);
    expect(fullHouse(hand5)).toEqual("There's a cheater at the table!");
  });
});
// b) Create the function that makes the test pass.

fullHouse = (hand) => {
  // create a variable inside the function to preserve the integrity of supplied data (don't permanently modify arrays)
  let sortedHand = hand;
  sortedHand.sort();
  if (sortedHand.length !== 5) {
    return "There's a cheater at the table!";
  } else if (
    (sortedHand[0] === sortedHand[1] &&
      sortedHand[0] === sortedHand[2] &&
      sortedHand[3] === sortedHand[4]) ||
    (sortedHand[0] === sortedHand[1] &&
      sortedHand[2] === sortedHand[3] &&
      sortedHand[2] === sortedHand[4])
  ) {
    return true;
  } else {
    return false;
  }
};

// PASS  ./code-challenges.test.js
// leetSpeakify
//   ✓ Modifies a, e, i, and o characters in a string to a number (2 ms)
// fruitFinder
//   ✓ Returns items from the array which contain the provided letter (1 ms)
// fullHouse
//   ✓ determines if a given hand of five cards is a full house

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.465 s, estimated 1 s
// Ran all test suites.
