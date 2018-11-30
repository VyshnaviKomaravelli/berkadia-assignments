for:it is an counter controlled loop used to iterate for specific number of times.
const array = ['a', 'b', 'c', 'd'];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Result: a, b, c, d

foreach:When using forEach, we simply have to specify a callback function. This callback will be executed on each element in the array.
eg:
const arr = ['cat', 'dog', 'fish'];
arr.forEach(element => {
  console.log(element);
});
//result :cat dog fish


for..in:this loop will iterate over inherited properties as well, as long as they are enumerable properties
(enumerable properties:It simply means that the property will show up if you iterate over the object using for..in loop or Object.keys.)
eg:
const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
}

for (const key in obj) {
	console.log( obj[key] )
}

// Result: 1, 2, 3, 4
eg:
const array = ['a', 'b', 'c', 'd'];

for (const index in array) {
	console.log(array[index])
}

// Result: a, b, c, d
eg:const string = 'Ire Aderinokun';

for (const index in string) {
    console.log(string[index])
}

// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n
The for..of Statement:for iterating over "iterable collections"
eg:
const array = ['a','b','c', 'd'];
const iterator = array[Symbol.iterator]();
console.log( iterator.next().value )
console.log( iterator.next().value )
console.log( iterator.next().value )
console.log( iterator.next().value )

// Result: a, b, c, d
The for..of loop doesn't work with Objects because they are not "iterable"
eg:(ARRAYS/STRINGS)
const array = ['a', 'b', 'c', 'd'];
for (const item of array) {
	console.log(item)
}
// Result: a, b, c, d

const string = 'Ire Aderinokun';
for (const character of string) {
	console.log(character)
}
// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n
								for..in											for..of
					Applies to	Enumerable Properties						Iterable Collections
Use with Objects?				Yes													No
Use with Arrays?				Yes, but not advised								Yes
Use with Strings?				Yes, but not advised								Yes
(for..in not be used with Arrays, particularly because it cannot be guaranteed that the iteration happens in sequence, which is usually important for Arrays.)
