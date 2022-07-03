// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercaseChar = true;
let uppercaseChar = true;
let numericChar = true;
let specialChar = true;
let passwordLength = 8;


//Code to get criteria for password
function getCriteria(){
    passwordLength = prompt("What length would you like your password to be? \n(between 8 and 128)");
    while (true) {
        if (passwordLength >=8){
            if (passwordLength <= 128) {
                console.log('password length passes');
                break;
            } else{
                passwordLength = prompt("Sorry, that length is not between 8 and 128... \n How long would you like your password to be?");
            };
        } else {
            passwordLength = prompt("Sorry, that length is not between 8 and 128... \n How long would you like your password to be?");
        };
    };
    lowercaseChar = confirm("Would you like to use lowercase letters?");
    uppercaseChar = confirm("Would you like to use uppercase letters?");
    numericChar = confirm("Would you like to use numeric characters?");
    specialChar = confirm("Would you like to use special characters?");
};

//Code to make a password that fits the right criteria
function generatePassword(){

};

// Write password to the #password input
function writePassword() {
    getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
