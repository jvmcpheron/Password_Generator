// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercaseChar = true;
let uppercaseChar = true;
let numericChar = true;
let specialChar = true;
let passwordLength = 8;
const lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numericArr = ['1','2','3','4','5','6','7','8','9','0'];
const specialArr = ['!','@','#','$','%','^','&','*'];
let passwordArr = [];
let pass =[];

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
    let rand = 0;
//adds characters to an array
    if (lowercaseChar === true){
        passwordArr = passwordArr.concat(lowercaseArr);
        console.log('lowercase added:' + passwordArr);
    };
    if (uppercaseChar === true){
        passwordArr = passwordArr.concat(uppercaseArr);
        console.log('uppercase added:' + passwordArr);
    };
    if (numericChar === true){
        passwordArr = passwordArr.concat(numericArr);
        console.log('numbers added:' + passwordArr);
    };
    if (specialChar ===true){
        passwordArr = passwordArr.concat(specialArr);
        console.log('specials added:' + passwordArr);
    };

//picks random characters from array to use
    for (let i = 0; i < passwordLength; i++ ){
        rand = Math.floor(Math.random() * passwordArr.length);
        pass = pass.concat(passwordArr[rand]);
        console.log(rand);
    };
    pass = pass.join('');
    return pass;
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
