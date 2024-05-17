const formulario = document.querySelector('[data-js="calculator-form"]')
const containerResultados = document.querySelector(".resultados")
const numeroResultado = document.querySelector('[data-js="resultado"]')
const mensagemResultado = document.querySelector('[data-js="mensagem"]')

const obterIMC = (peso, altura) => {
  return peso / altura ** 2
}

const obterMensagem = imc => {
  const estaAbaixoDoPeso = imc <= 18.5
  const estaNoPesoIdeal = imc > 18.5 && imc <= 24.9
  const estaAcimaDoPeso = imc > 24.9 && imc <= 29.9
  const EstaComObesidadeGrau1 = imc > 29.9 && imc <= 34.9
  const EstaComObesidadeGrau2 = imc > 34.9 && imc <= 40

  if (estaAbaixoDoPeso)
    return "Abaixo do peso."
  else if (estaNoPesoIdeal)
    return "Peso ideal."
  else if (estaAcimaDoPeso)
    return "Levemente acima do peso."
  else if (EstaComObesidadeGrau1)
    return "Obesidade grau I."
  else if (EstaComObesidadeGrau2)
    return "Obesidade grau II."
  else
    return "Obesidade grau III"
}

const exibirResultado = (imc, mensagem) => {
  if (!imc || !mensagem) return;

  numeroResultado.textContent = Number(imc).toFixed(2)
  mensagemResultado.textContent = mensagem
  const estaExibindo = containerResultados.classList.contains("mostrar")

  if (estaExibindo) return;
  containerResultados.classList.add("mostrar")
}

const calcularIMC = event => {
  event.preventDefault()
  const { peso, altura } = event.target
  const imc = obterIMC(peso.value, altura.value)
  const mensagem = obterMensagem(imc)

  exibirResultado(imc, mensagem)
}

formulario.addEventListener('submit', calcularIMC)