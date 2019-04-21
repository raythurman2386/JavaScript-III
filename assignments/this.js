/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When this is used in the global scope it points to the window.

* 2. Implicit Binding points to the object left of the dot.

* 3. New Binding, when a constructor is used, this points to the specific instance of the object that is to be returned by the constructor

* 4. Explicit Binding this is explicitly defined when javascripts call or apply methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    speak: function () {
        return `${this.greeting}, world!`
    }
}
console.log(myObj.speak());
// Principle 3

// code example for New Binding
function Animal(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function () {
        return `random ${this.name} animal noises`
    }
}
const lion = new Animal({
    name: 'Lion',
    age: '4catyears'
});
const duck = new Animal({
    name: 'Duck',
    age: '2duckyears'
});
console.log(lion.speak());
console.log(duck.speak());

// Principle 4

// code example for Explicit Binding
lion.speak.call(duck);
duck.speak.apply(lion);