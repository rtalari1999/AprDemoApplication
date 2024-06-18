import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'customPipe', standalone: true})
export class CustomPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        console.log('pipe', value, args);
        return this.display();
    }

    display(){
        return 'hello world'
    }

}