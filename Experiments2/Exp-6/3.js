let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

// States
let isGreen = false;
let isBig = false;

// Change heading text
document.getElementById("btnText").addEventListener("click", function () {
    heading.innerText = input.value || "No Input Given";
});

// Toggle background
document.getElementById("btnColor").addEventListener("click", function () {
    if (isGreen) {
        document.body.style.backgroundColor = "#f4f6f8";
        isGreen = false;
    } else {
        document.body.style.backgroundColor = "lightgreen";
        isGreen = true;
    }
});

// Toggle font size
document.getElementById("btnSize").addEventListener("click", function () {
    if (isBig) {
        heading.style.fontSize = "32px";
        isBig = false;
    } else {
        heading.style.fontSize = "50px";
        isBig = true;
    }
});

// Show/Hide paragraph
document.getElementById("btnToggle").addEventListener("click", function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});

// Reset (no reload)
document.getElementById("btnReset").addEventListener("click", function () {
    heading.innerText = "Original Heading";
    document.body.style.backgroundColor = "#f4f6f8";
    heading.style.fontSize = "32px";
    para.style.display = "block";
    input.value = "";

    isGreen = false;
    isBig = false;
});