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

const leetSpeakify = (string) => {
  string
    .split("")
    .map((v, i, a) => {
      if (v === "a" || "A") {
        a[i] = "4";
      } else if (v === "e" || "E") {
        a[i] = "3";
      } else if (v === "i" || "I") {
        a[i] = "1";
      } else if (v === "o" || "O") {
        a[i] = "0";
      }
    })
    .join("");
};

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];

const letterA = "a";
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false
const hand4 = [7, 2, 7, 2, 7];
// Expected output: true

// b) Create the function that makes the test pass.
