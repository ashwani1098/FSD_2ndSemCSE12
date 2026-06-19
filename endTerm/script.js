function convert(){

    let c = Number(document.getElementById("celsius").value);

    let f = (c * 9/5) + 32;

    document.getElementById("result").innerHTML =
    "Fahrenheit = " + f + " °F";
}