import { Routes } from '@angular/router';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityComponent } from './components/city/city.component';
import { ValueComponent } from './components/value/value.component';

export const appRoutes: Routes = [
  { path: 'cities', component: CityComponent },
  { path: 'value', component: ValueComponent },
  { path: '**', redirectTo: 'cities', pathMatch: 'full' },
  { path: 'cityDetail/:cityId', component: CityDetailComponent },
];
