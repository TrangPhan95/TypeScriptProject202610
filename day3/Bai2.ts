declare const require: any;

const fs = require('fs');

interface User {
    userName: string;
    password: string;
}

const filePath = './TestData/User.csv'; //Đường dẫn đến file CSV chứa dữ liệu người dùng

function parseCSV(data: string): User[] {
    const rows = data.split(/\r?\n/).filter((row) => row.trim() !== '');
    if (rows.length < 2) {
        return [];
    }

    const headers = rows[0].split(',').map((header) => header.trim());
    const userNameIndex = headers.indexOf('userName');
    const passwordIndex = headers.indexOf('password');

    return rows.slice(1).map((row) => {
        const values = row.split(',').map((value) => value.trim());

        return {
            userName: values[userNameIndex] ?? '',
            password: values[passwordIndex] ?? '',
        };
    });
}

function readUserDataFromCSV(): User[] { //Đọc dữ liệu từ file CSV và trả về một mảng các đối tượng User
    const data = fs.readFileSync(filePath, 'utf-8'); //Đọc nội dung của file CSV và lưu vào biến data dưới dạng chuỗi (string)
    return parseCSV(data); //Chuyển đổi chuỗi CSV thành mảng các đối tượng User
}

console.log(readUserDataFromCSV()); //Gọi hàm readUserDataFromCSV và in kết quả ra console
