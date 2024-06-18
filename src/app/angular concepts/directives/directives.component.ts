import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirective } from './custom.directive';
import { CustomStructuralDirective } from './custom-structural.directive';
import { CustomAtrributeDirective } from './custom-attribute.directive';
import { CustomStructuralDemoDirective } from './custom-structural-demo.directive';
import { CustomPipe } from '../pipes/custom.pipe';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, CustomDirective, CustomStructuralDirective, CustomAtrributeDirective, CustomStructuralDemoDirective, CustomPipe],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  title = 'angular directives'
  isAvailable: boolean = true;
  iscustomdirectiveAvailable: boolean = true;
  isUserAvailable: boolean = true;

  isStructuraldirective: boolean = true;

  date=new Date();

  available = {
    color: 'yellowgreen'
  }

  notAvailable = {
    color: 'blue'
  }

  isDirective: boolean = true;
  employeeDtails: any[] = ['emp1', 'emp2', 'emp3', 'emp4', 'emp5','emp6']

  employeeDetails2: any[] = [
    {name:'demo 1', doj:'10/5/2024'},
    {name:'demo 2', doj:'10/5/2024'},
    {name:'demo 3', doj:'10/5/2024'},
    {name:'demo 4', doj:'10/5/2024'}
  ]


  



}
