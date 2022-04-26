import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  constructor(private cityService: CityService, private formBuilder: FormBuilder, private router: Router) { }
  city: City;
  cityAddForm: FormGroup;

  createCityForm(){
    this.cityAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description:["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createCityForm();
  }

  add(){
    if(this.cityAddForm.valid){
      this.city = Object.assign({}, this.cityAddForm.value)
      this.city.userId = 1;
      this.cityService.add(this.city);
    }
  }
}
