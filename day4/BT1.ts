
function printDay( day : number): string {
    let result: string = "";
    switch (day) {
        case 2: {
            result = "Thứ 2";
            break;
        }
        case 3: {
            result = "Thứ 3";
            break;
        }
        case 4: {
            result = "Thứ 4";
            break;
        }
        case 5: {
            result = "Thứ 5";
            break;
        }
        case 6: {
            result = "Thứ 6";
            break;
        }
        case 7: {
            result = "Thứ 7";
            break;
        }
        case 8: {
            result = "Chủ nhật";
            break;
        }
        default: {
            result = "Ngày không hợp lệ";
            break;
        }
    }
    return result;
}
const day = 3;
console.log(printDay(day));