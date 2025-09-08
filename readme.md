### **_1) What is the difference between var, let, and const?_**

- var, let and const are different ways to declare a variable in JavaScript, where var was introduced earlier. Let and const were introduced in ES6 for a broader perspective.

        var a = 50;
        var b = true;
        var c = 'string';

If a value is assigned to a specific variable name using var, the value can be reassigned and redeclared in the same scope. Speaking of scopes, var is a global scope type.

- let is a new addition to the JavaScript for declaring a variable. Using let, the value can be reassigned, but not redeclared (in the same scope).

        let a = 50;
        let a = 40; // error: variable can't be redeclared
        a = 30; // correct way of reassigning

- const is one of the most useful additions in JavaScript. It is used to store a constant value which can't be redeclared or reassigned in the document. It also works as a block scoped variable.

        const a = 30;
        a = 40; // error: variable can't be reassigned
        const a = 80; // error: variable can't be redeclared

### **_2. What is the difference between map(), forEach(), and filter()?_**

map(), forEach() and filter() - all of these are array methods which are used for different purposes in JavaScript.

- _map():_ It is runs a loop through the elements of the array and following the function, it returns a new array.

        let array = [1,2,3,4,5,6];
        let newArray = array.map(element => element*2);
        console.log(newArray);

        output:
        [2,4,6,8,10,12]

- _forEach():_ This method runs a loop through the elements of the array and executes the block of code written inside the function. _THIS METHOD DOESN'T RETURN ANY ARRAY BY DEFAULT_

        array.forEach(element => {
            console.log(element * 2);
        });

        output:
        2
        4
        6
        8
        10
        12

- _filter():_ This method runs a loop through the elements and checks the condition put into the function. If an element checks out the condition, it sends the element to a new array and returns it.

        let arrayEven = array.filter(element => element % 2 == 0);
        console.log(arrayEven);

        output:
        [2,4,6]

### **_3. What are arrow functions in ES6?_**

Arrow function is a new method of writing functions in a shorter, cleaner and efficient way in JavaScript. Here's an example of a function written in both traditional and arrow:

        // traditional way of writing functions:
        function sum(a, b) {
            return a + b;
        };

        // arrow function:
        const sum = (a,b) => a + b;

However, despite being concise and efficient to write in code, arrow functions have some limitations. For instance, no support of _this_ keyword and no support of _new_ keyword.

### **_4. How does destructuring assignment work in ES6?_**

Destructuring assignment is a great feature of ES6 to write less lines of code and decluttering the code. It works for arrays and objects. Whereas, in traditional way, we would have to write code like this:

        let array = [1,2,3];
        let a = array[0];
        let b = array[1];
        let c = array[2];

With the help of destructuring assignments, we can write:

        let array = [1, 2, 3];
        let [a, b, c] = array;

We can also skip positions and use default values to a variable if the equivalent value is _undefined_.

        let [a, ,c] = [10, 20, 30]; // it saves a = 10, c = 30;
        let [x=30, y=32, z=45, p=43] = [10, 20, 30];

Object Destructuring:

        const person = {
            name: 'Mamun',
            university: 'BUET',
            place: 'Dhaka';
        }

        // traditional way of assigning variable:

        let name = person.name;
        let place = person.place;

        // object destructuring:
        let {name, place} = person;

### **_5. Explain template literals in ES6. How are they different from string concatenation?_**

Template literals(``) are very different from string concatenation ('' or, "") even though both are used to hold string values. Template literals can hold variables, values, expressions, conditionals, operators inside them by simply using ${}.

Here is an example:

        function sum(a, b) {
            return a+b;
        }
        const a = 50;
        const b = 30;

        // string concatenation:
        console.log('The sum of ', a, ' and ', b, ' is ', sum(a, b));

        // template literals:
        console.log(`The sum of ${a} and ${b} is ${sum(a, b)}`);

Template literals make it easier to write strings rather than string concatenation.
