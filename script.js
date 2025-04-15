const amount = document.getElementById("amount");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", (event) => {  
  const hasCaractersRegex = /\D+/g 
  // Regex para encontrar caracteres que não sejam números
  
  amount.value = amount.value.replace(hasCaractersRegex, ""); 
  // Substitui os caracteres não numéricos por vazio
})

