import { Component, OnInit } from '@angular/core';
import { ToplistService } from '../../services/toplist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(public Toplist: ToplistService) {}

  ngOnInit() {
    this.changeTL();
  }

  changeTL() {
    this.Toplist.setTL(1);
  }


}
