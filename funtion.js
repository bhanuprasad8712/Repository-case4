console.log("testing liking of html");
// testing functions
function formula(){
    console.log("formula");
}
formula()


function drive(a,b){
    console.log(a+b)
}
drive(21,7)

 

function one(){
    return "test"
}
console.log(one())


function car(a,b){
 return a+b
}
console.log(car(29,8))
//anonymious function
let a=function(){
    console.log("variable function testig")
}
 a()
 // arrow function
 let d=()=>{
 console.log("arrow function")
 }
 d()

 //function expression
 //animinious function
 //arrow function
 //
 function f1(){

 }

 let c =function(){

 }
 c()

 let h=()=>{

 }
 //closures in java script
 function outer(){
    let a=10;
    var v=9;
    function inner(){
        console.log(a)
        console.log(v )
    }
    inner()
 }
 outer()
 //there are three ways of creating a string 
 //string literal 
 let ab="rajesh"
 console.log(ab);
 //string object creation
 let str=new String('rahul')
 console.log(str)
 //string interpolation
 let ac ="ramesh";
 console.log(`the ${ac}`);
 
 //creating an array can be done in two ways literal way
 let arr1=["ravi","rajesh","rahul","rithik"]
 console.log(arr1)
 //string creation in object creation way
 let arr2=new Array(4);
 arr2[1]="sai";
 arr2[2]="shiva";
 arr2[3]="sohil";
 arr2[0]="sachin";
 console.log(arr2)
 //creation objects they can be created in two ways literal way and object way
 let details={
   name:"rakesh",
   age:24,
   domine:"cse",
   native:"hyderabad"
 }

 console.log(details.name)
 //crating object using new keyword
 let resouce= new Object()
 resouce.name="youtube",
 resouce.implemnt="lap"
 
 console.log(resouce.name)
 
 //dealing with date and time objects
 let date=new Date()
 console.log(date.getHours())
 console.log(date.getMinutes())
 console.log(date.getSeconds( ))

 console.log(date.setDate(21))
 console.log(date.setTime(3))

 //dealing with for in and for of loops
 let sample="john"

 let sample1={
    age:27,
    add:"kerala",
    subject:"dsa"
 }
 let sample2=["petter",27,"github"]

//trying to work with for inloop
for( let val1 in sample){
console.log(val1)
}
for( let val1 in sample1){
console.log(val1)
}
for( let val1 in sample2){
console.log(val1)
}
//now testing with for of loop
let company="google"

let company2={
    name:"facebook",
    platform:"social media",
    reach:"millions"
}

let platform=["instagram","facebook","twitter"]

for(let checks of company){
   console.log(checks)
}
//??not objrect is not itterable uncaught type error
// for(let checks of company2){
//    console.log(checks)
// }
for(let checks of platform){
   console.log(checks)
}
//dealing with spread operatior(...) and rest paramenter
let banks=["CBI","SBI","CANARA"]
let account=["current","SAVING","ZERO ACCOUTS"]
var obi1={
    bank:"cbi",
    branch:"chada",
    account:"savings"
}
var obi2={
    bank:"sbi",
    branch:"hyd",
    account:"savings"
}
let bankaccount=[...banks,...account]
console.log(bankaccount)
let obj={banks}
console.log(obj)
//Arrow function there are two types in arrow functions
// implict arrow funtion and explict arrow funcuons
//explict arrow function
let ak =()=>{
    return "let's test the mplict";
}
console.log(ak())
 