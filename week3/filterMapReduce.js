//FILTER:
//Filter let you provide a callback for every element and returns a filtered array.filter does not update the existing array it will return a new filtered array every time.
//MAP:The map() method creates a new array with the results of calling a provided function on every element in the calling array.
//REDUCE:reduce method of the array object is used to reduce the array to one single value.
//EG:
var sample = [1, 2, 3]
var result = sample.filter(elem => elem !== 2)
console.log(result)
let mapped = sample.map(elem => elem * 10)
console.log(mapped);
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum)

//The filter() method creates an array filled with all array elements that pass a test implemented by the provided function. The filter method is well suited for particular instances where the user must identify certain items in an array that share a common characteristic.
//where as,The map() method creates a new array with the results of calling a function for every array element. The map method allows items in an array to be manipulated to the user’s preference, returning the conclusion of the chosen manipulation in an entirely new array.
