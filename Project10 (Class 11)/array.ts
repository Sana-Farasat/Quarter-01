let fruits=['apple','orange','mango'];

console.log(fruits);
console.log(fruits[0]);  //book index example 
console.log(fruits[333]);

console.log(fruits[0]='grapes');
fruits[0]='grapes'
console.log(fruits);

fruits.pop()
fruits.pop()
fruits.pop()
console.log(fruits);
fruits.push('grapes');
fruits.push('grapes');
fruits.push('grapes');
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.unshift('grapes')
console.log(fruits);

let fruits2= fruits.pop()

fruits.push('peach','grapes'); // same as push,unshift will be applied
console.log(fruits);

let slicedarray=fruits.slice(1,3)//3 se pehle 2 tk krega, it does not touch original array ye array ki copy bnata hai or us pr km krta hai,ye array ka ek portion bnata hai, it takes 2 arguement 
//slice = 1 : first arguement starting point(included)
//2: second point ending(excluded)
console.log(slicedarray);
let slicearray=fruits.slice(0) //for 0 shift is available
let slice1array=fruits.slice(1,0) //1st arguement lesser 2nd greater
let slice2array=fruits.slice(-2) //negative indexing starts from 1 ,left to right
//-4,-3,-2,-1 negative indexing concept
//slice array k portion bnata hai

//splice
let fruits1=['apple','orange','mango','grapes']
//1st=starting from 1,2nd=ktne remove krne hai
fruits1.splice(1,2);// hover the mouse! deletecount 0 se greater hua tw delete krega
fruits1.splice(1,2,'mango');
fruits1.splice(0,2);//0 se start lega, 2 ko remove krega,
fruits1.splice(0,2,'peach','banana'); //replacement,shopper e.g.,book shelf se 2 books hatae 2 add krdye same like as element

fruits1.splice(0,4);
fruits1.splice(-1,-3);

fruits1.splice(0,2,'peach','banana','papaya','chickoo');

console.log(fruits1)

fruits1.splice(0,0,'litchi','watermelon'); //only add hoga remove nh hoga kch,0 se krwae shuru ki islye 0 pr add hua
fruits1.splice(3,0,'chickoo','melon');// 3 se operation start krega
fruits1.splice//number wali 0 wali arguement dena lazim hai wrna wo tw string type bn jaega 
fruits1.splice(1,'strawberry','orange');//2nd arguement no hai hmne string type diya type change krna possible nh....strawberry will give error
//positive indexing starts from 1 from start and negative indexing starts from last from -1

//OBJECTS ,js m ek feature hai object ka, is world m hr cheez object hai ,gari ,marquee,insan

const myCar = {
    brand: "toyota",
    model: 2023,
    variant: "1800cc",
    start : () => {
        return "starting"
    },
    maxSpeed : () => {
        return "MaxSpeed is 200"
    }
}
console.log(myCar);
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.variant);
myCar.variant="2500"
console.log(myCar.variant);
myCar.start()
console.log(myCar.start());
console.log(myCar.maxSpeed());

//all data types can come in an objects even functions arrays can come too 

//array m functions store nh krskte hen object m store kr skte hen

//next quarter m arrays m objects hnge

//real world m multiple structured values arhi hngi hmare pass

let students=[          //storing multiple objects in an array
    {
        name: 'Sana',
        email: 'abc@gamil.com',
        rollno: 123
    },
    {
        name: 'Sana',
        email: 'abc@gamil.com',
        rollno: 123
    },
    {
        name: 'Sana',
        email: 'abc@gamil.com',
        rollno: 123
    },
    {
        name: 'Sana',
        email: 'abc@gamil.com',
        rollno: 123
    },
]
console.log(students);
console.log(students[1].rollno);

//filteration ,ecommerce web on product jo under 1000 ho,bank system globally
//pakwheels corolla ajaye search krne pr ye filteration hai
//filteration name ya rollno se get krskte hen ,based on the record ,based on the keyword
//redcolor k dresses ajaen , ye filteration hoti hai

console.log(students[1].name)
console.log(students[1].name='Nabeel') //update //replace
console.log(students[1].name)

let myCity={  //object type

}

//type alias
let std:string='Sana'
console.log(std)

//type alias
type IrfanPappu = string
type IrfanChintu=string

const irfan: IrfanPappu="0300000000"
const irfan2: IrfanChintu="09087034567"
//type name bh meaningful hna hai
//type alias typescript ka feature hai

//variable or type name meaningful hna chaiye ye js context m tha type alias typescript ka feature hai

//irfan office irfan frnds circles ka
//irfan pappu office ,irfan chintu frnds circle ka//to improve readability in typescript

//type alias student,type alias teacher

type Student=string
type Teacher=string
type RollNo=number
type Phone=number

const student:string='Ali'
const teacher:string='Haseeb'

const student1:Student='Ali'
const teacher1:Teacher='Haseeb'

const rollno:RollNo=1234
const phnNo:Phone=678900553

//union type literals


