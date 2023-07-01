// Assignment code here
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numeric = "0123456789";
let specialChar = "!@#$%^&*()";


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = "";
  let passwordText = document.querySelector("#password");

  let pwlength = prompt("enter length here");
  if (pwlength == null) { return; }
  if (pwlength < 8 || pwlength > 128) {
    alert("Please select between 8-128 characters");
    writePassword();
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
