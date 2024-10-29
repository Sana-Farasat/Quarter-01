//type alias: string boolean arrays number objects pr apply hte hen
//interface: jb object ka structure bnana ho tw interface bna skte hen interface object k sth compatible hte hen only

interface Slip{
    customername: string;
    timestamp:string;
}

let bill:Slip={
     customername:'Sana',
     timestamp:'12:05PM'
}

console.log(bill.customername,bill.timestamp);

//nesting .do it your own

//type literals m apni values ko hi as a data type asgn kr skte hen 
//glass example, jb apko pta ho k future m kya values any wali hen

let juice:'small'|'large'= 'large'

//loops
//for loops
//syntax ,use case....
//1 2 3 4 5
//for loops(1. strating point ,2.ending point 3. starting point se ending point tk jana kese he/steps to reach ending point)
//1.initialization ..declare variable
//2.condition.. kahn tk chalega .....condition true false
//3. expression.. kese chlega

for (let i=1; i<= 5; i++){     // ; semi colon to end 1 expression
 console.log(i);
 console.log(`${i}. Hello`)   // 1, 2, 3, 4, 5
}

for (let i=1; i<= 5; i++){
   //console.log(i);
   //console.log(`${i}. Hello`)
   console.log(`\n ${i}`)
   console.log()
    
   }
   for (let i=1; i< 5; i++){   //4 tk chalega = hta dya ab ek number pehle tk krega 4 tk
    console.log(i);
   }

   for (let i=5; i<= 15; i++){   //5 se 15 tk chalega
    console.log(i);
   }

   for (let i=5; i<= 25; i+=5){    //5 10 15 20 25
    console.log(i); //or
    console.log(i+5)
   }

        //starting ,   ending,    jana kese he
   for   (let a=10;     a >= 1;      a--){  //10 9 8 7 6 .......
    console.log(a);
    console.log(`${a}. Hello`)
   }

   for (let i=10; i>= 5; i--){  //condition m > greater than use kia kyn k starting point pehle se hi bari hai
    console.log(i);
    console.log(`${i}. Countdown Timer`)
   }

//for loop use interview and mcqs use jb apko ending point pta ho tb ap for loop use krte hen login pw example iteration use hue v hti hen 3 dfa ki

//while loop bh isi trha hta hai thra difference he
let abc=1
while(abc <= 15){
 console.log(abc);  //value console krwani he or
 abc++     //increment by 1 krna hai
}
while(abc <= 15){  //1 4 7 10 13
    console.log('***')
    console.log(abc);  //value console krwani he or
    abc+=3     //increment by 3 krna hai
  //abc =abc+3
}

//array ki values ko loops k through kese print krwaya jae..Let's learn

//for loop 
//number of iterations nh pta ho tw while loop use krengy atm withdraw example
//coding night todo app
   
while(true){  //infinite loop  ctrl+c
    console.log(abc);  //value console krwani he or
    abc++    
}

let fruits=['apple','banana','mango']
 console.log(fruits.length)
 fruits.push('muli')
 console.log(fruits);
 fruits.unshift('began')
 
 for(let i=0;1<4;i++){   //check for in loop ,for of loop
    console.log(fruits);
    console.log(fruits[i]);  //static //agy ziada elements hngy usy dyanamic bnane k lye line se print krwane k lye loop use krengy
    
}

for(let fruit of fruits){
    console.log(fruit);
}
//backend frontend
//index element glt pass hoga tw undefined error dega >4 , >3

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit in fruits){
    console.log(fruit);
    
}

fruits.forEach(fruit => console.log(fruit));


//static means hath se define krdya k yehi values hongi
//dynamic backend pr values add hngi tw wo bh print hojaengi
//students example

//for of loop
for(let phal of fruits){   // complex se easier syntax , map built in fnctions
    console.log(phal)
}

//for of loop bs array pr chlta hai
//for loop se functions wgera sb achieve krskte hemn

//typescript features enums
//pre define values lkh kste hen, pre define set of values k sth km aengy
//compass has 4 values
 enum Direction{
    North,
    South,
    East,
    West
 }
 //access through indexing
 console.log(Direction.North) //enum apne pass indexes rkhte hen or 0 se start hte hen or inka array se koe lena dena nh hai
 //iska use case bh wohi hai jo type literals ka hta hai values pehle se pta hngi

 //use case jb apko pehle se hi pta ho values 
 
 enum Direction1{
    North='North',
    South='South',
    East='East',
    West='West',
 }
enum Timeslot{
    slot1='9 to 12',
    slot2='2 t0 5',
    slot3='7 to 10'
}

console.log(Timeslot.slot1);

enum Direction2{
    a=1,
    b,
    c,
} /// 1 2 3 0 se start nh krega

enum Direction3{
    f,
    g=6,
    h,
    i,
}

enum phone{
    number=09877554,  // 0 se numeric value start nh krte....error
    num2=987655,
}

console.log(phone.num2); //1st way to access
console.log(phone[1]);  //2nd way to access  //tsconfig ki file bni hogi tw esy access krne m error dega

//breakpoint remove on click on breakpoint again

//jb values asgn krne k bd indexing se access na kren wrna error aega

//tuples def use case syntax
//id customername salary experience
 
type DataBase=[number,string,number] //type alias ready for tuples

let database:DataBase[]  =[
    [356765,'sana',7865]
]
console.log(database[0][1][2]); //array index ,object . accessibility way

//for of loop
for(let data of database){
    console.log(data);
}

let database1:DataBase[]  =[
    [356765,'sana',7865],
    [67888,'hina',8765],
    [4678,'komal',88766],  //how it will access?
]
console.log(database1[1]);

//for of loop
for(let data of database1){
    console.log(data); //1
    console.log(data[0],data[1],data[2]);//2

}
let abcs:number|string|boolean=true //union literals

// objects .notation , square notation [key]









