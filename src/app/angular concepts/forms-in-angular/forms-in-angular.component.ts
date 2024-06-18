import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-in-angular',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule/**import step-2 */],
  templateUrl: './forms-in-angular.component.html',
  styleUrl: './forms-in-angular.component.css'
})
export class FormsInAngularComponent implements OnInit{
@Input() tle!: string;
@Output() customform = new EventEmitter<any>();
sendItem(){


  this.customform.emit({email: 'name@gmail.com'})
}
 contactform: FormGroup;


 employyeename:string ='Raju@1234';
 constructor( private fb: FormBuilder){
  this.contactform = this.fb.group({
    email: ['example@gmail.com', Validators.required],
    password: new FormControl(null),
    address: new FormControl()
  })

  //this.methodname();
 }

 ngOnInit(): void {
  //this.methodname();
  this.setCustomerInfo();
 }

 methodname(){

  let cf = {
    email : 'user1@gmail.com',
    password: '',
    address: ''
  }

  this.contactform.setValue(cf);

  this.contactform.patchValue({
    email:`${this.tle}@gmail.com`
  })

  this.contactform.controls['password'].setValidators(null)


  
 }

 setCustomerInfo(){
  this.contactform.setValue({email:'rohit@gmail.com',
password: '12345', address:''})

this.contactform.patchValue({email:'Sampath@gmail.com'})

this.contactform.controls['email'].setValidators(null)
 }

  onSubmit(contactForm: NgForm){

    console.log('onSubmit metod is invoked',contactForm )

  }


  getContactform(){
    console.log('Reactive form ', this.contactform);
    console.log(this.tle)
  }

}
