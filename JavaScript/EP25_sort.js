let points=[20,100,-100,5,-25,10];


//เรียงจาก น้อย ไป มาก
points.sort(function(a,b){
    return a-b;
});
console.log(points);


//เรียงจาก มาก ไป น้อย
points.sort(function(a,b){
    return b-a;
});
console.log(points);