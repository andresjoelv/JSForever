// Day 1 of JavaScriptForever
// ES6 
// Arrow Functions

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function(element){
    return element.length;
}); // this statement returns the array: [8, 6, 7, 9]

// ES6
elements.map((element) => {
    return element.length;
}); // [8,6,7,9]

// When there is only one parameter, we can remove the surrounding parenthesies:
// explicit return
var test = elements.map( element => {
    return element.length;
}); // [8,6,7,9]

console.log(test);

// When the only statement in an arrow function is 'return', we can remove 'return' and remove
// the surrounding curly brackets
// implicit return
elements.map( element => element.length); // [8,6,7,9]

// destructuring parameter using new variable name
elements.map( ({length:lenghFooBarX}) => lenghFooBarX); // [8,6,7,9]

// destructuring parameter using the literal name itself of the variable length
var test2 = elements.map( ({length}) => length); // [8,6,7,9]
console.log(test2);

//===================================================

// Normal function
const x = function(arg1, arg2) { /* Do something */ };

// Arrow function
const y = (arg1, arg2) => { /* Do something */ };

// Normal function in a callback
button.addEventListener('click', function(){
    //...
});

// Arrow function in a callback
button.addEventListener('click', () => {
    //...
});

// If no arguments are required, you can substitute the parenthesis (()) for an underscore (_)

// all the followings are valid arrow functions
const zeroArgs = () => {/* do something */}
const zeroWithUnderscore = _ => {/* do something */}
const oneArg = arg1 => {/* do something */}
const oneArgWithParenthesis = (arg1) => {/* do something */}
const manyArgs = (arg1, arg2) => {/* do something */}

// Arrow functions, by default, automatically create a return keyword if the code
// only takes up one line, and is not enclosed in a block

var threeTimes = numbers.map( x => x*3 );

// return is implied if there is an expression after the arrow

