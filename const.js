// The const declaration creates a read-only reference to a value. It does not mean the
// value it holds is immutable, just that the variable identifier cannot be reassigned.
// Constants are block-scoped, much like variables defined using the let statement. The value
// of a constant cannot change through re-assignment, and it can't be re-declared.
// The following rules hold true for a variable declared using the const keyword:
//  Constants cannot be reassigned a value.
//  A constant cannot be re-declared.
//  A constant requires an initializer. This means constants must be initialized during
// its declaratio



const x=18
// x=12cant declared
console.log(x)




let income=10000
const interest_rate=0.08
 income+=5000   //muatable
 console.log("change income ",income)
//  interest_rate+=0.02
 console.log("change rate is ",interest_rate)




//  const and arrays

const depty=[10,20,40,89]
depty.push(100)


console.log(depty)

const emp_ids=[10001,1003,10004,10004]

emp_ids=[2000,20003,50004,4444]

console.log(emp_ids)