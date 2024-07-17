let a =5, b =10;

//เพิ่มค่า Prefix
console.log("ค่าปัจจุบัน =",a);
console.log("แบบPrefix =",++a);
console.log("ค่าปัจจุบัน =",a);


a=5; //reset
//เพิ่มค่า Postfix
console.log("ค่าปัจจุบัน =",a);
console.log("แบบPostfix =",a++);
console.log("ค่าปัจจุบัน =",a);


//ลดค่า Prefix
console.log("ค่าปัจจุบัน =",b);
console.log("แบบPrefix =",--b)
console.log("ค่าปัจจุบัน =",b);


b=10;
//เพิ่มค่า Postfix
console.log("ค่าปัจจุบัน =",b);
console.log("แบบPostfix =",b--);
console.log("ค่าปัจจุบัน =",b);
