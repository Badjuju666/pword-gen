let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = [" ", "!", "#", "$", "%", "^", "&", "+", "*", "-", "?", "~", "@"];
let possibleCharacters = [];
let userSelection = "";


let generateBtn = document.querySelector("#generate");

function writePassword() {

  let passwordLengthPrompt = +window.prompt("What length of Characters do you need?", undefined);
  console.log(passwordLengthPrompt);

  userSelection = passwordLengthPrompt;

  if (
    !passwordLengthPrompt ||
    passwordLengthPrompt < 8 ||
    passwordLengthPrompt > 128
  ) {
    window.alert(
      "password must be over 8 characters but no more than 128!"
    );
  } else {
    let lowercase = window.confirm("Do you want lower case letters in your password?");
    let uppercase = window.confirm("Do you want upper case letters in your password?");
    let specialChar = window.confirm("Do you want special characters in your password?");
    let numbers = window.confirm("Do you want numbers in your password?");
    let password = generatePassword(uppercase, lowercase, specialChar, numbers);
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword(upper, lower, special, numb) {
  if (upper) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }
  if (lower) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }
  if (numb) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (special) {
    possibleCharacters = possibleCharacters.concat(specialChar);
  }
  console.log(possibleCharacters);
  let password = "";
  for (let i = 0; i < userSelection; i++) {
    console.log("possible characters " + possibleCharacters[i]);
    let randomNumber = Math.floor(Math.random() * 4 + 1);

    console.log("randomNumber =" + randomNumber);

    if (randomNumber === 1) {
      if (!upper) {
        i -= 1;
        continue;
      }
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
      console.log("password random = " + password);
    } else if (randomNumber === 2) {
      if (!lower) {
        i -= 1;
        continue;
      }
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
      console.log("password random =" + password);
    } else if (randomNumber === 3) {
      if (!numb) {
        i -= 1;
        continue;
      }
      password += numbers[Math.floor(Math.random() * numbers.length)];
      console.log("password random =" + password);
    } else if (randomNumber === 4) {
      if (!special) {
        i -= 1;
        continue;
      }

      password += specialChar[Math.floor(Math.random() * specialChar.length)];
      console.log("password random =" + password);
    } else {
      console.error("Unexpected randomNumber was a number between 1 and 4");
    }
  }
  console.log(password);
  return password;
}

generateBtn.addEventListener("click", writePassword);