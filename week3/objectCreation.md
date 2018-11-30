1.DIFFERENT WAYS TO CREATE OBJECTS
=>Using the Object() constructor:
	var d = new Object();

=>Using Object.create() method:
	var a = Object.create(null);
eg:let car = Object.create(Object.prototype,
  {
    name:{
      value: 'Fiesta',
      configurable: true,
      writable: true,
      enumerable: false
    },
    maker:{
      value: 'Ford',
      configurable: true,
      writable: true,
      enumerable: true
    }
  });
console.log(car.name)    //Output: Fiesta
=>Using the bracket's syntactig sugar:
	var b = {};
	eg:let bike = {name: 'SuperSport', maker:'Ducati', engine:'937cc'};
	
=>Using a function constructor
	var Obj = function(name) {
		this.name = name
	}
		var c = new Obj("hello"); 
eg:function Vehicle(name, maker) {
   this.name = name;
   this.maker = maker;
}
let car1 = new Vehicle(’Fiesta’, 'Ford’);
let car2 = new Vehicle(’Santa Fe’, 'Hyundai’)
console.log(car1.name);    //Output: Fiesta
console.log(car2.name);    //Output: Santa Fe


=>function f {};
	new f(a, b, c);
		(or)
	var newInstance = Object.create(f.prototype)
	var result;
	result = f.call(newInstance, a, b, c),

=>Using ES6 class syntax:
	class myObject  {
		constructor(name) {
		this.name = name;
			}
		}
	var e = new myObject("hello");
eg:class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
}
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(bike1.name);    //Output: Hayabusa
console.log(bike2.maker);   //Output: Kawasaki

=>Singleton pattern:
	var l = new function(){
	this.name = "hello";
	}
