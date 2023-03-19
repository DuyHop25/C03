// Khai báo thư viện
import { question } from "readline-sync";
// Input
let keyword: any = (question("Nhap vao 1 ki tu: "));
// Output 
if ( keyword.charCodeAt(0) >= 65 && keyword.charCodeAt(0) <= 90 ) { 
    console.log("Hoa");
}
else if ( keyword.charCodeAt(0) >= 97 && keyword.charCodeAt(0) <= 122 ){
    console.log("Thuong");
}
else if ( keyword.charCodeAt(0) >= 48 && keyword.charCodeAt(0) <= 57 ){
    console.log("So");
}
else {
    console.log("DB");
}
