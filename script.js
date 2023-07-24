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



// Store user prompts in a variable
var passwordLength;
var lowerCaseLength;
var upperCaseLength;
var numericCharacterLength;
var specialCharactersLength;

// Create functions to assign reusable prompts to password length inputs
function passwordLengthValidation() {
  passwordLength = prompt('select length of password');
}
function lowerCaseLengthValidation() {
  lowerCaseLength = prompt('Select number of lowercase characters');
}
function upperCaseLengthValidation() {
  upperCaseLength = prompt('Select number of uppercase characters');
}
function numericCharacterLengthValidation() {
  numericCharacterLength = prompt('Select number of numeric characters');
}
function specialCharactersLengthValidation() {
  specialCharactersLength = prompt('Select number of special characters');
}




// function numericCharacterLengthValidation() {
//   prompt('Select number of numeric characters')
//   if (numericCharacterLength <= 0){
//     alert ("Password must include at least one numeric character");
//   }
//     else if (numericCharacterLength > passwordLength - (upperCaseLength + 1)){
//     alert ("numeric characters must be " + ((passwordLength - lowerCaseLength) - 1) + "or less characters");
//     }
//   return;
// }

// Function to prompt user for password options
function getPasswordOptions(){
  passwordLengthValidation();
  if (passwordLength < 8){
    alert('Password is too short. Pick a number between 8 and 128');
    passwordLengthValidation();
  }
  else if (passwordLength > 128){
    alert('Password is too long. Pick a number between 8 and 128');
    passwordLengthValidation();
  }
  else {
    lowerCaseLengthValidation ();
    if (lowerCaseLength <= 0){
      alert ("Password must include at least one lowercase character");
      lowerCaseLengthValidation();
    }
    else if (lowerCaseLength > passwordLength - 3){
      alert ("Lowercase characters must be less than " + (passwordLength - 2) + " characters");
      lowerCaseLengthValidation ();
    }
    else {
      upperCaseLengthValidation();
      if (upperCaseLength <= 0){
        alert ("Password must include at least one uppercase character");
        upperCaseLengthValidation();
      } 
      else if (upperCaseLength > ((passwordLength - lowerCaseLength) - 2)){
      alert ("Uppercase characters must be " + ((passwordLength - lowerCaseLength) - 2) + " or less characters");
      upperCaseLengthValidation();
      }
      else {
        numericCharacterLengthValidation();
        if (numericCharacterLength <= 0){
        alert ("Password must include at least one numeric character");
        numericCharacterLengthValidation();
      }
      else if (numericCharacterLength > ((passwordLength - lowerCaseLength - upperCaseLength) - 1)){
        alert ("Numeric characters must be " + ((passwordLength - lowerCaseLength - upperCaseLength) - 1) + "or less characters");
        numericCharacterLengthValidation();
      }
      else {
        specialCharactersLengthValidation();
        if (specialCharactersLength <= 0){
          alert ("Password must include at least one special character");
          specialCharactersLengthValidation();
        }
        else if (specialCharactersLength > (passwordLength - lowerCaseLength - upperCaseLength - numericCharacterLength)){
          alert ("Special characters must be " + (passwordLength - lowerCaseLength - upperCaseLength - numericCharacterLength) + "or less characters");
          specialCharactersLengthValidation();
        }
    }
  }
  return;
}
}
}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  var random   = Math.floor(Math.random() * months.length);

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);