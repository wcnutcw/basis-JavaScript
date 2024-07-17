let product = {
    Name:"เมาส์",
    Price:1500,
    color:"black",
    category:"computer",
    size:"M",
    displayProduct:function(){
        return "ชื่อสินค้า ="+this.Name + "ราคา ="+this.Price + "หมวดหมู่ ="+this.category
    },
    discount:function(){
        return this.Price-1000;
    }
};


console.log("ชื่อสินค้า =",product.Name);
console.log("ชื่อสินค้า =",product.Price);
console.log("ชื่อสินค้า =",product.color);
console.log("ชื่อสินค้า =",product["category"]);
console.log("ชื่อสินค้า =",product.size);


//เรียกใช้ Method
console.log(product.displayProduct());
console.log(product.discount());





