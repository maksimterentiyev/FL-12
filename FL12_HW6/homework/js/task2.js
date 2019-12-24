var a = +prompt("Type the number a", "");
var b = +prompt("Type the number b", "");
var c = +prompt("Type the number c", "");
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("input values should be ONLY numbers");
} else if (a >= b + c || b >= a + c || c >= a + b) {
    alert("Triangle doesn’t exist");
    console.log("Triangle doesn’t exist");
} else if (a !== b && b !== c && a !== c) {
    console.log("Scalene triangle");
}
if (a === 0 || b === 0 || c === 0) {
    alert("A triangle must have 3 sides with a positive definite length");
}
if (a === b && b === c) {
    console.log("Equilateral triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
}