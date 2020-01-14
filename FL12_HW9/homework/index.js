//task 1

function convert () {
	let converted = [];
	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'string') {
			converted.push(parseInt(arguments[i]));
		} else if (typeof arguments[i] === 'number') {
			converted.push(arguments[i].toString());
		}
	}
	return converted;
}
convert('1', 2, 3, '4');

//task 2

function executeForEach (arr, callback) {
	for (let i = 0; i < arguments[0].length; i++) {
		callback(arguments[0][i]);
	}
}
executeForEach([1,2,3], function(el) {
 console.log(el * 2) 
});

//task 3

function mapArray (arr, callback) {
	let transformed = [];
	for (let i = 0; i < arguments[0].length; i++) {
		if (typeof arguments[0][i] === 'number') {
			arguments[0][i] = callback(arguments[0][i]);
			transformed.push(arguments[0][i]);
		} else if (typeof arguments[0][i] === 'string') {
			arguments[0][i] = callback(parseInt(arguments[0][i]));
			transformed.push(arguments[0][i]);
		}
	}
	return transformed;
}
mapArray([2, '5', 8], function(el) {
 return el + 3 
});

//task 4

function filterArray (arr, callback) {
	let filtered = [];
	for (let i = 0; i < arguments[0].length; i++) {
		if (callback(arguments[0][i]) === true) {
			filtered.push(arguments[0][i]);
		}
	}
	return filtered;
}
filterArray([2, 5, 8], function(el) {
 return el % 2 === 0 
});

//task 5

function flipOver (myString) {
	let arrayOfStrings = myString.split('');
	let flippedOverArray = [];
	for (let i = 0; i < arrayOfStrings.length; i++) {
		flippedOverArray.unshift(arrayOfStrings[i]);
	}
	flippedOverArray = flippedOverArray.toString();
	return flippedOverArray.replace(/,/g, '');
}
flipOver('hey world');

//task 6

function makeListFromRange (range) {
	let list = [];
	let min = range[0];
	let max = range[1];
	for (min; min <= max; min++) {
		list.push(min);
	}
	return list;
}
console.log(makeListFromRange([2, 7]));

//task 7

function getArrayOfKeys (arr, key) {
	let arrayOfKeys = [];
	executeForEach(arr, function (el) {
        arrayOfKeys.push(el[key])
    });
    return arrayOfKeys;
}
const actors = [
  {name:'tommy', age: 36},
  {name: 'lee', age: 28}
];
getArrayOfKeys(actors, 'name');

//task 8

function substitute(arr) {
    let replaced = [];
    mapArray(arr, function (el) {
        if (el < 30) {
            replaced.push('*');
        } else {
            replaced.push(el);
        }
    });
    return replaced;
}
substitute([56, 14, 48, 2, 31, 29]);

//task 9

const date = new Date(2020, 0, 1);
function getPastDate(date, daysPassed) {
    let pastDate = date;
    pastDate.setDate(date.getDate() - daysPassed);
    return pastDate.getDate();
}
getPastDate(date, 1);

//task 10

function formatDate(date) {
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));