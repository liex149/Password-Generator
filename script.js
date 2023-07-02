// variables for password
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numeric = "0123456789";
let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_{|}~" + "\\" +'"';

let generateBtn = document.querySelector("#generate");

// function for random generator
function writePassword() {
  let password = "";
  let passwordText = document.querySelector("#password");
  
  passwordText.textContent = " "

  // Entered length if wrong character then uder will be redirected 
  let pwlength = Math.trunc(prompt("Enter Length Here"));
  if (pwlength == null) { 
    return;
  }
  // password range
  if (!(pwlength > 7) || !(pwlength < 129)) {
    alert("Please select between 8-128 characters");
    return writePassword();
  }

  let tfUpper = confirm("Would you like upper cases?");
  if (tfUpper == true) {
    password = password + upperCase;
  }
  
  let tfLower = confirm("Would you like lower cases?");
  if (tfLower == true) {
    password = password + lowerCase;
  }
  
  let tfnumeric = confirm("Would you like numbers?");
  if (tfnumeric == true) {
    password = password + numeric;
  }
 
  let tfspecialChar = confirm("Would you like special characters?");
  if (tfspecialChar == true) {
    password = password + specialChar;
  }
  
  // if user choses wrong character or length will be redirected to choose again
  if (password === "") {
    alert("Please chose again!");
    return writePassword();
  }

  // generates random characters
  for (let i = 0; i < pwlength; i++) {
    passwordText.textContent += password[Math.floor(Math.random() * password.length)];
    
  }

}
generateBtn.addEventListener("click", writePassword);
