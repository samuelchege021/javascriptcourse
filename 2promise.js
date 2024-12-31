let promise=new Promise (function (reject,resolve){


const x="geeks for geeks";
const y="geeks for geeks";

if (x==y){

    resolve();
}

else{


    reject();
}




});


promise.
then( function(){


    console.log("succes.they are equal")
}).
catch(function(){



    console.log("uongo")
});