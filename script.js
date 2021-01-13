let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = [" ", "!", "#", "$", "%", "^", "&", "+", "*", "-", "?", "~", "@"];

//TODO: Make this variable an array to hold all of the possible options for a password based on the clients criteria;
let possibleCharacters = [];// Should be an array
let userSelection = "";
//TODO: Create another global variable that you can push your final random characters to.

let generateBtn = document.querySelector("#generate");

function writePassword() {
    // added the plus in front here converts to number. We could also do Number(...)
    let passwordLengthPrompt = +window.prompt("What length of Characters do you need?", undefined);// passing the second argument (default) undefined is required for ie11 support
    //TODO: Set variable userSelection to equal passwordLength so that you can use this value
    // in your for loop later (this makes the user specified criteria globally available)
    console.log(passwordLengthPrompt);

    userSelection = passwordLengthPrompt;

    if (
        !passwordLengthPrompt || // Check for falsy instead of just null (this means 0, "", undefined, null, false, etc)
        passwordLengthPrompt < 8 ||
        passwordLengthPrompt > 128
    ) {
        window.alert(
            "password must be over 8 characters but no more than 128!"
        );
    } else {
        let lowercase = window.confirm("Do you want lower case letters in your password?");// These variables need to be what you pass to generatePassword on line 34
        let uppercase = window.confirm("Do you want upper case letters in your password?");// These variables need to be what you pass to generatePassword on line 34
        let specialChar = window.confirm("Do you want special characters in your password?");// These variables need to be what you pass to generatePassword on line 34
        let numbers = window.confirm("Do you want numbers in your password?");// These variables need to be what you pass to generatePassword on line 34
        //TODO: the variables that you pass into password should be the same as your confirm
        // variables and should be in the same order as you use then in your if statements below
        //so that you pass in the users criteria and get out  the values form your arrays that match.

        // the variable names you pass don't have to match with the function declaration, just have to match the variables defined above
        // They just need to go in the right order for whatever upper, lower, special, numb are supposed to be
        let password = generatePassword(uppercase, lowercase, specialChar, numbers);
        let passwordText = document.querySelector("#password");// Finds element on dom with id "password"
        passwordText.value = password;// Updates the value to whatever the variable password is
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


    //TODO: Here you want to create a function that will find a random element from an array when passed in.


    //TODO: if you've completed all other TODOs. Simplify your for loop.
    //instead of possibleCharacters.length--use userSelection
    //then create a new variable that equals randomNumber(possibleCharacters)
    //so that each time your loop executes, it will grab a random item from the possible
    //options and add it to the new variable
    //then push this new variable into the variable created on line 9 to build your password
    //loop by loop

    let password = "";

    for (let i = 0; i < userSelection; i++) {
        console.log("possible characters " + possibleCharacters[i]);
        let randomNumber = Math.floor(Math.random() * 4 + 1);

        console.log("randomNumber =" + randomNumber);

        if (randomNumber === 1) {
            // Reiterate since we got 1 but don't use upper
            if (!upper) {
                i -= 1;
                continue;
            }
            password += uppercase[Math.floor(Math.random() * uppercase.length)];
            console.log("password random = " + password);
        } else if (randomNumber === 2) {
            // Reiterate since we got 1 but don't use lower
            if (!lower) {
                i -= 1;
                continue;
            }

            password += lowercase[Math.floor(Math.random() * lowercase.length)];
            console.log("password random =" + password);
        } else if (randomNumber === 3) {
            // Reiterate since we got 1 but don't use numb
            if (!numb) {
                i -= 1;
                continue;
            }

            password += numbers[Math.floor(Math.random() * numbers.length)];
            console.log("password random =" + password);
        } else if (randomNumber === 4) {
            // Reiterate since we got 1 but don't use special
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

    //TODO: return your variable on line 9 using the join method to create one password
    console.log(password);
    return password;
}

generateBtn.addEventListener("click", writePassword);

// for (var i = 0; i < document.querySelector; i++) {
//   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
// }
// password = document.querySelector("#password");


// generateBtn.addEventListener("click", writePassword);
// add in for loops
// Write password to the #password input

// function writePassword() {

//   var password = generatePassword();

//   passwordText.value = password;

// }
// Add event listener to 