import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  addressImg = "./assets/img/Proyectos/"

  proyectosEs = [
    {name : "Desarrollo web", imagen:""+this.addressImg+"webDeveloper.jpg", enlace: "/web"},
    {name : "Métodos numéricos", imagen:""+this.addressImg+"Metodosnum.png", enlace: "/mn"},
    //{name : "Base de datos", imagen:""+this.addressImg+"db.jpg", enlace: "./../../../assets/WhitoutContent.html"},
    //{name : "Dibujos", imagen:""+this.addressImg+"dibujos.jpg", enlace: "./../../../assets/WhitoutContent.html"},
  ]

}
