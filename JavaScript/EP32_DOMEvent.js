function welcome(){
    alert("Welcome to the world");
}

function hightlight(obj){
    obj.style.background="yellow";
}

function unhightlight(obj){
    obj.style.background="black";
}

function getMenu(){
    const menu = document.getElementById("menu");
    const display=document.getElementById("display");
    console.log(menu.value.toUpperCase());
    display.innerText=menu.value;
}

function hight(obj){
    obj.style.background="yellow";
}