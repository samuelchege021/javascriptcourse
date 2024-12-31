


// Default parameters allow you to specify a default value for
//  a function parameter if no value or undefined is passed when the function is called.
//   This prevents undefined values from being used inside the function and provides a fallback mechanism.

function greet(name="stranger"){


    console.log(`hello,${name}!`);
}



greet();

greet("sam")

greet(undefined);
greet(null);



function multiply(a,b=2){


    return a*b



}

console.log(multiply(5));
console.log(multiply(5,3));


// note
// Default parameters usually appear after non-default ones. If you put them first, it can lead to confusion.

function example(x=10,y){

console.log(x,y);

}

example(undefined,5)





// Expressions as Default Values:



function add(a,b=a+1){

    return a +b
}


console.log(add(5));
 
  console.log(add(5,2)); // default not applied.




//   You can even pass functions as default values.


function fetchdata(callback=()=>console.log("no call back provided")){
callback();

}

fetchdata();

fetchdata(()=>console.log("data fetched"));




// Functions with Multiple Defaults


function calculateprice(price,tax=0.1,discount=2){


    return price+price*tax-discount
}


console.log(calculateprice(100))

console.log(calculateprice(100,0.2))