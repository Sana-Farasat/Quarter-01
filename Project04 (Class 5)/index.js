//if and if-else statement
//if condition true , else condition false
var age = 17;
if (age == 18) {
    console.log("you are eligible for ID card");
}
else {
    console.log("you are not eligible for ID card");
}
//if (age > = 18)
var email = "ali@gmail.com"; //credentials
var pw = "qwerty";
if (email == "ali@gmail.com" && pw == "qwerty") { //&& operator , both values should be true
    console.log("Logged In");
}
else {
    console.log("Invalid Creds");
}
;
var firstName = "ali";
if (firstName == "ali") {
    console.log("You are logged in");
}
else {
    console.log("you cannot log in");
}
var marks = 60;
if (marks >= 80 || marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80 || marks >= 70) {
    console.log(" Grade B");
}
else if (marks >= 70 || marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Failed");
}
;
//simple grading system through if/else statement
var percentage = 65; //"65%"/65 -------more precise
if (percentage >= 90 && percentage <= 100) {
    console.log("A+ Grade");
}
else if (percentage >= 80 && percentage <= 89.99) {
    console.log("Grade A");
}
else if (percentage >= 70 && percentage >= 79.99) {
    console.log("Grade B");
}
else {
    console.log("Failed");
}
