import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = " ";
  public nome2: string = " ";

  adicionarClique() {
    this.contadorClique ++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  soltarTecla(event: any) {
    
    this.nome = event.target.value;  
  }



}
