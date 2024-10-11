// logical opeerators.



// ES6 provides a new operator called the spread operator. The spread operator is
// represented by three dots “...” . The spread operator converts an array into individual
// array element





// spread operators
function addthree(a,b,c){


    return a+b+c
}


const arr=[10,20,30]

console.log("sum is :",addthree(...arr))
console.log("the sum is :",addthree(...[1,2,3]))




// /copy array using spread operator

let source_arr=[10,20,30]

let dest_arr=[...source_arr]


console.log(source_arr)






//concatenate two arrays



let arr1=[10,20,30]

let arr2=[40,50,60]

let arr3=[...arr1,...arr2]
console.log(arr3)




// Spread Operator and Object copy and concatenation
// The spread operator can be used to copy one object into another. It can also be used to
// concatenate two or more objects. This is shown in the example below:

let student1={fisrtname:'samuel',compnay:'cuea'}
let student2={...student1}

// copy
console.log(student2)

// cantecate


let student3={lastname:'muhhamed'}
let student4={...student1,...student3}


console.log(student4)







