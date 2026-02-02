import inquirer from "inquirer";
class Students {
    static num = 1;
    name;
    rollNo;
    section;
    constructor(name, section) {
        this.name = name;
        this.rollNo = Students.num++;
        this.section = section;
    }
    newBatch() {
        if (this.rollNo <= 10) {
            console.log('You are in new class');
        }
        else {
            console.log('better luck');
        }
    }
    ;
    naming() {
        return this.name;
    }
    async sec() {
        let ask = await inquirer.prompt({
            name: 'abc',
            type: 'input',
            message: 'Enter your roll No'
        });
        if (parseInt(ask.abc) === this.rollNo) {
            console.log('you are in new class');
        }
    }
}
let std = new Students('sana', 'a');
console.log(std);
console.log(std.rollNo);
console.log(std.sec());
console.log(std.name);
