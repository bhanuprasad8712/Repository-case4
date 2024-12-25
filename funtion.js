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