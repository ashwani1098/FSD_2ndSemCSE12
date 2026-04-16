//Selecting elemnets from HTML
let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");


document.getElementById("changeTextBtn").onclick = function () {
    // Change heading text to input value or default if empty
    heading.innerText = input.value || "No Input Given";
}
//Input change event to update heading in real-time
input.onchange = function () {
    console.log("Input changed to: " + input.value);
}

//Change background color by onclick

// document.getElementById("bgColorBtn").onclick = function () {
//     document.body.style.backgroundColor = "lightgreen";
// }
//Change background color by addEventListener(multipe events)
document.getElementById("bgColorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgreen";
    document.body.style.fontFamily = "Arial, sans-serif";

});
//increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    heading.style.fontSize = "50px";
});
//Show/Hide paragraph
let isParaVisible = true;
document.getElementById("showHideBtn").addEventListener("click", function () {
    if (isParaVisible) {
        para.style.display = "none";
        isParaVisible = false;
    } else {
        para.style.display = "block";
        isParaVisible = true;
    }
});
//Reset to original state
document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerText = "Welcome to my page";
    document.body.style.backgroundColor = "#f4f6f8";
    heading.style.fontSize = "32px";
    para.style.display = "block";
    input.value = "";
    isParaVisible = true;
});
// mouseover event
heading.addEventListener("mouseover", function () {
    heading.style.color = "red";
});
// mouseout event
heading.addEventListener("mouseout", function () {
    heading.style.color = "black";
});


