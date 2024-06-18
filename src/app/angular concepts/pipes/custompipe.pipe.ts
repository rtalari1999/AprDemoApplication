// import { Pipe, PipeTransform } from '@angular/core';

import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: 'custompipe',
//   standalone: true
// })
// export class CustompipePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

@Pipe({
  name: 'customPipe',
  standalone: true,
 pure: false
})
export class CustompipePipe implements PipeTransform {

  transform(value: any[], text: string) {
    //console.log('pipe', value, text);
    if(!value){return []};
    if(!text) { return value}


    let searchText = value.filter(item=>{ return  item.name.toLowerCase().includes(text.toLocaleLowerCase())})
    return searchText;



//     if (!value) return []
//     if(!text) return value;
//     let searchtext =  text.toLowerCase();
//     let searchedvalue = value.filter(item =>{
//       return item.name.toLowerCase().includes(searchtext);
//     })
// return searchedvalue;
    


    
  }

}
