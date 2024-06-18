import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [CommonModule,FormsModule,NgClass],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  courseName: string = "Typescript";
  courseFee: number = 10000;
  courseTiming: string = "7:30 ";
  isActive: boolean = false;
  couseImage : string ='https://blog.eduonix.com/wp-content/uploads/2019/10/AngularJS-Overview.jpg';
  userName: any = '';
  isUserName: boolean = true;

  constructor(){
    console.log(this.courseName);
  }

  userDetails(name: any){
    this.userName = name.target.value;
    console.log('userDetails is called: ', name);
    if(this.userName != ''){
      this.isActive = true;
      this.isUserName = true;
    }
  }



}
