//Obtendos os elementos do formulário.
const form = document.querySelector("form"); 
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", (event) => {  
  const hasCaractersRegex = /\D+/g 
  // Regex para encontrar caracteres que não sejam números
  
  amount.value = amount.value.replace(hasCaractersRegex, ""); 
  // Substitui os caracteres não numéricos por vazio
})

// Capturando o evento de submit (enviar)  do formulário.
form.onsubmit = (event) => {
  event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
  console.log(currency.value)
}

