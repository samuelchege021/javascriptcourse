//  Object: An object is a real-time representation of any entity. According to Grady
// Brooch, every object is said to have 3 features:
// o State: Described by the attributes of an object.
// o Behavior: Describes how the object will act.
// o Identity: A unique value that distinguishes an object from a set of similar
// such objects.
//  Class: A class in terms of OOP is a blueprint for creating objects. A class
// encapsulates data for the object.
//  Method: Methods facilitate communication between objects.
// Let us translate these Object-Oriented concepts to the ones in the real world. F






class polygon{


    constructor(height,width){


        this.h=height;
        this.w=width;
    }
test(){

console.log("the height of the polygon :",this.h)
console.log('the width of the polygon is ',this.w)



};






}

var polyobj= new polygon(10,20);

polyobj.test()




// setter

class student{

constructor(rno,f_name,s_name){

this.rno=rno
this.f_name=f_name
this.s_name=s_name

console.log("insie constructor")
}


set rollno(newRollno){
 console.log("inside setter")

this.rno=newRollno
}


}


let s1=new student(101,"sachin","samido")

console.log(s1)



s1.rollno=201

console.log(s1)



// getter

class studentt{

constructor(rno,fname,lname){

    this.rno=rno
    this.fname=fname
    this.lname=lname




    console.log("inside constructor")

}



get fullname(){


    console.log("inside getter")

return this.fname + "-"+this.lname

}


}

let s2=new studentt(101,'sachain',"tendbulular")

console.log(s2)


// The following example shows how to use an expression as a property name with a setter
// function.

let exprr="name";

let obbj={

    fname:"samidoo",
    set[exprr](v){this.fname=v;}
}


console.log(obbj.fname)

obbj.name="john";


console.log(obbj.fname)

// getter is called


console.log(s2.fullname)



let expr='name'
let obj={

get[expr](){return "samido"}


};
console.log(obj.name)