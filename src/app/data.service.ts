import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 

  private goals = new BehaviorSubject<any>(['first goal', 'other goal']);
  goal = this.goals.asObservable;
 

  changeGoal(goal){
    this.goals.next(goal);
}
}
