// let c ={
//     a : 1,
//     b : 2
// }
// function toarray(obj){
//     var result = Object.keys(obj).map(function (key) {
          
//         // Using Number() to convert key to number type
//         // Using obj[key] to retrieve key value
//         return [key, obj[key]];
//     });
      
//     // Printing values
//     for(var i = 0; i < result.length; i++) {
//         for(var z = 0; z < result[i].length; z++) {
//             document.write(result[i][z] + " ");
//         }
//         document.write("</br>");
//     }
// }
// console.log(toarray(c))


function happy (num){
    for (let j= 0 ; j<sum.length;j++){
        
    const digit = String(num)
    let sum =0
    let arr =[]
    for (let i= 0 ; i<digit.length;i++){
        sum+=Number( digit[i]*digit[i])
    }

if (sum == 1)
return t 
else
return f
}
}    
console.log(happy(203))