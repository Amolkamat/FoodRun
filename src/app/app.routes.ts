import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Burger25Component } from './components/burger25/burger25.component';
import { BaconCheeseburgerComponent } from './components/burger25/bacon-cheeseburger/bacon-cheeseburger.component';
import { SummaryComponent } from './components/burger25/summary/summary.component';
import { CreditcardComponent } from './components/burger25/creditcard/creditcard.component';
import { SuccessComponent } from './components/burger25/success/success.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'burger25', component: Burger25Component},
  {path: 'burger25/bacon-cheeseburger', component: BaconCheeseburgerComponent},
  {path: 'burger25/summary', component: SummaryComponent},
  {path: 'burger25/creditcard', component: CreditcardComponent},
  {path: 'burger25/success', component: SuccessComponent},
];
