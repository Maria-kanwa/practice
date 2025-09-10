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
// 1. Assignment operators
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
//let x = "hello ";
//x+= 5; //output will be hello 5
// x = x + "world"//output will be hello world
//alert(x); // output will be hello world because 5 is converted to string and concatenated with hello
// let x = "hello ";
// let y = 5;
// let z = x + y; // concatenation
// alert(z); // output will be hello 5
//***************************************** */

// ??= operator in js


// The ??= Operator
// The Nullish coalescing assignment operator is used between two values.

// If the first value is undefined or null, the second value is assigned.

// Nullish Coalescing Assignment Examples
// let x;
// x ??= 10;
// document.write(x)
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
// let x = "100";
// let y = "10";
// let z = x / y;   
// document.write(z); // output will be 10 kyun k ye dono string hain aur agar string mn number ho to wo number ko number mn convert kr k operation krta hai

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

// function in js
// function myfirstfunction(){
//     alert("hello world")
// }
// myfirstfunction();

// function greet(a,b){
//   return ("hello " + a + " " + b  + "<br>");
// }
// document.write(greet("Ali", "Sara"));
// document.write(greet("Ali", "Azmat"));
// document.write(greet("Ali", "Hina"));//function ka ye e faida hai k hum bar bar code na likh k function ko call krwa k use kr sakty hain different names ko

// function with parameter
// function addNumbers(a, b) {
//     let sum = a + b;
//     return sum;   // result wapas bhej raha hai
// }

// document.write(addNumbers(5, 10))  // function call
  
//   function addnumber(a , b){
//     let sum = a + b;
//     return sum; // agar return k bad kuch nhi likha to output undefined hogaa
   
//   }
// document.write(addnumber(5, 10)) // output will be 15

//*********************************************** */

//  function addnumber2(a , b){
//   let result = a + b;
// }

//    document.write(addnumber2(4,7)) // output will be undefined kyun k function mn return nhi kiya




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

// document.write(comparison()) // output will be b is greater than a
// function table(){
//     let num = 2;
//     let output = "";
//     for(let i = 0; i <= 10; i++){
       
//        output += num + " * " + i + " = " + num * i + "<br>"; //agr hum yhan = k sath plus na lgain to wo pehly wali value ko rewrite kr k agli value likh dy ga agr +lgain gy to pehly wali b sath
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
//   document.getElementById("demo").style.backgroundColor = 'red';
//   document.getElementById("demo").innerHTML = Date();
  // function ka name aur onclick mn jo likha hai ye dono must same hony chahiye . onclick k bad hum koi b nsme rakh sakty hain
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
//  document.write(fruits); // output will be apple,banana,mango,orange
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

// looping in array elements
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

// let t = "I am "Maria"";//wrong method
// alert(t); // output will be error
// let t = "I am 'Maria'";//right method
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



//   alert(text) 

  // let x = 'Maria';
  // let y = 'Knawal';
  // let name =   `my name is ${x}, ${y}`;
  
  // alert(name);


  // ********************************

  // loops in js
  // for (let i = 0 ; i<=5; i++){
  //   document.write(i + "<br>")
  // }

  // let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  // let text = "";
  // for ( let i = 0; i<cars.length; i++){
  //   text+= cars[i] + "<br>";// is mn text mn pehly empty string hai += ka mtlb hai k cars[i] mtlb pehly index pr jo car hai wo concatenate ho jy 
    // jayein gy text mn aur phir agly index pr jo car hai wo b concatenate ho jayein gy
  // }
  // document.write(text);

//   let text = "";

// for (let i = 0; i <5; i++) {
//   text += "The number is " + i + "<br>";
// }
// document.write(text);


// let result = " "

// for (let i = 5; i < 10; i++) {
//   result += "the starts from" + i +"<br>"
// }
// document.write(result);

// let text = "";
// let fruits = ["Apple", "Banana", "Mango"];

// for (let i in fruits) { //mtlb fruits mn jitny b index hain unko i sy present kiya hai
//   text += "Index " + i + " = " + fruits[i] + "<br>";
//}// in loop k ander iteration ka kaam krta hai agr hum doosra loop na use krein to hum in ka use kr sakty hain
//document.write(text)

// output will be Index 0 = Apple Index 1 = Banana Index 2 = Mango

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
//  for (let j in myobj.cars[i].models){// yhan py cars[i] is liye likha hai iska mtlb hai k jitni cars hain un k name print hon
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


// ******************************************

// while loop in js
// let i = 0;
// while (i<=5) //while loop mn pehly condition hot hai phr bat mn increment hota hai
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


// *******************************************

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

// **********************************************

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
// fruits.forEach(function(f,index){
//   document.write( "index" + index +":" + fruits);
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

// document.write(Math.log2(8)) //log ki property hai k log k sath nichy kuch b ho wo power mn chla jata hai

// ***********************************************
//boolean in js
// let x = 100
// // let x = 5;
// // document.write(x==6);
// document.write(Boolean(x)) // every number is true
// let x = false;
// document.write(typeof(x)) 
// let y = new Boolean(false) 
// document.write(typeof(y))

// **************************************

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


//*************************************************************** *
//switch statment in js

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
//    document.write(i)
 
// }

// break statment in js

// let text = '';
// for(let i =0;i<=5;i++){
//   if(i===3){break;}
//   text+= i;
// }
// document.write(text) //break statment ka mtlb hota hai jhan condition match kr jy wahin code ko terminate krdo

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
//   break list; //mtlb k list ko break krdo
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

//eroors in js

// try {
//   let x = y + 5; // y defined nahi hai → error
//   document.write(x);
// } catch (err) {
//   document.write(err); //output aay gi y is not defined
// }

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
//   document.write(num.toUpperCase()); // num number hai, toUpperCase string met[[[[hod hai
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
// let z =  eval(x + "+" + y);//eval string ko number mn convert kr k usko calculate krta hai
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
//*******************************************

//string extracting methods in js

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// document.write(char)//index 0 py 'h' hai is liye output mn h aay ga

// let text = "HELLO WORLD";
// let code = text.codePointAt(0);
// document.write(code)
// let text = "HELLO WORLD";
// let code = text.charCodeAt(0);
// document.write(code)

// let name = "Maria"
// document.write(name.at(3))

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" " , text2);//" " space k liye hai
// document.write(text3)
 //slice string in js
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// document.write(part)//indexing end sy start hogi yani right taraf mn 6 sy start ho kr 11 tk last wala index include nhi hota

// let text = "hello world";
// let part = text.slice(4); //yani indexing 4 sy start ho kr aagy ki taraf jy
// document.write(part)
//substr b same slice ki trah kam krta hai

// indexof and last indexof in js
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// document.write(index)
// let text = "Please locate where 'locate' occurs!";
// let l = text.lastIndexOf("locate", 15);
// document.write(l)//output 15 sy start hogi aur 21 tk jy gi is liye output 7 aaygi
// let text = "Please locate where 'locate' occurs!";
// let m=text.search("locate");
// document.write(m)//iski output mn search kr k btay ga k 7 ka index kya hai

// let text = "Please locate where 'locate' occurs!";
// let n = text.search(/locate/);//hum is trah sy b likh sakty hain aur comas k ander b
// document.write(n)

//to exponential method in js

// let num = 9.767
// document.write(num.toExponential(2))

// let num = 9876;
// document.write(num.toExponential(2))

// let num = 9.767;
//  document.write(num.toExponential(6))

//to fixed method in js

// let x = 9.656;
// document.writeln(x.toFixed(0));

//to precision in js

//  let x = 9.656;
// document.write(x.toPrecision(2)); //round off kr k sirf 2 values return kry ga jesy 9.7


// document.write(x.toPrecision());//mtlb k significance aur decimal ki fixed value return kry ga
//************************************************** */

// let x = 123;
// document.write(x.valueOf());//return thr value stored in variable
//****************************************************************** */
//number method in js
// let x = true;
// document.write(Number(x));//true ki value 1 return krta hai
// let x = false;
// document.write(Number(x));//false ki value 0 return krta hai

// let x = "hello";
// document.write(Number(x))//iski output mn NaN ay ga kyun k hello aik string hai number ni hai
// let x = true;
// document.write(Number(x))//iski output 1 aay gi aur false ki value ye 0 deta hai
//parse float in js
// let x = "10years"; //ye sirf pehly number ko read krta hai baqi ko ignore krta hai
// document.write(parseFloat(x))
// let x = 56.7;
// document.write(parseFloat(x))//tb tk output decimal mn aay gi jb tk decimal k baf number ho na k string

// let x = "7.y" ;
// document.write(parseFloat(x))//iski output hogi bs 7
// let x = "7. 7" ;
// document.write(parseFloat(x))// iski output b 7 hogi kyun k space ko b ignore krta hai is liye ye bs pehly waly ko remove krta hai
// let x = "hello7" ;
// document.write(parseFloat(x))//iski output hogi NaN kyun k ye start he number sy ni ho rha

// let x = 10;
// document.write(Number.isInteger(x))
// let x = 234;
// document.write(Number.isFinite(x))//output is true because 234 is finite number

// let x = Infinity;
// document.write(Number.isFinite(x))//output id false because infinity is not finite similarly for undefined null
// let num= 3345
// document.write(Number.isNaN(num))//ye false return kry ga kyun k 3345is a number
// let x = "hello"
// document.write(Number.isNaN(x))

// let x = 7.7
// document.write(Number.parseInt(x))//ye same parsefloat ki trah kaam krta hai lekin ye decimal k bad wali value nhi deta

// let x = 898;
// document.write(Number.EPSILON(x))//this is the smallest difference between 1 and 1
// let x='';
// document.write(Number.MAX_VALUE(x))
//let x = 99999999999999999999999999n //isk sath agr n lgain gy to typeof krny pr ye btay ga k iski type bigint hai
// let big = BigInt(x)
// let type = typeof(x)
// document.write(big)

// let d = new Date("2021-10-8")
// d2 = d.getFullYear();
// document.write(d2)

// const d = new Date();
// document.write(d.getTime())

//js set dates
// let d = new Date("2025,23,1")
//  d.setFullYear(2020);
// document.write(d)

// const d = new Date("january 01,2025");//current date ko set kry ga aur us mn 50 din add kr k output dy dy ga
// d.setDate(d.getDate()+50)
// document.write(d)
// let d = new Date();
// d.setHours(23)//ye 23 hours ko add krdy ga
// document.write(d)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// document.write(fruits.includes("peach"))

// let numbers = [23, 34, 23, 12, 34, 456];

// let result = numbers.find(num => num > 18); // arrow function

// document.write(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// document.write(fruits)
// //************************************************* 
// array iterstion in js
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.write(fruits.sort());//sort the array alphabetically
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  document.write(fruits.reverse())//reverse the array but not sort that


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// document.write(sorted)

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();
// document.write(reversed)//similar to reverse but creates the new array
//********************************************************** *
//numeric sort in js
// let points = [10,3,68,45,34]
// document.write(points + "<br>")
// points.sort(function(a,b)
// {
//   return a-b});//a-b sy pta chl jy ga k hum array ko ascending order mn arrange kr rhy hain agr hum array ko b-a krein to mtlb k hum isko descendig order mn sort kr rhy hain
// document.write(points)

//alphabetical sorting
// const l = [100, 25, 5, 10]
// sort = l.sort()
// document.write(sort)

//******************************************************** */

//function to sort alphabetically and numerically
// let points = [ 65,2,5,8,23,21,34]
// document.getElementById("demo").innerHTML=points;

//  function firstfunction(){
//   points.sort();
//   document.getElementById("demo").innerHTML = points
// }
//  function secondfunction(){
//   points.sort(function(a,b){
//     return(a-b)
//   });
//   document.getElementById("demo").innerHTML = points;
// }

//sort the elements in random order
// const points = [40, 100, 1, 5, 25, 10];
//  document.getElementById("demo1").innerHTML = points;  


// function myfunction() {
//   points.sort(function(){return 0.5 - Math.random()});//yhan py function is liye likha hai k jo function k ander amal hai wo perform ho jo array declare ki hai
//   document.getElementById("demo1").innerHTML = points;
//}


    // let i = 4;
    // for (let x = 0; x < 10; x++) {
    //   document.write(Math.floor(Math.random() * i) + "<br>");//4 will not be included
    // }


// let i = 4;
// for (let x = 0; x < 10; x++) {
//   document.write(Math.floor(Math.random() * (i+1)));//4 will be included
// }

//******************************************************** */
//math.min in an array

// const points = [40, 100, 1, 5, 25, 10];
// const minValue = Math.min.apply(null, points);
// document.write(minValue);

// const points = [40, 100, 1, 5, 25, 10];
// const minValue = Math.max.apply(null, points);
// document.write(minValue);//output will be 100

// const points = [40, 100, 0, 5, 25, 10];
// document.getElementById("demo").innerHTML = myArrayMin(points);

// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {//-- means k indexing last sy start ho
//     if (arr[len] < min) {//arr[len] means k current index pr jo value hai wo min sy choti hai to min mn wo value ajay gi
//       min = arr[len];
//     }
//   }
//   return min;
// }


//for each function in an array

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
  
// }

// const fruits = ["apple", "banana", "cherry"];

// const upperFruits = fruits.map(function(value) {
//   return value.toUpperCase();
// });

// document.write(upperFruits);

// const arr1 = [1, 2, 3];
// const result1 = arr1.map(x => [x, x * 2]);

// document.write(result1);

// const arr = [1, 2, 3];
// const result = arr.flatMap(x => [x, x * 2]);//provide the result in the same array

// document.write(result);
// 
//*********************************************************** */
 //flat map in js


// // Sirf wo fruits jo 'a' se start hote hain
// const fruits = ["apple", "banana", "cherry", "mango"];

// const result = fruits.filter(fruit => fruit.startsWith("a"));

// document.write(result);

// const numbers = [10,3,5,7,32,23,45,34,23,56,78,98]
// const result = numbers.filter(num => num>10)
// document.write(result)

//******************************************************* */
// reduce function in js


// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce(function(acc, curr) {
//   return acc + curr;
// }, 0); // initial value is 0 for addition and 1 for multiplication

// document.write(total); // 👉 100


// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce(function(acc, curr) {
//   return acc * curr;
// }, 1); // initial value is 0 for addition and 1 for multiplication

// document.write(total);

// const numbers = [10, 20, 30];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// document.write(sum); // 60

// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce(function(acc, curr) {
//   return acc + curr;
// }, 0);

// document.write("With initial value: " + total);

// const numbers = [5, 12, 8, 130, 44];

// const max = numbers.reduce(function(acc, curr) {
//   return (curr > acc) ? curr : acc;
// });

// document.write("Maximum number is: " + max);


//***************************************************** */

//reduce can also accept intial value like 100

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction, 100);

// function myFunction(total, value) {
//   return total + value;
// }
// document.write(sum)
// const words = ["I", "love", "JavaScript"];

// const sentence = words.reduce((acc, curr) => acc + " " + curr);

// document.write(sentence);

//********************************* */

//Reduce right in js

// const arr = ["a", "b", "c"];
// const right = arr.reduceRight((acc, curr) => acc + curr);
// document.write("reduceRight: " + right);

//**************************************** */
//every function in js

// const ages = [19, 22, 25, 30];

// const allAdults = ages.every(function(age) {
//   return age >= 18;
// });

// document.write("Are all adults? " + allAdults);


//************************************************* */

//every function in js
// const numbers = [2, 5, 7, 9];

// const allPositive = numbers.every(function(num) {
//   return num > 0;
// });

// document.write("Are all numbers positive? " + allPositive);

//********************************************************** */
// const ages = [10, 15, 20, 25];

// const hasAdult = ages.some(function(age) {
//   return age >= 18;
// });

// document.write("Is there any adult? " + hasAdult);//returns true if some of the conditions are satisfied

//************************************************** */
// const str = "Hello";
// const letters = Array.from(str);

// document.write(letters);//array mn objects ko find krta hai jesy h,e,l,l o

// const numbers = Array.from({length: 5}, (x, i) => i + 1);

// document.write(numbers);
// const myNumbers = [1,2,3,4];
// const myArr = Array.from(myNumbers, (x) => x * 2);
// document.write(myArr);

//*********************************************************** */
 //js array key()
// const fruits = ["Apple", "Banana", "Mango"];

// const keys = fruits.keys();

// for (let key of keys) {
//   document.write("Key: " + key + "<br>");
// }

//********************************************** */

//js rest function

// function greet(firstPerson, ...others) {
//   document.write("Hello " + firstPerson + "!<br>");
//   document.write("And hello to: " + others.join(", "));
// }

// greet("Ali", "Sara", "Ahmed", "Hina");
// function multiply(multiplier,...numbers){
//   return numbers.map((num) => multiplier * num);
// }
// document.write(multiply(2,1,2,3) + "<br>");//pehly wala 2 multiplier hai aur 1 2 3 num hain

//***************************************************** */
// function in js

// syntax of function

// function function name(parameters){
//   return
// }
// function myfunction(a,b){
//   return a+b;
// }
// document.write(myfunction(5,4))
//new method for declaring an array

// const myFunction = new Function("a", "b", "return a * b");
// document.write(myFunction(4, 3));
//**************************************************** */
//self invoking function in js
// (function(name) {
//   document.write("Hello, " + name + "!");
// })("Maria");
// (function() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   document.write("Random Number: " + randomNum);
// })();

//********************************************* */

//function syntax error in js function
// let myFunction = (x, y) => { x * y } ;
// document.write(myFunction(3,4))//iski output hogi undefined kyun k single statement mn prenthesis use ni hoti
// let myFunction = (x, y) =>  x * y  ;
// document.write(myFunction(3,4))//iska output si hoga
//********************************************* */
//this in js
// const person = {
//   name: "Ali",
//   sayName: function() {
//     document.write("My name is " + this.name);
//   }
// };

// person.sayName(); // Output: My name is Ali

//********************************************** */
//function rest parameter
// function sum(...args) {
//   let sum = 0;
//   for (let arg of args)
//   sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// document.write(x);

//arguments object in js
// function show() {
//   document.write(arguments[0] + "<br>");
//   document.write(arguments[1] + "<br>");
//   document.write(arguments[2]);
// }

// show("Ali", 20, "Student");

//sum through loop

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   document.write("Sum = " + sum);
// }

// sumAll(10, 20, 30, 40);

// let x = myFunction();            // x will be the window object

// function myFunction() {
//   return this;
// }
// document.write(x)

// const myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this;
//   }
// }

//document.write(myObject.fullName());//output hoga [object object] kyun k this ny direct function ko target kiya hai agr hum likhty this.firstname phr output hota john
//************************************************** */
//Invoking a Function with the Constructor

// Function constructor banaya
// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
// }

// // New object banaya
// const myObj = new myFunction("John", "Doe");//jb yhan py new lgaty hain to js usko constructor smj leta hai

// // Object ke andar property access
// document.write(myObj.firstName);
// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
// }

// const car1 = new Car("Toyota", "Corolla");
// const car2 = new Car("Honda", "Civic");

// document.write(car1.brand);  // Toyota
// document.write("<br>");
// document.write(car2.model);  // Civic

//**************************************************** */
//this in js again

// let x = this;
// document.write(x)//output will be object window kyun k this global mn declared hai 

// "use strict";
// x = 10;   // ❌ error: x is not defined
// document.write(x);


//*************************************** */

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// // document.write se output dikhana
// document.write(person.fullName());
//************************************************ */
//js call method

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // call() ka use
// document.write(person.fullName.call(person1));  // John Doe
// document.write("<br>");
// document.write(person.fullName.call(person2));  // Mary Doe

//******************************************** */
//call method with arguments

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//   }
// };

// const person1 = {
//   firstName: "Mary",
//   lastName: "Smith"
// };

// document.write(person.fullName.call(person1, "Lahore", "Pakistan"));

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//   }
// };

// const person1 = {
//   firstName: "Mary",
//   lastName: "Smith"
// };

// // arguments array ki form me diye gaye
// document.write(person.fullName.apply(person1, ["Lahore", "Pakistan"]));//same as call but arguments are given in the form of array

//*********************************************** */
//method of taking input from the user

  // let name = prompt("Enter your name");  // user se naam lena
  //   document.write("Hello " + name);   

  //************************************************ */
//objects in js



//objects creation in js

// const parent = {
//   lastName: "Khan"
// };

// const child = Object.create(parent); // yahan Object.create use hua
// child.firstName = "Ali";

// document.write(child.firstName + " "); // Ali
// document.write(child.lastName);  // Khan (parent se inherit)

//************************************ */

// const animal = {
//   canEat: true
// };

// const dog = Object.create(animal);
// dog.canBark = true;

// document.write(dog.canBark + "<br>"); // true (apna property)
// document.write(dog.canEat);  // true (inherit from animal)
//*********************************************** */



// const car = {
//   drive: function() {
//     document.write("Car is driving...");
//   }
// };

// const bmw = Object.create(car);
// bmw.model = "BMW X5";

// bmw.drive();          // "Car is driving..." (inherit from car)
// document.write(bmw.model); // BMW X5

//************************************** */

// const parent ={
//   lastname : "Murtaza",
//   EyeColor : "black"
// };
// const child = Object.create(parent);
// child.firstname = "Ayesha";
// document.write(child.firstname + " " + child.lastname + " " + "and she has  "+ child.EyeColor + " eyes");

//*********************************** */
//object k ander function create krna
// const car = {
//   drive: function() {
//     document.write("Car is driving...");
//   }
// };
// car.drive();

//********************************** */

//obj.fromentries in js

// const entries = [
//   ["name", "Ali"],
//   ["age", 22],
//   ["city", "Lahore"]
// ];

// const obj = Object.fromEntries(entries);

// console.log(obj);

// Output: { name: "Ali", age: 22, city: "Lahore" }

//******************************************* */
//Object.assign in js

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// Object.assign(target, source);

// console.log(target); // { a: 1, b: 4, c: 5 }//b ki value overwrite kr jy gi 
//********************************************* */


// let person1 = {name: "Ali", age: 25,city: "Lahore"};
// let person2 = {name: "Sara", age: 22,city : "Karachi"};
// Object.assign(person1,person2)
// document.write(person1.name + " " + person1.age + " " + person1.city)

///*********************************************** */



// let obj1 = { name: "Ali", age: 25, city: "Lahore"

// };
// obj1.name = "Ahmed";
// console.log(obj1.name)

//*********************************************** */
//adding new property to an object
// const person = { name: "Ali" };

// // nayi property add karo
// person.age = 25;
// person.city = "Lahore";

// console.log(person);


// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.nationality = "English";
// }

// // Create 2 Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// document.write("My father is " + myFather.firstName+ " " +"and he is an"+ " "+  myFather.nationality);
// document.write("<br>");
// document.write("My mother is " + myMother.firstName + " " + "and she is an" + " " + myMother.nationality);

//**************************************************** */

//deleting a property from an object

// const person = { name: "Ali", age: 25, city: "Lahore" };

// delete person.age;

// console.log(person);

// const user = { name: "Sara", country: "Pakistan" };

// delete user["country"];

// console.log(user);

// const car = { brand: "BMW", model: "X5" };

// console.log(car.model); // "X5"

// delete car.model;

// console.log(car.model); // undefined kyun k model property delete ho chuki hai
//*********************************************** */
//nested object in js
// const person = {
//   name: "Ali",
//   age: 25,
//   address: {
//     city: "Lahore",
//     country: "Pakistan"
//   }
// };

// console.log(person.name);         // "Ali"
// console.log(person.address.city); // "Lahore"
// console.log(person.address.country); // "Pakistan"

// const student = {
//   id: 101,
//   name: "Sara",
//   marks: {
//     math: 90,
//     science: 85,
//     details: {
//       grade: "A",
//       passed: true
//     }
//   }
// };

// console.log(student.marks.math);        // 90
// console.log(student.marks.details.grade); // "A"
// console.log(student.marks.details.passed); // true
//**************************************************** */

//methods in js

// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   multiply: function(a, b) {
//     return a * b;
//   }
// };

// console.log(calculator.add(5, 3));      // 8
// console.log(calculator.multiply(4, 6)); // 24

//***************************************** */

//adding new methods in js

// const person = {
//   name: "Ali",
//   age: 25
// };

// // baad mein method add karna
// person.sayHello = function() {
//   return "Hello " + this.name;
// };

// console.log(person.sayHello()); // Hello Ali

//************************************************ */

//for in loop in js
// const person = { name: "Ali", age: 25, city: "Lahore" };

// for (let key in person) {
//   console.log(key + " : " + person[key]);//key will give the property name like(name) and person[key] will give the value of that property like(Ali
// }


// const student = { id: 101, name: "Sara", grade: "A" };

// let text = "";
// for (let key in student) {
//   text += key + " → " + student[key] + "<br>";
// }

// document.write(text);

//*************************************** */

//object.values in js
// const person = { name: "Ali", age: 25, city: "Lahore" };

// console.log(Object.values(person));//ye sari values ko array ki form mn de dy ga

//**************************************** */
//object.entries in js
// const person = { name: "Ali", age: 25, city: "Lahore" };

// console.log(Object.entries(person));

//agr hum loop k sath ye kam krein to
//  const person = { name: "Ali", age: 25, city: "Lahore" };

//  for(let pair of Object.entries(person)){//yani array k hr element pr ye kam ho
//   console.log(pair)
//  }

// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 55000,
//   inStock: true
// };

// const jsonString = JSON.stringify(product);

// console.log(jsonString);

//******************************************* */
//adding property as a constructor

// Constructor Function
// function Person(first, last, age, eye) {
//   this.firstName = first;//arguments sy aany wali properties hain inko normal properties kehty hain
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;

//   // yahan nayi property add ki
//   this.nationality = "Pakistani";//yhan py hum new property add kr rhy hain aur ye arguments sy ni li ja rhi isko extra property kehty hain
// }

// // Objects banaye using constructor
// const father = new Person("John", "Doe", 50, "blue");
// const mother = new Person("Sally", "Rally", 48, "green");

// // Display karna
// document.write("My father is " + father.firstName + " and his nationality is " + father.nationality + "<br>");
// document.write("My mother is " + mother.firstName + " and her nationality is " + mother.nationality);
//*********************************************** */

//adding methods and properties in a constructor
// Constructor Function
// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;

//   // Method (function inside constructor)
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   };

//   this.greet = function() {
//     return "Hello, my name is " + this.fullName();
//   };
// }

// // Create objects
// const father = new Person("John", "Doe", 50);
// const mother = new Person("Sally", "Rally", 48);

// // Access properties
// console.log(father.age);       // 50
// console.log(mother.firstName); // "Sally"

// // Access methods
// console.log(father.fullName()); // "John Doe"
// console.log(mother.greet());    // "Hello, my name is Sally Rally"
//*********************************************** */

// const person = {
//   name: "Ali",
//   sayHello: function() {
//     return "Hello " + this.name;
//   }
// };

// let greet = person.sayHello; //kyun k hum ny ab greet ko direct function k ander ni likha is liye ye undefined return kry ga iska nhll ye hai k agr hum is k sath bind lga dein to phr greet ko pta chl jy ga k person iobject ko call krna hai

// console.log(greet());   


//with bind

// const person = {
//   name: "Ali",
//   sayHello: function() {
//     return "Hello " + this.name;
//   }
// };
// let greet = person.sayHello.bind(person); //bind sy greet ko pta chl jy ga k isko person object ko call krna hai

//  console.log(greet()); // Hello Ali
//*************************************** */

// const person = {
//   name: "Ali",
//   sayHello: function() {
//     return "Hello " + this.name;
//   }
// };

// console.log(person.sayHello()); // Hello Ali

// //*********************************************** */

//function borrowing in js
// const shop = {
//   calculateTotal: function(price, quantity) {
//     return this.item + " total = " + (price * quantity);
//   }
// };

// const product1 = {
//   item: "Laptop"
// };

// const product2 = {
//   item: "Mobile"
// };

// // product1 borrow karega shop ka function
// console.log(shop.calculateTotal.call(product1, 55000, 2));  
// // Output: "Laptop total = 110000"

// // product2 borrow karega shop ka function
// console.log(shop.calculateTotal.call(product2, 30000, 3));  
// Output: "Mobile total = 90000"
//iska mtlb hai k product1 k pas apna calculate total function ni hai lekin wo shop k calculate total function ko borrow kr k use kr rha hai
//is liye isko kehty hain function borrowing
//*********************************************** */
//destructing in js
// object ka naam 'car' hai
// const car = { brand: "Toyota", model: "Corolla" };

// // destructuring karni hai, to yahan 'car' likhna hoga
// const { brand, model } = car;

// console.log(brand); // Toyota
// console.log(model); // Corolla

//************************************************ */
//object property aliasing
// const car1 = { brand: "Honda", model: "Civic" };

// // destructuring with alias
// const { brand: carBrand, model: carModel } = car1;
// console.log(carBrand); // Honda
// console.log(carModel); // Civic

//*************************************************** */
//string destructing in js
// const str = "Hello";
// const [a, b, c, d, e] = str;

// console.log(a); // H
// console.log(b); // e
// console.log(c); // l
// console.log(d); // l
// console.log(e); // o

//***************************************************** */
//array destructing in js
// const fruits = ["Apple", "Banana", "Mango"];

// const [first, second, third] = fruits;

// console.log(first);  // "Apple"
// console.log(second); // "Banana"
// console.log(third);  // "Mango"


//if we want to skip any element
// const numbers = [10, 20, 30, 40];

// const [a, , c] = numbers; // 20 skip ho gaya

// console.log(a); // 10
// console.log(c); // 30
//*********************************************** */


// Create an array and destruction through indexing
// const colors = ["Red", "Green", "Blue", "Yellow"];

// // Destructuring using object-style index
// const {0: firstColor, 2: thirdColor} = colors;

// // Display values in console
// console.log(firstColor + " & " + thirdColor);

//************************************************/
//rest property in arrat
// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const [first, second, ...others] = fruits;

// console.log(first);   // "Apple"
// console.log(second);  // "Banana"
// console.log(others);  // ["Mango", "Orange"]

//rest property in object

// const person = {
//   name: "Ali",
//   age: 25,
//   city: "Lahore",
//   country: "Pakistan"
// };

// const {name, ...details} = person;

// console.log(name);    // "Ali"
// console.log(details); // { age: 25, city: "Lahore", country: "Pakistan" }
//*********************************************** */

//Map destruction in js
// const myMap = new Map([
//   ["id", 101]
// ]);

// // Map ko array ki tarah destructure kar rahe hain
// const [[key, value]] = myMap;

// console.log(key);   // "id"
// console.log(value); // 101

// const fruitMap = new Map([
//   ["first", "Apple"],
//   ["second", "Banana"]
// ]);

// const [[k1, v1], [k2, v2]] = fruitMap;

// console.log(k1, v1); // "first Apple"
// console.log(k2, v2); // "second Banana"

//******************************************** */

//Swapping in js
// let a = 5;
// let b = 10;

// let temp = a;  // step 1: a ki value temp me store
// a = b;         // step 2: b ki value a me
// b = temp;      // step 3: temp (old a) ki value b me

// console.log(a, b); // 10 5
//**********************************************
//swapping through destructing
// let a = 5;
// let b = 10;
// [a, b] = [b, a]; // destructuring se swap

// console.log(a, b); // 10 5

// let first = "Ali";
// let second = "Sara";

// [first, second] = [second, first];

// console.log(first, second); // Sara Ali
//*********************************************** */

//jascript object prototypes

