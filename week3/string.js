//STRING FUNCTIONS
var text="vyshnavi";
console.log(text.length);//The length property returns the length of a string:
var parah="hiii,good morning!!!have a great day ahead.day"
console.log(parah.indexOf('day'));// indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
console.log(parah.lastIndexOf('day'));// indexOf() method returns the index of (the position of) the last occurrence of a specified text in a string:
//Both indexOf(), and lastIndexOf() return -1 if the text is not found
console.log(parah.indexOf('day',36));//Both methods accept a second parameter as the starting position for the search
console.log(parah.search('day'));//search() method searches a string for a specified value and returns the position of the match
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);
//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: the starting index (position), and the ending index (position).
//If a parameter is negative, the position is counted from the end of the string.
var res = str.slice(-12, -6);
console.log(res);
//If you omit the second parameter, the method will slice out the rest of the string:
var res = str.slice(-12);
console.log(res);
var res = str.slice(7);
console.log(res);
//substring() is similar to slice().The difference is that substring() cannot accept negative indexes.
var res = str.substring(7, 13);
console.log(res);
//substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part
var res = str.substr(7, 6);console.log(res);
var res = str.substr(7);console.log(res);
var res = str.substr(-4);console.log(res);
//The replace() method replaces a specified value with another value in a string:
var n = parah.replace("morning", "evening");
console.log(n);//By default, the replace() function replaces only the first match:
var text2 = text.toUpperCase(); //A string is converted to upper case with toUpperCase():
console.log(text2);
var text3 = text.toLowerCase(); //A string is converted to lower case with toLowerCase():
console.log(text3);
//concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);
//String.trim() removes whitespace from both sides of a string.
var str = "       Hello World!        ";
console.log(str.trim());
//charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
console.log(str.charAt(0));
// charCodeAt() method returns the unicode of the character at a specified index in a string
var str = "HELLO WORLD";
console.log(str.charCodeAt(0));    
var str = "HELLO WORLD";
console.log(str[0]); //If no character is found, [ ] returns undefined, while charAt() returns an empty string. 


/*OUTPUT:8
33
43
43
33
Banana
Banana
Banana, Kiwi
Banana, Kiwi
Banana
Banana
Banana, Kiwi
Kiwi
hiii,good evening!!!have a great day ahead.day
VYSHNAVI
vyshnavi
Hello World
Hello World!
H
72
H
*/
