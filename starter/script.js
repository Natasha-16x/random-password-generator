// 1. prompt user for password critera
// a) password length between 10 and 64 
// b) special char, upper case, lowercase, numbers
// 2 validate the input. (ensure password length meets criteria and types of characters chosen)
// 3) Generate password
// 4) Dispay password to the page


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// 1. prompt user for password critera
// a) password length between 10 and 64 
// b) special char, upper case, lowercase, numbers
// 2 validate the input. (ensure password length meets criteria and types of characters chosen)
// Function to prompt user for password options


// Function for getting a random element from an array

// Function to generate password with user input
function generatePassword() {
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var possibleCharacters = [];

numberOfCharacters = prompt("Choose a password length between 10 and 64 characters.");
if (numberOfCharacters < 10 || numberOfCharacters > 64) {
  prompt ("Please choose a valid password length");
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please enter a valid number")
} else {
  alert(" Your password wil be " + numberOfCharacters + " characters long")
}

hasSpecialCharacters = confirm("Do you want to use special characters?");
  if (hasSpecialCharacters) {
    alert("Your password will include special characters.");
  }
  else {
    alert("Your password will NOT include special characters.");
  }

  hasNumbericCharacters = confirm("Do you want to use numeric characters?");
  if (hasNumbericCharacters) {
    alert("Your password will include numbers.");
  }
  else {
    alert("Your password will NOT include numbers.");
  }

  hasLowercaseCharacters = confirm("Do you want to include lowercase characters?");
  if (hasLowercaseCharacters) {
    var turnToLowercase = alert("Your password will include lowercase characters.");
  }
  else {
    alert("Your password will NOT include lowercase characters.");
  }
  hasUppercaseCharacters = confirm("Do you want to include uppercase characters?");
  if (hasUppercaseCharacters) {
    alert("Your password will include uppercase characters.");
  }
  else {
    alert("Your password will NOT include uppercase characters.");
  }

  if (hasSpecialCharacters === false && hasNumbericCharacters === false && hasLowercaseCharacters === false && hasUppercaseCharacters === false) {
    alert("Please select at least one character type.");
};

}





// Get references to the #generate element
// this variable targets the generate id (generate password button)
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// calling function (generatePassword) and storing the value from that function into the function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);