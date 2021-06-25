import { Component, OnInit } from '@angular/core';
import {FunctionalityService,TaskDetails,Priority} from '../functionality.service'

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css']
})
export class CreatedComponent implements OnInit {

  priorityList: Priority[]=[];
  Created_data: TaskDetails[] = [];
  displayedColumns: string[] = [];
  newTask: string="";
  priority: string="Urgent";
  dueDate: Date=new Date;
  currentDate: Date = new Date();

  constructor(private functionality:FunctionalityService) {
   }

  ngOnInit(): void {
    this.priorityList=this.functionality.prioritylist;
    this.Created_data=this.functionality.Created_data;
    this.displayedColumns=this.functionality.displayedColumns
  }

  calculateDiff(dateSent:Date){
    dateSent = new Date(dateSent);
    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())-Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  AddItem() {
    if(this.newTask.length>0) {
      try {
        console.log(this.calculateDiff(this.dueDate));
        this.functionality.Created_data.push({Priority:this.priority, Date:this.dueDate ,Task:this.newTask});
        this.newTask="";
        this.priority="Urgent";
        this.dueDate=new Date;
      }
      catch(ex){
        console.log(ex);
      }
    }
  }
  InProgress(task:TaskDetails) {
    this.functionality.Created_data.splice(this.functionality.Created_data.indexOf(task),1);
    this.functionality.InProgress_data.push(task);
  }
  Completed(task:TaskDetails) {
    this.functionality.Created_data.splice(this.functionality.Created_data.indexOf(task),1);
    this.functionality.Completed_data.push(task);
  }
}
