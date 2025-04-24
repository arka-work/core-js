try{
    var a=100;
    if(a===A)
    {
        throw new Error("This is an error");
        
    }
    

}catch(error){
    console.log(error.name,"\n",error.message);
}
finally{
    console("hello");
}
console.log("yoy are in the end of the program");
