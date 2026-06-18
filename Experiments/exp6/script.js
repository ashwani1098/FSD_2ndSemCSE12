let h = document.getElementById("heading");
let input = document.getElementById("newHeading");
let para = document.querySelector("p");

function changeHeading() {
    if(input.value.trim() !== "") {
        h.textContent = input.value;
    } else {
        alert("Please enter a valid heading.");
    }
}   

function resetHeading() {
    h.textContent = "Into to JavaScript";
    input.value = "";
}

function incFontSize() {
    let style = window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    document.documentElement.style.fontSize = (fontSize + 2) + 'px';
}

function decFontSize() {
    let style = window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    document.documentElement.style.fontSize = (fontSize - 2) + 'px';
}

function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#'; 
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function togglePara() {
    para.style.display = (para.style.display === "none") ? "block" : "none";
}

document.getElementById("changeHeadingBtn").addEventListener("click", changeHeading);
document.getElementById("incFontSizeBtn").addEventListener("click", incFontSize);
document.getElementById("decFontSizeBtn").addEventListener("click", decFontSize);
document.getElementById("toggleBtn").addEventListener("click", togglePara);
document.getElementById("resetHeadingBtn").addEventListener("click", resetHeading);
document.getElementById("changeBgColorBtn").addEventListener("click", changeBgColor);

changeBgColor();
