function country() {
    console.log('australia');
    return "Pakistan";
}
var ans = country();
console.log(ans);
//function ka new model
//arrow functions // it use with built in functions of javascript
//arrow function syntax
var Hello = function () {
    console.log('Hello from arrow function');
};
Hello();
var Hello1 = function (digit) {
    return digit;
};
var ans1 = Hello1(5);
console.log(ans1);
var isEven = function (digit) {
    if (digit % 2 == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
    return digit;
};
isEven(10);
isEven(103);
//single statement return krwani ho arrow function se contarct type
//without curly braces without return keyword
var Name = function () { return "Sana"; };
var ans2 = (Name);
console.log(ans2);
var Number1 = function () { return "8"; };
Number1();
var Boolean1 = function () { return "True"; };
Boolean1();
//arrow function kbi bh use krskte hen, depends on use pehle wale use kren function ya ye abi wale no brainer hai
var Calc = function (digit, digit2, sign) {
    if (sign == "+") {
        console.log(digit + digit2);
    }
    else if (sign == "-") {
        console.log(digit - digit2);
    }
    else if (sign == "*") {
        console.log(digit * digit2);
    }
    else if (sign == "/") {
        console.log(digit / digit2);
    }
    else if (sign == "%") {
        console.log(digit % digit2);
    }
};
//function k through input lia, ye multiple statements pr return statement nh lgaengy
//+ return krwana ho tw if k block m return lagaskte hen
//try return statements on this calculator
//global and local scope variables
//global scope kahin se bh accessible hte hen hr jga se access kr skte hen
//local acope variable ki access usage kahin na kahin khatm hojata hai
var SirAmeen = "Sir Ameen";
function Alisession() {
    var ali = "Ali";
    console.log(hamzah); //hamzah is local scope variable ....it is not accessible outside the function...error
    console.log(SirAmeen);
}
Alisession();
var Hamzasession = function () {
    console.log(ali); //ali is local scope variable ....it is not accessible outside the function...error
    var hamzah = "Hamzah";
    console.log(hamzah);
    console.log(SirAmeen);
};
Hamzasession(); //teachers block scope variable hen ,sir ameen is global variable hen
var army = "Army"; //global scope
var KPS = function () {
    var kps = 'Kharadar police station';
    console.log(kps);
    console.log(army);
};
var FPS = function () {
    var fps = 'Shahrah e faisal police station';
    console.log(fps);
    console.log(army);
};
var FPS0 = function () {
    var fps = 'Shahrah e faisal police station'; //block scope variable
    console.log(fps);
    //console.log(army)
};
console.log(army); //line by line print hoga
FPS0(); //func bd m call kiya tw bd m print hoga
var isEven0 = function (digit) {
    if (digit % 2 == 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
};
isEven(10);
isEven(103);
var teacher = "Sir Ameen";
function AliSession() {
    var teacher = "Ali";
    console.log(teacher); //js apne nearest scope m find krta hai ,replace nh hoga
}
AliSession();
console.log(teacher);
//Array
//shopper example for array
//var use to store one value,array use to store multiple values
//array m bs ek hi trah ka data store krte hen
//hotel menu ,ghr ka menu (Other example of arrays)
//indexing example: book index k is page pr ye wala topic hai
// index     0        1       2       3         4          5      
var sabzi = ['Moli', 'Kareka', 'Aloo', 'Shaljam', 'LalMirch', 'HariMirch'];
console.log(sabzi);
console.log(sabzi[1]);
//1st procedure manualy,2nd procedure js k built in functions ko use kren
sabzi[3] = 'Arwi'; //manually changed
console.log(sabzi);
sabzi.pop(); // remove from last...()islye k function hai pop ...(.) se built-in functions aengy bht sary
sabzi.push('Shimlamirch'); //add in last
sabzi.shift(); //remove from start
sabzi.unshift('harimirch'); //add in start
//ek sabzi remove kia tw usy dubara bh add kr skte hen
