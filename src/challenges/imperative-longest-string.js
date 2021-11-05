function longest(list){
    let longest = ""
    for(let i = 0; i < list.length; i++){
        if(list[i].length > longest.length){
            longest = list[i]
        }
    }
    return longest
}