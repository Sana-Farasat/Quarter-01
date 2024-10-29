var a = 0;
//js run, line by line ,column by column 
//js run, left to right, top to bottom
console.log(a++); //0 // increments++ (post=bd m update krega)
console.log(a); //1
console.log(a++); //1
console.log(a); //2
console.log(a++); //2
console.log(a); //3
console.log(a++); //3
var b = 1;
console.log(b);
console.log(++b); // ++increments (pre=pehle update krega)
console.log(++b);
var c = 4;
//post increment (bd mein)
console.log(a++); //4 pm
console.log(a); //5 pm
console.log(a); //5 pm
console.log(a); //5 pm
// const d=2;
// const is fix ,can't be updated
// console.log(++d);
var e = 3;
//pre increment (pehle update krega)
console.log(++e);
var f = 3;
console.log(f = f + 100);
console.log(f = f * 30);
console.log(--f);
console.log(f--);
console.log(f);
var g = 30;
console.log(g--);
console.log(g);
console.log(g = g - 15);
var num1 = 10;
var num2 = 15;
//BEDMAS Rule
console.log(5 + 4); //9
console.log(5 + 4 * 2); //13
console.log(5 + 4 * 4 / 2); //13
console.log(5 + (4 * 4) / 2); //13
