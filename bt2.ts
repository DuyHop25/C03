// Khai báo thư viện
import { question } from "readline-sync";
// Input
let x: Number = Number(question("Nhap so duong co 3 chu so: "));
// Output 
if ((Math.floor(Number(x) / 100)) == 9){ // KIEM TRA SO HANG TRAM CO PHAI LA SO = 9 KHONG 
    console.log("Yes");
}
else {
    console.log("No");
}
