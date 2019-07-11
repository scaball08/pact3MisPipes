import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo: boolean=true): string {
       let caract:string = "*";
        if(activo){
          value = caract.repeat(8);
          return value;
        }


    return value;
  }

}
