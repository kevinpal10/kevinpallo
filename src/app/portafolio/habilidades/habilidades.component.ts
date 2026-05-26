import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent {

      addres = './assets/img/Skills/';

  habilidadesDatos = [
    {
      name: 'Bases de datos',
      datos: [
        { imagen: this.addres + 'sqlserver.png', nombre: 'SQL Server', nivel: 'Avanzado' },
        { imagen: this.addres + 'postgresql.png', nombre: 'PostgreSQL', nivel: 'Avanzado' },
      ]
    },
    {
      name: 'Ingeniería de datos',
      datos: [
        { imagen: this.addres + 'python.png', nombre: 'Python', nivel: 'Avanzado' },
        { imagen: this.addres + 'databricks.png', nombre: 'Databricks', nivel: 'Intermedio' },
        { imagen: this.addres + 'powerBI.jpg', nombre: 'Power BI', nivel: 'Intermedio' },
        { imagen: this.addres + 'powerautomate.jpg', nombre: 'Power Automate', nivel: 'Intermedio' },
        { imagen: this.addres + 'powerApps.jpg', nombre: 'Power Apps', nivel: 'Intermedio' },
      ]
    }
  ];

  habilidadesWeb = [
    {
      name: 'Frontend',
      datos: [
        { imagen: this.addres + 'angular.png', nombre: 'Angular', nivel: 'Avanzado' },
        { imagen: this.addres + 'javascript.png', nombre: 'TypeScript / JS', nivel: 'Avanzado' },
        { imagen: this.addres + 'html.jpg', nombre: 'HTML / CSS', nivel: 'Avanzado' },
      ]
    },
    {
      name: 'Backend & Cloud',
      datos: [
        { imagen: this.addres + 'python.png', nombre: 'Django / Python', nivel: 'Avanzado' },
        { imagen: this.addres + 'aws.png', nombre: 'AWS', nivel: 'Intermedio' },
        { imagen: this.addres + 'docker.png', nombre: 'Docker', nivel: 'Intermedio' },
      ]
    }
  ];



}
