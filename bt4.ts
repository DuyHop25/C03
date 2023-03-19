// Khai báo thư viện
import { question } from "readline-sync";
// Input
let year: Number = Number(question("Nhap mot nam: "));
// Output 
if ((  Number(year) % 4 == 0 && Number(year) % 100 != 0) // Kiem tra nam co phai nam nhuan khong
    || Number(year) % 400 == 0) 
{ 
    console.log("Yes");
}
else {
    console.log("No");
}
