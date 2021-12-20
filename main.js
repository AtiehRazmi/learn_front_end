document.getElementById('main').innerHTML = 'fgjhlkj;'
/*
let adad =[1,3,4,7,13,15,4,1,4,2,1,13,13]

function print (a){
    for (let i =0; i<a.length; i++){
        for (let j = 1 ; j<a.length;j++){
            if(adad[i]==adad[j])
            return adad[i]
        }
    }
}

let a = print(adad)
*/

/*
function age( age ){
    if(age>0)
    return age * 365
    else
    return -1
}
console.log(age(-2))
*/
//1
/*
function even(num){
    
    for(let i = 0 ; i<=num ; i++){
        if(i%2== 0)
        console.log(i)
    }

}
*/
//2
/*
let array =[1,2,3,4,5,6,7]

function arrayeven(a){
    let evencount = 0
    let oddCount = 0
    for(var i = 0 ; i<a.length ; i++){
        if(a[i] %2== 0){
         return evencount = evencount + 1
        }else{
            return oddCount+=oddCount
        }
    } 
        
    
}
console.log(arrayeven(array))
*/
//5
/*
function power(a , b){
    return b **a
}
console.log(power(3,2))
*/
//3
/*
function aval (a){
    let count=0
let i,j 
for(j=2;j<=a;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
  
}


}
aval(10)
*/
/*

function mazrab(a , b){
    for(let i = 1 ; i <=b ; i++){
        let c=[]
        c[i-1] = a*i
    }
    console.log(c[i])
}
mazrab(5,7)
*/

//tamrin jomh

// let input = +prompt('enter')
// let sum = 0
// function ava (num){
//     for(let i = 2 ; i <= num ; i++) {
//         if(num % i == 0 ){
//             sum += 1
//         }

//     }
//     if (sum!=2){
//         console.log('isnot prime')
//     }else{
//         console.log('is prime')
//     }


// }
// ava()

// const array = [1,22,33,24,25]
// const c = []

//     for(let i = array.length- 1 ; i>=0 ; i--)
//     c.push(array[i])


// console.log(c)


// const array = [1,22,33,2,3]
// function find( arr , num){
//     for (let index in arr){
//         if(num === arr[index]){
//             return index
//         }
//     }
//     return -1
// }
// console.log(find(array, 2))

// const input = prompt('enter')
// const b=[]
// b[input]
// const c = []
// for(let i=b.length-1 ; i>=0 ; i--  ){
//     c.push(b[i])
// }
// console.log(c)

// let cit ={
//     name: 'iran',
//     pop: '120000',
//     caltuer: 'kal'
// }



// function getcity (city){
  
//     return cit.name + 'jjhgjh'+ cit.pop

// }
// console.log(getcity(cit))

let g = 'reyw6tgfertgyhu'
function how(arr , a ) {
     let count =0
    for ( let i of arr) {
        if (i === 'r')
        count++
    }
    return count
}
console.log(how(g, 'r'))










