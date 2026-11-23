//Write a Typescript program that reads an integer between 0 and 1000 and adds all the digits in the integer. 
//Test Data
//Input an integer between 0 and 1000: 565
//Expected Output :
//The sum of all digits in 565 is 16
function sumOfDigits (n : number ) : number{
    //let input = "Mời bạn nhập một số nguyên từ 0 đến 1000: ";
    //const n = Number(input);
 let sum : number = 0;
if(n >0 &&n<10){
  sum = n;
}
else if (n >=10 && n < 100){
    sum = Math.floor(n / 10) + (n % 10);
}
else if (n >=100 && n < 1000){
sum = Math.floor(n / 100) + Math.floor((n % 100) / 10) + (n % 10);
}
return sum;
}
let n : number = 565;
console.log(`The sum of all digits ${sumOfDigits(n)}`);