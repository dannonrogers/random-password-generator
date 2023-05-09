// Assignment code here
var password = [];
var passwordResult = "";
var charLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var charUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charNum = ["0","1","2","3","4","5","6","7","8","9"];
var charSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];

function generatePassword() {
  var charCountOpt = prompt("How many characters would you like your password to contain?");
  
  if (charCountOpt == null) {
    return;

  } else if (charCountOpt < 8 || charCountOpt > 128) {
    alert("Password must be at least 8 characters and no more than 128 characters.");
    return;

  } else if (!/^[0-9]+$/.test(charCountOpt)) {
    alert("This field requires a numeric value.");
    return;

  } else {
    var passwordLength = charCountOpt;
  }; 
  
  var charLowerOpt = confirm("Click OK to confirm including lower case characters.");
  
  if (charLowerOpt) {
    password = [...charLower];
  };

  var charUpperOpt = confirm("Click OK to confirm including upper case characters.");
  
  if (charUpperOpt) {
    password = [...password, ...charUpper];
  };

  var charNumOpt = confirm("Click OK to confirm including numeric characters.");
  
  if (charNumOpt) {
    password = [...password, ...charNum];
  };

  var charSpecialOpt = confirm("Click OK to confirm including special characters.");

  if (charSpecialOpt) {
    password = [...password, ...charSpecial];
  };
  
  // generate/write passwordResult
  for (var i = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * password.length);
    passwordResult = passwordResult.concat(password[index]);
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = passwordResult;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
