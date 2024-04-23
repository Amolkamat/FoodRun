import { Component, OnInit } from '@angular/core';
import { ToplistService } from '../../../services/toplist.service';

@Component({
  selector: 'app-creditcard',
  standalone: true,
  imports: [],
  templateUrl: './creditcard.component.html',
  styleUrl: './creditcard.component.scss'
})
export class CreditcardComponent implements OnInit {
  constructor(public Toplist: ToplistService) {}

  ngOnInit() {
      this.changeTL();
  }

  changeTL() {
    this.Toplist.setTL(2);
  }

}
