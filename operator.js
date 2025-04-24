// Arithmetic Operators
function add(a,b)
{
    return(a+b);;
}

function Subtraction(a,b)
{
    return(a-b);
}
function Multiplication(a,b)
{
    return(a*b);
}
function Division(a,b)
{
    return (a/b);
}
function Modulus(a,b)
{
    return (a%b);
}
function Increment(a)
{
    return ++a;
}

//Logical Operators
function andNot(a,b)
{
    if(a!=0 && a<=18)
    {
        console.log("he or she can vote");
    }
    else{
        console.log("minor");
    }
}






console.log("add"+add(5,5));

console.log("sub"+Subtraction(88,65));
console.log("*"+Multiplication(7,9));
console.log("div"+Division(100,10));
console.log("mod"+Modulus(60,8));
console.log("incre"+Increment(8));
console.log(andNot(18));
