// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
// Xu ly tinh toan
const dt:Number = Math.pow(Number(b),2) - (4 * Number(a) * Number(c)) ;
const x1:number = (-b + Math.sqrt(Number(dt)))/(2*Number(a));
const x2:number =(-b - Math.sqrt(Number(dt)))/(2*Number(a));
// Output 
if(a == 0) {
    if(b == 0) {
        if (c == 0) {
            console.log("VSN");
        } else {
            console.log("VN");
        }
    } else {
        console.log("Phuong trinh co nghiem duy nhat: ",-c/Number(b));
    }
}
else {
    if(dt > 0) {
        console.log("Phuong trinh co 2 nghiem phan biet");
        console.log("x1= ",x1);
        console.log("x2= ",x2);
    } else if ( dt == 0) {
        console.log("Phuong trinh co nghiem kep: x1 = x2 = ",-b/2*Number(a) );
    } else {
        console.log("VN");
    }
}

