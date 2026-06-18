let empName = document.getElementById("empName");
let empId = document.getElementById("empId");
let empDept = document.getElementById("empDept");
let empSalary = document.getElementById("empSalary");

let table = document.querySelector("table");
let info = document.getElementById("info");
let empData = localStorage.getItem("empData") ? JSON.parse(localStorage.getItem("empData")) : [];
displayEmployees(empData);

function addEmployee() {
    let name = empName.value;
    let id = empId.value;
    let dept = empDept.value;
    let salary = empSalary.value;

    if (name && id && dept && salary) {
        empData.push({ name, id, dept, salary });
        localStorage.setItem("empData", JSON.stringify(empData));
        empName.value = "";
        empId.value = "";
        empDept.value = "";
        empSalary.value = "";
         displayEmployees(empData);

    } else {
        alert("Please fill in all fields.");
    }

}

function initTable(table) {
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
    `;
}

function displayEmployees(empData) {
   initTable(table);

    empData.forEach(emp => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.dept}</td>
            <td>${emp.salary}</td>
        `;
        table.appendChild(row);
    });
}

document.getElementById("addBtn").addEventListener("click", addEmployee);
document.getElementById("displayBtn").addEventListener("click", () => displayEmployees(empData));


let deptCountBtn = document.getElementById("deptCountBtn");
deptCountBtn.addEventListener("click", () => {
    let deptCount = {};
    empData.forEach(emp => {
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });
    table.innerHTML = `
        <tr>
            <th>Department</th>
            <th>Employee Count</th>
        </tr>
    `;
    for (let dept in deptCount) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${dept}</td>
            <td>${deptCount[dept]}</td>
        `;
        table.appendChild(row);
    }
});

let avgSalaryBtn = document.getElementById("avgSalaryBtn");
avgSalaryBtn.addEventListener("click", () => {
    let deptSalary = {};
    let deptCount = {};
    let totalSalary = 0;
    empData.forEach(emp => {
        totalSalary += parseFloat(emp.salary);
        deptSalary[emp.dept] = (deptSalary[emp.dept] || 0) + parseFloat(emp.salary);
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });
    table.innerHTML = `
        <tr>
            <th>Department</th>
            <th>Average Salary</th>
        </tr>
    `;
    for (let dept in deptSalary) {
        let avgSalary = deptSalary[dept] / deptCount[dept];
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${dept}</td>
            <td>${avgSalary.toFixed(2)}</td>
        `;
        table.appendChild(row);
    }

    info.innerHTML  = `Overall Average Salary: <strong> ${(totalSalary / empData.length).toFixed(2)}</strong>`; 
});


let salaryFilter = document.getElementById("salaryFilter");
salaryFilter.addEventListener("click", () => {
    let threshold = 5000;
    let filteredData = empData.filter(emp => parseFloat(emp.salary) > threshold);
    displayEmployees(filteredData);
});