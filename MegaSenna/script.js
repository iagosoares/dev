var lista = [];

for (let i = 1; i <= 60; i++) {
    lista.push(i);

}

let myDiv = document.getElementById("app");

for (let i = 0; i < lista.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = lista[i];
    myDiv.appendChild(p);
}

var btn = document.getElementById('btn')

    btn.addEventListener("click", ()=>{
        NumberSelect()
        
    })

function NumberSelect() { 

    let itensRandom = []
    var elementos = document.querySelectorAll('p')

    for (let i = 0; i <= 5; i++) {
        let x = Math.floor((Math.random() * 60) + 1)
        itensRandom.push(x);
    }

    itensRandom.forEach(function (item) {
        console.log(item)        
        item = item - 1
        elementos[item].classList.add('itemRandom')
        // 0 - 59 index do elemento p vão de 0 a 59, por isso item recebe -1

    })
    
}


//Tirar valores repetidos do random
    
