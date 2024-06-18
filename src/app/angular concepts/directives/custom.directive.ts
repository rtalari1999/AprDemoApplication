import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[customselector]',
    standalone: true
})
export class CustomDirective implements OnInit{

    constructor(private ele : ElementRef){
        console.log('hello',ele)
        this.ele.nativeElement.style.color = 'red';
    }

    ngOnInit(): void {
        //debugger
        //this.ele.nativeElement.style.Color = 'yellow';
    }

}