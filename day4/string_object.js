console.log("==== Sring Object ====");

let name = "Shivam";
console.log(name);

//String Length

console.log("Length = ",name.length);

//--------------------------------
// String Methods
//--------------------------------

console.log("\n==== String Methods ====");

let str="Welcome JavaScript";

//1.toUpperCase()

console.log("Upper Case = ",str.toUpperCase());

//2.toLowerCase()

console.log("Lower Case = ",str.toLowerCase());

//3. charAt()

console.log("Character at inder 3 = ",str[2]);

//4. indexOf()

console.log("Index of Java = ",str.indexOf("Java"));

//5. lastIndex()

let message = "JavaScript is easy. JavaScript is powerful";

console.log(
    "Last Index = ",
    message.lastIndexOf("JavaScript")
);

//6. slice()

console.log(
    "Slice =",
    str.slice(0,7)
);

//7.split()

let data="HTML,CSS,JavaScript";

let result=data.split(",");

console.log("Split =",result);

//8. replace()

let text="I Love Java";

console.log(
    text.replace("Java","JavaScript")
);

//9. concat()

let first="Shivam";
let last="Gupta";

console.log(
    first.concat(" ",last)
);

console.log("\n==== Includes ====");

let course="JavaScript";

console.log(course.includes("Script"));
console.log(course.includes("Python"));

//-------------------------------------
// Array Object
//-------------------------------------

console.log("\n==== Array Object ====");

let numbers = [10,20,30,40,50];

console.log(numbers);

//Access Array Element

console.log("First Element : ",numbers[0]);
console.log("Last Element : ",numbers[3]);

//-------------------------------------
// Array Methods
//-------------------------------------

console.log("\n==== Array Methods ====");

//Push

numbers.push(25);
console.log("After Push = ",numbers);

//Pop

numbers.pop();
console.log("After Pop = ",numbers);

//Unshift

numbers.unshift(5);
console.log(
 "After Unshift = ",numbers
);

//Shift

numbers.shift(4);
console.log("After Shift = ",numbers);

//-------------------------------------
// Date Object
//-------------------------------------

console.log("\n===== Date Methods ====");

let date =new Date();

console.log(date);

//Get Full Year

console.log(
    "Year =",
    date.getFullYear()
);

//Get Month

console.log(
    "Month =",
    date.getMonth()
);

//Get Date

console.log(
    "Date =",
    date.getDate()
);

//Get Day

console.log(
    "Day =",
    date.getDay()    
);

//Get Time
console.log(
    "Time =",
    date.getTime()
);

//------------------------------------
//Math Object
//------------------------------------


console.log("\n==== Math Object ====");

console.log("PI =",Math.PI);

//Maximum Value

console.log(
    "Maximum =",
    Math.max(10,20,30,40)
);

//Minimum Value

console.log(
    "Minimum =",
    Math.min(10,6,70,50,40)
);

//Round

console.log(
    "Round =",Math.round(4.2)
);

//Floor

console.log(
    "Floor =",
    Math.floor(6.2)
);

//Ceil

console.log(
    "Ceil =",
    Math.ceil(9.2)
);

//Square Root

console.log(
    "Sqaure Root =",
    Math.sqrt(25)
);

//Power

console.log(
    "Power =",
    Math.pow(4,2)
);