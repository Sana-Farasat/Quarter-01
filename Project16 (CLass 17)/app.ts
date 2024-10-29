// Async programming

let food=true
let cookMeal=()=>{
   return new Promise((resolve,reject)=>{
    console.log('Food In Process');
    
    if(food){
   setTimeout(()=>{ resolve('Food was amazing')  //resolve is a function we will use () with this, resolve is not a parameter
    }

,1500)
    
}else{
     reject('Gas chali gae')
    }

   }
 )
}

cookMeal()
.then((response)=>{
    console.log('Then=>',response);
    return 'Biryani'
})
.then((res)=>{
    console.log(res);
    return 'Raita'
})
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log('Catch=>',error);
    return "order from hotel"
})   //; semi colon nh lgana yahn 
.then((rej)=>{
    console.log(rej);
})
.finally(()=>{
    console.log('Eated');
})

//home work-------async / await  =>step09 repo

//ternary operators => step union

if(5 < 6){
    console.log(true);
}else{
    console.log(false);
}
//         condition     if                   else
let result= 5 < 6 ? console.log(true) : console.log(false);

let result2= 5 < 6 ? true  : false ;
console.log(result2);

let teacher= "Miss Samreen"
let answer = ( teacher !== "Sir Ali Jawwad")  ? "Miss Samreen" : "Sir Ali Jawwad"
console.log(answer);

//Object Oriented Programming (OOP)

//object se related programming
//oriented means ksi cheez se koe cheez nikle

//Classes----objects
//inheritance
//encapsulation
//abstraction
//polymorphism

//class is a blueprint of an object
class Person{           // class name will be in capital
   //class properties(props)
   name:string= "Sana"
   age:number=24

   //constructor()
}

//Making an object -----new keyword object bnata hai class ka
const p1=new Person()
console.log(p1);
console.log(p1.name);
//console.clear()
console.table(p1)

class Person2{           // class name will be in capital
    //class properties(props)
    name:string;
    age:number;
 
    constructor(n:string , a: number){
       this.name=n     //class property ko use krna ho tw this lgana prta hai
       this.age=a
    }

    getDetails():string{
        return `My name is ${this.name} and my age is ${this.age}`
    }

    getDetails2(food:string):string{
        return `My name is ${this.name} and my age is ${this.age} and my favorite food is ${food}`
    }
 }
                //dynamic values
 let p2=new Person2('Maryum',16)   //new kayword ek object bnata hai or constructor function ko bh call krta hai
let p3=new Person2('Sana',24)   //instance of a class 
let p4=new Person2('Sana',24)
console.log(p4.getDetails());
let p5=new Person2('Samreen', 25)
console.log(p5.getDetails2('Daal'));


//jb object bn rha hta hai tw isko instance of a class kehte hen,instance ka mean bh yehi hai k object bn rha hai
//isme bh sequencial wise chalega 1st parameter ka 1st arguement 2nd parameter ka 2nd arguement

//constructor m dubara type de rhe hen property alg cheez hai constructor k parameter alg cheez hai islye type di

//class ki property this k keyord k bager use nh kr skte

class Student{
    name: string;
    timings: string | number;

    constructor(studentName:string , time:string | number){
    this.name=studentName,
    this.timings=time
    }

    printDetails(){
        return `My name is ${this.name}`
    }
}

let student=new Student('Sana','2 to 5')
console.log(student);
console.log(student.name);















