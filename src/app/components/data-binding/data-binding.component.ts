import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "vincent";
  rollNo: number = 123;
  isActive: boolean = true;
  currentData: Date = new Date();
  myPlaceholder: string = "Enter Your Name";
  div1ClassName: string ="bg-primary";
  selectedCity: string ="";
  constructor(){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage (){
    alert ("Welcome to Angular")
  }
  onCityChanges(){
    console.log("City Changed")
  }
    
}
