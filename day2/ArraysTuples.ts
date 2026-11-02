function filterAndCleanElementTexts(texts: string[]): string[]{
    const result = [...new Set( //Loại bỏ các phần tử trùng lặp
        //[...] chuyển Set thành mảng
        texts
            .map(text => text.trim()) //Loại bỏ khoảng trắng ở đầu và cuối chuỗi
            .filter(text => text.length > 0)//Bỏ các chuỗi rỗng
            .map(text => text.toUpperCase())//Chuyển tất cả các chuỗi thành chữ hoa
    )];
    return result;
}
//console.log(filterAndCleanElementTexts([" apple ", "banana", "", "APPLE"]));
 type TestCaseUserr = {
    username: string;
    email: string;
    age: number;
    role: 'admin' | 'user' | 'guest';
    //Định nghĩa kiểu dữ liệu TestCaseUserr là một đối tượng có các thuộc tính username, email, age và role.
 };
const testUserss: TestCaseUserr[] = [
    {
        username: "admin01",
        email: "admin01@example.com",
        age: 25,
        role: "admin"
    },
    {
        username: "user01",
        email: "user01@example.com",
        age: 20,
        role: "user"
    },
    {
        username: "guest01",
        email: "guest01@example.com",
        age: 18,
        role: "guest"
    }
];
function getValidAdminUserss(users: TestCaseUserr[]): string[] {
    return users
        .filter(user => user.role === "admin" && user.age >= 18)// Lọc ra những người dùng có role là "admin" và tuổi >= 18
        .map(user => user.username); // Lấy ra danh sách username của những người dùng hợp lệ
};
//console.log(getValidAdminUserss(testUserss));// Gọi hàm và in kết quả ra console

type HeaderPairr = [string, string];
//Định nghĩa kiểu dữ liệu HeaderPair là một mảng gồm hai phần tử, cả hai đều là chuỗi (string)
function convertHeadersToObject(headers: HeaderPairr[]): Record<string, string> {
    return Object.fromEntries(headers);
    //Chuyển đổi mảng các cặp khóa-giá trị (headers) thành một đối tượng (Record<string, string>)
    //  bằng cách sử dụng phương thức Object.fromEntries.
};
const inputHeaders: HeaderPairr[] = [
    ["Content-Type", "application/json"],
    ["Authorizationn", "Bearer token123"]
];

console.log(convertHeadersToObject(inputHeaders));

