let subjects = document.querySelector('#subjects');
let subjectsContainer = document.querySelector('#subjectsContainer');

let marksInputContainer = document.querySelector('#marksInputContainer');

function getGrades(marks)   {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function parseMarks(mark) {
    if(mark > 100 || mark < 0) return false;
    return true;
}

function calculateResult() {
    let result = document.querySelector('#result');
    let marksInputs = marksInputContainer.querySelectorAll('input');
    let totalMarks = 0;
    marksInputs.forEach(input => {
        let m = parseFloat(input.value) || 0
        if(!parseMarks(m)) {
            alert('Please enter valid marks between 0 and 100');
            return;
        }
        totalMarks += m;
    })
    result.innerHTML = '';
    result.classList.remove('hidden');  

    result.innerHTML += `<strong>Grades: </strong>`;
    marksInputs.forEach((input, i) => {
        result.innerHTML += `<br>${i + 1} <span>${getGrades(parseFloat(input.value) || 0)}</span>`;
    });

    result.innerHTML += `<br>Total Marks: <strong>${totalMarks}</strong>`;
    result.innerHTML += `<br>Average Marks: <strong>${(totalMarks / marksInputs.length).toFixed(2)}</strong>`;
    result.innerHTML += `<br>Overall Grade: <strong>${getGrades(totalMarks / marksInputs.length)}</strong>`;
}

function showMarksInput() {
    let noOfSubjects = subjects.value;
    subjectsContainer.classList.add('hidden');
    marksInputContainer.classList.remove('hidden');

    Array.from({ length: noOfSubjects }, () => {
       let input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Enter marks`;
        marksInputContainer.appendChild(input);
    });

    let div = document.createElement('div');
    div.classList.add('buttons');


      let btn = document.createElement('button');
      btn.setAttribute('id', 'calculateBtn');
       btn.innerText = 'Calculate';
    div.appendChild(btn);
    btn.addEventListener('click', calculateResult);

      let resetBtn = document.createElement('button');
      resetBtn.setAttribute('id', 'resetBtn');
      resetBtn.innerText = 'Reset';
    div.appendChild(resetBtn);
    marksInputContainer.appendChild(div);


    resetBtn.addEventListener('click', () => {
        marksInputContainer.classList.add('hidden');
        result.classList.add('hidden');
        subjectsContainer.classList.remove('hidden');

    });
}

document.querySelector("#enterMarks").addEventListener("click", showMarksInput);
