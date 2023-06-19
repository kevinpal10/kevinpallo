import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit{

  arrayListado = [{path:'', name:''}]
  parametro = ''
  background = ''

  arrayDevWeb = [
    {path: 'https://kevinpal10.github.io/preuniversitario/', name: 'Preuniversitario CENCAP'},
    {path: '', name: 'Centro médico'},
    {path: '', name: 'Antisana volcan'},
    {path: '', name: 'Blog dinámico'},
    {path: '', name: 'SPA'},

  ] 
  
  arrayMetodos = [
    {path: 'Introduccion/AproxSucesivas\AproxSucesivas.php', name : 'Metodo de Aproximaciones Sucesivas '},
    {path: 'Introduccion/Biseccion\Algoritmo.php', name : ' Metodo de Biseccion '},
    {path: 'Introduccion/Derivada\funciones.php', name : ' Metodo de Derivada '},
    {path: 'Introduccion/EDOcuartoOrden\cuartoOrden.php', name : ' Metodo de Edo Cuarto Orden '},
    {path: 'Introduccion/Euler\euler.php', name : 'Metodo de Euler'},
    {path: 'Introduccion/EulerMejorado\EulerMejorado.php', name : ' Metodo de Euler mejorado '},
    {path: 'Introduccion/EulerModificado\EulerModificado.php', name : ' Metodo de Euler modificado ' },
    {path: 'Introduccion/GaussSeidel\GaussSider.php', name :' Metodo de Gauss Seidel ' },
    {path: 'Introduccion/IntegralConTrapecios\Integral.php', name : ' Metodo de Integral con trapecios '},
    {path: 'Introduccion/IntegralSimpoms\Simpsoms.php', name : ' Metodo de Simpons' },
    {path: 'Introduccion/Interpolaciones\InterpLineal.php', name : ' Metodo de Interpolaciones'},
    {path: 'Introduccion/InterpolacionLineal\InterpLineal.php', name : ' Metodo de Interpolación Lineal'},
    {path: 'Introduccion/MetodoDeNewton/MetodoDeNewton.php', name :' Metodo de Newton ' },
    {path: 'Introduccion/MetodoSecante/Secante.php', name : ' Metodo de la Secante ' },
    {path: 'Introduccion/MinimosCuadrados\MinCuadrados.php', name : ' Metodo de Minimos cuadrados ' },
    {path: 'Introduccion/MultiplesPuntos/MultPuntos.php', name : ' Metodo de Multiples puntos '},
    {path: 'Introduccion/NewtonMultivariable\NewtonMulti.php', name : ' Metodo de Newton Multivariables ' },
    {path: 'Introduccion/Proyecto_CuadGauss\proyecto.php', name : ' Metodo de Cuadratura Gaussiana '},
    {path: 'Introduccion/Splaines\splinesCubicos.php', name : ' Metodo de Splaines Cúbicos '},
    {path: 'Introduccion/Thomas&Gauss\Thomas&Gauss.php', name : ' Metodo de Thommas y Gauss '}
  ]

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.parametro = params.nameProyecto
      }
    );
    if(this.parametro == 'mn'){ 
      this.arrayListado = this.arrayMetodos 
    }
    else if (this.parametro == 'web'){ 
      this.arrayListado = this.arrayDevWeb 
    }
  }
    
  }

























