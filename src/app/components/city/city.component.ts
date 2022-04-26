import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {

  constructor(private cityService : CityService, private activatedRoute : ActivatedRoute) { }
  cities : City[] = [];

  ngOnInit(): void {
      this.getCities();
  }

  getCities(){
    this.cityService.getCities().subscribe(data=>{
      this.cities = data
    });
  }
}
