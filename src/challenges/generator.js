/* 
Write a generator using a higher order function that will generate integers starting at a 'start'
and going up to a 'end' value. Once the 'end' value has been generated, the generator will return undefined.
*/

function from(start){
    let i = start
    return function(){
        return i++
    }
}

function range(start, end){
    const gFrom = from(start)
    return function(){
        let from = gFrom()
        return (from > end) ? undefined : from
    }
}