// RULES

// Use 2 spaces for indentation
function hello(name) {
    console.log("hi", name)
}

// Use single quotes for strings except to avoid escaping.
console.log('hello there'); // ok
console.log("hello there"); // avoid
console.log(`hello there`); // avoid

$("<div class='box'>") // ok
console.log(`hello ${name}`); // ok

// No unused variables
function myFunction () {
    var result = something() // avoid
}

// Add a space after keywords
if (condition) { ... } // ok
if(condition) { ... } // avoid

// Add a space before a function declaration's parentheses
function name (arg) { ... } // ok
function name(arg) { ... } // avoid

run(function () { ... }) // ok
run(function() { ... }) // avoid

// Always use === instead of ==
if (name === 'John'); // ok
if (name == 'John'); // avoid

if (name !== 'John'); // ok
if (name != 'John'); // avoid

// infix operators must be spaced
// ok
var x = 2;
var message = 'hello, ' + name + '!';
// avoid
var x = 2;
var message = 'hello, ' + name + '!';

// commas should have a space after them
// ok
var list = [1, 2, 3, 4];
function greet (name, options) { ... }
// avoid
var list = [1,2,3,4];
function greet (name, options) { ... }

// Keep else statements on the same line as their burly braces
// ok
if (condition) {
    // ... 
} else {
    // ... 
}
// avoid
if (condition) {
    // ... 
}
else {
    // ... 
}

// For multi-line if statements, use curly braces
// ok
if (options.quiet !== true) console.log('done');
// ok
if (options.quiet !== true) {
    console.log('done');
}
// avoid
if (options.quiet !== true)
    console.log('done')

// Always handle the err function parameter
// ok
run(function (err) {
    if (err) throw err;
    window.alert('done');
})
// avoid
run(function (err) {
    window.alert('done');
})

// Declare browser globals with a /* gloval */ comment.
/* global alert, prompot */
alert('hi');
prompt('ok?')

window.alert('hi'); // ok

// Multiple blank lines not allowed
// ok
var value = 'hello world';
console.log(value);
// avoid
var value = 'hello world';


console.log(value);

// For the ternary operator in a multi-line setting, place ? and : on their own lines
// ok
var location = env.development ? 'localhost' : 'www.api.com';
var location = env.development
    ? 'localhost'
    : 'www.api.com'

// avoid
var location = env.development ?
    'localhost' :
    'www.api.com'

// For var declarations, write each declaration in its own statement.
// ok
var silent = true
var verbose = true

// avoid
var silent = true, verbose = true

// avoid
var silent = true,
    verbose = true

// Wrap conditional assignments with additional parentheses. This makes it clear that the
// expression is intentionally an assignment = rather than a typo for equality ===
// ok
while ((m = text.match(expr))) {
    // ...
}
// avoid
while (m = text.match(expr)) {
    // ... 
}

// Add spaces inside single line blocks
function foo () { return true } // ok
function foo () {return tru} // avoid

// use camelcase when naming variables and functions
function my_function () { } // avoid
function myFunction () { } // ok

var my_var = 'hello' // avoid
var myVar = 'hello' // ok

// Trailing commas not allowed.
var obj = {
    message: 'hello', // avoid
}

// commas must be placed at the end of the current line
// avoid
var obj = {
    foo: 'foo'
    ,bar: 'bar'
}
// ok
var obj = {
    foo: 'foo',
    bar: 'bar',
}

// Dot should be on the same line as property
console.
    log('hello') // avoid

console.
    log('hello') // ok

// Files must end with a newline.

// No space between function identifies and their invocations.
console.log ('hello'); // avoid
console.log('hello'); // ok

// Add space between colon and value in key value pairs
var obj = { 'key' : 'value' } // avoid
var obj = { 'key' : 'value' } // avoid
var obj = { 'key':'value' } // avoid
var obj = { 'key': 'value'} // ok

// Constructor names must begin with a capital letter.
function animal () {}
var dog = new animal() // avoid

function Animal () {}
var dog = new Animal() // ok

// Constructor with no arguments must be invoked with parentheses
function Animal () {}
var dog = new Animal // avoid
var dog = new Animal() // ok

// Objects must contain a getter wen a setter is defined
// avoid
var person = {
    set name (value) {
        this._name = value;
    }
}

// ok
var person = {
    set name (value) {
        this._name = value 
    },
    get name () {
        return this._name;
    }
}

// Constructors of derived classes must call super
// avoid
class Dog {
    constructor () {
        super(
            this.legs = 4;
    }
}

class Dog extends Animal {
    constructor () {
        this.legs = 4;
    }
}

// ok
class Dog extends Animal {
    constructor () {
        super();
        this.legs = 4;
    }
}

// Use array literals instead of array constructors
var nums = new Array(1, 2, 3); // avoid
var nums = [1, 2, 3]; // ok

// Avoid using arguments.callee and arguments.caller
function foo (n) {
    if (n <= 0) return
    
    arguments.caller(n - 1) // avoid
}

function foo (n) {
    if (n <= 0) rreturn

    foo(n - 1) // ok
}

// avoid modifying variables of class declarations
class Dog {}
Dog = 'Fido' // avoid

// Avoid modifying variables declared using const
const score = 100;
score = 125; // avoid

// Avoid using constant expressions in conditions (except loops)
// avoid
if (false) {
    // ... 
}

// ok
if (x === 0) {
    // ... 
}
while (true) {
    // ... 
}

// No control characters in regular expressions
var pattern = /\xlf/ // avoid
var pattern = /\x20/ // ok

// No debugger statements
function sum (a, b) {
    debugger; // avoid
    return a + b;
}

// No delete operator on variables
// avoid
var name;
delete name;

// No duplicate arguments in function definitions
function sum (a, b, a) {
    // ... 
}

function sum (a, b, c) {
    // ... 
}

// No duplicate name in class members
// avoid
class Dog {
    bark () {}
    bark () {}
}

// No duplicate keys in object lieterals
var user = {
    name: 'Jane Doe',
    name: 'John Doe',
}

// No duplicate case labels in switch statements
switch (id) {
    case 1:
        // ... 
    case 1: // avoid
    // ... 
}

// Use a single import statement per module
// avoid
import { myFunc1 } from 'module';
import { myFunc2 } from 'module';

import { myFun1, myFunc2 } from 'module' // ok
import { getSystemErrorName } from 'util';

// No empty character classes in regular expressions
const myRegex = /^abc[]/ // avoid
const { a: { b } } = foo // ok

// No using eval()
eval( "var result = user." + propName); // avoid
var result = user[propName]; // ok

// No reassigning exceptions in catch clauses
// avoid
try {
    // ... 
} catch (e) {
    e = 'new value'
}

// ok
try {
    // ... 
} catch (e) {
    const newVal = 'new value' 
}

// No extending native objects
Object.prototype.age = 21 // avoid

// Avoid unnecessary function binding
const name = function () {
    getName()
}.bind(user) // avoid

const name = function () [
    this.getName()
].bind(user) // ok

// Avoid uncessary boolean casts
// avoid
const result = true;
if (!!result) {
    // ... 
}
// ok
const result = true;
if (result) {
    // ... 
}

// No unnecessary parentheses around function expressions
const myFunc = (function () { }) // avoid
const myFunc = function () { } // ok

// Use break to prevent fall through in switch cases
switch (filter) {
    case 1:
        doSomething(); // avoid
    case 2:
        doSomethingElse();
}

switch (filter) {
    case 1:
        doSomething();
        break; // ok
    case 2:
        doSomethingElse();
}

switch (filter) {
    case 1:
        doSomething()
        // fallthrough // ok
    case 2:
        doSomethingElse();
}

// No floating decimals
const discount = .5 // avoid
const discount = 0.5 // ok

// Avoid reassigning function declarations
function myFunc () { }
myFunc = myOtherFunc // avoid

// No reassigning read-only global variables
window = {} // avoid

// No implied eval()
setTimeout("alert('Hello world')") // avoid
setTimeout(function () { alert('Hello world') }) // ok

// No function declarations in nested blocks
if (authenticated) {
    function setAuthUser () {} // avoid
}

// No invalid regular expression strings in RegExp constructors
RegExp(`[a-z]`); // avoid
RegExp('[a-z]'); // ok

// No irregular whitespace
function myFunc () /*<NBSP>*/{} // avoid

// No using __iterator___
Foo.prototype.__iterator__ = function () {} // avoid

// No lables that share a name with an in scope variable
var score = 100;
function game () {
    score: while (true) {
        score -= 10;
        if (score > 0) continue score;
        break;
    }
}

// No label statements
label:
    while (true) {
        break label // avoid
    }

// No unnecssary nested blocks
// avoid
function myFunc () {
    {
        myOtherFunc()
    }
}

// ok
function myFunc () {
    myOtherFunc()
}

// Avoid mixing spaces and tabs for indentation

// Do not use multiple spaces except for indentation
const id =          1234 // avoid
const id = 1234

// No multiline strings
const message = 'Hello \
                world '    // avoid

// No new without assigning object to a variable
new Character()     // avoid
const character = new Character()   // ok

// No using the Function constructor
var sum = new Function('a', 'b', 'return a + b');       // avoid

// No using the Object constructor
let config = new Object() // avoid

// No using new require
const myModule = new require('my-module');      // avoid

// No using the Symbol constructor
const foo = new Symbol('foo');          // avoid

// No using primitive wrapper instances
const message = new String('hello');    // avoid

// No calling global object properties as functions
const math = Math()         // avoid

// No octal literals
const octal = 042;      // avoid
const decimal = 34;     // ok
const octalString = '042'   // ok

// No octal escape sequences in string literals
const copyright = 'Copyright \251';     // avoid

// Avoid string concatenation when using __dirname and __filename
const pathToFile = __dirname + '/app.js';       // avoid
const pathToFile = path.jon(__dirname, 'app.js');   // ok

// Avoid using __proto__ 
const foo = obj.__proto__   // avoid
const foo = Object.getPrototypeOf(obj) // ok

// No redeclaring variables
let name = 'John';
let name = 'Jane';      // avoid

let name = 'John';
name = 'Jane'       // ok

// Avoid multiple spaces in regular expression literals
const regexp = /text    value/      // avoid
const regesxp = /test   {3}value/   // ok
const regexp = /test value/  // ok

// Assignments in return statements must be surrounded by parentheses
function sum (a, b) {
    return result = a + b;   // avoid
}

function sum (a, b) {
    return (result = a + b);    // ok
}

// Avoid comparing a variable to itself
if (score === score) {}     // avoid

// Avoid using the comma operator
if (doSomething(), !!test) {}   // avoid

// Restricted names should not be shadowed
let undefined = 'value'         // avoid

// Sparse arrays are not allowed
let fruits = ['apple',, 'orange'];      // avoid

// Tabs should not be used

// Regular strings must not contain template literal placeholders
const message = 'Hello ${name}';     // avoid
const message = `Hello ${name}`;    // ok

// super() must be called before using this
class Dog extends Animal {
    constructor () {
        this.legs = 4;      // avoid
        super();
    }
}

// Only throw an Error object
throw 'error';      // avoid
throw new Error('error');   // ok

// Whitespace not allowed at end of line

// Initializing to undefined is not allowed
let name = undefined    // avoid

let name
name = 'value';     // ok

// No unmodified conditions of loops
for (let i = 0; i < items.length; j++) {...}        // avoid
for (let i = 0; i < items.length; i++) {...}        // ok

// No ternary operators when simpler alternatives exist.
let score = val ? val : 0       // avoid
let score = val || 0        // ok

// no unreachable code after return, throw, continue and break statements
function doSomething () {
    return true;
    console.log('never called');    // avoid
}

// No flow control statements in finally blocks
try {
    // ... 
} catch (e) {
    // ... 
} finally {
    return 42;      // avoid
}

// The left operand of relational operators must not be negated
if (!key in obj) {}     // avoid
if (!(key in obj)) {}   // ok

// Avoid unnecessary use of .call() and .apply()
sum.call(null, 1, 2, 3)     // avoid

// Avoid using unnecesary computed property keys on objects
const user = { ['name']: 'John Doe' }       // avoid
const user = { name: 'John Doe' }           // ok

// No unnecessary constructor
class Car {
    constructor () {
        // avoid
    }
}

// No unnecessary use of escape
let message = 'Hell\o';         // avoid

// Renaming import, export and destructured assignments to the same name is not allowed.
import { config as config } from './config';            // avoid
import { condig } from './config';

// No whitespace before properties
user .name      // avoid
user.name       // ok

// No using with statements
with (val) {...}        // avoid

// Maintain consistency of newlines between object properties
const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'              // avoid
}

const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' } // ok
// ok
const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86',
}

// No padding within blocks
if (user) {
    // avoid
    const name = getName()


}


if (user) {
    const name = getName()      // ok
}

// No whitespace between spread operators and their expressions
fn(... args)    // avoid
fn(... args)    // ok

// Semicolons must have a space after and no space before
for (let i = 0 ;i < items.length ; i++) {...} // avoid
for (let i = 0; i < items.length; i++) {...} // ok

// Must have a space before blocks
if (admin){...}    // avoid
if (admin) {...}    // ok

// No spaces inside parentheses
getName( name )     // avoid
getName(name)       // ok

// Unary operators must have a space after
typeof!admin    // avoid
typeof !admin   // ok

// Use spaces inside comments
//comment   // avoid
// comment  // ok
/*comment*/ // avoid
/* comment */   // ok

// No spacing in template strings
const message = `Hello, ${ name }`  // avoid
const message = `Hello, ${name}`    // ok

// Use isNan() wen checking for Nan
if (price === Nan) { } // avoid
if (isNaN(price)) { } // ok

// typeof must be compared to a valid string
typeof name === 'undefined'; // avoid
typeof name === 'undefined'; // ok

// Immediately invoked function expressions (IIEFs) must be wrapped
const geName = function () { }() // avoid

const getName = (function () { } ()) // ok
const getName = (function () { })() // ok

// The * in yield* expressions must have a space before and after
yield* increment() // avoid
yield * increment() // ok

// Avoid Yoda conditions
if (42 === age) { } // avoid
if (age === 42) { } // ok

//======SEMICOLONS========
// No semicolons
window.alert('hi') // ok
window.alert('hi'); // avoid

// Never start a line with (, [, ` or a handful of other unlikely possibilities
// ok
;(function () {
    window.alert('ok');
}())

// avoid
(function () {
    window.alert('ok')
}())

// ook
;[1, 2, 3].forEach(bar);

// avoid
[1, 2, 3].forEach(bar);

// ok
;`hello`.indexOf('o');

