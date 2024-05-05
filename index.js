// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback(); // calling the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
        console.log("This is a named function.");
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
        console.log("This is an anonymous function.");
    };
}
