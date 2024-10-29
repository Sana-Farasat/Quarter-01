//enums 
//pre defined values hti hai type literals ki trah
 enum Fuel{   //enum is accessible through indexing
    PETROL,
    DIESEL,
 }
 console.log(Fuel[0]);  //PETROL
 console.log(Fuel[1]);  //DIESEL  
 
 
 enum Fuel1{   //Values assign ki or values k through access kia
    PETROL1='Rs 270',
    DIESEL1='Rs 100'
 }
 console.log(Fuel1.PETROL1);  //Rs 270
 console.log(Fuel1.DIESEL1);  //Rs 100
 
const enum Fuel2{
    PETROL='Rs 270',
    DIESEL="Rs 300",
}
console.log(Fuel2[0]);  //Error  //indexing k through access nh krskte
console.log(Fuel2.DIESEL); //Ok //values k through access krte hen

const enum Menu{
    Tikka='Rs. 150',
    Biryani='Rs. 100',
    Qorma='Rs. 300'
}
console.log(Menu.Tikka);
console.log(Menu.Biryani);
console.log(Menu.Qorma);

//trim(),strip()
//rest parameters ,isme indefinite number of arguements hoskte hen

function Wallet(color:string,...others:string[]){
console.log(color,others,()=>"hello")
}
Wallet('red','currency','atm card','nic')//currency se le kr agy sari arguement rest parameter m jaengy

function fileupload(...images:string[]){   //join //toLocalString
console.log(images);
}
fileupload('sana image', 'maryum image','anum image')

 function classes(online:number,...onsite:number[]){
console.log(online,onsite.toLocaleString());
 }
 classes(1,2,3,4,5)

 //camscanner pdf //anydesk

 //optional parameter
let Form=(name:string,feedback?:string)=>{   //jb hm optional key use krte hen or user optional key m koe input na de tw wo undefined print krega islye user input de ya na de but undefined print na ho is condition ko overcome krne k lye if ki condition use krte hen optional key k lye taky undefined print na ho.....
console.log(name,feedback);
}
Form('Sana','Good Class')
Form('Sana')

interface Product {
    name:string,
    price?:number  //optional key
}
let product:Product={
    name:'Bread'
}

//d/f b/w interface and type alias
type EmpName=string  //number //boolean
const FirstName:EmpName='Ali'

interface EmpName2 {

}

//Narrowing
 //ksi bh cheez ko precise krna narrowing kehlata hai

 //union type
  let age:number | string
  age=22
  //age='45'
  //narrowing
  console.log(typeof age);
  console.log(typeof age);

  age=34.7658493647
  //age=25
  if(typeof age == 'number'){
    console.log(age.toFixed(2));
    age+5
  }
  //narrowing
  age="twenty"
  if(typeof age){
    console.log(age.toUpperCase);
  }

  //type never

  let value:any=30 //number
  value='Sana' //string
  value=[]  //array
  value={}  //object
  value=()=> true //arrow func

  let values:unknown= 30 //number
  values='Sana' //string
  values=[]  //array
  values={}  //object
  values=()=> true //arrow func

  //built in object date , math ,error
  
let val:unknown          //type unknown  any ,unknown means kch bh value
let val1:unknown =val
let val2:any =val

let value3:string=val   //error

//unknown =unknown  //ok
//unknown = any  //ok

//sir zia repo review (union literals)
// (type unknown never types)

//testmoz.com
//passcode = giaicb1

//modules

//explicit casting (data type)
let val4:unknown='ali'
console.log((val4 as string).toUpperCase())
//console.log( <string>val)

console.log()

//let valOne:string=val //error

//array[] array<string>
  
//type assertion k lye : colon use krte hen
//type guard
  


