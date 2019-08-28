export class Pessoa{
    constructor(_nome, _idade){
        this.nome = _nome;
        this.idade = _idade;
    }

    ficha(){
        return `nome ${this.nome}, idade ${this.idade}`;
    }

}

export var x = 2;