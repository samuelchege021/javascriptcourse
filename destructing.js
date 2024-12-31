// Destructuring in JavaScript allows you 
// to unpack values from arrays or properties from objects into distinct variables.
// It's a concise way to extract data, making your code cleaner and more readable.




const fruits=['apple','banana','orange'];

// destructure

const[fisrtfruit,secondfruit,thirdfruit]=fruits;


console.log(fisrtfruit);
console.log(secondfruit);
console.log(thirdfruit);




// skip array

const numbers=[10,20,30];


const[fisrt,,third]=numbers;

console.log(fisrt);
console.log(third);




// Destructuring with Default Values
// You can assign default values when destructuring in case the variable doesn't exist.


const color=["red"];
const[primarycolor,secondarycolor="blue"]=color;


console.log(primarycolor);
console.log(secondarycolor);






// Destructuring Objects
// For objects, destructuring works based on property names.





const person={

    name:'john',
    age:30,
    city:'Nairobi',

};

const {name,age,city}=person;


console.log(name);
console.log(age);
console.log(city);






// Assigning to Different Variable Names



const user={

username:"Alice",
email:"samuelchege@gmail.com",
};

const{username:USERNAME,email:EMAIL}=user;

console.log(USERNAME);
console.log(EMAIL)



// Destructuring with Default Values in Objects
// Similar to arrays, you can provide default values when a property is missing.




const User={

names:"bob"
};


const{names,ages=20222}=User;


console.log(names);
console.log(ages)





const person1={

    namess:"john",
    adress:{

        cityy:"Thika",
        state:"Nairobi"
    }
};
    const {namess,adress:{cityy,state}}=person1;

    console.log(namess);
    console.log(cityy);
    console.log(state);


