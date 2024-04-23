import { Component, OnInit } from '@angular/core';
import { ToplistService } from '../../../services/toplist.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent implements OnInit {
  constructor(public Toplist: ToplistService) {}

  ngOnInit() {
      this.changeTL();
  }
  changeTL() {
    this.Toplist.setTL(3);
  }
}
