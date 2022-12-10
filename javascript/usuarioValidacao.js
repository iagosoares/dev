class Usuario{
    constructor(id, login, senha){

        this.id = id;
        this.login = login;
        this.senha = senha;

    }
}


let dados = [
    {id: 1, login: "usuario1", senha: "senha1"},
    {id: 2, login: "usuario2", senha: "senha2"},
    {id: 3, login: "usuario3", senha: "senha3"},
    {id: 4, login: "usuario4", senha: "senha4"},
];

const texto = dados.forEach(element => {
    if ((element.login === 'usuario1') && (element.senha === "senha1")){
        console.log('usuario ok');
    
    }else if ((element.login != 'usuario1') && (element.senha != "senha1")){
            console.log('usuario ok');
        }
    }    

);

console.log(dados.length)

for(let i = 0; i< 4; i++){
    
}

