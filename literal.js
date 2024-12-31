

// Template literals use backticks ( ` ` )  instead of quotes and provide some handy features, 

// like embedding variables or expressions with ${}.



let name="sam";
let age=28;


let message=`hello,my name is ${name},and I an ${age} years old`;


console.log(message)




// String Interpolation: You can insert variables or expressions directly into the string using ${}.


let a =5;
let b=10;

console.log(`the sum of a and b is ${a+b}`);




// Multi-line Strings: Template literals support multi-line strings without needing escape characters like \n.


let multiline=`this is libne 1
this is libne 2
this is line 3`;


console.log(multiline)





// Expression Embedding: You can embed any valid JavaScript expression within ${}.



let condition=true;


console.log(`the condition is ${condition?'true':'false'}`)