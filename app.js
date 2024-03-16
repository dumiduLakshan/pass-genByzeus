function passwordGenarator(
  passwordLength,
  isLowercase,
  isUppercase,
  isNumber,
  isSymbol
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+}{";
  let password = "";
  let allCharacters = "";

  if (isLowercase) {
    allCharacters += lowercase;
  }
  if (isUppercase) {
    allCharacters += uppercase;
  }
  if (isNumber) {
    allCharacters += number;
  }
  if (isSymbol) {
    allCharacters += symbol;
  }

  for (let i = 1; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomNumber);
  }

  return password;
}

let passwordLength = 5;
let isLowercase = true;
let isUppercase = true;
let isNumber = true;
let isSymbol = true;

function btnClick() {
  passwordLength = Number(document.getElementById("lengthField").value);
  isLowercase = document.getElementById("lower").checked;
  isUppercase = document.getElementById("upper").checked;
  isNumber = document.getElementById("numberChar").checked;
  isSymbol = document.getElementById("symbolsChar").checked;

  if (passwordLength <= 12) {
    let pass = passwordGenarator(
      passwordLength,
      isLowercase,
      isUppercase,
      isNumber,
      isSymbol
    );
    console.log(pass);
    document.getElementById("outputField").value = pass;
  } else {
    alert("Enter password length below 12");
  }
}

function copyText() {
  let value = document.getElementById("outputField").value;
  navigator.clipboard.writeText(value);
  console.log(navigator.clipboard.readText);
  alert(`Copied the text ${value}`);
}
