//Structural typing  //nominal typing
var ball = {
    diameter: 10
};
var sphere = {
    diameter: 10
};
//properties or data type dono same hai islye ok hai/hands on
ball = sphere; //ok
sphere = ball; //ok //valid
var tube = {
    diameter: 10,
    length: 8
};
//LHS =RHS
//RHS m utni properties hon jo LHS m hon tw valid hen
tube = ball; //error// ball tube k sth compatible nh hai kyn k ball m ek property missing hai , tube ko 2 property chaiye but ek mili ball ki
ball = tube; //ok //ball ki required property diameter hai jo tube m bh hai islye valid hai ball ko bs diameter chaiye
//structural typing //inline typing
//LHS m cheezen ziada ho or RHS m km ho tw error aega
//LHS m cheezen km ho or RHS m ziada ho tw error nh aega
var person = {
    id: 1,
    name: 'Ali',
};
person = {
    id: 9,
    name: 'Ahmed',
};
var obj = {
    id: 30, //id explicitly lkh hai 
    fullName: 'Ali Jawwad', //ye index signature hai
};
obj = {
    id: 20,
    country: 'Pak'
};
obj = {
    id: 90,
    fullName: 'Hafiz',
    country: 'Pak',
    rollNo: 9,
    isPass: function () { return true; },
    fruits: [],
    marks: {}
};
//jese id ki property explicitly di if koe or property bh di fathername wgera tw hr object m dono property lazmi dngy 
//index signature means jb number od properties dyanamic ho or unke name bh dynamic ho
//index signature [abcd : number]sari properties object ki number krni  prengi jo meaningful nh lgegi
//sir zia repo structural typing
//stale and fresh object
//jb ap ksi object ko ,jb ek object ka var dusre obj k var k sth assign ho rkha jae ye stale object hta hai
//fresh object, jis line pr obj create hta hai curly braces k sth wo fresh object hte hen , first time jo create krte hen, jo reinitialized hte hen wo bh fresh object hi hte hen
//stale and fresh object
ball = tube; //ok  //stale object
tube = ball; //vice versa
ball = {
    diameter: 20,
    length: 10,
};
//technical: stale obj m ts strict checking nh krta, fresh obj m ts strict checking krta hai
//asynchronous and synchronous programmming 
console.log(1);
console.log(32);
function add() {
    return 5 + 5;
}
var res = add();
console.log('async code'); //async code ki wja se agy puri execution ruk jaegi
console.log(add);
//ye code without any delay chla is trha k code ko synchronous code kehte hen, immersion execution hti hai isme
//aysynchronous code wo hta hai jiske chlne m execution m thra sa time lge
//asynchronous 
//2 bnde 1-call stack, 2-callback queue
//event loupe website , 1st link
//best ppt to pdf cnverter
//smallpdf.com
//paraphrasing tool
//call stack synchronous code jta hai
//callback queue asynchronous code jta hai
//call backs syntax
//higher order func  //main func
function One(callback) {
    console.log('One');
    callback();
}
//callback func
function Two() {
    console.log('Two');
}
One(Two); //One(Two())function call krte time round bracket nh aengy
//settimeout
function One1() {
    console.log('One');
    setTimeout(function () {
        console.log('Delay!after 2 sec');
    }, 2000);
    console.log('THREE');
}
One1();
//callback func
// function Two1(){
//     console.log('I AM CALLBACK');
// }
// One1(Two1)
//1 sec = 1000 milli second
//higher order func  //main func
function One2(callback) {
    console.log('One');
    setTimeout(function () {
        console.log('hello');
        callback();
    }, 2000);
    console.log('three');
}
//callback func
function Two2() {
    console.log('four');
}
One2(Two2);
//callback hell 
function MyFunc() {
    return new Promise(function (resolve, reject) {
        //hogya,nh 
        var isError = false;
        if (isError) {
            reject('error');
        }
        else {
            setTimeout(function (resolve) {
                console.log('I m resolved');
            }, 2000);
        }
    });
}
MyFunc().then(function () {
    console.log('resolved');
}).catch(function () {
    console.log('error');
});
//RESOLVE hua validation hogae tw then chalye ga tw then chalega
MyFunc(); //error .reject m jaega
//resolve.then()
//reject.catch()
