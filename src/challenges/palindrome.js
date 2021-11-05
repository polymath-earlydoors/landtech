/* Write a function that determines if a string is a palindrome.
Do not consider special characters or whitespace.
A palindrome is a word or sentence that is spelled the same way forward and backwards.

eg: A man, a plan, a canal - Panama
eg: Go hang a salami im a lasagna hog
*/

function palindrome(str){
    const lettersOnly = str.toLowerCase().split(/[^a-z]+/)
    .join("").split("")

    const reversed = [...lettersOnly].reverse()

    //console.log("lettersOnly", lettersOnly)
    //console.log("reversed", reversed)

    return lettersOnly.join("") === reversed.join("")
}