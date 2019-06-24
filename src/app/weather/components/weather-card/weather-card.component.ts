import { Component, OnInit, Input } from '@angular/core';
import {WeatherData} from '../../models/weather.model';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherData: WeatherData;

  constructor() { }

  ngOnInit() {
  }

}
