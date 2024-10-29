//promise m chaining bh async hai promise m settimeout ki tyming chaining pr bh apply hogi, means jb tk promise ka code delay k sth nh chlega agy ka code jo chaining m return krwaya hai wo nh chlega kyn k passing the pillow wala concept apply hta hai yahn jb tk 1st wala code pass nh hta timer ki wja se tw 2nd wala kese pass hoga islye 1st waly ki wja se 2nd wale ko bh wait krna prega...
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//stdin/stdout  for number
//chalk animation
//OOP
//4 pillars of oop
var Person = /** @class */ (function () {
    function Person(name) {
        this.fullName = name;
    }
    return Person;
}());
var person = new Person("Sana");
console.log(person);
var person2 = new Person("Sana".toLowerCase());
console.log(person2);
console.log(person2.fullName);
var person3 = new Person("SANA".toString());
console.log(person3);
//Inheritance
//jb bh parent class ki properties child class m inherit krwana ho wo inheritance hti hai..
//Parent /Super/ Base
var Person2 = /** @class */ (function () {
    function Person2(fn, a) {
        this.fullName = fn;
        this.age = a;
    }
    return Person2;
}());
//Child / Derived
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fn, a, rNo) {
        //constructor hr class ka apna hta hai
        var _this = _super.call(this, fn, a) || this; //super ka keyword sbse pehle lgega
        _this.rollNo = rNo; //class ki child properties bd m lgengi super k
        return _this;
    }
    return Student;
}(Person2));
var student = new Student("Sana", 24, 90);
//home work
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(f, a, s, t) {
        var _this = _super.call(this, f, a) || this;
        _this.salary = s;
        _this.timings = t;
        return _this;
    }
    return Employee;
}(Person2));
var employee = new Employee("Komal", 23, 30000, "10 to 4");
//Encapsulation
//encapsulation is access modifier..public,private,protected
//public sb classes m hr jga use hoskti hai
//private bs apni class m hi use hoskti hai
//protected sub-classes m bh use hoskti hai
//class k sary methods public hte hen by deafult ..public properties hr jga accesible hte hen..public ka keyword lgaen ya na lgaen by default public hi hta hai......
//protected: jo apni classes m or child classes m available ho but outside of the world available na ho......
//private:private properties sb apni hi classes tk rehte hen na sub classes m use hoskte hen na object bna skte hen yani na outside of the world use ho skta hai
var Bank = /** @class */ (function () {
    function Bank(name, num) {
        this.BankBal = 3000;
        this.customerName = name;
        this.accountNum = num;
    }
    Object.defineProperty(Bank.prototype, "getBankBalance", {
        //to access private property we have getter function
        get: function () {
            return this.BankBal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "updateBal", {
        //setter function
        set: function (cash) {
            this.BankBal = this.BankBal + cash; //ye return nh krega kch bulke operation perform krega
            //this.BankBal= 500+ cash
        },
        enumerable: false,
        configurable: true
    });
    return Bank;
}());
var b = new Bank("Sana", 123);
console.log(b);
var c = b.getBankBalance; //function m () nh Lgega as a value treat krengy
console.log(c);
var d = (b.updateBal = 500);
console.log(d);
//free code camp
//async / await
var food = true;
function Cooking() {
    return new Promise(function (resolve, reject) {
        if (food) {
            return "Food is very yummy";
        }
        else {
            return "Oops bs kha lya khana";
        }
    });
}
function getResult() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Cooking()];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var myFunc = function () { return __awaiter(_this, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Cooking()];
            case 1:
                res = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var getResult2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 4]);
                return [4 /*yield*/, Cooking()];
            case 1:
                res = _a.sent();
                console.log(res);
                return [3 /*break*/, 4];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 3:
                console.log("Eated");
                return [7 /*endfinally*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
//Promise => resolve => try => finally
//Promise => reject => catch => finally
//tsconfig file is must for async and oop programming
//Tuples( Number of elements with sequencial data ).....
//Enums( set of constant values , pre fined values )....
//polymorphism and function overloading , both are same
var array = [
    ["Sana", 500], //Fixed number of array with sequencial data//string then number then boolean
    ["Maryum", 300],
];
//alias nickname ko kehte hen
var country = "Pakistan";
var product = "Shoes";
var product2 = "Shoes";
//null vs undefined
//undefined: undefined means initial at present m apke pass value nh hai but future m ajaegi
var a;
console.log(a);
a = 1500;
console.log(a);
//null:
var g = null;
console.log(g);
//type alias , type interface
//any : kch bh lgado , never: us func m lgega jb wo apko kbi kch return nh krta ap usko call krte hen wo apko kahin or le jata hai , void m console lga skte hen never m wo bh nh lga skte
//unknown: any
//explicit casting
//unknown any k sth any unknown k sth compatible hai baqi or ksi k sth compatible nh hai string number boolean ksi k sth nh
// function error(message:string):never{
//     throw new error(message);
// }
var abc = undefined;
console.log(abc);
//narrowing
//explicit casting (zabardasti ksi ko type assign krna)
//type assertion and explicit casting both are same
//type annotation means variable ko type assign krna
//keyboard buttons => chatgpt
//structural typing
//stale obj fresh obj
