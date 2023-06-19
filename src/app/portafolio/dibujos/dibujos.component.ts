import { Component } from '@angular/core';

@Component({
  selector: 'app-dibujos',
  templateUrl: './dibujos.component.html',
  styleUrls: ['./dibujos.component.css']
})
export class DibujosComponent {

  addressImg = " "
  principal_address = "https://i.pinimg.com/originals/83/94/82/83948252775deef651969dfab7744551.png"
  principal_name = "Simba"

  imagenes = [
    {name : "Mario and Luiggi", path:"https://i.pinimg.com/750x/55/37/27/5537274ce28fc01b92343fbdb53279c4.jpg"},
    {name : "Goku", path:"https://i.pinimg.com/750x/75/8d/3c/758d3c23e5c55f92568bc56cc7f3d10c.jpg"},
    {name : "Jirafas", path:"https://i.pinimg.com/originals/d1/88/6f/d1886f05d4476f9fae186c43afed2e70.png"},
    {name : "Mario", path:"https://i.pinimg.com/originals/42/2f/23/422f23795fe5a1bca49718ea02d6ed39.png"},
    {name : "Monito", path:"https://i.pinimg.com/originals/71/92/fe/7192fe339a2a9ea1004c4d719429a973.png"},
    {name : "Arte", path:"https://i.pinimg.com/originals/42/5b/70/425b70437c296f1cd195e87bdebda5c6.png"},
    {name : "Payaso", path:"https://i.pinimg.com/originals/05/9d/17/059d17896bf304d1ca4d0f617c22097a.png"},
    {name : "Mamá", path:"https://i.pinimg.com/originals/fe/7e/bf/fe7ebfcab564350360635d734ed1a129.png"},
    //{name : "Base de datos", imagen:""+this.addressImg+"db.jpg", enlace: "./../../../assets/WhitoutContent.html"},
    //{name : "Dibujos", imagen:""+this.addressImg+"dibujos.jpg", enlace: "./../../../assets/WhitoutContent.html"},
  ]

}
