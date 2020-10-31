import { Component } from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
    
})
export class HelloComponent {

    nome: string;
    clientes: Cliente[];

    constructor(){
        this.nome = "Jose Geraldo";
        let fulano = new Cliente('Fulano', 30);
        let cicrano = new Cliente('Cicrano', 25);
        let rodrigues = new Cliente('Rodrigues', 40);

        this.clientes = [fulano, cicrano, rodrigues];
    }
}
class Cliente {
        constructor(
            public nome: string,
            public idade: number
        ) {}
}