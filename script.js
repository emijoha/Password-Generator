// grab DOM elements 
var passwordDisplay = document.getElementById("password-display");
var generateButton = document.getElementById("generate-button");

// Gather user input for selected password length, and confirming character type criteria
var lengthInput = prompt("How many characters long, between 8 and 128, is your password?");
var confirmUppercase = confirm("Does your password include uppercase letters?");
var confirmLowercase = confirm("Does your password include lowercase letters?");
var confirmNumbers = confirm("Does your password include numbers?");
var confirmSymbols = confirm("Does your password include symbols?");

// Make arrays for all password character criteria
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "~`!@#$%^&*()-_=+/{}[];:,<>.?|";

// empty string to collect all confirmed character criteria
var passwordCharacters = "";

// function to populate password character string
function generatePasswordCharacters() {
 
   if (confirmUppercase === true) {
      passwordCharacters += uppercase;
   }

   if (confirmLowercase === true) {
      passwordCharacters += lowercase;
   }

   if (confirmNumbers === true) {
      passwordCharacters += numbers;
   }

   if (confirmSymbols === true) {
      passwordCharacters += symbols;
   }
};

// make user-selected length a number value (not string)
var length = parseInt(lengthInput);

// run function to generate password character string.
generatePasswordCharacters();

// run a function that create random password when click event happens, starting with a fresh string each time 
generateButton.addEventListener("click", function () {
   
   var randomPassword = "";

   for (let i = 0; i < length; i++) {
      randomPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
   }
   
   if (randomPassword == "") {
      alert("Please refresh and confirm at least one of these character types: uppercase, lowercase, number, symbol.")
   }
   
   else {
      passwordDisplay.textContent = randomPassword;
   }

});

// still need to figure out: 
// 1. if user enters number less than 8, more than 128, or non-numerical value:
//    how to limit lengthInput to a number from 8 to 128 
//    (instead of hoping that user follows directions correctly)
// 2. when user does not confirm any character criteria prompts:
//    how to make a more user-friendly function that automatically loops back to criteria prompts 
//    (instead of having user refresh page and go through beginning prompts again)
