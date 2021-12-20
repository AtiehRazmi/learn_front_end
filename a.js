function oddiesh(adad){
const str = String(adad)
let sum = 0

for(let i of str ){
   
    sum += Number(i)

    console.log(sum)
}
    if (sum%2===0){
    return 'evenish'}
    else{
    return 'oddeish'
    }
}

console.log(oddiesh(43))