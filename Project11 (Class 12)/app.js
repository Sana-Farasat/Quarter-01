//Type alias
//js pr bt kr rhe thy pehle ab js k context m bt krengy
var studentName = "sana"; //camel case //under the hood 
var alian = 'Jaddu';
var mainCousre = ['biryani', 'halwapuri'];
console.log(mainCousre);
console.log(typeof (mainCousre));
var snacks = ['chips', 'biscuits', 'cold drink', 'banana'];
var ifPresent = [true, false, true, false];
//ek hi variable ko multiple data type assign krna is called type union
//jb ap sure nh hte k apko knsi data type milegi apke variable m
//roll no , present absent
var rollNumber = 1234; //ek hi variable ko 2 data type asgn horhi hen
console.log(rollNumber);
rollNumber = 'present';
console.log(rollNumber);
var rollNumber1 = 'present';
console.log(rollNumber1);
var isPresent = 'present'; //'ali //default value rkhen na rkhen koe issue nh
console.log(isPresent);
isPresent = false;
console.log(isPresent);
//any can't be used, ts ka aim hi khatam hojaega...
// any se js hojaega ts nh rahega, any m sb type assign hoskti hen...
//union literals m 2 4 type asgn krte hen wo phr bh restricted hen...
//Type literals
//type literals ts ka ek esa feature hai jis me directly ap apni values ko hi as a data type asgn krskte hen...
//ye jb hoga jb apko pta ho k user isi range m input dega...
//exapmple days of a week monday to sunday option ,months name, slots,dress size...
//developer ko pta hoga k user 7 days m se hi choose krega koe 8 day choose nh kr skta...
//ye hti hai type literals jisme developer ko values bh pta hti hen...
var size; //yahn apni values ko directly as a type asgn krrhe hen
size = 'small';
size = 'medium';
size = 'large';
size = 'Mega'; //read error type ka error giving   //error  
var trafficLights; // ye dafault bh krskte hen or agy value bh asgn krskte hn
trafficLights = 'red';
trafficLights = 'green';
trafficLights = 'yellow';
trafficLights = 'black'; //error
var myCar = {
    make: 'toyota',
    model: 2024,
    variant: '1800cc', //,123,
    isAC: function () { return true; },
    maxSpeed: function () {
        return 'Maximum speed is 200'; // arrow function and normal function kch bh use krskte hen
    },
    stopCar: function () {
        console.log('hello');
        return 'stop car';
    }
}; //alphanumeric //inhi specs k array bh hoskte hen
//property type definition and main object m same hni chaiye
console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.variant);
console.log(myCar.isAC());
console.log(myCar); // sari properties aengi function nh aengy kyn k termianl usy esy accept krta hi nh hai
console.log(myCar.isAC()); //function call krne prengy
var mycar = {
    make: 'toyota',
    color: ['white', 'black', 'yellow']
};
console.log(mycar.color[1]);
var bill = {
    customerName: 'Ali',
    products: {
        productName: 'Bread',
        price: 100
    }
};
console.log(bill.products.productName);
//let classRoom :Teacher & Student = {}
var classRoom = {
    studentName: 'ali',
    teacherName: 'haseeb',
    rollNo: 123,
    ex: 2
};
var office = {
    employeename: 'sana',
    ex1: 1,
    managername: 'komal',
    ex2: 3
};
console.log(office);
var employee = {
    employeename: 'sana'
};
//differernce
//type alias can be used with string , number, arrays, functions, objects
//interface sirf objects k sth chalta hai
