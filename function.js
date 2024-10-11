const { urlencoded } = require("body-parser")

function retst(){
    return "hello world"
}

var val=retst()
console.log(val)




function add(n1,n2){


    var sum=n1+n2
    console.log("the sumof the numbers is ",sum)
}

add(12,13)



// defaults functiwon



function add(a,b=1){

    return a+b;

}

console.log(add(4))




function addtwonumbers(n1,n2=10){



    console.log("the fisrt parameter is ",n1)
    console.log ("the second parm is ",n2)


    return n1+n2
}

console.log("case 1 sum",addtwonumbers(20))
console.log("case 2 sum ",addtwonumbers(2,3))
console.log("case 3 sum ",addtwonumbers())
console.log("case 4 sum ",addtwonumbers*(1,null))
console.log("case 5 sum",addtwonumbers(3,undefined))






// default



let default_val=30



function addtwo(n1,n2=default_val){


    console.log("the first param is ",n1)
    console.log("the second param is ",n2)

    return n1+n2
}

console.log("case 1",addtwo(1))
console.log("case two",addtwo(2,4))




// rest parameters

function fun1(...params){
     console.log(params.length)
}


fun1();
fun1(5);
fun1(1,2,3,5)


// anonymous function

// Functions that are not bound to an identifier (function name) are called as anonymous
// functions. These functions are dynamically declared at runtime. Anonymous functions can
// accept inputs and return outputs, just as standard functions do. An anonymous function
// is usually not accessible after its initial creation.
// Variables can be assigned an anonymous function. Such an expression is called a function
// expression.
// var res=function( [arguments] ) { ... }

var f=function(){return "hello"}

console.log(f())



var campus=function()
{return  "catholic university" }



var func=function(x,y) {return x*y};
function product(){
    var result;
    result=func(10,20)

    console.log("the product:"+result)
}


product()




var x=function (x,y){ return x/y};


function division(){

var result2;
 result2=x(10,2)

console.log("the division is ",result2)

}

division()



// function constructor

// The function statement is not the only way to define a new function; you can define your
// function dynamically using Function() constructor along with the new operator.
// Following is the syntax to create a function using Function() constructor along with the
// new operator.
// var variablename = new Function(Arg1, Arg2..., "Function Body");


var func=new Function('x','y',"return x*y;");

function product(){
    var result;
    result=func(10,20);

    console.log("the product :"+result)
}


product()




var sum=new Function('x','y','return x+y');


function addition(){

var outcome;

outcome=sum(3,4)
console.log("the sum of the two numbers is "+outcome)


}
addition()



// lamda function


// Lambda Function - Anatomy
// There are 3 parts to a Lambda function:
//  Parameters: A function may optionally have parameters.
//  The fat arrow notation/lambda notation (=>): It is also called as the goes to
// operator.
//  Statements: Represents the function’s instruction set



// ( [param1, parma2,…param n] )=>statement;



var foo=(x)=>10+x



console.log(foo(10))



var tee=(y)=>20+y

console.log((10))


// lamda statement

// ( [param1, parma2,…param n] )=>
// {
//  //code block
// }


var msg=()=>
{


    console.log("function message is invoked")
}

// The function’s reference is returned and stored in the variable msg.

msg()


// Optional braces for a single statement. Empty parentheses for no parameter.




var disp=()=>console.log("hello world")

disp()



// ImmediatelyInvoked Function Expression
// Immediately Invoked Function Expressions (IIFEs) can be used to avoid variable hoisting
// from within blocks. It allows public access to methods while retaining privacy for variables
// defined within the function. This pattern is called as a self-executing anonymous function


var main=function(){

var loop=function(){



    for(var x=0;x<5;x++){

console.log(x)


    }

}();
 console.log("xa can not acccesed outiside trhe block"+x);

}

main()




// 222

var main=function(){

    (function(){


        for(var x=0;x<5;x++){



            console.log(x);
        }
    }
    
    
    
    
    )

    ();
    console.log("x cannot be accesed outiside the block scope x value"+x);
}

main();





// Example: Arrow function in ES6
// The following example defines two function expressions add and isEven using arrow
// function:

const add1=(n1,n2)=>n1+n2
console.log(add1(10,20))



const isEven=(n1)=>{

    if(n1%2==0)
    return true;
else
return false;

}


console.log(isEven(10))





const names=['tutorialpoint','mohatshsim','bharagavi','raja']


names.map((element,index)=>{
console.log("inside arrow function");


console.log('index is'+index+'elemnt  value is '+ element)




})





// Example: window.setTimeout() and arrow function
// The following example passes an arrow function as a parameter to the
// predefined setTimeout() function. The setTimeout() function will callback the arrow
// function after 1 second.



setTimeout(()=>{


    console.log('learning  AT TUTORWIALPOINT IS FUN')

},1000)


// Arrow function and “this”



function student(rollno,fisrtname,lastname){


    this.rollno=rollno,
    this.fisrtname=fisrtname;
    this.lastname=lastname;

this.fullnameusinganonymous=function(){


setTimeout(function(){

//creates a new instance of this ,hides outer scope of this



console.log(this,fisrtname+""+this.lastname)

},2000)






}




this.fullNameUsingArrow=function(){

setTimeout(()=>{


    //uses this instance of outer scope






    console.log(this,fisrtname+""+this.lastname)





},3000)





}


}

const s1= new student(101,'muhammed','mohtashim')


s1.fullnameusinganonymous();
s1.fullNameUsingArrow();


