// Função para embaralhar um vetor


function escrever(){
    for(let i=1; i<=60; i++ ){
        console.log(i);

        console.log("texto: \${i}");
    }
}


    




function addElement(){

    var divNova = document.createElement("p");

    for(aux in vetor){
        let valor = document.createTextNode(aux);
        divNova.appendChild.tex;

    }

   
}

function criaElemento(){
    const p = document.createElement("p");
    return p;
};

function resultado(msg){
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
    const p = criaElemento();
    p.innerHTML = msg;
    resultado.appendChild(p);

}