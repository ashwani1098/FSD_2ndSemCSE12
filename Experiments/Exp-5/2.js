let employees = [];

/* Add Employee */

function addEmployee(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = document.getElementById("salary").value;
let dept = document.getElementById("dept").value;

/* validation */

if(name=="" || id=="" || salary=="" || dept==""){
alert("Please fill all employee details");
return;
}

/* object creation */

let emp = {
name:name,
id:id,
salary:Number(salary),
dept:dept
};

employees.push(emp);

document.getElementById("result").innerHTML="Employee Added Successfully";

/* clear inputs */

document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("salary").value="";
document.getElementById("dept").value="";

}


/* Display All Employees */

function displayEmployees(){

if(employees.length==0){
document.getElementById("result").innerHTML="No Employees Added";
return;
}

let output="";

for(let e of employees){

output += "Name: "+e.name+
" | ID: "+e.id+
" | Salary: "+e.salary+
" | Dept: "+e.dept+"<br>";

}

document.getElementById("result").innerHTML=output;

}


/* Filter Salary > 50000 */

function filterSalary(){

let output="";

let filtered = employees.filter(e => e.salary > 50000);

if(filtered.length==0){
document.getElementById("result").innerHTML="No employee salary above 50000";
return;
}

for(let e of filtered){
output += e.name+" - "+e.salary+"<br>";
}

document.getElementById("result").innerHTML=output;

}


/* Total Salary */

function totalSalary(){

let total=0;

for(let e of employees){
total += e.salary;
}

document.getElementById("result").innerHTML="Total Salary Payment = "+total;

}


/* Average Salary */

function averageSalary(){

if(employees.length==0){
document.getElementById("result").innerHTML="No employees available";
return;
}

let total=0;

for(let e of employees){
total += e.salary;
}

let avg = total / employees.length;

document.getElementById("result").innerHTML="Average Salary = "+avg;

}


/* Count Department Employees */

function countDepartment(){

let dept = prompt("Enter Department Name");

let count=0;

for(let e of employees){

if(e.dept.toLowerCase() == dept.toLowerCase()){
count++;
}

}

document.getElementById("result").innerHTML="Employees in "+dept+" = "+count;

}