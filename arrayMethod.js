{//map
    const numbers = [1, 2, 3];
    console.log(numbers.map(num => num * 2)); 
}

{//filter
    let arr=[1,5,7,99,8,44,2,87,345,682,900];
    let newArr=arr.filter((val)=>{
        return val%2==0;
    });
    console.log(newArr);
}

{ //reduce
    let arr=[55,77,99,22,34,56,78];
    let New=arr.reduce((Accu,curr) =>{
        return Accu+curr;
    })
    console.log(New);
}

{
    const numbers = [1, 3, 5, 8];

    const hasEven = numbers.some(num => num % 2 === 0);

    console.log(hasEven);

}

{
    const numbers = [2, 4, 6];

const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // true (all are even)

}

{
    let arr=[123,98,65,15,955856,55];
    console.log("1 push on the last of the array :",arr.push(1));
    console.log(arr);

    console.log(" pop from the array :",arr.pop(1));
    console.log(arr);

    console.log("insert in first of the array : ",arr.unshift(100));
    console.log(arr);
    
    console.log("delete from the start from the array :",arr.shift(100));
    console.log(arr);
    
}