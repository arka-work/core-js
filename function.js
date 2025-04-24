// reverse a number 
function reverseNum(number){
        if(num>=0 && num<9)
    {
        return num;
    }
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
