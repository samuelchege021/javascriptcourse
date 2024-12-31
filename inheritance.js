// sttatic keyword


class staticmem{

static disp(){

    console.log("static function called")
}

}


staticmem.disp()


// class child_class_name extends parent_class_name


class shape{
constructor(a){

    this.area=a
}

}


class circle extends shape{

    disp(){


        console.log("area of the circle",this.area)
    }
}


var obj=new circle(225)
obj.disp()






class vehicle{
constructor(brand,year){


    this.brand=brand;
    this.year=year
}


describe(){


return `${this.brand} was made in ${this.year}`;


}


}






class car extends vehicle{

constructor(brand,year,doors){

super(brand,year);
this.doors=doors;
}

showDetails(){

    return `${this.describe()} it has ${this.doors} doors`;
}


}






const mycar=new car("toyota","2020",4);

console.log(mycar.showDetails());




class school{

constructor(units,students,lecturers){

this.units=units;
this.students=students
this.lecturers=lecturers
}

facaulty(){

return `${this.units} ${this.students} ${this.lecturers}`

}

}


class cuea extends school{

constructor(units,students,lecturers,admin){

    super(units,students,lecturers);
    this.admin=admin
}

describe(){


    return `the school ${this.admin} have a role to organise ${this.facaulty()}`
}




}


const mycuea=new cuea(7,"sam","madamkezia","cueaadmini")

console.log(mycuea.describe())







class animal{

speak(){

console.log("animal speakss");

}


}



class dog extends animal{


    speak(){


console.log("dog barks");

    }
}

const mydog=new dog();


mydog.speak();




class employee{
constructor(name){
this.name=name

}



work(){

console.log(  `${this.name} is working` );


}

}



class developer extends employee{

work(){

    super.work();
    console.log(`${this.name} is a developer`)
    
}


}



const mydeveloper=new developer("samuel")

mydeveloper.work()







class button{

constructor(name){

    this.name=name
}

submit(){
    console.log(`${this.name}the button submitted successfuly`)
}


}


class formbutton extends button{

submit(){

super.submit();
console.log("the form was submitted successfuly")


}

}

const myform=new formbutton("assignment")
myform.submit()


