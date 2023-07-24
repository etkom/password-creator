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






// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt('select length of password');
  if (passwordLength < 8){
    alert('Password is short. Pick a number between 8 and 128');
  }
  else if (passwordLength > 128){
    alert('Password is too long. Pick a number between 8 and 128');
  }

  else {
    var lowerCaseLength = prompt('Select number of lowercase characters');
    if (lowerCaseLength <= 0){
      alert ("Password must include at least one lowercase character");
    }
    else if (lowerCaseLength > passwordLength - 3){
      alert ("Lowercase characters must be less than " + (passwordLength - 3) + " characters")
    }

    else {
      var upperCaseLength = prompt('Select number of uppercase characters');
      if (upperCaseLength <= 0){
        alert ("Password must include at least one uppercase character");
      } 
      else if (upperCaseLength > passwordLength - (lowerCaseLength + 2));
      alert ("uppercase characters must be less than " + (passwordLength - (lowerCaseLength - 1)) + " characters" );

      else
      var numericCharacterLength = prompt('Select number of numeric characters');
      if (numericCharacterLength <= 0){
        alert ("Password must include at least one uppercase character")
      }
    }
  }
  return;
}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  // var   = Math.floor(Math.random() * months.length);

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