  
//Get the generation button id and create a variable for the password
var generateBtn = document.querySelector("#generate");
var generatedPassword = "";

//Store the character information in seperate variables
var lowerCaseLetterCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetterCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&&*()";
var validCharacters = "";

//Check character inputs
var generateLowerCase = document.getElementById("inputLowerCase");
var generateUpperCase = document.getElementById("inputUpperCase");
var generateNumbers = document.getElementById("inputNumbers");
var generateSpecials = document.getElementById("inputSpecials");

//Check if an input for a character is pressed and if it is add to the validCharacters variable
function generateValidCharacters() {
    if(generateLowerCase.checked) {
        validCharacters += lowerCaseLetterCharacters;
    }
    if (generateUpperCase.checked) {
        validCharacters += upperCaseLetterCharacters;
    }  
    if (generateNumbers.checked) {
        validCharacters += numberCharacters;
    }  
    if (generateSpecials.checked) {
        validCharacters += specialCharacters;
    }
}

function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
}

function addCharFromArray(amountOfChars) {
    for (var i = 0; i < amountOfChars; i++) {
        generatedPassword += getRandomFromArray(validCharacters);
    }
}

function generatePassword(length) {
    // var passwordLength = document.getElementById("myPasswordLength").value;
    if(generateLowerCase.checked || generateUpperCase.checked || generateNumbers.checked || generateSpecials) {
        generateValidCharacters();
        validCharacters.split();
        addCharFromArray(length);
        return generatedPassword;
    } else {
        alert("Please enter at least 1 character.");
    }
}

// Write password to the #password input
function writePassword() {
    generatedPassword = "";
    validCharacters = "";
    var passwordLength = document.getElementById("myPasswordLength").value;
    parseInt(passwordLength);

    //Check for character specification inputs


    if(passwordLength >= 8 && passwordLength <= 128) {
        var password = generatePassword(passwordLength);
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    } else {
        alert("Please enter a value between 8 and 128");
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);