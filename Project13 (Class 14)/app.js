//enums 
//pre defined values hti hai type literals ki trah
var Fuel;
(function (Fuel) {
    Fuel[Fuel["PETROL"] = 0] = "PETROL";
    Fuel[Fuel["DIESEL"] = 1] = "DIESEL";
})(Fuel || (Fuel = {}));
console.log(Fuel[0]); //PETROL
console.log(Fuel[1]); //DIESEL  
var Fuel1;
(function (Fuel1) {
    Fuel1["PETROL1"] = "Rs 270";
    Fuel1["DIESEL1"] = "Rs 100";
})(Fuel1 || (Fuel1 = {}));
console.log(Fuel1.PETROL1); //Rs 270
console.log(Fuel1.DIESEL1); //Rs 100
console.log(Fuel2[0]); //Error  //indexing k through access nh krskte
console.log("Rs 300" /* Fuel2.DIESEL */); //Ok //values k through access krte hen
console.log("Rs. 150" /* Menu.Tikka */);
console.log("Rs. 100" /* Menu.Biryani */);
console.log("Rs. 300" /* Menu.Qorma */);
//trim(),strip()
//rest parameters ,isme indefinite number of arguements hoskte hen
function Wallet(color) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    console.log(color, others, function () { return "hello"; });
}
Wallet('red', 'currency', 'atm card', 'nic'); //currency se le kr agy sari arguement rest parameter m jaengy
function fileupload() {
    var images = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        images[_i] = arguments[_i];
    }
    console.log(images);
}
fileupload('sana image', 'maryum image', 'anum image');
function classes(online) {
    var onsite = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        onsite[_i - 1] = arguments[_i];
    }
    console.log(online, onsite.toLocaleString());
}
classes(1, 2, 3, 4, 5);
//camscanner pdf //anydesk
//optional parameter
var Form = function (name, feedback) {
    console.log(name, feedback);
};
Form('Sana', 'Good Class');
Form('Sana');
var product = {
    name: 'Bread'
};
var FirstName = 'Ali';
//Narrowing
//ksi bh cheez ko precise krna narrowing kehlata hai
//union type
var age;
age = 22;
//age='45'
//narrowing
console.log(typeof age);
console.log(typeof age);
age = 34.7658493647;
//age=25
if (typeof age == 'number') {
    console.log(age.toFixed(2));
    age + 5;
}
//narrowing
age = "twenty";
if (typeof age) {
    console.log(age.toUpperCase);
}
//type never
var value = 30; //number
value = 'Sana'; //string
value = []; //array
value = {}; //object
value = function () { return true; }; //arrow func
var values = 30; //number
values = 'Sana'; //string
values = []; //array
values = {}; //object
values = function () { return true; }; //arrow func
//built in object date , math ,error
var val; //type unknown  any ,unknown means kch bh value
var val1 = val;
var val2 = val;
var value3 = val; //error
//unknown =unknown  //ok
//unknown = any  //ok
//sir zia repo review (union literals)
// (type unknown never types)
//testmoz.com
//passcode = giaicb1
//modules
//explicit casting (data type)
var val4 = 'ali';
console.log(val4.toUpperCase());
//console.log( <string>val)
console.log();
//let valOne:string=val //error
//array[] array<string>
//type assertion k lye : colon use krte hen
//type guard
