import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[customIf]',
    standalone: true
})
export class CustomStructuralDirective implements OnChanges {
    @Input({required:true}) 
    customIf!: boolean;
    constructor(private templateRef: TemplateRef<any>,
         private viewContainerRef: ViewContainerRef){}

         ngOnChanges(): void {

            if(this.customIf){
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainerRef.clear();
            }
             
         }


}