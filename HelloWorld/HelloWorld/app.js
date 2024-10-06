//'use strict';

// readline: This module provides an interface for reading data from a readable stream such as process.stdin, one line at a time.
// createInterface: This method creates a new readline interface instance.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// question: This method displays a query to the user, waits for user input to be provided on stdin, 
// and calls a callback function with the provided input.
readline.question(`What's your name? `, name => {

    // console.log: This method prints the message to the console.
    console.log(`Hello ${name}!`);

    readline.close();
});

