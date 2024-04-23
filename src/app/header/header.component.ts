import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToplistService } from '../services/toplist.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgIf]
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
