import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}


//If you want to create a component then you must have to add @Component decorator 

/**
 * in latest versions Angular using standalone
 * 
 * in previous there was module
 * 
 * module ====>>>>> functionality
 * component 1
 * component 2
 * component 3
 * component 4
 * 
 * 
 * profile ====>>>>> module
 *  personal details =====> component
 *  address details =====> component
 * 
 * settings  ======>>>> module
 *  change password ====>>>>> component
 *  logout ==== >>>>>> component
 * 
 * orderlist =======>>>> module
 *  selectItem =====> component
 */