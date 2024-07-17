JavaScript ทำไรได้
    เปลี่ยนแปลงรูปแบบการแสดงผล HTML , CSS ได้
    ตรวจสอบความถูกต้องของข้อมูลได้
    ตรวจสอบ Browser ของผู้ใช้ได้ (ฝั่ง Cilent)
    เก็บข้อมูลผู้ใช้ได้ เช่น การใช้ Cookie , Local Storage เป็นต้น
    ปัจจุบันทำได้ทั้งฝั่ง Cilent และ Server ได้

**เริ่มสร้างตัวแปรด้วยการใช้ let

รูปแบบการเขียน JavaScript
    1)แบบ Internal : เขียนในส่วน <head> หรือ <body> (เขียนในไฟล์เดียวกัน)
        ใช้<script> คือของ Javascript
            <script type="text/javascript">
                ...Statement...
            </script>

            <script type="text/javascript">
                document.write()
            </script>
    
    2)แบบ external : เขียนไฟล์ด้านนอกที่มีนามสกุล .js (นำไฟล์ javascriptจากข้างนอก เข้ามาทำงานในhtml)
        <script src="ชื่อไฟล์.js"></script>
            document.write();

* JavaScript ไม่ซีเรียสเรื่องการเขียน ; ไว้ข้างหลังแล้ว

การแสดงข้อมูล
    document.write("ข้อความที่ต้องการแสดง...") : แสดงเป็นตัวเลข ตัวแปร หรือ tag html ในwebก็ได้   
    alert("ข้อความแจ้งเตือน") : สำหรับแจ้งเตือนผู้ใช้ในหน้าเว็บ (แบบ popup มีกล้องแจ้งเตือนขึ้น)
    console.log("ข้อความ หรือ ตัวแปร") : สำหรับ debug ค่าต่างๆ แต่จะไม่แสดงผลในหน้าweb (แสดงผลด้านหลังweb ไม่ขึ้นหน้าweb) 
        กดดูข้อความได้ใน inspect ดูในส่วน console
    console.error("ข้อความ หรือ ตัวแปร") : กดใน inscpect ดูในส่วน console จะขึ้นสีแดง
    console.warn("ข้อความ หรือ ตัวแปร") : กดใน inscpect ดูในส่วน console จะขึ้นสีเหลือง

การเขียน comment  (ควรเขียนเพื่ออธิบาย code ที่เราเขียนและช่วยเตือนความจำเราได้ด้วย)
    1) ใช้ / อธิบายคำสั่งสั้นๆในรูปแบบบรรทัดเดียว   ( Ctrl + / )
    2) ใช้ /*...*/ อธิบายคำสั่งยาวๆหรือแบบหลายบรรทัด


การสร้างตัวแปร (Variable)
    ตัวแปร คือ ชื่อที่ถูกนิยามขึ้นมา
        รูปแบบการตั้งชื่อ
        1) ขึ้นต้นด้วยตัวอักษรภาษาอังกฤษ ตามด้วย ตัวเลขหรือตัวอักษร
        2) ห้ามขึ้นต้นด้วยตัวเลขหรือสัญลักษณ์พิเศษ
        3) ขึ้นต้นด้วย $ (dollar sign) และ _ (underscore) ได้
        4) มีลักษณะเป็น case sensitive คือ ตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่จะมีความหมายที่แตกต่างกัน
        5) ไม่ซ้ำกับ keyword เช่น if else 
    
    ตัวแปรใน JavaScript เป็นรูปแบบ Dynamic Typing
        ตัวแปรแบบ Dynamic Typing คือ ชนิดตัวแปรจะเป็นอะไรก็ได้ตามค่าที่ตัวมันเก็บโดยไม่ต้องประกาศชนิดข้อมูล
        ตัวแปรแบบ Static Typing คือ ต้องประกาศชนิดข้อมูลในตอนเริ่มต้น เช่น int , double , char                   เพื่อบอกว่าตัวแปรนี้เก็บข้อมูลชนิดไหน

    การนิยามตัวแปร (แบบเก่า)
        var (เปลี่ยนแปลงค่าในตัวแปลได้)
        var ชื่อตัวแปร=ค่าเริ่มต้น;        //สามารถใส่ชื่อตัวแปรได้หลายตัวในครั้งเดียว
        ชื่อตัวแปร =ค่าเริ่มต้น;     
    
    *ถ้าไม่กำหนดชื่อตัวแปร ใน tab หน้า console จะขึ้น undefined

    การนิยามตัวแปร (แบบใหม่ใช้ในปัจจุบัน)
        let (เปลี่ยนแปลงค่าในตัวแปลได้)
        let ชื่อตัวแปร=ค่าเริ่มต้น                //สามารถใส่ชื่อตัวแปรได้หลายตัวในครั้งเดียว
        ชื่อตัวแปร =ค่าเริ่มต้น;    

        const (ค่าคงที่)
        const ชื่อตัวแปร=ค่าของตัวแปร;

ชนิดข้อมูล
    boolean : ค่าตรรกศาสตร์ ประกอบด้วย True/False
    number : ประกอบด้วย integer(จำนวนเต็ม) , ทศนิยม(float)
    string : ข้อความ ("...")
    object : แสดงแบบ Dictionary คือ {key:value}
    array : ชุดข้อมูล เช่น [1,2,3]

        typeof : เช็คชนิดข้อมูล
        null : ไม่มีการกำหนดค่า(ถูกกำหนดค่าโดยผู้เขียน)
        undefined : ไม่มีการกำหนดค่า(เป็นค่า default ของโปรแกรม)


การแปลงชนิดข้อมูล
    แปลง string เป็น number
        แปลงเป็น integer
            ใช้ parseInt()
        แปลงเป็น float
            ใช้ parseFloat()
        ใช้เครื่องหมาย (+...) เพิ่มไปข้างหน้า  เช่น  let age = +"20";
    แปลง number เป็น string
        ใช้เครื่องหมาย " "+ตัวแปร  เช่น  let price=99+"";
        ใช้ toString() เช่น x.toString()  เช่น  let price=99.99.toString();

Array : เก็บข้อมูลเยอะ , มีลำดับต่อเนื่อง , ใช้ index กำกับในการเข้าถึงข้อมูล (index เริ่มต้นที่ลำดับ 0)

    (1) สร้างโดยใช้คำสั่ง Array()
        let ชื่อarray = new Array();
        let ชื่อarray = Array(index1,index2,index3,...);
        เช่น
            let myArray=new Array();
            myArray[0]=2000;
            let days=Array("Monday","Tuesday","Wednesday");
                console.log(days[1])   // Tuesday
            let number=Array(1,2,3,4,5)
                console.log(number);
                console.log(number[1]);

    การเข้าถึงสมาชิก
        ชื่อarray[เลขลำดับ] เช่น color[0]
    เปลี่ยนสมาชิก
        array[เลขลำดับ] = สมาชิกใหม่
            เช่น  colors[1]="เหลือง"

    (2) สร้างโดยใช้เครื่องหมาย []
        let ชื่อarray = [สมาชิกตัวที่1 , สมาชิกตัวที่2 , ...];
            เช่น     let color=["แดง","น้ำเงิน","เหลือง"];

Opearator (ตัวดำเนินการทางคณิตศาสตร์)
    A+B
        Operand(ตัวถูกดำเนินการ) คือ A , B

    ตัวดำเนินการ
        +
        -
        *
        /
        % : เศษจากการหาร
        ** : ยกกำลัง

    ตัวดำเนินการเปรียบเทียบ
        **ชนิด boolean ( true / false )
            == : เท่ากับ 
            != : ไม่เท่ากับ
            >
            <
            >=
            <=
    
    ตัวดำเนินการทางตรรกศาสตร์
        && : AND
        || : OR
        ! : NOT
    
    ตัวดำเนินการเพิ่มค่า - ลดค่า
        ++ (Prefix)  เช่น ++a (คือเพิ่มให้ a ก่อน1ค่าแล้วนำไปใช้)
        ++ (Postfix) เช่น a++ (คือนำค่า a ในปัจจุบันไปใช้ก่อนแล้วค่อยเพิ่มค่า)
        -- (Prefix) เช่น --b (คือลดค่าให้ b ก่อน 1 ค่าแล้วนำไปใช้)
        -- (Postfix) เช่น b-- (คือนำค่าปัจจุบัน b ไปใช้ก่อนแล้วค่อยลดค่า)


Compound Assignment
    += เช่น x+=y : x=x+y
    -= เช่น x-=y : x=x-y
    *= เช่น x*=y : x=x*y
    /= เช่น x/=y : x=x/y
    %= เช่น x%=y : x=x%y

ลำดับความสำคัญของตัวดำเนินการ (ตามSTEP)
    1)  ()
    2) ++,-- : จากซ้ายไปขวา
    3) * , / , % : จากซ้ายไปขวา
    4) + , - : จากซ้ายไปขวา
    5) < , <= , > , >=  : จากซ้ายไปขวา
    6) == , != : จากซ้ายไปขวา
    7) && : จากซ้ายไปขวา
    8) || : จากซ้ายไปขวา
    9) = , += , -= , *= , /= , %=  : จากขวาไปซ้าย


โครงสร้างควบตุม
    แบบมีเงื่อนไข
        if(เงื่อนไข){
            คำสั่งเมื่อเงื่อนไขเป็นจริง;
        }

            รูปแบบมี 2 เงื่อนไข
        if(เงื่อนไข){
            คำสั่งเมื่อเงื่อนไขเป็นจริง;
        }
        else{
            คำสั่งเมื่อเงื่อนไขเป็นจริง;
        }

            รูปแบบตำสั่งหลายเงื่อนไข
        if(เงื่อนไข1){
            คำสั่งเมื่อเงื่อนไขเป็นจริง;
        }
        else if(เงื่อนไข2){
            คำสั่งเมื่อเงื่อนไขเป็นจริง;
        }
        else if(เงื่อนไข3){
            คำสั่งเมื่อเงื่อนไขเป็นจริง;
        }

เขีนน if...else แบบ Ternary Operator (แบบลดรูป)
    
    ตัวแปร = (เงื่อนไข)?คำสั่งเมื่อเงื่อนไขเป็นจริง: คำสั่งเมื่อเงื่อนไขเป็นเท็จ;


Switch Case 

    switch(สิ่งที่ต้องการตรวจสอบ){
        case ค่าที่1:คำสั่งที่1;
                break;       // break คือ กระโดดออกจากloopหรือโปรแกรม เป็นอันจบ
        case ค่าที่2:คำสั่งที่2;
                break;
        case ค่าที่3:คำสั่งที่3;
                break;
                .
                .
                .
        case ค่าที่N:คำสั่งที่ N;
                break;

        default : คำสั่งเมื่อไม่มีค่าที่ตรงกับที่ระบุใน case
    }


คำสั่งที่เกี่ยวกับ loop
    break : ออกจากloop
    continue : ข้ามคำสั่ง

While loop  : ไม่รู้จำนวนรอบที่ชัดเจน
    while(เงื่อนไข){
        คำสั่งที่จะทำซ้ำเมื่อเงื่อนไขเป็นจริง;
    }


For loop : รู้จำนวนรอบที่ชัดเจน
    for(let i=1;i<=10;i++){
        คำสั่งเมื่อเงื่อนไขเป็นจริง;
    }


Do...While : ลองทำก่อน1รอบแล้วค่อยทำซ้ำไปเรื่อยๆถ้าเงื่อนไขเป็นจริงโดยเช็คที่ While
    ทำงานเสร็จ ไปตรวจสอบที่ while ถ้าเป็นจริงจะวนกลับขึ้นไปทำซ้ำจนเป็นเท็จแล้วหลุดออกจากลูป

    do{
        คำสั่งต่างๆเมื่อเงื่อนไขเป็นจริง;
    }while(เงื่อนไข);


null : ตัวแปรที่ไม่มีค่าใดๆ (ไม่เท่ากับ 0 , ไม่เท่ากับstringว่าง , ไม่สามารถนำไปคำนวณได้ ) แต่หากนำไปเปรียบเทียบด้วยเงื่อนไขจะมีค่าเท่ากับ false

เช่น
    let a=null;

    if(!a){
        alert("a is null");
    }else{
        alert("a is not null");
    }


undefined : ตัวแปรที่ประกาศเอาไว้แต่ไม่ได้กำหนดค่าใดๆให้กับมัน

เช่น 
    let a;     // a = undefined (ไม่ได้ระบุค่าเริ่มต้น แค่กำหนดตัวแปรเฉยๆ)
    alert(a);

Nan ( Not a Number ) : นำตัวแปรที่ไม่ใช่ตัวเลขไปคำนวณทางคณิตศาสตร์

เช่น
    let a=10;
    let b="x";
    alert(10-b);   // ผลลัพธ์ที่ได้คือ Nan



รูปแบบของfunction
    1) functionที่ไม่มีการรับและส่งค่า
        function ชื่อฟังก์ชัน(){
            //คำสั่ง
        }
    การใช้งานฟังก์ชัน : ชื่อฟังก์ชัน()
    เช่น
        <button onclick="message();">แจ้งเตือน</button>  // ที่html ในส่วน(body)
                        function message(){          // ที่ javascript
                        alert("แจ้งเตือนโอนเิงน")
                }



    2)ฟังก์ชันที่มีการรับค่าเข้ามาทำงาน
    argument : ตัวแปรส่ง
    parameter : ตัวแปรรับ
        function ชื่อฟังก์ชัน(parameter1,parameter2,...){
            //กลุ่มคำสั่งต่างๆ
        }

    การเรียกใช้งานฟังก์ชัน : ชื่อฟังก์ชัน(argument1,argument2,...)
    เช่น
            function plusNumber(x){
                console.log("เลขที่ส่งมา =",x);
            }

            plusNumber(5);

    3)ฟังก์ชันที่มีค่าส่งออกมา
        function ชื่อฟังก์ชัน(){
            return ค่าที่จะส่งออกไป
        }

    เช่น 
        function getIP(){
            return "127.0.0.1";
        }

        let b=getetIP();
        console.log(b);


    4)ฟังก์ชันที่มีการรับค่าเข้ามาและส่งค่าออกไป
        function ชื่อฟังก์ชัน(parameter1,parameter2,...){
            return ค่าที่จะส่งออกไป
        }

        เช่น
            function setSalary(salary){
                let bonus = 1000;
                return salary+bonus;
            }


            let total=setSalary(15000);ห
            console.log(total);

function แบบกำหนดค่าเริ่มต้น
    function ชื่อฟังก์ชัน(name="",patameter2,parameter3,...){
        //คำสั่งต่างๆ
    }

ขอบเขตตัวแปร
    local variable : ตัวแปรทำงานในฟังก์ชันมีขอบเขตตั้งแต่ จุดเริ่มต้นไปจนถึงจุดสิ้นสุดของฟังก์ชัน  (ในฟังก์ชัน)
    global variable : ตัวแปรที่ทำงานอยู่นอกฟังก์ชันมีขอบเขตตั้งแต่ จุดเริ่มต้นไปถึงจุดสิ้นสุดของไฟล์ที่ประกาศใช้  (นอกฟังก์ชัน)

เช่น 
            let a=100;

        function display(){
            let b=50;    //local
            console.log("ตัวแปร =",a);
            console.log("ตัวแปร =",b);
        }


        console.log("Global =",a);  //global
        display();



Array Properties
เช่น
        let colors = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง"];
    let count=colors.length;   // ความยาว (จำนวนสมาชิกใน array)

    console.log(count);
    console.log("Before =",colors);

    console.log(colors[0]);   // index ตัวแรก
    console.log(colors[colors.length-1]);    // index ตัวสุดท้าย

    console.log(colors.push("เทา"));   // เพิ่มสมาชิกด้วย .push
    console.log(colors);

    let result=colors.sort();  // .sort() : เรียงลำดับแบบstring
    console.log("After =",result);


เข้าถึงสมาชิกด้วย ForEach
เช่น
        let colors = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง"];

        colors.forEach(myData);


        function myData(item){
            console.log("สี =",item);
        }


แปลง Array เป็น String
เช่น
    .toString() //แปลงเป็น String
    .join("*") //นำค่าแต่ละค่าในตัวแปร array มารวมกันเป็นข้อความและส่งค่ากลับเป็นข้อความที่มีตัวคั่นค่าตัวแปรแต่ละค่าตามที่กำหนด (เปลี่ยนตัวคั่นระหว่างตัวแปร)
    ชื่อตัวแปร.pop(); // เอาตัวสุดท้ายออก
    let x = ชื่อตัวแปร.pop() // เอาตัวแรกออกแล้วเก็บในตัวแปร x


การรวม Array
    เช่น
        let a=["ผัดกาด","ผักคะน้า"];
        let b=["ส้ม","ทุเรียน"];
        let c=["จาน","ชาม"];

        a=a.concat(b,c); //นำสมาชิกใน b,c ไปรวมกับ สมาชิกในเซต a
        console.log(a);


การเรียงลำดับใน Array : ใช้ ชื่อตัวแปร.sort();  [เรียงพยัญชนะ ไป สระ]
                     ใช้ย้อนกลับ ชื่อตัวแปร.reverse(); [เรียงสระ ไป พยัญชนะ]
                                    
เรียงลำดับ Array แบบตัวเลข  

        let points=[20,100,-100,5,-25,10];


        //เรียงจาก น้อย ไป มาก
        points.sort(function(a,b){
            return a-b;
        });
        console.log(points);

                    a = ค่าตัวเลขที่มีค่าลบจะถูกเรียงก่อน
                    b = ค่าตัวเลขที่มีค่าบวกจะถูกเรียงที่หลัง

        //เรียงจาก มาก ไป น้อย
        points.sort(function(a,b){
            return b-a;
        });
        console.log(points);

                    b = ค่าตัวเลขที่มีค่าลบจะถูกเรียงก่อน
                    a = ค่าตัวเลขที่มีค่าบวกจะถูกเรียงที่หลัง

JavaScript Object
    let ชื่อวัตถุ = {propertyName:value}  แบบ Dictionary

        การเข้าถึงข้อมูล   
            objectName.propertyName
            objectName["propertyName"]
    
    เช่น
            let product = {
                Name:"เมาส์",
                Price:1500,
                color:"black",
                category:"computer",
                size:"M",
            };

            console.log("ชื่อสินค้า =",product.Name);
            console.log("ชื่อสินค้า =",product.Price);
            console.log("ชื่อสินค้า =",product.color);
            console.log("ชื่อสินค้า =",product["category"]);        
            console.log("ชื่อสินค้า =",product.size);
    

        ความแตกต่างระหว่าง Array และ Object
            Array มี index เป็นตัวเลข
                Array ใช้ []
            Object กำหนดเป็นชื่อ
                Object ใช้ {}



JavaScript Object (Method)
เช่น
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

        //เรียกใช้ Method
        console.log(product.displayProduct());
        console.log(product.discount());


การยืนยันด้วย confirm() ใช้ confirm("ข้อความ");
    มีผลทางboolean
        true เมื่อ ผู้ใช้กด Ok
        false เมื่อ ผู้ใช้คลิก cancel


HTML DOM (Document Object Model) : มอง HTML เป็นโครงสร้างต้นไม้(ก้อนObject) เรียกว่า DOM
                                   สามารถเปลี่ยนรูปแบบ CSS ได้ และเข้าถึงได้ทุก Element
    
    เข้าถึง Element ผ่าน Id , Tag , Class
        document.get.ElementById("ชื่อไอดี");
        document.get.ElementByTagName("ชื่อแท็ก");
        document.get.ElementByClassName("ชื่อคลาส");
       *ส่วนใหญ่ใช้*  document.querySelector("#ชื่อไอดี หรือ .ชื่อคลาส");
    
    DOM Document
        เปลี่ยนเนื้อหา HTML : element.innerHTML (ใช้ในการกำหนดคุณสมบัติได้ เช่น ตัวหนาของอักษร)
        เปลี่ยนเนื้อหา Text : element.innerText  (แสดงข้อความธรรมดา)
        เปลี่ยน Style Element : element.style.properties = value
    
        ดำเนินการผ่าน Method
            element.setAttibute(attribute , value)     // เปลี่ยนชื่อ class


const textAll=document.querySelectorAll('p');

console.log(textAll[1].innerHTML);   // การเข้าถึงNode ได้ผลลัพธ์แบบไม่มี Tag
item.innerText = "Item";             // .innerText :  สร้างข้อความ


DOM Nodes
    document.createElement(element)  // สร้าง element ใหม่
    document.removeChild(element) // ลบ node ลูก
    document.appendChild(element) // นำ element ไปต่อใน node แม่
    document.replaceChild(new,old) // แทนที่ element



DOM CSS Add & Remove Class
    element.classList.add("class");  // เพิ่ม class style
    element.classList.remove("class"); // ลบ class style
    element.classList.toggle("class"); // สลับ class style    ( สลับ add และ remove )
    element.classList.contains("class"); // เปรียบเทียบ class styles  (เช็คว่ามี class นี้อยู่มั้ย : แสดงในสถานะboolean)


DOM Event : การเกิดขึ้นกับ element เช่น การคลิกเมาส์ , การเคลื่อนย้ายเมาส์ , การกดปุ่มคีร์บอร์ด

            onfocus=" " : เมื่อelementได้รับการโฟกัส
                    ใช้กับ select , text , textarea

            onblur=" " : เมื่อelementสูญเสียการโฟกัส หรือถูกย้ายโฟกัสไปยังelementอื่น
                    ใช้กับ select , text , textarea

            onchange=" " : เมื่อผู้ใช้เปลี่ยนแปลงค่าในฟอร์มรับข้อมูล
                    ใช้กับ select , text , textarea

            onselect=" " : เมื่อผู้ใช้เลือกข้อความ(ใช้เมาส์ลาก) ในช่อง
                    ใช้กับ text , textarea

            onsubmit=" " : เมื่อผู้ใช้คลิกปุ่ม submit
                    ใช้กับ form

            onmouseover=" " : เมื่อobject ถูกเลื่อน mouse pointer ไปทับ
                    ใช้กับ a , div

            onmouseout=" " : เมื่อobject ถูกเลื่อน mouse pointer ที่ทับออกไป
                    ใช้กับ a , div

            onclick=" " : เมื่อobject ถูกคลิก
                    ใช้กับ a , button , checkbox , radio , reset , submit
                    
            onload=" " : เมื่อโหลดเอกสารเสร็จ (รีโหลดหน้าweb)
                    ใช้กับ body

            onunload=" " : เกิดเมื่อยกเลิกการโหลด เช่น คลิกปุ่ม Stop
                    ใช้กับ body

        ** มีหลาย attribute ให้ระบุ this ด้วย ของDOM EVENT
        เช่น  <a href="" onmouseover="hight(this)">Menu 2</a>


EventListener : เหตุการณ์หรือการกระทำบางอย่างที่เกิดขึ้นกับ element โดยรูปแบบจะเขียนในฝั่ง JavaScript ทั้งหมด 
                (ใช้สะดวกกว่า DOM Event : ควรใช้!)
    โครงสร้าง
            element.addEventListner(ชื่อevent,callback)  ** ไม่ต้องพิมพ์ on ที่หน้าชื่อ event **

    เช่น
            // อ้างอิง
            const menu = document.getElementById("menu");
            const display = document.getElementById("display");
            const btn = document.getElementById("btn");

            // event
            menu.addEventListener("change",getMenu);
            btn.addEventListener("click",showWelcome);

            function getMenu(){
                display.innerText = menu.value;
                console.log(menu.value);
            }

            function showWelcome(){
                alert("Welcome to world");
            }
