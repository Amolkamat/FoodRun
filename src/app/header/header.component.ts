import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToplistService } from '../services/toplist.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges{
  title = 'FoodRun';
  topList: number = this.ToplistService.getTL();

  constructor(public ToplistService: ToplistService) {}

  ngOnInit() {

  }

  ngOnChanges() {
    this.topList = this.ToplistService.getTL();
  }

}
