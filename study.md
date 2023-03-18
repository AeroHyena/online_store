<!-- This file is intended as a note-taking tool to help me keep track of everything I am learning about, the tools and strategies I use, as well as
anything else that is important or may be useful at a later point -->





# Study Notes


## Microservices
For this app, I will be utilizing a microservices structure.

Microservies architecture is a structural approach to an app wherein you dissect the app into seperate, independant modules/services that together form a larger whole.

Microservices acrhitecture is used as an alternate approach to Monolithic architecture, wherein apps are built as singular structures hosted on the same server, in contrast to microservices having their services hosted on seperate servers, each with its own database.


### Advantages and Disadvantages
Dividiing an app into smaller components that function independently offer many advantages, including:
- Scalability:
Because each service are seperate and independant, it is easier to scale each component of an app as your userbase grows.
- Upkeep:
With each component seperate, one can assign a developer to each component, making the upkeep of the app overall much easier to maintain.
- Upgradeability:
With components being independant, one can easily add patches, bug fixes and more to an individual component without having to worry that the entire app will collapse, or need to be rewritten.
- Stability
Because each module functions seperate from one another, if one service fails all the other will still function, thus reducing the loss useability.
- Unit Testing:
With each component, one can easily test it's individual functionality.

There are also some disadvantages that might come into play:
- Bug Tracking:
Whilst testing individual components is easier, tracking issues and bugs across the app may prove to be difficult.
- Complexity
Dealiwing with multiple services and modules may introduce difficulty with design, development and deployment.
- Resources
Because each service is deployed, tracked and maintained seperately, it introduces a higher need for resoruces.
- Distributed Systems Issues: 
Microservices are subject to the same issues that all distributed systems face, such as network latency, data consistency, and security concerns.


### Use Case
Microservices architecture is best suited for complex, large-scale applications that require high scalability, flexibility, and resilience.
This is great for something like gaming, where there has to be game logic, player ranking, match making, etc.
Other examples inlude ecommerce and social media websites, financial services, health care, etc.





## Tools Used

### Template Engine
Some basic research showed me that EJS and Handlebars are two very popular template engines used alongside node and express.

Considering that each service in this project returns data in json format, I chose **Handlebars** since it easily works with with json data.



## ES6
With this project I am studying ES6 and its features in greater depth, so here is a summary of all the features and what they do.

### Arrow Functions
Arrow functions replace function() with a shorter syntax, akin to lambda functions in python.

const arrow = () => "this is an arrow function";
This type of function automatically returns the contents after the arrow =>

You can add function variables in the brackets like so:
const sum = (a, b) => a + b
you then call the function like so:
let result = sum(3, 5);

### Block-Scoped Variables
ES6 introduces *let* and *const*. Variables called with these have block scope, which means that their scope are confined to the blocks they are defined in.

A block is defined by a set of curly braces {} and can include any number of statements.


### Classes
ES6 introduces classes into javascript, allowing for object-oriented programming in javascript.

Classes are created with constructor functions, which is called when a new object of a class is created.
Classes may also contain functions within them, which is referred to as methods.
Objects of a class are initialized using *new*.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.sayHello();
```

Classes also support the use of static methods and properties, which can be accessed without creating an instance of the class.

```
class MathUtils {
  static PI = 3.14;

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.multiply(2, 3)); // Output: 6

```





























temp pasting:
    Arrow functions
    Block-scoped variables (let and const)
    Classes
    Destructuring
    Enhanced object literals
    Promises
    Rest parameters
    Spread operator
    Template literals
    Default parameters
    Generators
    Iterators
    Modules
    Maps
    Sets
    Symbols
    Typed Arrays
    Binary and Octal Literals
    Exponentiation Operator
    Object.assign
    String Methods
    Array Methods
    Number Methods
    Math Methods
    Function.name
    Function.prototype.toString
    Proxy and Reflect
    Tail call optimization
    Unicode support