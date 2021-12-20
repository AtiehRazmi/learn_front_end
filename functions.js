// function myfunc() {
//     let max =0
//     for (let i of arguments){
//         if (max < arguments[i]){
//             max = arguments[i]
//         }
//     }
//     return max
// }

// console.log(myfunc(100,2,300,4,500))

function compare(){
    const result = {}
    const firstarray = arguments[0]
    for(let array of arguments){
        if (array.length !== firstarray.length)
        throw "hgoilkkp"
    }
    for(let i = 0 ; i < firstarray.length ; i++){
        let firstvalue = firstarray[i]
        for (let j of arguments){
            const isequal = j[i] === firstvalue
            result[i] = isequal 
            if(!isequal){
                break
            }

        }
    }
    return result

}
console.log(compare([1,2],[1,2],[3,4],[1,2]))