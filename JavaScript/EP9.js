let balance = 5000;
let withDraw = 6000;

if(withDraw<=balance){
    // คำสั่งให้ทำอะไร
    console.log("ดำเนินการถอนเงิน =",withDraw);
    balance-=withDraw;
    console.log("ยอดคงเหลือ =",balance);
}else{
    //เงื่อนไขที่เป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ");
}




