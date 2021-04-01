// Carne - 400g por pessoa + de 6hrs -650
// Cerveja - 1200 ml por pessoa + 6 hrs -2000 ml
// Refrigerante/agua - 1000ml por pessoa + 6hrs 1500 ml
// Crianças valem por 0,5
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne </p>`// divide por 1k pra dar em kg
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`//a gente divide pela quantidade de ml da latinha pra saber quanto vai de bebida por lata e arredonda pra cima com math.ceil
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's de 2l de Bebida</p>`//aqui dividimos por 2000ml q é o equivalente a 2l feito geralmente

}

function carnePP(duracao) {
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao) {
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidasPP(duracao) {
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
