// Khai báo thư viện
import { question } from "readline-sync";
// Input
let day: Number = Number(question("Nhap mot ngay: "));
let month: Number = Number(question("Nhap mot thang: "));
let year: Number = Number(question("Nhap mot nam: "));
// Output 
if( (day > 0 && day <= 31    ) 
&& (month > 0 && month <= 12 )
&&  year > 0                 ) {
        switch(month){
            case 2:{
                if ( (Number(year) % 4 == 0 && Number(year) % 100 != 0)|| Number(year) % 400 == 0){
                    if(day <= 29) {
                            console.log("Valid");
                            break;
                    }
                    else
                        console.log("Unvalid");
                        break;   
                    }
                else if (day <= 28){
                    console.log("Valid");
                    break;  }    
                else{
                    console.log("Unvalid");
                    break;  }
                }
            case 4:case 6:case 9:case 11:{
                if(day > 0 && day <= 30){
                    console.log("Valid");
                    break;
                }
                else
                    console.log("Unvalid");
                    break
            }
            default:{
                if(day > 0 && day <= 31){
                    console.log("Valid");
                    break;
                }
                else
                    console.log("Unvalid");
                    break
            }
            }
        }
else{
    console.log("Unvalid")
}
