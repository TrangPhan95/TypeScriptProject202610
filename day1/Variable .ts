const baseUrl: string ="https:https://demoqa.com/";
const timeout: number = 3000;
const isHeadless: boolean = false;
function getTestConfig() : string {
    return `Running test on ${baseUrl} with timeout ${timeout} ms (Headless: ${isHeadless})`;
}
//console.log(getTestConfig());
let elementArrow = (): void => {
    let baseUrl: string = "https://demoqa.com/";
    let timeout: number = 3000;
    let isHeadless: boolean = false;
    console.log(`Running test on ${baseUrl} with timeout ${timeout} ms (Headless: ${isHeadless})`);
}
//console.log(elementArrow());



function clickElement(selector: string, options?: {timeout: number, force: boolean}): void {
    const { timeout = 50000, force = false } = options || {};
    //Dùng {} khi options là bất kỳ giá trị falsy nào, gồm null, undefined, false, 0 hoặc ''
    console.log(`Clicking ${selector} with timeout ${timeout} ms and forrce = ${force}`);
}
console.log(clickElement("button", {timeout: 1000, force: true}));