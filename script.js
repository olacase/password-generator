//  let complexity = document.getElementById('password').value;
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharcters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
function getPasswordOptions() {
 var length = parseInt(prompt('how many charcters would you like your password to contain?'), 10 );
 if (Number.isNaN(length)){alert('password length must be provided as a number');
return null;
}
if (length < 8){
 alert('password length must be at least 8 characters');
 return null;}
 if (length > 128) {
   alert('password must be below 128 characters');
   return null;
 }
// }
//  let password = '';
var hasnumericCharacters = confirm('Click OK to confirm including numeric charcters.');
var haslowerCaseCharcters = confirm('Click OK to confirm including lowercase letters');
var hasupperCaseCharcters = confirm("Click OK to confirm including upper case letters");
var hasspecialCharacters = confirm('Click OK to confirm including special characters');
if (hasnumericCharacters === false &&
 haslowerCaseCharcters === false &&
 hasupperCaseCharcters === false &&
 hasspecialCharacters === false ) {alert('Must select at leasr one character type')
 return null;
}
var passwordOptions = {
 length: length,
 haslowerCaseCharcters: haslowerCaseCharcters,
 hasnumericCharacters: hasnumericCharacters,
 hasupperCaseCharcters: hasupperCaseCharcters,
 hasspecialCharacters: hasspecialCharacters
 };
return passwordOptions;
}
function getRandom(arr){
var randomIndex = Math.floor(Math.random() * arr.length);
var randomElement = arr[randomIndex];
return randomElement;
}
function generatePassword(){
var options = getPasswordOptions();
var result = [];
var possibleCharacters = [];
var guaranteedCharacters = [];
if (!options) return null;
if (options.hasspecialCharacters){
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}
if (options.hasnumericCharacters){
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
}
if (options.haslowerCaseCharcters){
 possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
 guaranteedCharacters.push(getRandom(lowerCaseCharacters));
}
if (options.hasupperCaseCharcters){
 possibleCharacters = possibleCharacters.concat(upperCaseCharcters);
 guaranteedCharacters.push(getRandom(upperCaseCharcters));
}
for (var i = 0; i < options.length; i++) {
var possibleCharacter = getRandom(possibleCharacters);
result.push(possibleCharacter);
 // password = password + value.charAt(Math.floor(value.lenght-1));
 // password += value.substring(passwordLenght, value +1);
}
for (var i = 0; i < guaranteedCharacters.length; i++){
 result[i] = guaranteedCharacters [i];}
return result.join('');
}
//
// document.getElementById('password').complexity = password;
// }
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');
   passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);