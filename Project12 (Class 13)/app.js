//type alias: string boolean arrays number objects pr apply hte hen
//interface: jb object ka structure bnana ho tw interface bna skte hen interface object k sth compatible hte hen only
var bill = {
    customername: 'Sana',
    timestamp: '12:05PM'
};
console.log(bill.customername, bill.timestamp);
//nesting .do it your own
//type literals m apni values ko hi as a data type asgn kr skte hen 
//glass example, jb apko pta ho k future m kya values any wali hen
var juice = 'large';
//loops
//for loops
//syntax ,use case....
//1 2 3 4 5
//for loops(1. strating point ,2.ending point 3. starting point se ending point tk jana kese he/steps to reach ending point)
//1.initialization ..declare variable
//2.condition.. kahn tk chalega .....condition true false
//3. expression.. kese chlega
for (var i = 1; i <= 5; i++) { // ; semi colon to end 1 expression
    console.log(i);
    console.log("".concat(i, ". Hello")); // 1, 2, 3, 4, 5
}
for (var i = 1; i <= 5; i++) {
    //console.log(i);
    //console.log(`${i}. Hello`)
    console.log("\n ".concat(i));
    console.log();
}
for (var i = 1; i < 5; i++) { //4 tk chalega = hta dya ab ek number pehle tk krega 4 tk
    console.log(i);
}
for (var i = 5; i <= 15; i++) { //5 se 15 tk chalega
    console.log(i);
}
for (var i = 5; i <= 25; i += 5) { //5 10 15 20 25
    console.log(i); //or
    console.log(i + 5);
}
//starting ,   ending,    jana kese he
for (var a = 10; a >= 1; a--) { //10 9 8 7 6 .......
    console.log(a);
    console.log("".concat(a, ". Hello"));
}
for (var i = 10; i >= 5; i--) { //condition m > greater than use kia kyn k starting point pehle se hi bari hai
    console.log(i);
    console.log("".concat(i, ". Countdown Timer"));
}
//for loop use interview and mcqs use jb apko ending point pta ho tb ap for loop use krte hen login pw example iteration use hue v hti hen 3 dfa ki
//while loop bh isi trha hta hai thra difference he
var abc = 1;
while (abc <= 15) {
    console.log(abc); //value console krwani he or
    abc++; //increment by 1 krna hai
}
while (abc <= 15) { //1 4 7 10 13
    console.log('***');
    console.log(abc); //value console krwani he or
    abc += 3; //increment by 3 krna hai
    //abc =abc+3
}
//array ki values ko loops k through kese print krwaya jae..Let's learn
//for loop 
//number of iterations nh pta ho tw while loop use krengy atm withdraw example
//coding night todo app
while (true) { //infinite loop  ctrl+c
    console.log(abc); //value console krwani he or
    abc++;
}
var fruits = ['apple', 'banana', 'mango'];
console.log(fruits.length);
fruits.push('muli');
console.log(fruits);
fruits.unshift('began');
for (var i = 0; 1 < 4; i++) { //check for in loop ,for of loop
    console.log(fruits);
    console.log(fruits[i]); //static //agy ziada elements hngy usy dyanamic bnane k lye line se print krwane k lye loop use krengy
}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
//backend frontend
//index element glt pass hoga tw undefined error dega >4 , >3
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var fruit in fruits) {
    console.log(fruit);
}
fruits.forEach(function (fruit) { return console.log(fruit); });
//static means hath se define krdya k yehi values hongi
//dynamic backend pr values add hngi tw wo bh print hojaengi
//students example
//for of loop
for (var _a = 0, fruits_2 = fruits; _a < fruits_2.length; _a++) { // complex se easier syntax , map built in fnctions
    var phal = fruits_2[_a];
    console.log(phal);
}
//for of loop bs array pr chlta hai
//for loop se functions wgera sb achieve krskte hemn
//typescript features enums
//pre define values lkh kste hen, pre define set of values k sth km aengy
//compass has 4 values
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
//access through indexing
console.log(Direction.North); //enum apne pass indexes rkhte hen or 0 se start hte hen or inka array se koe lena dena nh hai
//iska use case bh wohi hai jo type literals ka hta hai values pehle se pta hngi
//use case jb apko pehle se hi pta ho values 
var Direction1;
(function (Direction1) {
    Direction1["North"] = "North";
    Direction1["South"] = "South";
    Direction1["East"] = "East";
    Direction1["West"] = "West";
})(Direction1 || (Direction1 = {}));
var Timeslot;
(function (Timeslot) {
    Timeslot["slot1"] = "9 to 12";
    Timeslot["slot2"] = "2 t0 5";
    Timeslot["slot3"] = "7 to 10";
})(Timeslot || (Timeslot = {}));
console.log(Timeslot.slot1);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["a"] = 1] = "a";
    Direction2[Direction2["b"] = 2] = "b";
    Direction2[Direction2["c"] = 3] = "c";
})(Direction2 || (Direction2 = {})); /// 1 2 3 0 se start nh krega
var Direction3;
(function (Direction3) {
    Direction3[Direction3["f"] = 0] = "f";
    Direction3[Direction3["g"] = 6] = "g";
    Direction3[Direction3["h"] = 7] = "h";
    Direction3[Direction3["i"] = 8] = "i";
})(Direction3 || (Direction3 = {}));
var phone;
(function (phone) {
    phone[phone["number"] = 9877554] = "number";
    phone[phone["num2"] = 987655] = "num2";
})(phone || (phone = {}));
console.log(phone.num2); //1st way to access
console.log(phone[1]); //2nd way to access  //tsconfig ki file bni hogi tw esy access krne m error dega
var database = [
    [356765, 'sana', 7865]
];
console.log(database[0][1][2]); //array index ,object . accessibility way
//for of loop
for (var _b = 0, database_1 = database; _b < database_1.length; _b++) {
    var data = database_1[_b];
    console.log(data);
}
var database1 = [
    [356765, 'sana', 7865],
    [67888, 'hina', 8765],
    [4678, 'komal', 88766], //how it will access?
];
console.log(database1[1]);
//for of loop
for (var _c = 0, database1_1 = database1; _c < database1_1.length; _c++) {
    var data = database1_1[_c];
    console.log(data); //1
    console.log(data[0], data[1], data[2]); //2
}
var abcs = true; //union literals
// objects .notation , square notation [key]
