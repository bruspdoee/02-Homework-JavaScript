// Assignment code 
var generateBtn = document.querySelector("#generate");
var generatedPassword = "";

var lowerCaseLetterCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetterCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&&*()";
var validCharacters = "";

//creating variables for character inputs
var generateLowerCase = document.getElementById("inputLowerCase");
var generateUpperCase = document.getElementById("inputUpperCase");
var generateNumbers = document.getElementById("inputNumbers");
var generateSpecials = document.getElementById("inputSpecials");

//If an input for a character is pressed, add to the validCharacters variable
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

//Function that will return randomized characters (either number or strings) which is converted using the ParseInt method 
function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
}

// 
function addCharFromArray(amountOfChars) {
    for (var i = 0; i < amountOfChars; i++) {
        generatedPassword += getRandomFromArray(validCharacters);
    }
}

// Wrote function that will generate password based on what is clicked 
function generatePassword(length) {
    if(generateLowerCase.checked || generateUpperCase.checked || generateNumbers.checked || generateSpecials) {
        generateValidCharacters();
        validCharacters.split();
        addCharFromArray(length);
        return generatedPassword;
    } 
}

// Write password to the #password input
function writePassword() {
    generatedPassword = "";
    validCharacters = "";
    var passwordLength = document.getElementById("myPasswordLength").value;
    parseInt(passwordLength);

    //Check if for user inputs is between 8 and 128 characters, alert user to enter number if no number is entered 
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