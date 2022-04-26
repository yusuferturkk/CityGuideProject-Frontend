import { Routes } from '@angular/router';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityComponent } from './components/city/city.component';
import { ValueComponent } from './components/value/value.component';

export const appRoutes: Routes = [
  { path: 'cities', component: CityComponent },
  { path: 'value', component: ValueComponent },
  { path: '', pathMatch: 'full', component: CityComponent },
  { path: 'citydetail/:id', component: CityDetailComponent },
  { path: 'cityadd', component:CityAddComponent }
];
