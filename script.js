// Cotação de moedas
const USD = 4.87
const EUR = 5.36
const GBP = 6.25

//Obtendos os elementos do formulário.
const form = document.querySelector("form"); 
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer"); // Dentro da main, selecione o footer. 

const description = document.getElementById("description"); // Seleciona o elemento com o id "description".

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
  // console.log(currency.value)

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$") // Dólar
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€") // Euro
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£") // Libra
      break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
  try{
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    footer.classList.add("show-result") // Adiciona a classe show-result ao footer para exibir o resultado
  }catch(error){
    alert("Erro ao converter a moeda: ", error)
    footer.classList.remove("show-result") // Remove a classe show-result do footer em caso de erro
  }
}
// Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }) 
}
