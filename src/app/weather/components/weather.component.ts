import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material';

import {WeatherService} from '../weather.service';
import {City} from '../models/city.model';

import {of} from 'rxjs/internal/observable/of';
import {ISubscription} from 'rxjs/Subscription';
import {debounceTime, startWith, switchMap, catchError, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: Object = {};
  cityInput = new FormControl();
  filteredCityList: City[];
  filteredCityList$: ISubscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.filteredCityList$ = this.cityInput.valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(val => {
          if (val.length > 1) {
            return this.weatherService.searchCity(val).pipe(
              catchError(() => of([]))
            );
          } else {
            return [];
          }
        })
      ).subscribe(response => this.filteredCityList = response);
  }

  onCityChange(event: MatAutocompleteSelectedEvent) {
    let city = event.option.value;
    this.cityInput.setValue(city.name);

    this.weatherService.getWeather(city.id)
      .subscribe(response => this.drawWeather(response));
  }

  drawWeather(data:any) {
    let celcius = Math.round(parseFloat(data.main.temp)-273.15);
    this.weatherData['temp'] = celcius;
    this.weatherData['icon'] = data.weather[0].icon;
    this.weatherData['text'] = data.weather[0].main;
  }
}
