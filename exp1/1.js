function createInputs(){

let n = document.getElementById("subjects").value;

let container = document.getElementById("marksInputs");

container.innerHTML = "";

for(let i=1;i<=n;i++){

container.innerHTML +=
"Subject "+i+" Marks: <input type='number' class='marks'><br>";

}

}

function calculate(){

let marks = document.getElementsByClassName("marks");

let total = 0;

for(let i=0;i<marks.length;i++){

total += Number(marks[i].value);

}

let avg = total / marks.length;

let grade;
let result;

if(avg >= 90){
grade="A";
}
else if(avg >= 75){
grade="B";
}
else if(avg >= 60){
grade="C";
}
else if(avg >= 40){
grade="D";
}
else{
grade="F";
}

if(avg >= 40){
result="PASS";
}
else{
result="FAIL";
}

document.getElementById("result").innerHTML=
"Total Marks: "+total+"<br>"+
"Average Marks: "+avg.toFixed(2)+"<br>"+
"Grade: "+grade+"<br>"+
"Result: "+result;

}