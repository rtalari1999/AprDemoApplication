import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DummyDataService } from './dummy-data.service';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,HttpClientModule, ReactiveFormsModule],
  providers: [DummyDataService],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  empDetails: any;
  id!: string;

  constructor(private dummyDataService : DummyDataService, private fb : FormBuilder ){

  }

  ngOnInit(): void {
    this.getData();
    
  }


  contactform = this.fb.group({
    title: [''],
    views:[]
  })


  editContactform = this.fb.group({
    id : null,
    title: [''],
    views:[]
  })



  getData(){

    this.dummyDataService.getResponse().subscribe(res => {
      this.empDetails = res;
    })
  }

  postData(){
    console.log('This.contactform', this.contactform.value)
    this.dummyDataService.postData(this.contactform.value).subscribe(res => {
      console.log(res);
      this.getData();
      this.contactform.reset();
    });
  }

  deleteData(id: string){
    console.log('id: ', id);

    this.dummyDataService.deletePostsData(id).subscribe(res=>{
      console.log(res);
      this.getData();
    })
  }


  updateData(){
    debugger

    //console.log('This.contactform', this.contactform.value)
    //this.contactform.addControl('id', new FormControl()))

    //this.contactform.addControl('authors',this.fb.group({authours:[]})))
    //console.log('This.contactform', this.contactform.value)
    this.editContactform.patchValue(this.contactform.value)
    let id = this.editContactform.get('id')?.value;
    console.log('This.contactform',id,this.editContactform.value )

    
    
    this.dummyDataService.updateData(this.editContactform.value,this.id).subscribe(res => {
      this.getData();
      this.contactform.reset();
      this.editContactform.reset();
    })
  }

  updateContactform(event:any){
    debugger
    //console.log(event)
    this.id= event.id;
    this.editContactform.patchValue(event);
    this.contactform.patchValue(event);
    //console.log(this.editContactform.value)
  }



}
