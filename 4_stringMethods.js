

let first_Name = "maruthi";

// repeat will Create copies of a text:

first_Name = first_Name.repeat(2)

console.log(first_Name);

// trim() can be used to remove the spaces

// example:

let car_Name = "   BMW   ";

console.log(car_Name.length); // spaces are counted in the javascript and the length of the variable is 9 including the spaces

car_Name = car_Name.trim(); // after using the trim() the spaces were removed and the value with out the spaces are been assigned to variable because trim() does not change the original string
                            //  as string is immutable (which means string cannot be changed or modified).

console.log(car_Name.length);


// slice()  extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).

// example:

let stringName = "Maruthi Alone";

stringName = stringName.slice(0,3); // assigned to variable because slice() does not change the original string
                                   //  as string is immutable (which means string cannot be changed or modified).
console.log(stringName);

// The replace() method replaces a specified value with another value in a string:

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // In this step Microsoft was replaced by W3Schools       source -- W3Schools, link-- https://www.w3schools.com/js/js_string_methods.asp
console.log(newText);

// A string is converted to upper case with toUpperCase():

// example

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

// A string is converted to lower case with toLowerCase():

// example

let text3 = "Hello World!";       // String
let text4 = text4.toLowerCase();  // text4 is text3 converted to lower