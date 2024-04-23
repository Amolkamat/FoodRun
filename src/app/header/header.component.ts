import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title = 'FoodRun';

  constructor(private router: Router) {}

  ngOnInit() {}

  isLoginEnabled() {
    if (this.router.url === "/" || "/burger25") {
      console.log(this.router.url);
      return true;
    } else {
      return false;
    }
  };

  isViewOrderEnabled() {
    if (this.router.url === "/burger25/bacon-cheeseburger" || "/burger25/creditcard" || "/burger25/summary") {
      console.log(this.router.url);
      return true;
    } else {
      return false;
    }
  }
}
