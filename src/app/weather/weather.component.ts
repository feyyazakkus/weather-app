import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: Object = {};

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
    },
    {
      id: 3,
      name: 'Istanbul',
      countryCode: 'tr'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      city: ''
    });
  }

  onCityChange() {
    let city = this.weatherSearchForm.value.city;

    this.weatherService.getWeather(city.name, city.countryCode)
      .subscribe(response => {
        console.log(response);
        this.drawWeather(response);
        console.log(this.weatherData);
      });
  }

  drawWeather(data) {
    let celcius = Math.round(parseFloat(data.main.temp)-273.15);
    this.weatherData['temp'] = celcius;
    this.weatherData['icon'] = data.weather[0].icon;
    this.weatherData['text'] = data.weather[0].main;
  }
}
