function writePassword() {
    // added the plus in front here converts to number. We could also do Number(...)
    let passwordLengthPrompt = +window.prompt("What length of Characters do you need?", undefined);// passing the second argument (default) undefined is required for ie11 support

    if (
        !passwordLengthPrompt || // Check for falsy instead of just null (this means 0, "", undefined, null, false, etc)
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

        // The user choose Cancel/No for all the prompts
        if (!lowercase && !uppercase && !specialChar && !numbers) {
            window.alert("Sorry, you must pick at least one of these points. Please try again");
            return;
        }

        // the variable names you pass don't have to match with the function declaration, just have to match the variables defined above
        // They just need to go in the right order for whatever upper, lower, special, numb are supposed to be
        let password = generatePassword(uppercase, lowercase, specialChar, numbers, passwordLengthPrompt);
        let passwordText = document.querySelector("#password");// Finds element on dom with id "password"
        passwordText.value = password;// Updates the value to whatever the variable password is
    }
}

function generatePassword(upper, lower, special, numb, passwordLength) {
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let specialChar = [" ", "!", "#", "$", "%", "^", "&", "+", "*", "-", "?", "~", "@"];

    let possibleCharacters = [];// Should be an array

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

    // The logic below relies on there be at least one possible character
    // If there isn't, we could loop infinitely which would be a very bad user experience
    if (!possibleCharacters.length) {
        return "";
    }

    let password = "";

    while(password.length < passwordLength) {
        // Randomize seed between all 4 character types
        // This allows us to give each character type a fair chance of being picked
        let randomNumber = Math.floor(Math.random() * 4 + 1);

        if (randomNumber === 1) {
            // Reiterate since we got 1 but don't use upper
            if (!upper) {
                continue;
            }

            password += uppercase[Math.floor(Math.random() * uppercase.length)];
        } else if (randomNumber === 2) {
            // Reiterate since we got 1 but don't use lower
            if (!lower) {
                continue;
            }

            password += lowercase[Math.floor(Math.random() * lowercase.length)];
        } else if (randomNumber === 3) {
            // Reiterate since we got 1 but don't use numb
            if (!numb) {
                continue;
            }

            password += numbers[Math.floor(Math.random() * numbers.length)];
        } else if (randomNumber === 4) {
            // Reiterate since we got 1 but don't use special
            if (!special) {
                continue;
            }

            password += specialChar[Math.floor(Math.random() * specialChar.length)];
        } else {
            // This shouldn't happen, but if it does, let's just exit early
            // We can do this by throwing an error
            throw new Error("Unexpected randomNumber was a number between 1 and 4");
        }
    }

    return password;
}

let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
