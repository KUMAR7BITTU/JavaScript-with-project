// 1. Ways to print in javascript
//console.log("Hello World");
//alert("me");
//document.write("This is a document write");

// 2. Javascript console API .
/*console.log("Hello World", 4 + 6, "Another String");
console.warn("this is a warning ");
console.error("This is an error");
console.clear();
console.assert(4 == 6 - 2);*/

// 3. JavaScript Variables
// What are Variables ? - Containers to store data values .
var number1 = 23;
var number2 = 34;
//console.log(number1 + number2);

// 4. DATA TYPES in javascript
// Number
var num1 = 28;
var num2 = 56.3425;

// String
var str1 = "This is a string .";
var str2 = 'This is also a string .';

// Object
var marks = {
    ravi : 34,
    shubham : 78,
    harry : 99.997
}
//console.log(marks);

// Boolean 
var a = true;
var b = false;
//console.log(a,b);

// Undefined
var und = undefined;
//console.log(und);
//console.log(undefined);
var und1;
//console.log(und1);

// NUll
var n = null;
//console.log(n);

/*
At a very high level there are two types of datatype in javascript . 
1. Primitive data types:- undefined, null, number, string, boolean, symbol
2. Non-Primitive data types:- Arrays and Objects
*/

var arr = [1,2,"bablu",4,5];
//console.log(arr);
//console.log(arr[0]);

// Operator in JavaScript 
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ",a+b);
// console.log("The value of a - b is ",a-b);
// console.log("The value of a X b is ",a*b);
// console.log("The value of a / b is ",a/b);

// Assignment Operators
var c = b;
// c+=2;
   c-=2;
// c*=2;
// c/=2;
// console.log(c);

// Comparision Operators
var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// Logical Operators
// Logical AND 
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT
// console.log(!false);
// console.log(!true);

// Functions in javascript
  function avg(a,b){
   return (a+b)/2;
  }

  c1 = avg(12,43);
  c2 = avg(4,8);
 // console.log(c1,c2);

  // Conditional Statement 
  /*var age = 44;
  // Single if statement
  if(age>18){
   console.log("You can drink rasna water .")
  }
  // if - else statement
  if(age>8){
   console.log("You are not a kid .");
  }else{
   console.log("you are a kid .");
  }
  // if - else if - else statement
  if(age>50){
   console.log("You are old .");
  }
  else if(age>30){
   console.log("You are adult .");
  }
  else if(age > 21){
   console.log("You are young");
  }
  else{
   console.log("You are kid .")
  }*/

  // Loops 
  var arr = [1,2,3,4,5,6,7];
  /*
  console.log(arr);
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
  */

  /*
  arr.forEach(function(element){
     console.log(element);
  }
)
*/

//const ac = 0;
//ac++;
//ac = ac +1;

let j=0;
/*
while(j<arr.length){
  console.log(arr[j]);
  j++;
}
*/
/*
do{
  console.log(arr[j]);
  j++;
}while(j<arr.length);
*/

// Break Statement
/*
for(var i=0; i<arr.length; i++){
  if(i==2){
    //break;
    continue;
  }
  console.log(arr[i]);
}
*/

// Array Methods
// let myArr = ["Fan","Camera",34,null,true];
// console.log(myArr.length);
//myArr.pop();
//myArr.push("harry");
//myArr.shift();
//myArr.unshift("harry");
//console.log(myArr.unshift("harry"));
/*
let newlen = myArr.unshift("harry");
console.log(newlen);
console.log(myArr);
console.log(myArr.toString());
*/

/*
let d = [43,12,87,44,85,322,256,1845];
d.sort();
console.log(d);
*/

// String methods in javascript
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Harry"));
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));s

// console.log(myLovelyString.slice(0,3));
// console.log(myLovelyString.slice(1,3));
d = myLovelyString.replace("Harry","Rohan");
//console.log(d);
d=d.replace("good","bad");
//console.log(d);

// Javascript date
/*
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
*/

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");

// let el = elemClass[0].innerHTML;
// console.log(el);

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('button');
//console.log(tn);
tn = document.getElementsByTagName('div');
//console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element) ----> removes an element
/*
document.location
document.title
document.URL
document.scripts
document.links
document.form
document.domain
document.images
*/

// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

function clicked(){
  console.log("The button was clicked .");
}

/*
window.onload = function(){
  console.log("The document was loaded .");
}
*/

//Events in javascript 
// firstContainer.addEventListener('click',function(){
//   console.log("Click on Container");
// })
// firstContainer.addEventListener('mouseover',function(){
//   console.log("Mouse on Container");
// })
// firstContainer.addEventListener('mouseout',function(){
//   console.log("Mouse out of container");
// })
// firstContainer.addEventListener('mouseup',function(){
//   console.log("Mouse up when clicked on Container");
// })
// firstContainer.addEventListener('mousedown',function(){
//   console.log("Mouse down when clicked on Container");
// })

// firstContainer.addEventListener('click',function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>";
//   console.log("Click on Container");
//  })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
//  firstContainer.addEventListener('mouseup',function(){
//    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//    console.log("Mouse up when clicked on Container");
//  })
//  firstContainer.addEventListener('mousedown',function(){
//    document.querySelectorAll('.container')[1].innerHTML ="<b> We have Clicked </b>";
//    console.log("Mouse down when clicked on Container");
//  })

// Arrow Functions
// function summ(a,b){
//   return a+b;
// }

summ = (a,b)=>{
  return a+b;
}

logKaro = ()=>{
  document.querySelectorAll('.container')[1].innerHTML ="<b> Set interval fired . </b>";
  console.log("I am your log");
}

// SetTimeout and Setinterval
 //clr=setTimeout(logKaro,5000);
 // clearTimeout(clr);
//clr=setInterval(logKaro,2000);
//clearInterval(clr);

// Note: use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout .

// JavaScript localStorage 
// localStorage.setItem('name','harry')
// localStorage
// localStorage.clear()
// localStorage.setItem('name','harry')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json
obj = {name:"harry",length:1, a:{this:'tha"t'}};
jso = JSON.stringify(obj);
//console.log(jso);

//typeof jso
// typeof obj

//console.log(typeof jso);
//console.log(typeof obj);

parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"tha\\"t"}}`);
console.log(parsed);

// Template literals - Backicks
a = 34;
console.log(`this is my ${a}`);