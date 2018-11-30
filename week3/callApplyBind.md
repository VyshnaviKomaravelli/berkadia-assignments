CALL() VS APPLY() VS BIND():
*The method Call invokes the function and allows you to pass in arguments one by one using commas.
*The method Apply invokes the function and allows you to pass in arguments as an array.
*The Bind method returns a new function, allowing you to pass in a this array and any number of arguments.
 Use it when you want that function to later be called with a certain context like events.
 **Call and Apply are interchangeable. You can decide whether it’s easier to send in an array or a comma separated list of arguments. 
 Bind is different. It always returns a new function.
eg:
let customer1 = { name: 'vyshu' };
let customer2 = { name: 'vyshnavi' };

function greeting(text) {
    console.log(`${text} ${this.name}`);
}

greeting.call(customer1, 'Hello'); 
greeting.call(customer2, 'Hello'); 


function greeting1(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
 }
 greeting1.apply(customer1, ['Hello', 'How are you?']); 
 greeting1.apply(customer2, ['Hello', 'How are you?']);

 function greeting2(text) {
    console.log(`${text} ${this.name}`);
}
 first=greeting2.bind(customer1); 
 second=greeting2.bind(customer2);
first('hello');
second('hello');     
