//1 noting
// //5
// function myfunc(n , d ){
//     let count =0
//     let array = []
//     for(let i=0 ; i<=n ; i++){
//         array.push(i)
//         if (array[i]===d){
//             count++
//         }
//     }
//     return count
//  }
//  console.log(myfunc(10,5))
//2
// function bubbleSort(array) { 
//     var done = false; 
//     while (!done) { 
//       done = true; 
//       for (var i = 1; i < array.length; i += 1) { 
//         if (array[i - 1] > array[i]) { 
//           done = false; 
//           var tmp = array[i - 1]; 
//           array[i - 1] = array[i]; 
//           array[i] = tmp; 
//         } 
//       } 
//     } 
   
//     return array; 
//   } 
//   console.log(bubbleSort([2,8,3,5,7]))
//3
const str = prompt('please enter words')
console.log(str)
function remov(string){
    for(let i = 0; i<=string.length; i++){
        if(string[i]===('e'||'o'||'a')){
            string[i] = ''
        }
    }
    return string

}
console.log(remov(str))