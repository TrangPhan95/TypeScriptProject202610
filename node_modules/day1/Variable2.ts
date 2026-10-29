let names: string = 'Phan Trang';
let age: number = 20;
let isStudent: boolean = true;
function getInfo(): string{
    return `Name is ${names} with age ${age} and is ${isStudent ? 'a student' : 'not a student'}`;//điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai
}
//console.log(getInfo());
function checkPoint (dropdown: string, options?:{
    point :number; 
    rank: boolean
}): void {
    const{ point = 90, rank =  false} = options ??{};
    //options ?? {}
    //Chỉ dùng {} khi options là null hoặc undefined.
//?? có nghĩa là: nếu options là null hoặc undefined, hãy dùng object rỗng {}; nếu không, dùng chính options.
//Trong hàm có khai báo options?, tham số này có thể không được truyền vào. 
// Khi đó, nó là undefined, nên biểu thức options ?? {} cho kết quả {}.
    console.log(`Dropdown: ${dropdown} with point ${point} and rank = ${rank}`);
}
console.log(checkPoint("Phan Trang", {point: 95, rank: true}));
