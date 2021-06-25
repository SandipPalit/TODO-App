import { Injectable } from '@angular/core';

export interface TaskDetails {
  Priority: string;
  Date: Date;
  Task: string;
}

export interface Priority {
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  prioritylist: Priority[] = [
    {value: 'Urgent'},
    {value: 'High'},
    {value: 'Medium'},
    {value: 'low'}
  ];

  Created_data: TaskDetails[] = [];

  InProgress_data: TaskDetails[] = [];

  Completed_data: TaskDetails[] = [];

  displayedColumns: string[] = ['Task'];
}
