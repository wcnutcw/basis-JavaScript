let a=100;

function display(){
    let b=50;    //local
    console.log("ตัวแปร =",a);
    console.log("ตัวแปร =",b);
}


console.log("Global =",a);  //global
display();