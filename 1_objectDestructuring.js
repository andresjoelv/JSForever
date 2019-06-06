// Day 1 of JavaScriptForever
// ES6 
// Object Destructuring 

var person = {name: 'Andres', country: "Canada", job: "Developer"};

var {name, country, job} = person;

console.log(name, country, job);

/**================================================ **/
// It is also valid to assign variables to an object that is not declared

var {name, country, job} = {name:"Andres", country:"Canada", job:"Developer"};

console.log(name, country, job);

/**================================================ **/
/* Variables declared before being assigned */
// The () around the assignment statement is required syntax when using object literal
// destructuring assignment without a declaration.
// This is because the {} on the left hand side is considered as a block and not an 
// object literal.

var person = {name: "Andres", country:'Canada', job:'Developer'};
var name, country, job;

({name, country, job} = person);

console.log(name); //"Andres"
console.log(job); //"Developer"

// It is also important to node that when using this syntax, the () should be proceded by
// a semi-colon. Else, it might be used to execute a function from the previous line.

/**================================================ **/
/* Note that the variables in the object on the left hand side should have the same name
 * as a property key in the object person. If the names are different, we'll get undefined. ***/

 var person = {name: 'Andres', country: 'Canada', job: 'Developer'};

 var {name, friends, job} = person;

 console.log(name); //'Andres'
 console.log(friends); //undefined

 /**================================================ **/
 // Using a new Variable Name
 // If we want to assign values of an object to a new variable instead of using the name
 // of the property, we'll do this.

 var person = {name: 'Andres', country: 'Canada', job: 'Developer'};

 var {name:foo, job:bar} = person;

 console.log(foo); //'Andres'
 console.log(bar); //'Developer

 /**================================================ **/
 // Using Default Values
 // Default values can also be used in object destructuring, just in case a variable in undefined
 // in an object it wants to extract data from.

 var person = {name:'Andres', country:'Canada', job:'Developer'};

 var {name="myName", friend='Byron'} = person;

 console.log(name); //'Andres'
 console.log(friend); //'Byron'

 // So if the value is not undefined, the variable stores the value
 // extracted from the object as in the case of name. Else, it used the
 // default value as it did for friend.

 // We can also set the default values when we assigning values to a new variable

 var person = {name:'Andres', country:'Canada', job:'Developer'};

 var {name:foo='myName', friend:bar='Byron'} = person;

 console.log(foo); //'Andres'
 console.log(bar); //'Byron'

 // So name was extracted from person and assigned to a different variable. 
 // friend on the other hand was undefined in person, so the new variable bar was assigned the default value.

/**================================================ **/
// Computed Property Name
// Computed property name is another object literal feature that also works for destructuring.
// You can specify the name of a property via an expression, if you put it in square brackets

var prop = "name";

var { [prop] : foo="ComputedPropertyName"} = {name:'Andres', country:'Canada', job:'Developer'};

console.log(foo); //'Andres'

/**================================================ **/
// Combining Arrays with Objects
// Arrays can also be used with objects in object destructuring.

var person = {name:'Andres', country:'Canada', friends: ['Byron', 'Mario']};

var {name:foo, friends:bar} = person;

console.log(foo); //'Andres'
console.log(bar); // ['Byron','Mario']