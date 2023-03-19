// Khai báo thư viện
import { question } from "readline-sync";
// Input
let DTB: Number = Number(question("Nhap diem trung binh:"));
// Output 
if (DTB >= 5){
    console.log("Đậu");
}
else {
    console.log("Rớt");
}
