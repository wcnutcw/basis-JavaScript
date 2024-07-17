// const a=document.querySelector("#DEMO"); //อ้างอิงผ่าน id
const b=document.querySelectorAll("p");  //อ้างอิงผ่าน Tag
const c=document.querySelector(".myjs"); //อ้างอิงผ่าน Class
const titleEl=document.getElementById("title");
const contentEl=document.querySelector(".content");


console.log(b);
console.log(c);

let x =10;
let y =20;
function displayText(){
    titleEl.style.color="red";
    titleEl.style.backgroundColor="yellow"; 
    titleEl.style.fontSize="60px";

    contentEl.setAttribute('class','nut');  //เปลี่ยนชื้อ class เป็น nut
}


