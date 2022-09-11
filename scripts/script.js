
let inputAdultos = document.getElementById("adultos");
let inputKids = document.getElementById("kids");
let inputDurac = document.getElementById("durac");

let resultado = document.getElementById("resultado");

function calc() {
          
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let kids = inputKids.value;
    let durac = inputDurac.value;

    let qtdDeCarne = carnePP(durac) * adultos + (carnePP(durac) / 2 * kids);
    let qtdDeCerva = cervejaPP(durac) * adultos;
    let qtdDebebida = bebidaPP(durac) * adultos + (bebidaPP(durac) / 2 * kids);

    resultado.innerHTML = ` <p>${qtdDeCarne / 1000}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${qtdDeCerva / 1000}Litros De Cerveja " Adultos " </p>`;
    resultado.innerHTML += `<p>${qtdDebebida / 1000}Litros De Refrigerante  " Crianças "</p>`;

}


function carnePP(durac){

    if (durac >= 6 ) {
        return 850;
    }
    else { 
        return 500;
    }
}

function cervejaPP(durac){

    if (durac >= 6 ) {
        return 3500;
    }
    else {
        return 2200;
    }
}


function bebidaPP(durac){

    if (durac >= 6) {
        return 800;
    }
    else {
        return 500;
    }
    

}