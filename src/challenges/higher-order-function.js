/* Write a generator using a higher order function and closure */
/* A higher order function is one that either takes a function as an argument
or returns a function */

function infinite() {
    let i = 0;
    return function() {
        return i++;
    }
}