import { Component, OnInit } from '@angular/core';
import { ToplistService } from '../../../services/toplist.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {
  constructor(public Toplist: ToplistService) {}

  ngOnInit() {
    this.changeTL();
  }

  changeTL() {
    this.Toplist.setTL(2);
  }

}
