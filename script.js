// Assignment code here
// let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let specialChar = [" ", "!", "#", "$", "%", "^", "&", "+", "*", "-"];
// let numbers = [0,1,2,3,4,5,6,7,8,9];
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var passwordLengthPrompt = window.prompt("What length of Characters do you need?");

if ( 
  passwordLengthPrompt  === null || 
  passwordLengthPrompt < 8 ||
  passwordLengthPrompt > 128
  ) {
    window.alert(
      "password must be over 8 characters but no more than 128!"
    );

} else {
let lowercase = window.confirm("Do you want lower case letters in your password?")
let uppercase =  window.confirm("Do you want upper case letters in your password?")
let specialChar = window.confirm("Do you want special characters in your password?")
let numbers =  window.confirm("Do you want numbers in your password?")


var password = generatePassword ( lowercase, uppercase, specialChar, numbers);
var passwordText = document.querySelector("#password");
passwordText.value = password;
} 
{
  function generatePassword (passwordlength, uppercase, lowercase, specialChar, numbers) {
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var specialChar = [" ", "!", "#", "$", "%", "^", "&", "+", "*", "-"];
  let password = "";
  }
}
// 
 // add in four loops
// Write password to the #password input

// function writePassword() {

//   var password = generatePassword();

//   passwordText.value = password;

// }
// Add event listener to generate button
};
generateBtn.addEventListener("click", writePassword);
