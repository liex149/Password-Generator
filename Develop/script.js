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

  let tfUpper = confirm("Would you like upper cases?");
  if (tfUpper == true) {
    password = password + upperCase;
  }
  console.log(password);

  let tfLower = confirm("Would you like lower cases?");
  if (tfLower == true) {
    password = password + lowerCase;
  }
  console.log(password);

  let tfnumeric = confirm("Would you like numbers?");
  if (tfnumeric == true) {
    password = password + numeric;
  }
  console.log(password);

  let tfspecialChar = confirm("Would you like special characters?");
  if (tfspecialChar == true) {
    password = password + specialChar;
  }
  console.log(password);

  if (password == "") {
    alert("Please chose again!");
    writePassword();
  }


  passwordText.textContent = password[Math.floor(Math.random() * password.length)];

  for (let i = 0; i < pwlength; i++) {
    passwordText.textContent += password[Math.floor(Math.random() * password.length)];

    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
