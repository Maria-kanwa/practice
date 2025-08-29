// four methods of taking output in javascript
// 1. document.write(output you want to show in browser)
// 2. alert("output you want to show")    
// 3. console.log(output you want to show in console)
// 4.document.write("this is document write")

// 1st method try
// document.write("this is document write")

// 2nd method try
// console.log("this is console log")

// 3rd method try
// alert("this is alert box")
// document.write("this is document write") page pr output show hogaa
// let x = "Maria";
// let y = "Kanwal";
// document.write(x + " " + y); // output will be Maria Kanwal
// ***********************************

// there are three methods of declaring js variables
// 1. var
// 2. let
// 3. const
// ***********************************

// operators in js
// 1. Asignment operators
// let a = 10;
// let b = 20;
// // let z = a + b; assigned the value of a+b to z
// let a = 10;
// a += 5; // a = a + 5
// alert(a); // output will be 15
// alert(z);
// let text1 = "hello ";
// let text2 = "world";
// let result = text1 + text2; // strings ki concatenation hoti hai javascript mn
// alert(result); // output will be hello world
// let x = "hello ";
// x+= 5; // x = x + "world"
// alert(x); // output will be hello world because 5 is converted to string and concatenated with hello
// let x = "hello ";
// let y = 5;
// let z = x + y; // concatenation
// alert(z); // output will be hello 5
// ***********************************

// Arithmetic operators

// let b = 20;
// alert(a+b); // addition
// alert(a-b); // subtraction
// alert(a*b); // multiplication
// alert(b/a); // division
// alert(b%a); // modulus
// ***********************************

// increment and decrement
// let x = 5;
// x++;
// x--; decrement output will be 4
// ++x; pre increment output will be 6
// let z = x;
// alert(x);

// ***********************************
// exponentation operator
// let x = 5;
// let z = x**2;
// alert(z); output will be 25

// ***********************************
// const a = 10;
// const b = 20;
// const z = a + b;
// alert(z); // output will be 30

// ***********************************
// var name = "harry";
// var x = 5;
// alert(x);

// let y = 10;
// let z = y + 5;
// alert(z); // output will be 15
// ***********************************

// comparison operators
// let a = 5;
// let b = "5";
// let c = 10;

// alert(a==b); // output will be true because it only checks value not data type
// alert(a===b); // output will be false because it checks value and data type both
// alert(a!=c); // output will be true because a is not equal to c

// alert(a>c); // output will be false because a is not greater than c

// ***********************************
// Note that strings are compared alphabetically:


// let text1 = "20";
// let text2 = "5";
// let result = text1 > text2;
// alert(result); // output fals hogi kyun k text 1 b string hai aur text2 b string hai aur string ko alphabetically compare kiya jata hai kyun k 2 pehly hai 20 mn aur wo 5 sy chota hai  is liye output false hai

// ***********************************

// logical operators
// let a = true;
// let b = false;
// alert(!a); // output will be false because a is true and !a means not a so output will be false
// alert(a && b); // output will be false because a is true and b is false and && means both will be true and so output will be false
// alert(a || b); // output will be true because a is true and b is false and || means one will be true and so output will be true
// ***********************************

// function jn js
// function myfirstfunction(){
//     alert("hello world")
// }
// myfirstfunction();
// function addNumbers(a, b) {
//     let sum = a + b;
//     return sum;   // result wapas bhej raha hai
// }

// document.write(addNumbers(5, 10))  // function call
  // 15
//   function addnumber(a , b){
//     let sum = a + b;
//     return sum; // agar return k bad kuch nhi likha to output undefined hogaa
   
//   }
//   let result = addnumber(5, 10);
//   document.write(result) // output will be undefined kyun k function mn return nhi kiya


// function mysecondfunction(){
//     let a = 10;
//     let b = 20;
//     let sum = a + b;
//     return sum;
// } 
// document.write(mysecondfunction()) // output will be 30
// const output = mysecondfunction();
// let result = output + 10;
// alert(result) // output will be 40

// function addition(a , b){
//     let a = 5;
//     let b = 10;
//     let result = a + b;
//     return result; 
// }
// document.write(addition()) // iski output mn kuch b nhi aay ga kyun k hum java script mn function k ander b variable declare kr rhy hain aur parameters mn b dy rhy hain

// function addition(){
//     let a = 5;
//     let b = 10;
//     let result = a + b;
//     return result; 
// }
// document.write(addition()) // ab output 15 hogi kyn k hum ny ab bs aik jgah py variable ko declare kiya hai

// function comparison(){
//     let a = 23;
//     let b = 45;
//     if(a>b) {
//         return "a is greater than b"
//     } else {
//         return "b is greater than a"
//     }
// }
// // let result = comparison(); agr mn result ksi variable mn store kr k phr usy output krwaon to b bhi chale ga
// // alert(result)
// document.write(comparison()) // output will be b is greater than a
// function table(){
//     let num = 2;
//     let output = "";
//     for(let i = 0; i <= 10; i++){
//         let result = num * i;
//         output += num + " * " + i + " = " + result + "<br>"; //agr hum yhan = k sath plus na lgain to wo pehly wali value ko rewrite kr k agli value likh dy ga agr +lgain gy to pehly wali b sath
//         // e aay gi aur agli b print ho jygi
//     }
//     return output; // pura table ek string me return kar diya
// }
// document.write(table());
// output will be 2*0=0 2*1=2 2*2=4 2*3=6 2*4=8 2*5=10 2*6=12 2*7=14 2*8=16 2*9=18 2*10=20

    



// ***********************************

// objects in js
// let person = {

//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//     eyeColor: "blue"
// };
// document.write(person.firstName + " " + person.lastName); // output will be John Doe

// DOM in js
// document.getElementById("demo").innerHTML = "Hello World"; // output will be Hello World document.getElementById("demo").style.color = "red"; // text ka color red ho jay ga jesy hee page open hoga
// document.getElementById("Maria").value = "Hello Maria"; // input box mn Hello Maria show ho jay ga

// document.getElementById("hello").outerHTML = "<p>Hello World this is beautiful world</p>"; // output will be Hello World as heading 1

// let a1= document.getElementById("demo").innerHTML= "Hello  guys"; //ye output deta hai aur sath inner content ko change krta hai
// document.getElementById("demo2").outerHTML="<p>Hello world this is beautiful world you everseen</p>" // ye puri line ko change krta hai
// document.getElementById("demo").style.color="red" // ye text ka color change krta haidocument.getElementById("demo2").outerHTML = "<p id='demo2'>Hello world this is beautiful world you everseen</p>";

// events in js
// function displayDate() {
  // document.getElementById("demo").style.backgroundColor = 'red';
  // document.getElementById("demo").innerHTML = Date();
  //function ka name aur onclick mn jo likha hai ye dono must same hony chahiye . onclick k bad hum koi b nsme rakh sakty hain
  // phr us lehaz sy function ka name b change hoga
// }
// function changedtext() {
//   document.getElementById("demo").innerHTML = "Hello world this is beautiful world you everseen";
// }
// function changedtext() {
// document.getElementById("demo").innerHTML= "this is new text";

// }


// ***********************************
// array in js
//  let fruits = ["apple", "banana", "mango", "orange"];
//  document.write(fruits); // output will be mango
//  different datatypes can be stored in array
// let mixed=["apple" , 5 , 6.7 , true , null , undefined , 'A' , "banana"];
//   document.write(mixed); // output will be apple,5,6.7,true
// indexing in arrray
// let fruits = ["apple","bnana","mango","guava"];
// document.write(fruits[2]); // output will be mango
// setting cars at given Index
// const cars=[];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";
  // output will be Saab,Volvo,BMW

// document.write(cars.length); // output will be 3

// 
//  cars.push ("Toyota"); // push method array k end mn value add krta hai
// document.write(cars);
//  cars.pop(); // pop method array k end sy value remove krta hai
//  document.write(cars);
//  cars.shift(); // shift method array k start sy value remove krta hai
//  cars.unshift("Toyota"); // unshift method array k start mn value add krta hai
// document.write(cars);

// let names = { firstname:"maria" , secondname:"kanwal"
// };
// document.write(names.firstname)

// looping array elements
// let cars = ["abc" , "xyz" , "lkj", "poi" , "loi"]
// let collection = "";
// for (i=0; i<cars.length; i++){
//   collection+=  cars[i] + "<br>"
// }
// document.write(collection)
// const cars = new Array('a',"c",'t')
// document.write(cars)
// ***********************************

// elements finding in array
// let fruits = ["apple", "banana", "mango", "orange", "banana"];
//  let position = fruits.indexOf("banana"); // output will be 1 kyun k bnana ka index 1 hai
// document.write(position); // output will be 1
// const a = fruits.toString(); // array ko string mn convert krta hai aur comma sy separate krta hai
// document.write(a); // output will be apple,banana,mango,orange,banana

// const x = new Array(40);
// document.write(x) // ye 40 empty spaces print kry ga
// const x = new Array(40,45,56,57); //ab ye aik array return kry ga kyun k single argument ho braces mn to array ki length btata hai
// document.write(x)
// const x = [40]; //ab ye aik array print krway ga
// document.write(x)
// let x = ["mango" , "apple", "guava"];
// let d = new Date();
// document.write(typeof(x))

//how to recognize array
// let x = ["a","b","c"]
//  let d = new Date();
// document.write(Array.isArray(x)) // output hogi true kyun k ye aik array hee hai
//dcument.write(x instanceof Array);//true return kry ga kyun k  x aik array sy hee belong krta hai
// document.write(x instanceof Date); //false return kry ga kyun k ye date function sy belong nhi krta
//  document.write(d instanceof Date);// ab ye true return kry ga kyun k isk ander date hee likha hai


// let fruits =new Map ([

//  [ "apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ])
// document.write(fruits instanceof(Map))
// ****************************************

// string inside string

// let t = "I am "Maria"";
// alert(t); // output will be I am 'Maria'

// multiline string

//  let text = "Hello world! \nI am Maria.\nI am learning JavaScript.";
//  alert(text); // output will be Hello world! I am Maria. I am learning Java


// template string
// let text =

// `The quick
// brown fox
// jumps over
// the lazy dog`; // ye backtick hai jis ko use kr k hum multiline text likh sakty hain pehly humein \n lgana prta tha next line k liye k sath hota hai



  // alert(text) // output will be error

  // let x = 'Maria';
  // let y = 'Knawal';
  // let name =   `my name is ${x}, ${y}`;
  
  // alert(name);


  // ********************************

  // loops in js
  // for (let i = 0 ; i<=5; i++){
  //   document.write(i)
  // }

  // let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  // let text = "";
  // for ( let i = 0; i<cars.length; i++){
  //   text+= cars[i] + "<br>";// is mn text mn pehly empty string hai += ka mtlb hai k cars[i] mtlb pehly index pr jo car hai wo concatenate ho jy 
  // u 
  // }
  // document.write(text);

//   let text = "";

// for (let i = 0; i <5; i++) {
//   text += "The number is " + i + "<br>";
// }
// document.write(text);

// let i = 5;
// let result = " "

// for (i = 5; i < 10; i++) {
//   result += "the starts from" + i +"<br>"
// }
// document.write(result);

// let text = "";
// let fruits = ["Apple", "Banana", "Mango"];

// for (let i in fruits) {
//   text += "Index " + i + " = " + fruits[i] + "<br>";
// }// in loop k ander iteration ka kaam krta hai agr hum doosra loop na use krein to hum in ka use kr sakty hain
// document.write(text)
// let x = ''
// const  myobj={
//   cars :[
//      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// for(let i in myobj.cars){
//    x += myobj.cars[i].name + "<br>"
//  for (let j in myobj.cars[i].models){// yhan py cars[i] is liye likha hai iska mtlb hai
//  //  myobj.cars = Cars ka garage (andar Ford, BMW, Fiat rakhe hain).

// // myobj.cars[i] = ek specific car (maan lo BMW).

// // myobj.cars[i].models = us car ke andar ke versions/models (BMW ke "320", "X3", "X5").
//   x += myobj.cars[i].models[j] + "<br>"
//  }


// }
// document.write(x)

// with other code


// let x = "";

// const myobj = {
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// };

// // outer loop for cars
// for (let i = 0; i < myobj.cars.length; i++) {
//   x += "<h3>" + myobj.cars[i].name + "</h3>";

//   // inner loop for models
//   for (let j = 0; j < myobj.cars[i].models.length; j++) {
//     x += myobj.cars[i].models[j] + "<br>";
//   }
// }

// // ab sirf 1 dafa call
// document.write(x);




// while loop in js
// let i = 0;
// while (i<=5)
// {
//   document.write(i)
//   i++;
// }

// let cars = ['a','b','c','d','e','f',];
// let text = "";
// let i = 0;
// while(i < cars.length)
// {
//   text+= 'cars are \n' + cars[i] + "<br>"
  
//   i++;
// }
//  document.write(text)

// do while loop in js
// let i = 0;
// do {
//   document.write(i)
//   i++;
//  }while(i<5); //do while loop chahy false ho aik dfa zaroor chlta hai

// let table = " "
// for (let i = 0 ; i<=10 ; i++){
//   table+= "2 x  " + i +  "=" + i * 2 + "<br>"
// }
// document.write(table);

// for each function in java

// let arr = [ 1,2,3];
// arr.forEach(function(f){ //f ka mtlb arr k ander jo b data hai
//   document.write(f);
// })
// let fruits = ["mango","apple", "guava"];
// fruits.forEach(function(f,index){
//   if(index === 0){

//   document.write(f);}
// });


//  let fruits = ["mango","apple", "guava"];
// fruits.forEach(function(fruits,index){
//   document.write(index +":" + fruits);
// });
// let num = [9,8,76,5];
// let sum = 0;
// num.forEach(function(f){
//   sum = sum +f;
// });
// document.write(sum)

//*********************************
//  //date in js

// let d = new Date(2018); // agr sirf aik number ho to  miliseconds bn k jma ho jata h
// let d = new Date(19,11,24);// agr year mn aik ya 2 digit hon to 19xx aa jata hai jesy 1919
// let d = new Date(9,11,24);// iski output aay gi 1909
// document.write(d)
// let d = new Date()
// document.write(d.toISOString()); 
// document.write(d.toUTCString());
// document.write(d);

// math in js
// let d= Math.round(4.5)
// document.write(Math.E ) // gives Euler 
// document.write(Math.SQRT2 )//returns the square root of 2
// document.write(Math.LN2)// returns the natural logarithm of 2

//document.write(Math.ceil(4.9)) //ceil ka mtlb hai oper ki taraf round of krna jesy 4 ko 5 sy
// document.write(Math.ceil(-4.2)) // isko round off krny sy 4 hoga kyun k iska oper 4 hai
// document.write(Math.floor(-4.9)) // ye nichy ki taraf round off krta hai jesy -4 ka -5 hai isi trah 9 ka nichy wala 9.9 hai aur oper wala 10 hai is liye uska ans 9 aayga
// document.writeln(Math.trunc(5.9));// ye int value btata hai jesy 5 hai
//document.write(Math.sign(8.8)); //return krta hai 1 agr value positive ho to aur negative ho to -1 deta hai
// document.write(Math.pow(8, 2));//2 ki power mn likh dy ga 8 ko aur ans return kry ga
// document.write(Math.sqrt(64));// return kry ga 64 ka square root jo k 8 hai
// document.write(Math.abs(-4.7)) // positive value deta hai jesy 4.7
// let x = Math.sin(Math.PI/3);//pehly pi sy value lee hai jo k 90 hai phr uska sin liya hai jo 1 hogaa
// document.write(x)

// let x = Math.min(0, 150, 30, 20, -8, -200);//returns the lowest value
// let x = Math.max(0, 150, 30, 20, -8, -200);//returns tha hieghst value
// document.write(x)
// document.write(Math.random())//returns a random value between 1 and 0
// document.write(Math.log(1))//returns the log of 1

// document.write(Math.log2(8)) //lo9 ki property hai k log k sath nichy kuch b ho wo power mn chla jata hai
//boolean in js
// let x = 100
// // let x = 5;
// // document.write(x==6);
// document.write(Boolean(x)) // every number is true
// let x = false;
// document.write(typeof(x)) 
// let y = new Boolean(false) 
// document.write(typeof(y))

//js comparison
// function myfunction(){
//   let value1;
//   let age = Number(document.getElementById("age").value);
//   if(isNaN(age)){
//     value1 = "the number is not a value"
//   }
//   else{
//     value1 = (age<18) ?  "too young" : "old enough" ;
//   }
//   document.getElementById("demo").innerHTML = value1 + " to vote";
// }
// let day ="Monday";
// switch (day){
//   case 1:
//    day = "Monday"; 
//     case 2:
//       break;
//    day = "tuesday";
//     case 3:
      
//    day = "thursday"; 
//    break; 

// }
// document.write(day);
// let day = 9; // is mn ye hoga k jhan b number match kry ga case ka wo print ho jy ga
// // let dayname;
// switch (day){
//   case 1:
//     dayname = "Monday";
//     break;
//      case 2:
//     dayname = "Tuesday";
//     break;
    
//      case 3:
//     dayname = "Thursday";
//     break;
    
//      case 4:
//     dayname = "Fruiday";
//     break;
//     case 9:
//      dayname=  "undefined"
//       break;
    

 
// }
//    document.write(dayname);


// let text;
// switch (new Date().getDay()) {
//   default:
//     text = "Looking forward to the Weekend";
//     break;
//   case 6:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday";
// }
// document.write(text)


// let day = 5;
// let text;
// switch(day){
//   default:
//     text = " noth matched";
//     break;
//   case 1:
//     text = "Monday";
//     break;
//      case 2:
//     text = "Tuesday";
//     break;
//      case 3:
//     text = "wednesday";
//     break;
//      case 4:
//     text = "Thursday";
//     break;
//      case 6:
//     text = "Friday";
//     break;
     
    
  
// }
// document.write(text);

//without loop
// let cars = [ 'a','b','c','d','e','f'];
// let text = "";
// {

// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";}
// document.write(text)
// with loop

// let cars = [ 'a','b','c','d','e','f'];
//  let text = "";
//  for (let i = 0 ; i<cars.length;i++){
//   text+= cars[i] + "<br>";//mtlb i zero pr jo car hai wo print ho aur iski esy b likh sakty hainfor (let i = 0 ; i<6;i++)
//  }
//  document.write(text)

// let text='';
// for(let i=0;i<=5;i++){
//   text+= i;
//    document.writeln(i)
 
// }

// break statment in js

// let text = '';
// for(let i =0;i<=5;i++){
//   if(i===3){break;}
//   text+= i;
// }
// document.write(text)

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.write(day)

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";

// list: {
//   text += cars[0] + "<br>"; 
//   text += cars[1] + "<br>"; 
//   break list;
//   text += cars[2] + "<br>"; 
//   text += cars[3] + "<br>"; 
// }
// document.write(text)

// let text = "";

// for (let i = 1; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += i*10 + "<br>";
// }
// document.write(text) //it will skip the iteartion that is at 3 so 30 will not be printed



// let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { continue loop1; }//Loop 2 mean inner loop will terminate at 3 and outer loop will repeat its output for 4 times
//     text += i + "<br>";
//   }
// }
// document.write(text)

// let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { continue loop2; }//ye sirf 3 wali iteration ko skip kry ga
//     text += i;
//    }
// }
// document.write(text)

// try {
//   let x = y + 5; // y defined nahi hai → error
//   document.write(x);
// } catch (err) {
//   document.write(err); //output aay gi y is not defined
//}

// try {
//   let num = 10;
//   document.write(num.toUpperCase()); // num number hai, toUpperCase string method hai
// } catch (error) {
//   document.write(error.message);
// }

// try {
//   let num = 10;
//   document.write(num.toUpperCase()); // num number hai, toUpperCase string method hai
// } catch (error) {
//   document.write(error);//simple error likhny sy b output aa jy gi
//a}


// try {
//   let num = -5;
//   if(num < 0) throw "Number cannot be negative";//throw error generetae krwany ka aik tarkia hai ya jesy ab error aay ga number cannot be negative
//   //wo error jo hum khud show krwana chah rhy hon
// }
// catch(err) {
//   document.write("Error: " + err);  // page pe output
//}

//  try {
//   let num = 10;
//   document.write(num.toUpperCase()); // num number hai, toUpperCase string method hai
// } catch (error) {
//   document.write(error + "<br>");//simple error likhny sy b output aa jy gi
// }
// finally{
//   document.write("ye must chly ga")//ye wo statment hai jo catch aur try k sath lgti hai aur hamesha run hoti hai
// }

//eval error

// try{
//   eval("2 + ")

// }
// catch(e){
//   document.write(e)//eval ka glt use hony pr error aay ga
// }

// try {
// let x = "2";
// let y ="8";
// let z =  eval(x + "+" + y);
// document.write(z)
   
// } catch (error) {
//   document.write(error + "<br>");
// }
//range error
// let num =10;

// console.log(num.toExponential(200));
// let t1 = "good";
//  let t2 = "Morning";
//  t1+= t2;
//  document.write(t1) //concatenation with =+
// let x="9";
// let y = 5;
// let r = x*y;
// document.write(r)

// let big = 0123456789012345678901234567890;
// document.write(big)

// let x = null;
// document.write(typeof(x))

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// person = undefined;//ab ye undefined krdy ga kyun k value  undefined set ho gi hai
// document.write(person)
// let x = 16+6+"volvo";//agr number pehly declare ho to number add ho jy ga
// document.write(x)
// let x = "volvo" + 9 + 7; // lekin agr string pehly declare ho to agly numbers concatenate ho jaty hain
// document.write(x)

