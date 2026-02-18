/* console.log('Hello JS');
console.error('Hello JS');
console.warn('Hello JS');
console.info('Hello JS'); */
// var or let
/*
var num = 3;
num = 5;

var some_new = "Result:"

console.log(some_new + num + "!");

const number = 10;

console.log(number);

var isHasCar = true;
var isNOTHasCar = false;

console.log(isHasCar)
*/

/*
var num1 = 15;
var num2 = 7;

// var res = num1 - num2;
console.log("Result: " + (num1-num2));
console.log("Result: " + (num1+num2));
console.log("Result: " + (num1/num2));
console.log("Result: " + (num1*num2));
console.log("Result: " + (num1%num2));

var num3 = 5;
var num4 = Number("10");
console.log(num3 + Number(num4));

num1 += 10;
console.log(num1);

var pi = Math.PI
console.log(pi)
*/
/*
var num = 15;
let isHasCar = true

if(num >= 5 || isHasCar) {
console.log("yes")
console.log("Yes, he has a car")
}
else if(num == 10) {
console.log("num is 15")
}
else console.log("ти дурак")
*/
/*
let word = "Some"

switch(word){
    case "new": console.log("Var is new"); break;
    case "5": console.log("Var is 5"); break;
    case "Some": console.log("Var is Some"); break;
    default:
        console.log("Var is unknown"); break;
}
*/

/*var  data = [5,3,6,5.4,"Word",true] //[4,3,6] //new Array(4,5,2)
data[0] = "ooyyy yes"
console.log(data[0]);
console.log(data.length);

var matrix = [
[5,6],
["World",false],
[true,5.9,0]
];

console.log(matrix[0][1]);*/
 

/*for(var i = 0; i <= 10; i++){
    console.log(i);
}*/

/*var i = 0;
while(i < 15){
    console.log(i);
    i += 2;
}*/

/*var x = 100;
do{
console.log(x)
} while(x < 10);
*/

/*for(var i = 10; i > 0; i--){
    if(i == 5) break;
    if(i % 2 == 0) continue;
    console.log(i);
}*/

/*var nums = [5,6,2,7,7,10];

for(var i = 0; i < nums.length; i++){
    nums[i] *= 2;
    console.log("Element is: " + nums[i]);
}*/

//alert("Hi, how are you");

/*var data = confirm("Чи все вам подобається");
if(data)*/

/*var data = prompt("Як ваші справи", "okay");
//console.log (data);
if(data == null)
    alert("nothing")
else
    console.log(data);
*/

/*function print(Word){
    console.log(Word);
    console.log("!");
}

print();*/
/*
function arrsum(num){
    var sum = 0;
for(var i = 0;  i < num.length; i++)
    sum += num[i];

console.log("Summa " + sum);
}

var arc = [2, 8, 5];
arrsum(arc);



var num1 = [4, 8, 2, 6];
arrsum(num1)

var div = document.getElementById('main');
div.innerText = "Main block";
div.style.color = "red";
div.innerHTML = "hello <p> what up</p>";
*/

function checkForm(el) {
    var username = el.username.value;
    var email = el.email.value;
    var pass = el.password.value;
    var gender = el.gender.value;

    var error = '';
    if(username.length < 2)
        error = "Ім'я занадто мале";
    else if(email.length < 2)
        error = "Email занадто малий";
    //else if(email.includes('@'))
       // error = "Email має містити @";
    else if(pass.length < 2)
        error = "Пароль занадто малий";
    else if(gender == null || gender == '')
        error = "Потрібно вибрати гендер";

    if(error != ''){
        document.getElementById('error').innerText = error;
        return false;
    }
    document.getElementById('error').innerText = '';

    console.log(username)
    console.log(email)
    console.log(pass)
    console.log(gender)

    return false;
}



