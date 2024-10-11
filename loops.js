// forloop

var num=5;
var factorial=1;

for(let i=num;i>=1;i--){
    factorial*=i;


}

// console.log(factorial);



for (let temp,i=0,j=1;j<30;temp=i,i=j,j=i+temp)


// console.log(j);






for(let j=2;j<30;j++){
let isprime=true;



for (let i=2;i<=Math.sqrt(j);i++){


    if(j%i===0){

        isprime=false
        break;
    }
}

if (isprime){
    console.log(j);
}


}

