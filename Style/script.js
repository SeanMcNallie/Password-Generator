// Assignment Code
var generateBtn = document.querySelector("#generate");
// pick random charaters
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomChar(list){
  return list[randomInt(0, list.length)]
}

//main function
function generatePassword(){
  console.log ("You clicked the button!")
  // Pasword Length
var userInput = window.prompt("Please pick a password length between 8 and 128 characters.")

var passwordLength = parseInt(userInput)
// Is password a number?
if (isNaN(passwordLength)) {
  window.alert("Please pick a valid number")
  return
} 
//password between 8 and 128
if (passwordLength < 8 || passwordLength > 128) {
 window.alert("Password must be between 8 and 128 characters.") 
 return
}
// Password questions
var includeNumbers = window.confirm("Would you like to have numbers in your password?")
var includeSymbols = window.confirm("Would you like to have symbols in your password?")
var includeLowercase = window.confirm("Would you like to have lowercase letters in your password?")
var includeUppercase = window.confirm("Would you like to have UPPERCASE letters in your password?")
// password arrays
var lower = "abcdefghijklmnopqrstuvwxyz" .split(
  ""
);
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split(
  ""
);
var numbers = "0123456789".split(
  ""
);
var symbols = "!@#$%^&*_-=+".split(
  ""
);
// creates a place to put the random characters
var optionsCart = []
// includes the characters choosen
if (includeNumbers === true) {
  optionsCart.push(numbers)
}
if (includeSymbols === true) {
  optionsCart.push(symbols)
}
if (includeLowercase === true) {
  optionsCart.push(lower)
}
if (includeUppercase === true) {
  optionsCart.push(upper)
}

//if nothing is selected do this

if (optionsCart.length === 0) {
  optionsCart.push(numbers)
  optionsCart.push(symbols)
  optionsCart.push(lower)
  optionsCart.push(upper)
  
}
console.log (optionsCart)
// generate the random password
var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
var randomPass = getRandomChar(optionsCart)
var randomChar = getRandomChar(randomPass)
generatedPassword += randomChar;
}
console.log(generatedPassword)
return generatedPassword

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
