import { Component, OnInit } from '@angular/core';
import {FunctionalityService,TaskDetails} from '../functionality.service'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  Completed_data: TaskDetails[] = [];
  displayedColumns: string[] = [];
  currentDate: Date = new Date();

  constructor(private functionality:FunctionalityService) {
   }

  ngOnInit(): void {
    this.Completed_data=this.functionality.Completed_data;
    this.displayedColumns=this.functionality.displayedColumns
  }
  calculateDiff(dateSent:Date){
    dateSent = new Date(dateSent);
    var diff = Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())-Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) ) /(1000 * 60 * 60 * 24));
    if(diff>0){
      return "Before Deadline";
    }
    else if(diff<0){
      return "After Deadline";
    }
    else{
      return "On Deadline";
    }
  }
}
