// //Q-1
 // //https://debugmode.net/2021/09/25/function-declaration-wins-or-variable-declaration-in-javascript-hoisting/


// // Q-2
// function sequence(n) {
//     if (n < 1) {
//         return "not a valid number"
//     }
//     else if (n == 1) {
//         return "+"
//     }
//     else if (n == 2) {
//         return "++"
//     }
//     else {
//         let mySequence = sequence(n-1)
//         let temp1 = 5*(n**2) + 4
//         let temp2 = 5*(n**2) - 4
//         if (Math.sqrt(temp1)%1 == 0 || Math.sqrt(temp2)%1 == 0) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
//             mySequence += "+"
//         }
//         else{
//             mySequence += "-"
//         }
//         return mySequence
//     }
// }
// console.log(sequence(15))

/************** other solution */
// function fibonacci(num) {
//     if (num == 1) return 1;
//     if (num == 2) return 2;
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
//   function fibo(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//       arr.push(fibonacci(i));
//     }
  
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//       if (arr.indexOf(i) != -1) {
//         result += "+";
//       } else {
//         result += "-";
//       }
//     }
//     console.log(result);
//   }
//   fibo(5);

// // Q-3
// function flipEndChars (string) {
//     if (string.length < 2 || typeof string !== "string") {
//         return "incompatible"
//     }
//     else {
//         return string[0] == string[string.length-1] ? "two's pair" : string[string.length-1] + string.slice(1, string.length-1) + string[0]
//     }
// }
// console.log(flipEndChars("Cat, dog and mouse."))

// //Q-4 (if short code with condition)
// let player1 = prompt("enter a value :")
// let player2 = prompt("enter a value :")

// function winner(enter1 , enter2){
//     if((enter1 === "scissors" && enter2 === "paper") || (enter1 === "rock" && enter2 === "scissors") || (enter1 === "paper" && enter2 === "rock") ){
//         alert("the winner is player1")
//     }else if((enter2 === "scissors" && enter1 === "paper") || (enter2 === "rock" && enter1 === "scissors") || (enter2 === "paper" && enter1 === "rock") ){
//         alert("the winner is player2")
//     }else{
//         alert("it's a draw")
//     }
// }

// console.log(winner(player1 , player2));

// //Q-4 (if  condition)
// function rbs(personOne, personTwo) {
//     if (personOne === personTwo) {
//         return "It's a drw";
//     }

//     if (personOne === 'rock') {
//         if (personTwo === 'paper') {
//             return 'The winner is p2!'
//         } else {
//             return 'The winner is p1!'
//         }
//     }
//     if (personOne === 'paper') {
//         if (personTwo === 'scissors') {
//             return 'The winner is p2!'
//         } else {
//             return 'The winner is p1!'
//         }
//     }
//     if (personOne === 'scissors') {
//         if (personTwo === 'rock') {
//             return 'The winner is p2!'
//         } else {
//             return 'The winner is p1!'
//         }
//     }
// }
// console.log(rbs("rock", "paper"))
// console.log(rbs("scissors", "paper"))
// console.log(rbs("paper", "paper"))

// //Q-4 (use switch case)
// let choices_object = {
//     'rock': {
//         'rock': 'draw',
//         'scissor': 'win',
//         'paper': 'lose'
//     },
//     'scissor': {
//         'rock': 'lose',
//         'scissor': 'draw',
//         'paper': 'win'
//     },
//     'paper': {
//         'rock': 'win',
//         'scissor': 'lose',
//         'paper': 'draw'
//     }

// }
// function checker(personOne, personTwo) {
//     switch (choices_object[personOne][personTwo]) {
//         case 'win':
//             return "The winner is p1";
//         case 'lose':
//             return "The winner is p2";
//         default:
//             return "It's a draw";
//     }
// }
// console.log(checker("rock", "paper"))
// console.log(checker("scissor", "paper"))
// console.log(checker("paper", "paper"))
// console.log(checker("rock", "scissor"))

// // Q-5
// function likeOrDislike(array) {
//     let result ;
//     for (let index = 0; index < array.length; index++) {
//         if (result === undefined) {
//             result = array[index] 
//         } else {
//             if (result === array[index]){
//                  result = undefined 
//             } else{
//                 result = array[index]
//             }
//         }
//     }
//     if (result === undefined) {
//         return "Nothing";
//     } else {
//         return result;
//     }
// }
// console.log(likeOrDislike([]))
// console.log(likeOrDislike(["Dislike"]));
// console.log(likeOrDislike(["like", "like"]));
// console.log(likeOrDislike(["Dislike", "like"]));
// console.log(likeOrDislike(["like", "Dislike", "Dislike"]));

/***************** other */

// let like=1
// let dislike=-1
// let nothing=0

// function likeOrDislike(arr){
//     let result= "nothing"
//     for(let value of arr){
//         if(result!==value){
//              result = value
//         }
//         else{
//             result = "nothing"
//         }
//     }
//     return result
// }
// console.log(likeOrDislike(["Dislike"]))//Dislike
// console.log(likeOrDislike(["like","like"]))//nothing
// console.log(likeOrDislike(["Dislike","like"]))//like
// console.log(likeOrDislike(["like","Dislike","Dislike"]))//nothing
// console.log(likeOrDislike(["like","like","like"]))//like
// console.log(likeOrDislike(["like","Dislike","Dislike","Dislike"]))//Dislike

// //Q-6
// function generation(g, sex) {
//     var genf = "";
//     var genm = "";
  
//     switch (g) {
//       case -3:
//         genf = "great grandmother";
//         genm = "great grandfother";
  
//         break;
//       case -2:
//         genf = "grandmother";
//         genm = "grandfather";
//         break;
//       case -1:
//         genf = "mother";
//         genm = "father";
//         break;
//       case 0:
//         genf = "me!";
//         gnm = "me!";
//         break;
//       case 1:
//         genf = "daughter";
//         genm = "son";
//         break;
//       case 2:
//         genf = "granddaughter";
//         genm = "grandson";
//         break;
//       case 3:
//         genf = "great granddaughter";
//         genm = "great grandson";
//         break;
  
//       default:
//         break;
//     }
  
//     return sex == "f" ? genf : genm;
//   }
  
//   console.log(generation(2, "f"));
//   console.log(generation(-3, "m") )
//   console.log(generation(1, "f") )

/***********other */

// let Male=["great grandfather","grandfather","father","me!","son","grandson","great grandson"]
// let Female=["great grandmather","grandmather","mather","me!","dauter","granddauter","great granddauter"]
// function generation(number,sex){

//     if(sex=="f"){
//         return Female[number+3]
//     }else if(sex=="m"){
//         return Male[number+3]
//     }else{
//         return "unvalid input"
//     }
// }
// console.log(generation(-3,"f"))//great grandmather
// console.log(generation(2,"f"))//granddauter
// console.log(generation(1,"f"))//son



  
  