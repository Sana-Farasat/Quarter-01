//promise m chaining bh async hai promise m settimeout ki tyming chaining pr bh apply hogi, means jb tk promise ka code delay k sth nh chlega agy ka code jo chaining m return krwaya hai wo nh chlega kyn k passing the pillow wala concept apply hta hai yahn jb tk 1st wala code pass nh hta timer ki wja se tw 2nd wala kese pass hoga islye 1st waly ki wja se 2nd wale ko bh wait krna prega...

//stdin/stdout  for number

//chalk animation

//OOP
//4 pillars of oop
class Person {
  fullName: string;

  constructor(name: string) {
    this.fullName = name;
  }
}

let person = new Person("Sana");
console.log(person);
let person2 = new Person("Sana".toLowerCase());
console.log(person2);
console.log(person2.fullName);
let person3 = new Person("SANA".toString());
console.log(person3);

//Inheritance
//jb bh parent class ki properties child class m inherit krwana ho wo inheritance hti hai..

//Parent /Super/ Base
class Person2 {
  fullName: string;
  age: number;

  constructor(fn: string, a: number) {
    this.fullName = fn;
    this.age = a;
  }
}

//Child / Derived
class Student extends Person2 {
  rollNo: number;
  constructor(fn: string, a: number, rNo: number) {
    //constructor hr class ka apna hta hai
    super(fn, a); //super ka keyword sbse pehle lgega
    this.rollNo = rNo; //class ki child properties bd m lgengi super k
  }
}

const student = new Student("Sana", 24, 90);

//home work
class Employee extends Person2 {
  salary: number;
  timings: number | string;

  constructor(f: string, a: number, s: number, t: number | string) {
    super(f, a);
    this.salary = s;
    this.timings = t;
  }
}
const employee = new Employee("Komal", 23, 30000, "10 to 4");

//Encapsulation
//encapsulation is access modifier..public,private,protected
//public sb classes m hr jga use hoskti hai
//private bs apni class m hi use hoskti hai
//protected sub-classes m bh use hoskti hai

//class k sary methods public hte hen by deafult ..public properties hr jga accesible hte hen..public ka keyword lgaen ya na lgaen by default public hi hta hai......
//protected: jo apni classes m or child classes m available ho but outside of the world available na ho......
//private:private properties sb apni hi classes tk rehte hen na sub classes m use hoskte hen na object bna skte hen yani na outside of the world use ho skta hai

class Bank {
  public customerName: string;
  protected accountNum: number;
  private BankBal: number = 3000;

  constructor(name: string, num: number) {
    this.customerName = name;
    this.accountNum = num;
  }

  //to access private property we have getter function
  get getBankBalance() {
    return this.BankBal;
  }

  //setter function
  set updateBal(cash: number) {
    this.BankBal = this.BankBal + cash; //ye return nh krega kch bulke operation perform krega
    //this.BankBal= 500+ cash
  }
}

const b = new Bank("Sana", 123);
console.log(b);

const c = b.getBankBalance; //function m () nh Lgega as a value treat krengy
console.log(c);

const d = (b.updateBal = 500);
console.log(d);

//free code camp

//async / await
let food = true;

function Cooking() {
  return new Promise((resolve, reject) => {
    if (food) {
      return "Food is very yummy";
    } else {
      return "Oops bs kha lya khana";
    }
  });
}
async function getResult() {
  const res = await Cooking();
}

const myFunc = async () => {
  const res = await Cooking();
};

const getResult2 = async () => {
  try {
    const res = await Cooking();
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Eated");
  }
};

//Promise => resolve => try => finally
//Promise => reject => catch => finally
//tsconfig file is must for async and oop programming

//Tuples( Number of elements with sequencial data ).....
//Enums( set of constant values , pre fined values )....

//polymorphism and function overloading , both are same

let array: unknown[] = [
  ["Sana", 500], //Fixed number of array with sequencial data//string then number then boolean
  ["Maryum", 300],
];

//alias nickname ko kehte hen

const country: string = "Pakistan";
let product: string = "Shoes";
type productName = "Shoes";
let product2: productName = "Shoes";

//null vs undefined

//undefined: undefined means initial at present m apke pass value nh hai but future m ajaegi
let a;
console.log(a);
a = 1500;
console.log(a);

//null:
let g = null;
console.log(g);

//type alias , type interface
//any : kch bh lgado , never: us func m lgega jb wo apko kbi kch return nh krta ap usko call krte hen wo apko kahin or le jata hai , void m console lga skte hen never m wo bh nh lga skte
//unknown: any

//explicit casting
//unknown any k sth any unknown k sth compatible hai baqi or ksi k sth compatible nh hai string number boolean ksi k sth nh

// function error(message:string):never{
//     throw new error(message);
// }
let abc: any = undefined;
console.log(abc);

//narrowing
//explicit casting (zabardasti ksi ko type assign krna)

//type assertion and explicit casting both are same
//type annotation means variable ko type assign krna

//keyboard buttons => chatgpt

//structural typing
//stale obj fresh obj
