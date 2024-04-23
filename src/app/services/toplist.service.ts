import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToplistService {
  public topList: number = 0;

  constructor() { }

  setTL(val: number) {
    this.topList = val;
    console.log("topList set to: " + val);
  }

  getTL() {
    return this.topList;
  }
}
