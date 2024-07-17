let colors = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง"];
let count=colors.length;   // ความยาว (จำนวนสมาชิกใน array)

console.log(count);
console.log("Before =",colors);

console.log(colors[0]);   // index ตัวแรก
console.log(colors[colors.length-1]);    // index ตัวสุดท้าย

console.log(colors.push("เทา"));   // เพิ่มสมาชิกด้วย .push
console.log(colors);

let result=colors.sort();  // .sort() : เรียงลำดับ
console.log("After =",result);


