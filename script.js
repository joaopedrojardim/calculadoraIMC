const buttonCalcular = document.querySelector("button")
const inputPeso = document.querySelector("#peso")
const inputAlt = document.querySelector("#alt")
const resultadoIMC = document.querySelector('b')
const resultadoClassificacao = document.querySelector('span')

let peso
let altura
let imc 

buttonCalcular.addEventListener('click', calcIMC)

function calcIMC(){
    peso = inputPeso.value;
    altura = inputAlt.value; 

    peso = +peso.replace(",",".")
    altura = +altura.replace(",",".")

    imc = (peso / altura**2).toFixed(2)
    escreverResultado()
}


function calcClassificacoes(imc){
    if(imc < 18.5) return "Abaixo do peso normal"
    else if(imc >= 18.5 && imc < 25) return "Peso normal"
    else if(imc >= 25 && imc < 30) return "Excesso de peso"
    else if(imc >= 30 && imc < 35) return "Obesidade 1"
    else if(imc >= 35 && imc < 40) return "Obesidade 2"
    else return "Obesidade 3"
}

function escreverResultado(){
    resultadoIMC.innerText = `IMC: ${imc}`
    resultadoClassificacao.innerText = `${calcClassificacoes(imc)}`
}