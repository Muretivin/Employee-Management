import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[]=["Nairobi", "Kisumu", "Meru", "Rongai"];
  employeeArray: any[] = [
    {empId:121, name:'AAA',city:'Nairobi',contactNo:'11111'},
    {empId:122, name:'BBB',city:'Meru',contactNo:'2222'},
    {empId:123, name:'CCC',city:'Nakuru',contactNo:'33333'},
    {empId:124, name:'DDD',city:'Kisumu',contactNo:'444444'},
    {empId:125, name:'EEE',city:'Mombasa',contactNo:'55555'}
  ];
}
