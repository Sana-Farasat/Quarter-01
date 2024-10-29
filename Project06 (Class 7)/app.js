//String Literals,Template Literals
var age = 24;
var country = "Pakistan";
console.log("My age is ".concat(age, " and my country is ").concat(country));
//Function 
function Hello() {
    console.log("Hello world from functions");
}
Hello(); //Calling a function
function Greet() {
    console.log('Salam');
}
Greet(); //greet m changes yahn nh hogi jahn function bn rha hoga wahi krni hngi 
//function is readable maintainable changeable reuseable easy to read easy to use 10 pages pr user website k greet function call krskte hen
//grading system  bh ek function hai jisme hm grading system nikla rhe the
function Salam() {
    console.log("How are you?");
}
Salam();
Salam();
Salam();
Salam();
Salam();
Salam();
function Hy() {
    console.log("Hello Sana");
}
Hy();
//next is parameters its like using variable inside function ,, function ka variable hai parameter
function Hi(name) {
    console.log("Hello ".concat(name));
}
Hi('Sana');
Hi('samreen');
Hi('maryum'); //call,invoke ,arguements
//tsconfig m data type required hai parameter m
function abc(name, age) {
    console.log("Hello ".concat(name, " and my age is ").concat(age));
}
abc('Sana', 24);
//shortlist
// function is , js m jb specific operation ko perform krwana hta hai
//duplication isnot allowed in function ek name ka ek hi function hoga
function abcde(name) {
    console.log("hello $ {name}"); //$ k bd space diya ye isko bh string consider krlega becoz of space
}
abcde('sana');
//parameter kahan jana hai, arguement btate hen k kahan jana hai, console wala code k kese jana hai
function root(digit) {
    console.log(digit * digit); //(digit * digit * digit)
}
root(5);
root(7);
//function reuseable maintainable changeable
//fb delete function, on behalf of post pic comment delete krta hai
function UserInfo(email, age) {
    console.log("My eamil is ".concat(email, " ang age is ").concat(age));
}
UserInfo("abc@email.com", 24); //parameters are comma separated value
//w3schools, github.com/panaverse/learn-generative-ai/tree
//array m store krne se sari values sbke pass jaengi admin k lye requirement badal jaengi unko tw apne pass 5lacs ka data store krna hoga 
//but hmare lye as a user ye km ka nh hai array se 5lacs ka data hmare account m bh jaega hme 5lacs ka print nikalwana prega
//hands on
function sum(digit1, digit2) {
    console.log(digit1 + digit2);
}
sum(5, 6);
