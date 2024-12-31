// An object is an instance which contains a set of key value pairs. Unlike primitive data
// types, objects can represent multiple or complex values and can change over their life
// time. The values can be scalar values or functions or even array of other objects.





var person={

    fisrtname:'tom',
    lastname:'sam',

    func:function(){return 'hello'}
}


console.log(person.fisrtname)

console.log(person.lastname)

console.log(person.func())



var foo='bar';
var baz={foo:foo};

console.log(baz.foo)



// Using a Function Constructor

function Car()
{
 this.make="Ford"
 this.model="F123"
}
var obj=new Car()
console.log(obj.make)
console.log(obj.model)




// Object.create.method

// Objects can also be created using the Object.create() method. It allows you to create
// the prototype for the object you want, without having to define a constructor function.



var roles={

    type:'admin',
    displaytype:function(){
        console.log(this.type)
    }
}

// Create new role type called super_role

var super_role=Object.create(roles);
super_role.displaytype();



// Create new role type called Guest


var guest_role=Object.create(roles);
guest_role.type='Guest';
guest_role.displaytype();





// The Object.assign() Function


// : Cloning an Object


var det={
    name:'tom',ID:'e101'
};

var copy=Object.assign({},det);

console.log(copy)

for(let val in copy){

    console.log([val])
}



// merging objects

var o1={a:10};
var o2={b:20};
var o3={c:30};

var obj=Object.assign(o1,o2,o3);

console.log(obj);
console.log(o1)





// Note: Unlike copying objects, when objects are merged, the larger object doesn’t maintain
// a new copy of the properties. Rather it holds the reference to the properties contained in
// the original objects. The following example explains this concept.

// var o1={a:10};
// var obj=Object.assign(o1);

// Object.a++;


// console.log("value of 'a' in themerged object after increment")

// console.log(obj.a);


// console.log("value of 'a' in the original object after increment ")

// console.log(o1.a);

var o1 = { a: 10 };
var obj = Object.assign(o1);  // obj points to o1

// Increment the 'a' property on the object
obj.a++;

// Output the values
console.log("Value of 'a' in the merged object after increment:");
console.log(obj.a);  // 11

console.log("Value of 'a' in the original object after increment:");
console.log(o1.a);  // 11



// // Deleting Properties


// var newobject;


// var myobj=newobject;
// myobj.a=5;
// myobj.b=12;
// delete myobj.a;

// console.log('a' in myobj)



// ComparingObjects



var val1={name:'tom'};
var val2={name:'tom'};

console.log(val1==val2)
console.log(val1===val2)