import { Component, OnInit } from '@angular/core';
import {FunctionalityService,TaskDetails} from '../functionality.service'

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {

  InProgress_data: TaskDetails[] = [];
  displayedColumns: string[] = [];
  currentDate: Date = new Date();

  constructor(private functionality:FunctionalityService) {
   }

  ngOnInit(): void {
    this.InProgress_data=this.functionality.InProgress_data;
    this.displayedColumns=this.functionality.displayedColumns
  }
  calculateDiff(dateSent:Date){
    dateSent = new Date(dateSent);
    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())-Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) ) /(1000 * 60 * 60 * 24));
  }
  Completed(task:TaskDetails) {
    this.functionality.InProgress_data.splice(this.functionality.InProgress_data.indexOf(task),1);
    this.functionality.Completed_data.push(task);
  }
}

