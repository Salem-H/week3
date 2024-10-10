
//Module 1

/* //Exercise1
var custmerId;
var custemerFirstName, custemerMiddleName, custemerLastName;
var custmerGender;
var custmerDateOfBirth;
var custmerDriversNumber;
var custmerAutoPolicyNumber; */

//Exercise2 
/* 1. //reserved words that can not be used for variable names
 boolean, break , case, debugger, delete, do, else, if, let, null ...
2. // JavaScript built-in objects, properties and methods that can be used for variable names
array, date, function, name, number, object, string, math, prototype, eval ...
3. // Avoid using name of HTML and Window objects and properties 
allert, all, blur, button, close, element, form, frame, focus, link, open, Image ...
4. //HTML even handlers which can not be foe variable names
onblur, onclick, onerror, onfocus, onkeyup, onsubmit, onload ... */

//Exercise3
// Declare variables
let name = "Salem H"; 
let city = "Addis Ababa"; 
let state = "Ethiopia"; 

// Output the values
console.log("Name:", name);
console.log("City:", city);
console.log("State:", state);

//Hello World

"use strict";

var message = "Hello World";
console.log(message);

//Module 2

//Exercise 1

//Tips.js

//Exercise 2

//1
// Declare variables for assets and debts
let assets = {
    cash: 5000,
    property: 300000
};

let debts = {
    mortgage: 200000,
    creditCardDebt: 5000
};

// Calculate total assets
let totalAssets = assets.cash + assets.property;

console.log("Total Assets:", totalAssets);

// Calculate total debts
let totalDebts = debts.mortgage + debts.creditCardDebt;

console.log("Total Debts:", totalDebts);

// Calculate net worth
let netWorth = totalAssets - totalDebts;

console.log("Your net worth is :", netWorth);

//2
let height = 2
let width = 5 

//calculate area of a rectangle 
let area = height * width

//output
console.log("The area of the rectangle is :", area);


//Exercise 3
//1
function fahrenheitToCelsius(fahrenheit) {
return (fahrenheit - 32) * 5 / 9;
}

// Example usage:
const tempF = 68; // Fahrenheit temperature
const tempC = fahrenheitToCelsius(tempF);
console.log(`${tempF}°F is equal to ${tempC.toFixed(2)}°C`);

// 2
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5 ) + 32;
    }
    
    // Example usage:
    const tempCe = 24; 
    const tempFa = celsiusToFahrenheit(tempCe);
    console.log(`${tempCe}°C is equal to ${tempFa.toFixed(2)}°F`);
    
// 3
let salaryperMonth = 8000
let tax = 23
let persent = 100

let taxWithHold = salaryperMonth * tax / persent

console.log("Withheld taxes per month is :", taxWithHold.toFixed(2))

//Exercise 4
//1
// Description : This script tests various numeric conversion techniques
// Author : Jordan Q. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5";

Expression          parseInt()     parseFloat()        Number()        Unary +
" 101.1 "           101             101                 101.1           101.1
"55"                55              55                  55              55
"402 Stevens"       402             402                 NaN             NaN
"Number 5"          NaN             NaN                 NaN             NaN

