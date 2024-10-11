

function student(rollno,fisrtname,lastname){


    this.rollno=rollno,
    this.fisrtname=fisrtname;
    this.lastname=lastname;

this.fullnameusinganonymous=function(){


setTimeout(function(){

//creates a new instance of this ,hides outer scope of this



// console.log(this,fisrtname+""+this.lastname)

},2000)






}




this.fullNameUsingArrow=function(){

setTimeout(()=>{


    //uses this instance of outer scope






    // console.log(this,fisrtname+""+this.lastname)





},3000)





}


}

const s1= new student(101,'muhammed','mohtashim')


s1.fullnameusinganonymous();
s1.fullNameUsingArrow();





let multiply=(a,b)=>{return a*b}




console.log(multiply(2,3))





const string=()=>"geeeks for geeks"

console.log(string)







let array=['sam','mary','john'];


s=array.map(user=>user.length);
console.log(s)



function Reqularfunction(){

this.value=42;




setTimeout(function(){



console.log("regular function:",this.value)


},100);





setTimeout(()=>{


console.log('arrfow functiobn:',this.value);




},200);

}



const instance=new Reqularfunction();