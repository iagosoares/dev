let relatorio1 = document.getElementById('raca01');
let relatorio2 = document.getElementById('raca02');

class Bovinos {
    constructor(raca, peso) {

        this.raca = raca;
        this.peso = peso;

    }
}


function gerar() {

    let qnt = 0;
    let array = [];




    while (qnt < 5) {
        let boi = new Bovinos();
        let raca = getRandomInt(1, 3);
        let kg = getRandomInt(1, 1001);

        if (raca == 1) {
            boi.raca = 1;
            boi.peso = kg;
            array.push(boi)

        }
        else {
            boi.raca = 2;
            boi.peso = kg;
            array.push(boi)
        }

        qnt++;



    }




    mostrarRaca(array)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarRaca(array) {
    let a = 0;
    let b = 0;
    let tipoA = []
    let tipoB = []

    for (let item of array) {
        if (item.raca == 1) {
            a = a + 1;

            tipoA.push(item.peso)

        } else {
            b = b + 1
            tipoB.push(item.peso)

        }
    }

    let maiorA = 0;
    let menorA = 0;
    for (let i = 0; i < tipoA.length; i++) {
        if (tipoA[i] > maiorA) {
            maiorA = tipoA[i]
        }



    }

    let maiorB = 0;
    let menorB = 0;
    for (let i = 0; i < tipoB.length; i++) {
        if (tipoB[i] > maiorB) {
            maiorB = tipoB[i]
        }

        if (tipoB[i] < menorB) {
            menorB = tipoB[i]
        }




    }



    if (a > 1 && tipoA.length != 0) {
        relatorio1.innerText = `Bovinos da raça 1: ${a} \n Total de KG raça 1: ${soma(tipoA)} Kg \n Media do peso: ${(soma(tipoA) / a).toFixed(2)} Kg \n Boi da raça 1 mais pesado: ${maiorA} Kg \n Boi da raça 1 mais leve: ${menorA} Kg`



    } else if (a == 1) {
        relatorio1.innerText = `${a} Bovino da raça 1 \n Total de KG raça 1: ${soma(tipoA)} Kg \n Media: ${(soma(tipoA) / a).toFixed(2)} Kg \n Boi mais pesado: ${maiorA} Kg \n Boi da raça 1 mais leve: ${menorA} Kg`


    } else {
        relatorio1.innerText = 'Não existe bovinos da raça 1.'

    }

    console.log('----------------------------------')

    if (b > 1 && tipoB.length != 0) {
        relatorio2.innerText = `${b} Bovinos da raça 2 \n Total de KG raça 2: ${soma(tipoB)} Kg \n Media: ${(soma(tipoB) / b).toFixed(2)} Kg \n Boi raça 2 mais pesado: ${maiorB} Kg \n Boi da raça 1 mais leve: ${menorB} Kg`


    } else if (b == 1) {
        relatorio2.innerText = `${b} Bovino da raça 2 \n Total de KG raça 2: ${soma(tipoB)} Kg \n Media: ${(soma(tipoB) / b).toFixed(2)} Kg \n Boi raça 2 mais pesado: ${maiorB} Kg \n Boi da raça 1 mais Leve: ${menorB} Kg`



    } else {
        relatorio2.innerText = 'Não existe bovinos da raça 2.'
    }


}


function soma(vetor) {

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {

        soma = soma + vetor[i];

    }

    return soma;
}





