import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient : HttpClient, private alertifyService: AlertifyService) { }
  path = 'https://localhost:44320/api/'

  getCities(): Observable<City[]>{
    return this.httpClient.get<City[]>(this.path + 'cities');
  }

  getCityById(cityId:number): Observable<City>{
    return this.httpClient.get<City>(this.path + 'cities/detail?id=' + cityId);
  }

  getPhotosByCity(cityId:number): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path + 'cities/photos?id=' + cityId);
  }

  add(city: City){
    this.httpClient.post(this.path + 'cities/add', city).subscribe(data=>{
      this.alertifyService.success("Şehir başarıyla eklendi.")
    });
  }
}
