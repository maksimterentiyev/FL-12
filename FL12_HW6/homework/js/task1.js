var a = prompt("Type the number a", "");
var b = prompt("Type the number b", "");
var c = prompt("Type the number c", "");
if (isNaN(a) || isNaN(b) || isNaN(c) || a === "" || b === "" || c === "") {
    alert("Invalid input data");
}
var d = Math.pow(b, 2) - 4 * a * c;
if (d < 0) {
	console.log("no solution");
} else if (d > 0) {
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("x1 = " + x1 + "\nx2 = " + x2);
} else {
    var x = -b / (2 * a);
    console.log("x = " + x);
}