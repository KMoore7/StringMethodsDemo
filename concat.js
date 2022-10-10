// Definition and Usage
// The concat() method joins two or more strings.
// The concat() method does not change the existing strings.
// The concat() method returns a new string.

// Join two strings:
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result) 
//should be seafood

// Join two strings:
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);
console.log(result)
//should be "Hello World!"

// Join three strings:
let text1 = "Hello";
let text2 = "world!";
let text3 = "Have a nice day!";
let result = text1.concat(" ", text2, " ", text3);
console.log(result)
// Should Be Hello World! Have a nice day!
