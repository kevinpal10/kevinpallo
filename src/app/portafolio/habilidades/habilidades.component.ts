import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent {

    addres = "./assets/img/Skills/"

    habilidades = [
      {
        name : 'Automatización de procesos',
        datos : [
          {imagen: ""+this.addres+"databricks.png",nombre: "Databricks",nivel: "Intermedio"}, 
          {imagen: ""+this.addres+"python.png",nombre: "Phtyon",nivel: "Intermedio"}, 
          {imagen: ""+this.addres+"powerBI.jpg",nombre: "Power BI",nivel: "Intermedio"},
          {imagen: ""+this.addres+"powerautomate.jpg",nombre: "Power Automate",nivel: "Intermedio"},
          {imagen: ""+this.addres+"powerApps.jpg",nombre: "Power Apps",nivel: "Intermedio"} 
          ]
      },
      {
      name : 'Desarrollo web',
      datos : [
        {imagen: ""+this.addres+"html.jpg",nombre: "Html",nivel: "Intermedio"},
        {imagen: ""+this.addres+"css.png",nombre: "Css",nivel: "Intermedio"}, 
        {imagen: ""+this.addres+"javascript.png",nombre: "JavaScript",nivel: "Intermedio"}, 
        {imagen: ""+this.addres+"angular.png",nombre: "Angular 14",nivel: "Básico"},
        ]
      },


    
    ]
    




}
