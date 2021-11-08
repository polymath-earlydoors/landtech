function pigIt(str){

    const stringArray = str.split(" ")
    const firstWordArray = stringArray[0].split('')
    const firstLetter = firstWordArray[0]
    const remainingLetters = firstWordArray.slice(1).join('')   
    const newFirstWord = remainingLetters + firstLetter  + "ay"

    let newWord = []
    newWord.push(newFirstWord)

    for(let i = 1; i < stringArray.length; i++){
        newWord.push(stringArray[i])
    }
    return newWord.join(" ")
}

module.exports = { pigIt }
