import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from 'src/app/models/value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  values : Value[]= [];
  ngOnInit(): void {
    this.getValues()
  }

  getValues(){
    return this.httpClient.get<Value[]>("https://localhost:44320/api/values").subscribe(response=> {
      this.values = response});
  }

}
