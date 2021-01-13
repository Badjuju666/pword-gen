var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "#", "$", "%", "^", "&", "+", "*", "-", "?", "~", "@"];
​
//TODO: Make this variable an array to hold all of the possible options for a password based on the clients criteria;
var possibleCharacters = "";
let userSelection = "";
//TODO: Create another global variable that you can push your final random characters to.
​
var generateBtn = document.querySelector("#generate");
function writePassword() {
    var passwordLengthPrompt = window.prompt("What length of Characters do you need?");
    //TODO: Set variable userSelection to equal passwordLength so that you can use this value
    // in your for loop later (this makes the user specified criteria globally available)
    console.log(passwordLengthPrompt);
    if (
        passwordLengthPrompt === null ||
        passwordLengthPrompt < 8 ||
        passwordLengthPrompt > 128
    ) {
        window.alert(
            "password must be over 8 characters but no more than 128!"
        );
​
    } else {
        let lower = window.confirm("Do you want lower case letters in your password?");
        let upper = window.confirm("Do you want upper case letters in your password?");
        let special = window.confirm("Do you want special characters in your password?");
        let numb = window.confirm("Do you want numbers in your password?");
        //TODO: the variables that you pass into password should be the same as your confirm
        // variables and should be in the same order as you use then in your if statements below
        //so that you pass in the users criteria and get out  the values form your arrays that match.
        var password = generatePassword(lowercase, uppercase, specialChar, numbers);
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
}
​
function generatePassword(upper, lower, special, numb) {
​
    if (upper) {
​
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
​
​
    //TODO: Here you want to create a function that will find a random element from an array when passed in.
​
​
    //TODO: if you've completed all other TODOs. Simplify your for loop.
    //instead of possibleCharacters.length--use userSelection
    //then create a new variable that equals randomNumber(possibleCharacters)
    //so that each time your loop executes, it will grab a random item from the possible
    //options and add it to the new variable
    //then push this new variable into the variable created on line 9 to build your password
    //loop by loop
    for (let i = 0; i < possibleCharacters.length; i++) {
        // console.log("possible chrachters " + possibleCharacters[i]);
        // let randomnumbers = Math.floor(Math.random() * 4 + 1)
        // console.log("randomnumbers =" + randomnumbers)
        // if (randomnumbers === 1 && upper) {
        //     password += uppercasepassword[Math.floor(Math.random() * uppercasepassword.length)]
        //     console.log("password random = " + password)
        // }
        // if (randomnubers === 2 && lower) {
        //     password += lowercasepassword[Math.floor(Math.random() * lowercasepassword.length)]
        //     console.log("password random =" + password)
        // }
        // if (randomnumbers === 3 && numb) {
        //     password += numberspassword[Math.floor(Math.random() * numberspassword.length)]
        //     console.log("password random =" + password)
        // }
        // if (randomnumbers === 4 && specail) {
        //     password += specialChar[Math.floor(Math.random() * specialChar.length)]
        //     console.log("password random =" + password)
    }
    //TODO: return your variable on line 9 using the join method to create one password
}
​
generateBtn.addEventListener("click", writePassword);
​
// for (var i = 0; i < document.querySelector; i++) {
//   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
// }
​
// password = document.querySelector("#password");
​
​
// generateBtn.addEventListener("click", writePassword);
// add in for loops
// Write password to the #password input
​
// function writePassword() {
​
//   var password = generatePassword();
​
//   passwordText.value = password;
​
// }
// Add event listener to 