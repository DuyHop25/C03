// Khai báo thư viện
import { question } from "readline-sync";
// Input
let kw: Number = Number(question("Nhap so kw dien: "));
// Output 
if ( kw < 100 ){ 
    console.log(Number(kw)*2000);
}
else if ( kw >= 200 ){
    console.log(Number(kw)*3500);
}
else {
    console.log(Number(kw)*2500);
}
