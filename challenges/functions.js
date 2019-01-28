// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (arg1, arg2, cb) => {
  return cb(arg1, arg2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}

const greeting = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*  nestedFunction is able to acces the variable 'internal' because the scope chain of the closure that myFunction creates when it is invoked allows for nested closures (like the one nestedFunction creates) to see outside of their local scope. nestedFunction has access to variables in 3 places:
  1. Local/Function scope - variables declared within the function itself
  2. Block scope - variables declared to any block (curly braces) that nestedFunction is inside of
  3. Global scope - variables that aren't nested inside any function block
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();