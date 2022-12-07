// password creteria Array

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const chars = ["!", "#", "$", "%", "^", "&", "*"]

const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercase = characterCodes.map(code => String.fromCharCode(code));
const uppercase = lowercase.map(letter => letter.toUpperCase());


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

//define the function of genereate password

const generatePassword = () => {

  //define and generate value to passwordlength

  let passwordlength;
  passwordlength = window.prompt("please enter a number between 8 and 128.")

  if (passwordlength < 8) {
    window.alert("Your entered number is less than 8, please re-enter");
    return ""
  } else if (passwordlength > 128) {
    window.alert("Your entered number is greater than 128,please re-enter");
    return ""
  } else {
    console.log(passwordlength);
  }

  //generate value to password creteria

  let passwordnumbers;
  let passwordchars;
  let passwordlowercase;
  let passworduppercase;

  passwordnumbers = window.confirm("Do you want to include numbers in your password? ")
  passwordchars = window.confirm("Do you want to include special characters in your password? ")
  passwordlowercase = window.confirm("Do you want to include lowercase in your password? ")
  passworduppercase = window.confirm("Do you want to include uppercase in your password? ")

  const creteria = [
    ...(passwordnumbers ? chars : []),
    ...(passwordchars ? numbers : []),
    ...(passwordlowercase ? lowercase : []),
    ...(passworduppercase ? uppercase : [])
  ];

  if (creteria.length == 0) {
    window.alert("You need to confirm at least one creteria")
    return ""
  }

  //generate random password
  

  var password = "";
  for (let i = 0; i < passwordlength; i++) {
    const randomindex = Math.floor(Math.random() * creteria.length);
    password += creteria[randomindex];
  }
  return password
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



