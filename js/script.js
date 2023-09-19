import { adjectives } from './adjectives.js';
import { nouns } from './nouns.js';

// Funktion för att generera ett lösenord
const generatePassword = () => {
  // Hämta användarens valda alternativ för teckenuppsättningen
  const includeNumbers = document.getElementById("numbers-option").checked;
  const includeSpecialChars = document.getElementById("specialchars-option").checked;

  // Skapa listor med tecken baserat på användarens valda alternativ
  let characters = "";
  if (includeNumbers) characters += "0123456789";
  if (includeSpecialChars) characters += "!@#+";

  // Slumpmässigt välj ett tecken från den skapade teckenuppsättningen
  const getRandomCharacter = () => characters[Math.floor(Math.random() * characters.length)];

  // Slumpmässigt välj en adjektiv och substantiv
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  // Definiera specialtecken och generera ett slumpmässigt nummer och specialtecken
  const specialChars = "!@#+";
  const randomNumber = Math.floor(Math.random() * 90) + 10;
  const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

  // Slumpmässigt välj tecken från teckenuppsättningen för att bilda lösenordet
  let password = adjective + noun;
  if (includeNumbers) password += randomNumber;
  if (includeSpecialChars) password += randomSpecialChar;

  const passwordLength = password.length;

  return { password, passwordLength };
};

// Get DOM elements
const generateBtn = document.getElementById("generate-password");
const generatedPasswordInput = document.getElementById("generated-password");
const passwordLengthElement = document.getElementById("generated-password-length");
const copyBtn = document.getElementById("copy-to-clipboard");

// Event listener for the generate password button
generateBtn.addEventListener("click", () => {
  // Generate a password and update the input field and password length display
  const { password, passwordLength } = generatePassword();
  generatedPasswordInput.value = password;
  passwordLengthElement.textContent = passwordLength;
});

// Event listener for the generated password input field
generatedPasswordInput.addEventListener("input", () => {
  // Update the displayed password length when the user types in the input field
  const passwordLength = generatedPasswordInput.value.length;
  passwordLengthElement.textContent = passwordLength;
});

// Event listener for the copy to clipboard button
copyBtn.addEventListener("click", () => {
  // Select and copy the generated password to the clipboard
  generatedPasswordInput.select();
  document.execCommand("copy");
});

const passwordLengthValue = document.getElementById("password-length-value");
