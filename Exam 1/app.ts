// setTimeout(() => {
//     console.log(1);
    
// },0);

// console.log(2);
// console.log(3);

//------------------------------------------

// let promise=new Promise(
//     function(resolve,reject){
//         const x='js'
//         const y='ts'
//         if (x === y){
//           resolve();
//           else{
//             reject();
//           }
//         }
//     }
// )
// promise
// .then(function(){
//     console.log('Success, You are genius');
// })
// .catch(function(){
//     console.log('Some error has occurred');
// })
//Some error has occured (Output)

//-----------------------------------------

let someArray=['Mushtaq','Amir','Mustafa','Kamran','Louiza','Jacky']
let notFound=true

while(notFound && someArray.length){
    if(someArray[0]==='Jacky'){
        console.log('Found her!');
        notFound=false;
    }
    else{
        someArray.shift()
    }
}
console.log(someArray);


//-------------------------------------

// function myName(){
//     return typeof true
// }

// console.log(myName());   //output: boolean

//------------------------------------------

//let const variable local scope or block scope?

//---------------------------------------

// let sir ={
//     name: 'ali',
//     age: 23
// }

// console.log(sir.name);
// console.log(sir['age']);

//  const enum Priority{
//     Low='low',
//     Medium='medium',
//     High='high'
// }
// console.log(Priority.High);  //key se indexing number dega , value se value hi dega
//console.log(Priority[2]); //error

//---------------------------------------

// enum Status{
//     Active,
//     Inactive,
//     Pending
// }
// console.log(Status[2]);
// console.log(Status.Pending);

//----------------------------------------

// const enum Size{
// Small,
// Medium,
// Large
// }

// let size=Size.Medium
// console.log(size);

//---------------------------------------

// let array=[1,2,3,4,5]
// array.forEach((value)=>{
//  console.log(value + 2);
// })
// console.log(array);

// let array2=['a','b','c','d',]
// array2.map((value)=>{
//     console.log(value+'for');
// })
// console.log(array2);


// let arr=[1,2,3,4,5]
// let reduce=arr.reduce((abc,bcd)=>{
//    return abc+bcd
// })

// console.log(reduce);

// console.log(+ true);
// console.log(+" ");

// let arr2=[1,2,3,4,5]
// let reduce2=arr.reduce((abc,bcd)=>{
//    return abc-bcd
// })

// console.log(reduce2);

// let arr3=[1,2,3,4,5]
// let reduce3=arr.reduce((abc,bcd)=>{
//    return abc+bcd
// })

// console.log(reduce3);

// let a : unknown = 3

// let b: any = 3

// a.
// b.
// console.log(true + true)  // boolean cannot be added
// console.log(true+false);
// console.log(0+false);   //boolean cannot be added with any number

//--------------------------------------------------------------
let num1=5
let num2= "2"

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);










