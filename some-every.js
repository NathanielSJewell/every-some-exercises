/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

//How can I write a function using some that accepts an array of numbers and returns true if the passed array contains at least one odd number, otherwise it returns false?

//Use arr.some. If the callback function returns truthy, return true, else return false.

//Should accept an array of numbers and return true if array contains at least one odd number. Else return false.

function hasOddNumber(arr) {
	let output;
	arr.some(function(val) {
		if (val % 2 !== 0) output = true;
		arr.every(function(val) {
			if (val % 2 === 0) output = false;
		});
	});
	return output;
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

//How do I write a function using some and every that accepts a number and returns true if that number contains at least one zero (some), otherwise it returns false? (every??)

//I can stringify num. some of num === 0 evaluates to true. every single val is not equal to 0. Evaluates to false. Both array methods return true or false, so I need to return the expression itself. There should be two return options.

function hasAZero(num) {
	return num.toString().split('').some(function(val) {
		return val === `0`;
	});
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

//How can I write a function using either some or every that accepts an array and returns true if every single number in the array is odd, if any of the values in the array are not odd, function returns false?

//use every. Return a function using every that returns true if condition is true.

function hasOnlyOddNumbers(arr) {
	return arr.every(function(val) {
		return val % 2 !== 0;
	});
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
	return arr.every(function(val) {
		return arr.indexOf(val) === arr.lastIndexOf(val);
	});
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
	return arr.every(function(val) {
		return val[key];
	});
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
	return arr.every(function(val) {
		return val[key] === searchValue;
	});
}
