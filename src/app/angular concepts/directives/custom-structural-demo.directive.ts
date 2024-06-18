import { Component, Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({  // 3. added directive decorator
    selector:'[customstructuraldemo]',
    standalone: true
})
export class CustomStructuralDemoDirective implements OnChanges{//  1. created one class

    @Input() customstructuraldemo!: boolean; // 4. a variable with input property

    constructor(private templateRef: TemplateRef<any> /**5. created global variable to get templateref from template */, private  viewContainerRef: ViewContainerRef, /** 6. to create element in dom */){ // 2. created constructor

        console.log('structural directive is called')
    }

    ngOnChanges(changes: SimpleChanges): void { 
        if(this.customstructuraldemo){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }
}

@Directive({
    selector:'[example]'
})
class example implements OnChanges {
    @Input({required: true}) example!: boolean;
    templateRef: TemplateRef<any>;
    viewContainerRef: ViewContainerRef;

    constructor( templateRef: TemplateRef<any>/** html template element  */,  viewContainerRef: ViewContainerRef/*** create element or remove in DOM */){
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnChanges(changes: SimpleChanges): void {
        if(this.example){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

}
// requirement: add color, backgroundcolor, border to para tag
@Component({
    template:`<p *example="a">Hello World, welcome to custom directives class.</p>
    <button (click)= a = !a>display</button>`
})

class classdirective{
    a: boolean = true;
    display(){
        this.a = !this.a;
    }
}

var a : boolean = true;

if(true){
    //statements
} else {
    //statements
}