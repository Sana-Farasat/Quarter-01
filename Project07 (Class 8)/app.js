function add() {
    console.log(5 + 8);
}
add(); //Static 
//parameter sawal, arguement jawab
function add2(digit, digit2) {
    console.log(digit + digit2);
}
add2(10, 56); //Dynamic
add2(5, 8);
//reuseable
function add3(digit, digit2) {
    console.log(digit * digit2);
}
add3(6, 8);
//maintainable
function googleMap(from, to) {
    console.log("I will go to ".concat(from, " and then will go back ").concat(to, "."));
}
googleMap('Governor House', 'Home');
function Game(username) {
    if (username === void 0) { username = 'guest1234'; }
    console.log("Enter your ".concat(username));
}
Game();
Game();
Game('Sana');
Game('Sana');
//calculator
function sum(dig, dig2) {
    if (dig === void 0) { dig = 5; }
    if (dig2 === void 0) { dig2 = 2; }
    console.log(dig + dig2);
}
sum();
sum(10 + 12);
sum(10);
sum(undefined, 10); //undefined reserved keyword ,user ne value nh di
sum(null, 5); //null will throw error .... null arguement asgn nh kr skte isme
sum(undefined, undefined);
//moving on to next topic 
//function name bh console krwa skte hen
function CookMeal(type, dishName) {
    return "".concat(type, " ").concat(dishName);
}
//undefined error
console.log(CookMeal('chicken', 'biryani')); //function k andar console krwaengy 
//return ,js ko value return krni pregi islye return lgaya
//function ko call krngy    
//function apko apki value wapis krta hai hr function
//js m ye capability nh k wo apko apki value return  jb tk return keywoard na lgaya jae
//variable function difference:var m value store krte hen function m block of code lkhte hen
//date is also data type system se date time hour months uthane k lye new date()
//mdn web docs
//gemini
//goversindh => gemini ,excaldraw
function Addition(num1, num2) {
    return num1 + num2;
}
console.log(Addition(5, 10));
function Subtraction(num1, num2) {
    return num1 - num2;
}
console.log(Subtraction(5, 10));
function Multiplication(num1, num2) {
    return num1 * num2;
}
console.log(Multiplication(5, 10));
function Division(num1, num2) {
    return num1 / num2;
}
console.log(Division(5, 10));
