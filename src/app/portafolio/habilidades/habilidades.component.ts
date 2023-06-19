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
      name : 'Desarrollo web',
      datos : [
        {imagen: ""+this.addres+"html.jpg",nombre: "Html",nivel: "Intermedio"},
        {imagen: ""+this.addres+"css.png",nombre: "Css",nivel: "Intermedio"},
        {imagen: ""+this.addres+"TypeSrcipt.png",nombre: "Typescript",nivel: "Intermedio"},
        {imagen: ""+this.addres+"angular.jpg",nombre: "Angular 14",nivel: "Básico"},
        {imagen: ""+this.addres+"node.jpg",nombre: "Node Js",nivel: "Básico"},
        {imagen: ""+this.addres+"springboot.png",nombre: "Spring Boot",nivel: "Básico"},
        ]
      },
      {
        name : 'Desarrollo móvil',
        datos : [
          {imagen: ""+this.addres+"Kotlin.jpg",nombre: "Kotlin",nivel: "Intermedio"},
          {imagen: ""+this.addres+"androidStudio.jpg",nombre: "Android Studio",nivel: "Intermedio"},
          {imagen: ""+this.addres+"java.jpg",nombre: "Java",nivel: "Intermedio"},
          ]
      },
      {
        name : 'Sistemas de administración de base de datos',
        datos : [
          {imagen: ""+this.addres+"sqlworkbench.png",nombre: "SQL Workbench",nivel: "Intermedio"},
          {imagen: ""+this.addres+"postgresql.png",nombre: "Postre SQL",nivel: "Intermedio"},
          {imagen: ""+this.addres+"mySQL.jpg",nombre: "MySQL",nivel: "Intermedio"},
          {imagen: ""+this.addres+"sqlserver.png",nombre: "SQL Server",nivel: "Intermedio"},
          {imagen: ""+this.addres+"firebase.png",nombre: "Firebase",nivel: "Básico"},
          {imagen: ""+this.addres+"mongodb.jpg",nombre: "MongoDB",nivel: "Básico"},
          ]
      },
      {
        name : 'Lenguajes de programación y otras habilidades',
        datos : [
          {imagen: ""+this.addres+"python.png",nombre: "Phtyon",nivel: "Intermedio"},
          {imagen: ""+this.addres+"c.jpg",nombre: "C",nivel: "Intermedio"},
          {imagen: ""+this.addres+"aws.jpg",nombre: "Servicios AWS",nivel: "Intermedio"},
          {imagen: ""+this.addres+"git.png",nombre: "Git",nivel: "Avanzado"},
          {imagen: ""+this.addres+"docker.jpg",nombre: "Docker",nivel: "Básico"},
          {imagen: ""+this.addres+"Linux.png",nombre: "Linux",nivel: "Intermedio"},
          {imagen: ""+this.addres+"redes.jpg",nombre: "Redes de computadores",nivel: "Intermedio"},
          ]
      },
    
    ]
    




}
