

// An array declaration allocates sequential memory blocks.
//  Arrays are static. This means that an array once initialized cannot be resized.
//  Each memory block represents an array element.
//  Array elements are identified by a unique integer called as the subscript/index of
// the element.
//  Arrays too, like variables, should be declared before they are used.
//  Array initialization refers to populating the array elements.
//  Array element values can be updated or modified but cannot be deleted

// var array_name; //declaration
// array_name=[val1,val2,val] //initialization
// OR
// var array_name=[val1,val,valn]



var alphas;

alphas=["1","2","3","4"]

console.log(alphas[1]);

console.log(alphas[2]);



// arrayobject


// An array can also be created using the Array object. The Array constructor can be passed
// as -
//  A numeric value that represents the size of the array or
//  A list of comma separated values
// The following Examples create an array using this method.



var arr_names=new Array(4)

for (var i=0;i<arr_names.length;i++){


    arr_names[i]=i*2
    console.log(arr_names[i])

}



