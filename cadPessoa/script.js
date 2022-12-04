class Pessoa {
    constructor(nome, contato, email, status) {

        this.nome = nome;
        this.contato = contato;
        this.email = email;
        this.status = status;

    }
}


let ArrayPessoas = [];


function criaPessoa() {

    let nameInput = document.getElementById('input-name').value;
    let contato = document.getElementById('input-contato').value;
    let emailInput = document.getElementById('input-email').value;
    let radioAtivo = document.getElementById('radio-ativo');
    let radioInativo = document.getElementById('radio-inativo');


    let pessoa = new Pessoa();

    if(radioAtivo.checked){

        pessoa.status = radioAtivo.value;

    }if(radioInativo.checked){
        pessoa.status = radioInativo.value;
        
    }  

    
    pessoa.nome = nameInput;
    pessoa.contato = contato;
    pessoa.email = emailInput;


    ArrayPessoas.push(pessoa);


}