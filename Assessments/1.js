let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

if(name=="" || roll=="" || math=="" || science=="" || english==""){
alert("Please fill all fields");
return;
}

let student = {
name: name,
roll: roll,
math: math,
science: science,
english: english
};

students.push(student);

alert("Student Added");

// clear input fields
document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("math").value="";
document.getElementById("science").value="";
document.getElementById("english").value="";

}

function displayStudents(){

let result="";

for(let s of students){

result += `Name: ${s.name} | Roll: ${s.roll} | Math: ${s.math} | Science: ${s.science} | English: ${s.english} <br>`;

}

document.getElementById("output").innerHTML = result;

}

function showTotal(){

let result="";

for(let s of students){

let total = s.math + s.science + s.english;

result += `${s.name} Total Marks = ${total} <br>`;

}

document.getElementById("output").innerHTML = result;

}

function showAverage(){

let result="";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

result += `${s.name} Average Marks = ${avg.toFixed(2)} <br>`;

}

document.getElementById("output").innerHTML = result;

}

function showTopStudents(){

let result="";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

if(avg > 80){

result += `${s.name} Average = ${avg.toFixed(2)} <br>`;

}

}

document.getElementById("output").innerHTML = result;

}

function showFailed(){

let result="";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

if(avg < 40){

result += `${s.name} Average = ${avg.toFixed(2)} <br>`;

}

}

document.getElementById("output").innerHTML = result;

}

function countStudents(){

document.getElementById("output").innerHTML = "Total Students = " + students.length;

}