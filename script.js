
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numeric = "0123456789";
let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_{|}~" + "\\" +'"';
console.log(specialChar);
let generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = "";
  let passwordText = document.querySelector("#password");
  passwordText.textContent = " "

  let pwlength = prompt("Enter Length Here");
  if (pwlength == null) { 
    return;
  }
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
  
  if (password === "") {
    alert("Please chose again!");
    return writePassword();
  }

  for (let i = 0; i < pwlength; i++) {
    passwordText.textContent += password[Math.floor(Math.random() * password.length)];
  
  }

}
generateBtn.addEventListener("click", writePassword);
