import { Component, OnInit } from '@angular/core';
import { ToplistService } from '../../../services/toplist.service';

@Component({
  selector: 'app-bacon-cheeseburger',
  standalone: true,
  imports: [],
  templateUrl: './bacon-cheeseburger.component.html',
  styleUrl: './bacon-cheeseburger.component.scss'
})
export class BaconCheeseburgerComponent implements OnInit {
  constructor(public Toplist: ToplistService) {}

  ngOnInit() {
    this.changeTL();
  }

  changeTL() {
    this.Toplist.setTL(2);
  }

}
