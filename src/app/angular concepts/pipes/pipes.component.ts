import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustompipePipe } from './custompipe.pipe';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, CustompipePipe, FormsModule, MatSlideToggleModule, MatButtonModule, MatTableModule,MatInputModule, ReactiveFormsModule ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title='angular pipes';
  date = new Date();
  salary = 100000.13347;
  userName='';

  empDEtails = []
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = ELEMENT_DATA;

  searchText: string = '';

  filterText : string = '';

  filterValue(value: Event){
    this.filterText = (value.target as HTMLInputElement).value;
  }

  adddata(){
    this.dataSource.push({position: 11, name: 'Lithiumn', weight: 20.1797, symbol: 'lii'},)

   // console.log('add new', this.dataSource)
  }


  onSubmit(contactForm: NgForm){
    console.log(contactForm);
  }


  addNewData(){
    this.dataSource.push({position: 11, name: 'Neonnnn', weight: 20.1797, symbol: 'Nenn'},)
    console.log('pipe data', this.dataSource)
  }
  contactform: FormGroup;
  constructor(){

  this.contactform = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  })
}

ngSubmit(){
  console.log(this.contactform)
}



  

}
