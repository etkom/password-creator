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



// Variables declared at global scope
var passwordLength;
var lowerCaseLength;
var upperCaseLength;
var numericCharacterLength;
var specialCharactersLength;
var arr;
var shuffledArr;
var concatPassword;


// Function to prompt user for password options
function passwordLengthValidation() {
  passwordLength = prompt('Enter length of password. Choose a number between 12 and 128:');
  // while (passwordLength === null || passwordLength.trim() === "" || passwordLength < 8 || passwordLength > 128){
  // prompt('Password is invalid. Pick a number between 8 and 128');
  // return;
  // }
}
function lowerCaseLengthValidation() {
  lowerCaseLength = prompt('Enter number of lowercase characters');
}
function upperCaseLengthValidation() {
  upperCaseLength = prompt('Enter number of uppercase characters');
}
function numericCharacterLengthValidation() {
  numericCharacterLength = prompt('Enter number of numeric characters');
}
function specialCharactersLengthValidation() {
  specialCharactersLength = prompt('Enter number of special characters');
  return;
}


// Function to validate user password options
function getPasswordOptions(){
  passwordLengthValidation();
  if (passwordLength < 8){
    alert('Password is too short. Pick a number between 8 and 128');
  }
  else if (passwordLength > 128){
    alert('Password is too long. Pick a number between 8 and 128');
  }
  else {
    lowerCaseLengthValidation ();
    if (lowerCaseLength <= 0){
      alert ('Password must include at least one lowercase character');
      lowerCaseLengthValidation();
    }
    else if (lowerCaseLength > passwordLength - 3){
      alert ('Lowercase characters must be less than ' + (passwordLength - 2) + ' characters');
      lowerCaseLengthValidation ();
    }
    else {
      upperCaseLengthValidation();
      if (upperCaseLength <= 0){
        alert ('Password must include at least one uppercase character');
        upperCaseLengthValidation();
      } 
      else if (upperCaseLength > ((passwordLength - lowerCaseLength) - 2)){
      alert ('Uppercase characters must be ' + ((passwordLength - lowerCaseLength) - 2) + ' or less characters');
      upperCaseLengthValidation();
      }
      else {
        numericCharacterLengthValidation();
        if (numericCharacterLength <= 0){
        alert ('Password must include at least one numeric character');
        numericCharacterLengthValidation();
      }
      else if (numericCharacterLength > ((passwordLength - lowerCaseLength - upperCaseLength) - 1)){
        alert ('Numeric characters must be ' + ((passwordLength - lowerCaseLength - upperCaseLength) - 1) + 'or less characters');
        numericCharacterLengthValidation();
      }
      else {
        specialCharactersLengthValidation();
        if (specialCharactersLength <= 0){
          alert ('Password must include at least one special character');
          specialCharactersLengthValidation();
        }
        else if (specialCharactersLength > (passwordLength - lowerCaseLength - upperCaseLength - numericCharacterLength)){
          alert ('Special characters must be ' + (passwordLength - lowerCaseLength - upperCaseLength - numericCharacterLength) + 'or less characters');
          specialCharactersLengthValidation();
        }
    }
  }
  return;
}
}
}


// Function to 
function randomCharacters(){
  arr = [];
  for (var  i = 0; i < lowerCaseLength; i++){
  var randomLow = Math.floor(Math.random() * lowerCasedCharacters.length);
  arr.push(lowerCasedCharacters[randomLow])
  // arr.push(Math.floor(Math.random() * lowerCasedCharacters.length));
  }
  for (var j = 0; j < upperCaseLength; j++){
    var randomUp = Math.floor(Math.random() * upperCasedCharacters.length);
    arr.push(upperCasedCharacters[randomUp])
  }
  for (var k = 0; k < numericCharacterLength; k++){
    var randomNum = Math.floor(Math.random() * numericCharacters.length);
    arr.push(numericCharacters[randomNum])
  }
  for (var l = 0; l < specialCharactersLength; l++){
    var randomSpecial = Math.floor(Math.random() * specialCharacters.length);
    arr.push(specialCharacters[randomSpecial])
  }
  // console.log(arr)
  return;
}

// console.log(arr)

// Function for getting a random element from an array
function getRandom() {
  return Math.random() - 0.5; 
}



// Function shuffle and concatenate password
function shuffleConcat() {
  shuffledArr = arr.slice().sort(getRandom);
  concatPassword = shuffledArr.join('');
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  randomCharacters();
  getRandom();
  shuffleConcat();
  alert('Password is ' + concatPassword);
  return;
}
generatePassword()

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