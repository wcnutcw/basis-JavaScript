const box=document.getElementById('box');
let status;

function addDarkMode(){
    box.classList.add("darkMode");
}

function removeDarkMode(){
    box.classList.remove("darkMode");
}

function switchMode(){
    box.classList.toggle("darkMode");
    state=box.classList.contains("darkMode");
    console.log(state);
    if(state){
        box.style.color="yellow";
    }else{
        box.style.color="red";
    }
}