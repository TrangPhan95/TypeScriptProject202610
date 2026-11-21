//BT2: Given an integer, , perform the following conditional actions:
//If n  is odd, print Weird
//If n is even and in the inclusive range of 2 to5 , print Not Weird
//If n is even and in the inclusive range of 6 to 20, print Weird
//If n is even and greater than 20 , print Not Weird

function checkData (n: number): void {
if (n %2 !=0 || (n >=6 && n <=20)){
    console.log("Weird");
}
else if (n%2==0 && (n >=2 && n <=5) || n > 20){
    console.log("Not Weird");
}
}
const n = 5;
checkData(n);



