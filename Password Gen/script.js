// Assignment code here

var characterLength = 8;
var choiceOpt = [];

var specialCharOpt = ["!","@","#","$","%","&","*","<",">","?","/","=","^"];
var lowerCaseOpt = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseOpt = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numberOpt= ["1","2","3","4","5","6","7","8","9","0",];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var password = "";
for(var i= 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceOpt.length);
  password = password + choiceOpt[randomIndex];
   }
   return password;

}

//1.Prompt the user for the password criteria
      //a. password length 8<128
      //b.uppercase,lowercase,numbers,special characters
  //2.Validate the input/input validation
  //3.Generate password based on criteria

function getPrompts(){
  choiceOpt = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));

  //if false

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(" Oops! Charater length must be a number, 8 - 128 numeric. Please try again.");
    return false;
  }
  
  //if true
  if (confirm("Would you like your password to contain lowercase letters?")) {
    choiceOpt = choiceOpt.concat(lowerCaseOpt);
  }
  if (confirm("Would you like your password to contain uppercase letters?")) {
    choiceOpt = choiceOpt.concat(upperCaseOpt);
  }
  if (confirm("Would you like your password to contain special characters?")){
    choiceOpt = choiceOpt.concat(specialCharOpt);
  }
  if (confirm("Would you like your password to contain numbers? ")){
    choiceOpt = choiceOpt.concat(numberOpt);
  }
  return true;
}


//4.Display password on the page
  
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
