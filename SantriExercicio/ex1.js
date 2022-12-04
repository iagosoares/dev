let x = 38;
let y = x - 1;
let cont = x - 1;
let resultado = 0;
let aux = 0

for(let i = 1; i <= cont; i++){

    if(i < 3 ){

        aux = (x * y) / i;
        resultado = resultado + aux;
        x--;
        y--;        

    }

    if(i > 2 && (i % 2 != 0)){
        aux = (x * y) / i;
        resultado = resultado - aux;
        x--;
        y--;

    }

    if(i > 3 && (i % 2) == 0){

        aux = (x * y) / i;
        resultado = resultado + aux;
        x--;
        y--; 

    }

}

console.log(resultado.toFixed(4))