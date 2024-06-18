import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector:'[customattribute]',
  standalone:true
})
export class CustomAtrributeDirective {


  constructor(private el: ElementRef){
    console.log('directive is called')

    this.el.nativeElement.style.color = 'blue';
  }

}
