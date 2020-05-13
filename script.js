
function generatePassword() {
  //init vars
  var character = "";
  var randomPasswordGenerated =  "";
  //reset newpassword field to empty
  document.getElementById("newpassword").value = randomPasswordGenerated;

  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  //Validate range between 8 and 128
  if (passwordLength == "" || (passwordLength < 8 || passwordLength > 128 )) {
    alert("Error, The number of characters must be more than 8 but less than 128.");
    return false;
  }

     //*Add the caracters to the character var
      if(confirm("Do you want lowercases in your password?")){
        character = character + "abcdefghijklmnopqrstuvwxyz";
      }
      if(confirm("Do you want uppercases in your password?")){
        character = character + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if(confirm("Do you want special characters in your password?")){
        character = character + " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      }
      if(confirm("Do you want numbers in your password?")){
        character = character + "0123456789";
      }
      //if any condition return true generate password
      if (character.length > 0) {
     // Create the random password
      for (let i = 0; i < (parseInt(passwordLength)); i++) { 
        var randomNumberPicked = character[Math.floor(Math.random() * character.length)];
        randomPasswordGenerated += randomNumberPicked;
      }
  
      } else {
        alert("Error, You have to select some criterias to generate the password.");
        return false;
      }
 

      // Set the new password to newpassword input.
      document.getElementById("newpassword").value = randomPasswordGenerated;
};

 
