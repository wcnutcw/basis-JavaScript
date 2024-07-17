let state = 1; // 0 ปิดไฟ // 1 เปิดไฟ

let light;

// if(state==0){
//     light="ปิดไฟ";
// }else if(state==1){
//     light="เปิดไฟ";
// }else{
//     light="ไม่พบข้อมูล";
// }

switch(state){
    case 0 : light="ปิดไฟ";
        break;
    case 1 : light="เปิดไฟ";
        break;
    default : light="ไม่พบข้อมูล";
}

console.log(light);

