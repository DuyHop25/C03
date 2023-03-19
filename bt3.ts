// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap canh a: "));
let b: Number = Number(question("Nhap canh b: "));
let c: Number = Number(question("Nhap canh c: "));
// Output 
if (a==b || a==c || b==c){ // Kiem tra 3 canh cua tam giac can 
    console.log("Yes");
}
else {
    console.log("No");
}
