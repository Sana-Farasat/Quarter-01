//promises
const Func = () => {
   return new Promise((resolve , reject)=>{
     resolve('I am resolved')  // (5+5) 
    })
}

Func()
.then((res)=>{
  console.log(res);
})

const Funct = () => {
    return new Promise((resolve , reject)=>{
      reject('I am reject')  // (5+5) 
     })
 }
 
 Funct()
 .catch((res)=>{
   console.log(res);
 })
 //-----------------------------------------
 const Funcn = () => {
    return new Promise((resolve , reject)=>{
      resolve('I am resolved')  // (5+5) 
     })
 }
 
 Funcn()
 .then((res)=>{
   console.log(res);
 })
 
 const Functn = () => {
     return new Promise((resolve , reject)=>{
       reject('I am reject')  // (5+5) //resolve
      })
  }
  
  Functn()
  .catch((res)=>{
    console.log(res);
  })

//promise => resolve function => .then ko dhundega
//promise => reject function => .catch ko dhundega
//tsconfig file create krni hai lazmi...init =>initialize =>file setting target changing


//cricket match asynchronous task hta hai
let isVictory = true
const Cricket = () => {
    return new Promise((resolve,reject) => {
  if(isVictory){
    resolve('We Won')
  }else{
    reject('We lost')
  }
    })
}

Cricket().then((res)=>{
    console.log(res);
})
.catch((rej)=>{
    console.log(rej);
})

//chaining
//passing the pillow wala concept apply hota hai chaining pr k pehla wala dusre ko pass krega ,dusra tessre ko pass krega and so on....

let isVictory1 = true   //false
const Cricket1 = () => {
    return new Promise((resolve,reject) => {
  if(isVictory){
   console.log('Match in progress');
   
   setTimeout(()=>{ resolve('We Won')
    },1500)}else{         //1.5 sec = 1500
    reject('We lost')
  }
    })
}

Cricket1().then((response)=>{  //1st wale ko pillow main code pass krega
    console.log(response);
    return 'MOM Babar Azam'   //return k keyword k bager undefined aega
})
.then((res)=>{
    console.log(res);
    return '100 0f 40 balls'
})
.then((res)=>{
    console.log(res);
})

.catch((rej)=>{
    console.log(rej);       //invalid credentials
    return 'Qudrat ka nizam'
})
.then((err)=>{
 console.log("ErrResInThen",err);
   return 'Knocked out'
})
.then((err)=>{
    console.log(err);
})

.finally(()=>{
    console.log('Flight pakro');
})

//response return/print krwane k lye .then hi lgana prta hai chahe wo .catch ka hi response return kyn na krwa rhe ho

//1000 ms = 1 second

//.finally

//async await

//special function ! not a normal function
//await ka keyword async function m hi lagega

async function getResult(){
   try{
    const result = await Cricket()
    console.log(result);   //promise {<pending>}
   }  
   catch(err){
    console.log(err);
   }  
   finally{
    console.log('Comeback home');
    
   }
   //return 'MOM Babar' //iska response next async function m milega
}
getResult()  //simply call hoga variable m store nh kren
//const data = getResult()
//console.log(data);

//Async function => Response => Try Block
//Async function => Error => Catch Block

//next class OOP 
//repo step 11 read second article









