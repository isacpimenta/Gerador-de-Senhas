let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#btn");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let conteinerPassword = document.querySelector("#conteiner-pass");

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_-+=";
var novaSenha = "";

sliderElement.oninput = function() {
  sizePassword.textContent = this.value;
}

function gerarSenha() {
  novaSenha = ""; // Limpa a senha anterior

  for (let i = 0; i < sliderElement.value; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    novaSenha += charSet[randomIndex];
  }

  conteinerPassword.classList.remove("hide");
  password.textContent = ''; // Limpa o conteúdo anterior do elemento
  password.textContent = novaSenha;
}

function copy_pass(){
  // Use the Clipboard API to copy the password silently
  navigator.clipboard.writeText(novaSenha)
    .then(() => {
      console.log("Password copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy password to clipboard: ", error);
    });
}