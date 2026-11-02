const car : {brand: string; model: string; year: number}=
{brand: "Toyota", model: "Camry", year: 2020};
const person ={ name: "John", age: 30, isStudent: false};
const car1 : {type: string, year?: number} ={
    type: "Toyota", //? Truyền vào một thuộc tính tùy chọn year, nếu không có thì không sao
};
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
let x = ""; //Tạo một biến x để lưu trữ kết quả
for (let i in myObj.cars) {//Duyệt qua từng phần tử trong mảng cars của đối tượng myObj
  x += "<h1>" + myObj.cars[i].name + "</h1>"; //Thêm tên của từng hãng xe vào biến x, được bao quanh bởi thẻ <h1>
  for (let j in myObj.cars[i].models) { //Duyệt qua từng phần tử trong mảng models của từng hãng xe
    x += myObj.cars[i].models[j]; //Thêm tên của từng mẫu xe vào biến x
  }
}