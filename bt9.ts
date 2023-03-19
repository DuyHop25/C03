// Khai báo thư viện
import { question } from "readline-sync";
// Input
let N: Number = Number(question("Nhap so co 2 chu so: "));
let dozen: string = "";
// Output 
switch(Math.floor(Number(N)/10)){
    case 1: {
        dozen = "Mười";break;
    }
    case 2: {
        dozen = "Hai mươi";break;
    }
    case 3: {
        dozen = "Ba mươi";break;
    }
    case 4: {
        dozen = "Bốn mươi";break;
    }
    case 5: {
        dozen = "Năm mươi";break;
    }
    case 6: {
        dozen = "Sáu mươi";break;
    }
    case 7: {
        dozen = "Bảy mươi";break;
    }
    case 8: {
        dozen = "Tám mươi";break;
    }
    case 9: {
        dozen = "Chín mươi";break;
    }
    default: {
        console.log("không đọc được");break;
    }
    }
switch(Number(N)%10){
    case 1: {
        console.log(dozen,"mốt");break;
    }
    case 2: {
        console.log(dozen,"hai");break;
    }
    case 3: {
        console.log(dozen,"ba");break;
    }
    case 4: {
        console.log(dozen,"bốn");break;
    }
    case 5: {
        console.log(dozen,"lăm");break;
    }
    case 6: {
        console.log(dozen,"sáu");break;
    }
    case 7: {
        console.log(dozen,"bảy");break;
    }
    case 8: {
        console.log(dozen,"tám");break;
    }
    case 9: {
        console.log(dozen,"chín");break;
    }
    default: {
        console.log("không đọc được");break;
    }
}