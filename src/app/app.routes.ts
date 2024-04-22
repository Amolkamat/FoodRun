import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Burger25Component } from './components/burger25/burger25.component';
import { BaconCheeseburgerComponent } from './components/burger25/bacon-cheeseburger/bacon-cheeseburger.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'burger25', component: Burger25Component},
  {path: 'burger25/bacon-cheeseburger', component: BaconCheeseburgerComponent},
];
