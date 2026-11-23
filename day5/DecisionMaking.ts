//BT1: Viết 1 hàm kiểm tra 1 số nguyên n có phải là số chẵn hay không, nếu n chẵn thì in ra “ n là số chẵn”.
function checkNumber (n: number): string {
    if (n %2==0){
        return "n là số chẵn";

    }
    else {
        return "n là số lẻ";
    }

}
const number = 4;
console.log(checkNumber(number));