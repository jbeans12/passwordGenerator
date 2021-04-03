// Assignment Code
var generateBtn = document.querySelector("#generate");


  var numbers = "0123456789".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");
  var passwordLength = "";

  var array=[];
  var password="";

function generatePassword() {
  var passwordLength = (prompt("How many characters would you like in your password?"));
  while(passwordLength <= 8 || passwordLength >= 128) {
    alert("Password must have between 8 and 128 characters");
    var passwordLength = (prompt("How many characters would you like in your password?"));
}   alert("Your password will be " + passwordLength + " long");
  
  var numbersLength = (confirm("Would you like to use numbers in your password?"));
    if (numbersLength === true) {
      array=array.concat(numbers)
    }

  var upperCaseLength = (confirm("Would you like to use upper case letters in your password?"));
    if (upperCaseLength === true) {
      array=array.concat(upperCase)
    }

  var lowerCaseLength = (confirm("Would you like to use lower case letters in your password?"));
    if (lowerCaseLength === true) {
      array=array.concat(lowerCase)
    }
  
  var symbolsLength = (confirm("Would you like to use symbols in your password?"));
    if (symbolsLength === true) {
      array=array.concat(symbols)
    }
 
    
for(var i = 0; i<passwordLength; i++){
  var randomPassword = Math.floor (Math.random() * array.length)
  password += array[randomPassword]
}
return password
} 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
