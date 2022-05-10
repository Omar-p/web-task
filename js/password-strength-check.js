const password = document.getElementById("PassEntry");
const confirm = document.getElementById("repeatPassEntry");
const strengthBadge = document.getElementById("StrengthDisp");
console.log(password);
console.log(strengthBadge);


const strongPassword = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const mediumPassword = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

function StrengthChecker(pass) {
	console.log(strongPassword.test(pass));
  if (strongPassword.test(pass)) {
    
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = "Strong";
  } else if (mediumPassword.test(pass)) {
    strengthBadge.style.backgroundColor = "blue";
    strengthBadge.textContent = "Medium";
  } else {
    strengthBadge.style.backgroundColor = "red";
    strengthBadge.textContent = "Weak";
  }
}

// Adding an input event listener when a user types to the  password input
password.addEventListener("input", () => {
  console.log(password.value);

  strengthBadge.style.display = "block";

  //We then call the StrengChecker function as a callback then pass the typed password to it
  StrengthChecker(password.value);

  //Incase a user clears the text, the badge is hidden again

  if (password.value.length !== 0) {
    strengthBadge.style.display = "block";
  } else {
    strengthBadge.style.display = "none";
  }
});

// Adding an input event listener when a user confirm the  password input
function confirmPass() {
  if (confirm.value === password.value) {
    document.getElementById("confirmPass").innerHTML = "";
  } else {
    document.getElementById("confirmPass").innerHTML = "Passwords do not match";
  }
}

confirm.addEventListener("input", confirmPass);
