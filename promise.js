// let promise = new Promise(function(resolve, reject){
//     //do something
// });






let mypromise= new Promise(function(resolve,reject){


let success=true;



if (success){


    resolve("this data have loaded successfully");
}



else{


    reject("there is an error in loading the data");
}
});


mypromise.then(function(message){

console.log(message);

}) .catch(function(error){


    console.log(error);
});