//////////////////////
/// Lab 308.4.1    ///
//////////////////////



//////////// Part 2 - Expand Functionality //////////////
console.log("---- Part 2 - Expand Functionality ----");
/////////////////////////////////////////////////////////

// variables for CSV data & array
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let nestedArr = [];


// Slice each row into own array 
let csvArr = csv.split("\n"); 

// Splits strings into own elements
// Adds elements to new array
// & nests w/in another array
for (let i = 0; i < csvArr.length; i++) {
    let cell = csvArr[i].split(',');
    nestedArr.push(cell);
}

// Verifies # of columns
console.log('Columns: ' + nestedArr[0].length)
console.log(nestedArr);



//////////// Part 3 - Transforming the Data ///////////////
console.log("---- Part 3 - Transforming the Data ----");
//////////////////////////////////////////////////////////

// variable for people's identity information in CSV
const identityArr = [];

// Starting w/ the 2nd row, loop through each row 
// Then create an object for each person's identity
for (let i = 1; i < nestedArr.length; i++) {
    let row = nestedArr[i];
    let identityObj = {};

    // Loop through the row's array elements
	// Add key:value pair to identity object
	// Then change keys to lowercase letters
    for (let kV = 0; kV < row.length; kV++) {
        let key = nestedArr[0][kV].toLowerCase();
        identityObj[key] = row[kV];
    }
    // After completing the row, add object to array
    identityArr.push(identityObj);
}

console.log(identityArr);



//////////// Part 4 - Sorting & Manipulating Data /////////////
console.log("---- Part 4 - Sorting & Manipulating Data ----");
///////////////////////////////////////////////////////////////


///////////////////////// P1 /////////////////////////
console.log("-- 1. Remove last element from sorted array --");

// Remove last element from array
identityArr.pop();
console.log(identityArr);


///////////////////////// P2 /////////////////////////
console.log("--2. Insert an object at index 1--");

// New variable for new obj
let newObj = { 
	id: "48", 
	name: "Barry", 
	occupation: "Runner", 
	age: "25" 
}

// Starting at index 1
// Remove 0 elements
// & and obj at same index
identityArr.splice(1, 0, newObj);
console.log(identityArr);


///////////////////////// P3 /////////////////////////
console.log("--3. Add a object to end of array--");

// New variable for new obj 
let sadFandomObj = {  // ༼ ༎ຶ ෴ ༎ຶ༽
	id: "7", 
	name: "Bilbo", 
	occupation: "None", 
	age: "111" 
}

// Add obj to end of array
identityArr.push(sadFandomObj);
console.log(identityArr);

/////////////////////////// P5 ///////////////////////
console.log("--4. Calculate Average Age--");


let totalAge = 0;

// Loops through all objects in the array
// Grabs their age values
// Sums them
for (i = 0; i < identityArr.length; i++) {
	let ageVal = Number(identityArr[i].age);
	totalAge += ageVal;
}

console.log(`Bilbo has lived for too long, so the average age is ${totalAge / identityArr.length}`);


////////////////////// Part 5 - Full Circle ///////////////////
console.log("----Part 4 - Full Circle----");
//////////////////////////////////////////////////////////////

// New array to convert CSV data with
const convertedArr = [];

// Grabs keys for row headers from first object in array 
let rowHeaders = Object.keys(identityArr[0]);

/////////////////////////////////////////////////////////////
// Put figuring out capitalizing only the 1st letter on pause
// Grabs the first letter of each string in the header
// & capitalizes them all
// let rowHeadChar = rowHeaders.map(function(char) {
//      return char[0].toUpperCase();
// });
// console.log("test1 " + rowHeadChar);
/////////////////////////////////////////////////////////////

// Capitalizes headings
let capFirstChar = function(char){ 
    return char.toUpperCase();
};

// Sloppy, but ran out of time
rowHeaders = rowHeaders.map(capFirstChar);

// Adds keys for row headers to new array
convertedArr.push(rowHeaders);

// grab identity keys & values, then adds them to the new converted CSV array
for (let vals in identityArr) {
	let newCsvObj = identityArr[vals];
	let newCsvArr = [];
	
	for (let keys in newCsvObj) {
		newCsvArr.push(newCsvObj[keys])
	}
	convertedArr.push(newCsvArr);
}


// Create an empty string to store converted CSV data
let newCsvStrs = '';

// Loop through the converted array w/ new keys & values
// join/convert them back into strings w/ "," as the separator
// add line breaks back
for (let i = 0; i < convertedArr.length; i++) {
    let row = convertedArr[i];
    newCsvStrs += row.join(', ');
    newCsvStrs += '\n';
}

console.log(newCsvStrs);