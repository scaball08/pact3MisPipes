import { Component } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = "Sergio";
  nombreComp = "SerGIo caBAllero ApodacA";

  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;

  salario = 1234.5;
  heroe =  {
    nombre: "Linterna Verde",
    bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida",
    img: "assets/img/linterna-verde.png",
    aparicion: "1940-06-01",
    casa: "DC"
  };

  fecha =  new Date();

  video = "rXdm-IcHL3A";
  activar:boolean=true;


  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('llego la data'), 3500);
  });

}
