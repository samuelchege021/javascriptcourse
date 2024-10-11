// use strict restruicts  a variable access in which is decleared.The var keyword assigns the function scope to the variable.let keyword allowa the script to restrict accessti the neasrest 



function test(){

var num=200

console.log("the value of num in test()"+num)
{

    console.log("inner block begins")

    let num=100

    console.log("value of inner block "+num)
}



}
test()


// ket as nmultiple block


let count=100

for(let count=1;count<=10;count++){

console.log("count value inside loopis ",count)


// outiside for loop brackets,count value is 100

}
 console.log("count value outiside the block",count);


 if(count==100){
    let count=50
    console.log("count inside the if block is",count);
 }