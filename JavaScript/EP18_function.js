function a(){
    console.log("Hello World");
}

a();

function message(){
    document.write("แจ้งเตือนโอนเงิน");
}

message();

function plusNumber(x){
    console.log("เลขที่ส่งมา =",x);
}

plusNumber(5);


function getIP(){
    return "127.0.0.1";
}

let b=getIP();
console.log(b);


function setSalary(salary){
    let bonus = 1000;
    return salary+bonus;
}


let total=setSalary(15000);
console.log(total);


function fullname(fname,lname,city="bangkok"){
    console.log("ชื่อ =",fname,"นามสกุล =",lname,"city =",city);
}

fullname("nut","chs")
