import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public selectedCity: Object;
  public cities = [
    {
      id: 1,
      name: 'London',
      countryCode: 'uk'
    },
    {
      id: 2,
      name: 'Paris',
      countryCode: 'fr'
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      city: ''
    });
  }

  onCityChange() {
    console.log(this.weatherSearchForm.value);
  }

}
