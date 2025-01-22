import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClassComponent, FormsModule, NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee_management_app';
}
