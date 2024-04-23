import { Component, OnInit } from '@angular/core';
import { ToplistService } from '../../services/toplist.service';

@Component({
  selector: 'app-burger25',
  standalone: true,
  imports: [],
  templateUrl: './burger25.component.html',
  styleUrl: './burger25.component.scss'
})
export class Burger25Component implements OnInit {
  constructor(public Toplist: ToplistService) {}

  ngOnInit() {
    //this.changeTL();
    this.Toplist.topList = 1;
  }

  changeTL() {
    this.Toplist.setTL(1);
  }

}
