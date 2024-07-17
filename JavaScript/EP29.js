// const menu = document.getElementById("menu");

// let count=1;
// function addItem(){
//     const item=document.createElement('li');
//     item.innerText = "Item"+(count++);
//     menu.appendChild(item)
// }


const menu = document.getElementById("menu");
const item =document.getElementById("item-3");
const itemB= document.getElementById("item-2");
const newItem = document.createElement("li");
newItem.innerText="X"


menu.replaceChild(newItem,itemB);


function deleteItem(){
    menu.removeChild(item);

}


