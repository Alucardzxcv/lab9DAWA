import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  mostrarLista: boolean = false;
  Tarea1:string="Calculo";
  Tarea2: string = "Fisica";
  Tarea3: string = "Quimica";
  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}