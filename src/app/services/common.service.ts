import { Injectable } from '@angular/core';
import { of,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentNameSubject$ = new BehaviorSubject('Blank');
  constructor() { }
  settter(item: any) {
    console.log(item)
    this.currentNameSubject$.next(item);
  }
  getter() {
      return this.currentNameSubject$;
  }
}