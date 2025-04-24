// reverse a number 
function reverseNum(number){
    let rever=0;
    while(number!=0)
    {
        let digit=number%10;
        rever=rever*10+digit;
        number=Math.floor(number/10);
    }
    return rever;

}

console.log(reverseNum(5567));