// @ts-ignore Node.js type definitions are not configured in this project.
import * as fs from 'fs';
// @ts-ignore Node.js type definitions are not configured in this project.
import * as path from 'path';

//Test tính năng Đăng ký tài khoản
//Yêu cầu:Tạo một file dữ liệu JSON chứa danh sách các trường hợp đăng ký (hợp lệ và không hợp lệ).Viết hàm đọc file này và trả về 1 mảng
interface User{ //Định nghĩa kiểu dữ liệu User là một đối tượng có các thuộc tính username và password
    userName: string;//Tên người dùng
    password: string;
}
const dataFilePath = path.resolve('.', 'TestData/Login.json');//Đường dẫn đến file dữ liệu JSON

function readTestData(): User[] { //Đọc dữ liệu từ file JSON và trả về một mảng các đối tượng User
    const data = fs.readFileSync(dataFilePath, 'utf-8'); //Đọc nội dung của file dữ liệu JSON và lưu vào biến data dưới dạng chuỗi (string)

    return JSON.parse(data) as User[];//Chuyển đổi chuỗi JSON thành mảng các đối tượng User bằng cách sử dụng JSON.parse và ép kiểu dữ liệu (as User[]) 

}
console.log(readTestData());//Gọi hàm readTestData và in kết quả ra console

