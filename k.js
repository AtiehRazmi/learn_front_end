// var text = 'o'
// function logit(){
//     console.log(text)
//     var text = 'd'
//     function check(){
//         let tem = 'c'
//     }
//     console.log(tem)
// }

// function findnum(num) {
//     if ( num > 1)
//     return 1
//     else if(num < -1)
//     return -1
//     else
//     return 0
// }
// console.log(findnum(10))
// // 
// function fixarray(array){
//     for(let i of array){
//        console.log(i || 1)
//        //array[i] = array[i] || 1
// }
// }
// fixarray([3,2,0,8,NaN])

// function sumofdigits(num){
//     let sum = 0
//     let a = String(num)
//     for(let i of a){
//         sum += Number(i)
//     }
//     return sum
// }
// console.log(sumofdigits(234))
function sumofdigits(num){
    
    let a = num % 10
     let b = Math.floor(num /10)
    if (b == 0){
       return a
    }else{
        return a + sumofdigits(b)
    }
}
console.log(sumofdigits(234))