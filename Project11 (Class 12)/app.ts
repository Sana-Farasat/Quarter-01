//Type alias
//js pr bt kr rhe thy pehle ab js k context m bt krengy

type StudentName = string;   //pascal case

let studentName : StudentName = "sana"    //camel case //under the hood 
//primitive data type

type Alien=string;
let alian:Alien = 'Jaddu'

type MainCourse = string[];

let mainCousre:MainCourse=['biryani','halwapuri'];

console.log(mainCousre);
console.log(typeof(mainCousre));

type ChattarPattar = string[];
let snacks:ChattarPattar= ['chips','biscuits','cold drink','banana'];
//type and var name same bh ho bhaly but camel and pascal case ka difference hna chaiye

type BooleanArray= boolean[]
let ifPresent:BooleanArray=[true,false,true,false];

//ek hi variable ko multiple data type assign krna is called type union

//jb ap sure nh hte k apko knsi data type milegi apke variable m
//roll no , present absent

let rollNumber:string | number = 1234   //ek hi variable ko 2 data type asgn horhi hen
console.log(rollNumber)
rollNumber='present'
console.log(rollNumber)
let rollNumber1:string | number = 'present' 
console.log(rollNumber1)

let isPresent: string|boolean|number='present'//'ali //default value rkhen na rkhen koe issue nh
console.log(isPresent)
isPresent=false
console.log(isPresent)

//any can't be used, ts ka aim hi khatam hojaega...
// any se js hojaega ts nh rahega, any m sb type assign hoskti hen...
//union literals m 2 4 type asgn krte hen wo phr bh restricted hen...

//Type literals
//type literals ts ka ek esa feature hai jis me directly ap apni values ko hi as a data type asgn krskte hen...
//ye jb hoga jb apko pta ho k user isi range m input dega...
//exapmple days of a week monday to sunday option ,months name, slots,dress size...
//developer ko pta hoga k user 7 days m se hi choose krega koe 8 day choose nh kr skta...
//ye hti hai type literals jisme developer ko values bh pta hti hen...

let size:'small'| 'medium' | 'large'  //yahn apni values ko directly as a type asgn krrhe hen
size='small'
size='medium'
size='large'
size='Mega'//read error type ka error giving   //error  

let trafficLights : 'red' | 'green' | 'yellow' // ye dafault bh krskte hen or agy value bh asgn krskte hn
trafficLights='red'
trafficLights='green'
trafficLights='yellow'
trafficLights='black'  //error
//jb hme pehle se hi pta ho user ki trf se kn knsi values aengi this is called type literal
//user status on website login logout
//based on the website boolean wgera bh krskte hen

//talking about objects {}
type MyCar={   //type alias
    make:string,
    model:number,
    variant:string | number,
    isAC:()=> boolean,
    maxSpeed:()=> string,
    stopCar: Function //function terminal m nh arhe ye cli ka behaviour hai, call krna prte hen function ko
}
let myCar : MyCar = {
    make: 'toyota',
    model: 2024,
    variant: '1800cc',//,123,
    isAC:()=> true,
    maxSpeed:()=>{
        return 'Maximum speed is 200'  // arrow function and normal function kch bh use krskte hen
    },
    stopCar(){
    console.log('hello')
    return 'stop car'
    }
} //alphanumeric //inhi specs k array bh hoskte hen
//property type definition and main object m same hni chaiye
 console.log(myCar)
 console.log(myCar.make)
 console.log(myCar.model)
console.log( myCar.variant)
console.log(myCar.isAC());

console.log(myCar)// sari properties aengi function nh aengy kyn k termianl usy esy accept krta hi nh hai
console.log(myCar.isAC());//function call krne prengy

type Car={
    make:string,
    color:[]
}
let mycar={
    make: 'toyota',
    color:['white','black','yellow']
}
console.log(mycar.color[1])
//nested objects

type Slip ={ 
    customerName:string,
    products:
    {
        productName:string,
        price:number
    }
}
let bill : Slip = {
 customerName:'Ali',
 products : {
    productName : 'Bread',
    price : 100
 }
}
console.log(bill.products.productName);
//ts custom type ko kbi inference nh krta , choti choti type ko string boolean wgera ko ts infer kr skta hai primitive ko infer kr skta hai but complex data type ko infer nh krskta 

//Type intersection means common cheezon ko bahir nikal lena
//k apke pass multiple objects type ho name ho roll no ho as a student , teacher ho tw qualification experience tw meri ye requirement hai dono object type ko merge krun or ek hi object m le aun

type Student = { 
    studentName : string,
    rollNo : number,
}
type Teacher = { 
    teacherName : string,
    ex : string | number
}
//type intersection
 type ClassRoom = Student & Teacher  // ek object ko 2 type milrhi hen
 //let classRoom :Teacher & Student = {}
let classRoom : ClassRoom = {
      studentName : 'ali',
      teacherName: 'haseeb',
      rollNo: 123,
      ex: 2
}
//2 cheezon ko merge krna ho tw type intersection use krte hen,type intersection nh krte tw dono types k alg alg object bnane prte
//home work office company employee manager

type Employee={
    employeename:string,
    ex1:number
}
type Manager={
    managername:NamedCurve,
    ex2:number
}
type Merge=Employee & Manager

let office : Merge = {
    employeename:'sana',
    ex1: 1,
    managername: 'komal',
    ex2: 3
}
console.log(office);

interface Employee1{ // = error ,{}just object k sth chlta hai
employeename:string
}
 let employee:Employee1 = {
  employeename: 'sana'
 }
interface Manager1{
    managername:string
}
//differernce
//type alias can be used with string , number, arrays, functions, objects
//interface sirf objects k sth chalta hai


















