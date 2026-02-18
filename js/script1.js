/*let yourName = prompt('What is your name', 'Ivan');
alert('Your name is ' + yourName);*/

/*let ansverQW = prompt('Яка офіційна назва javaScript');
if(ansverQW == "ecmaScript"){
    alert ("your are right");
} else if(ansverQW != "ecmaScript"){
        alert ("your are wrong");
}*/

/*let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
(a + b < 4)? result = 'Below': result = 'Over';

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee')? 'Hello' : 
(login == 'Director')? 'Greetings' :
(login == '')? 'No login' : '';*/


/*let ageUser = prompt('How old are your', 18);

if(!(ageUser <= 90 && ageUser >= 14)){
    alert('are your Man');
}
else 
    alert('error')

let age = prompt('How old are your', 18);

if(age != 90 && age != 14 && age < 14 && age >90){
    alert('are your Man');
}
else 
    alert('error')

let agUs = prompt('How old are your', 18);

if(agUs > 91 && agUs < 13 ){
    alert('are your Man');
}
else 
    alert('error')*/


/*
let logIn = prompt ('Who`s there?')
if(logIn == "admin"){
    let pasw = prompt('Password?')
    if(pasw == "TheMaster"){
        alert('Welcome');
    }
    else if(pasw == null || pasw == "" ){
    alert('canceled');}
    else alert('Wrong password');
}
else if(logIn == null || logIn == "" ){
    alert('canceled');
}
else alert('I don`t know your')
*/

// for(let i = 5; i < 10; i++) {
//     console.log(i);
// }

// let num = 5
// while(num < 8){
//     console.log(num);
//     num++
// }
// let num = 5;
// do {
//     console.log(num);
//     num++

// }while(num<=6);

// for( let i = 0 ; i <= 10; i ++){
//     if(i % 2){
//     console.log(i);
//     }continue;
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while(i < 3){
//     console.log(i);
//     i++

// }


    //alert('try again');
   
// if(Number(userNum) < 100){
//     alert('try again');
// }else
//     alert('number > 100');
 


// for(let i = 0; i > 100; i += confirm(userNum)){
//     alert(userNum);
// }

// for(let userNum = 1; userNum <= 100 && userNum; userNum){
//     userNum = prompt('give me number', 0)
//     console.log(userNum);
// }alert('number > 100');

// let num = 0
// // do{ 
// //     console.log(num);
// //     num ++;
// while(num < 10){
//     num++
//     if(num % 2 == 0) continue;

// }
/*
let n = 10;

for(let i = 2; i <= n; i++){
    for(i ;i <= 3; i++){
        console.log(i);
    }
    if(i % 2 == 0 || i % 3 == 0) continue;
    console.log(i);
} 
alert("over")
*/

/*
let num1 = 2;
let num2 = 2;
console.log(num1 % num2);
*/

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }

/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

let browser
if(browser == "Edge")
    alert( "You've got the Edge!" );
else if (
    browser == "Chrome" || 
    browser == "Firefox" ||
    browser == "Safari" || 
    browser == "Opera"
)
    alert( 'Okay we support these browsers too' );
else alert( 'We hope that this page looks ok!' );
*/
/*
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

switch(a){
    case "0":
        alert( 0 );
        break;
    case "1":
        alert( 1 );
        break;
    case "2":
    case "3":
        alert( '2,3' );
        break;

}
*/

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }


// function checkAge(age) {
//   return = (age > 18) ? true : confirm('Did parents allow you?');
//   }

//   function checkAge(age) {
//   return = (age > 18) || confirm('Did parents allow you?');
//   }


// function min(a,b){
//     if(a < b)
//     return a;
//     if(a > b)
//     return b;
// }

// min(10,5);

function pow(x,n){
   if(n = 1 || n > 1 && (n % 2 == 0 || n % 2 == 1)){
    console.log(x,n);
   return (x **n);
   }else
    alert(x,n);
    return (x , n);
}
console.log(pow(prompt('num1','0'), prompt('num2','1')));
