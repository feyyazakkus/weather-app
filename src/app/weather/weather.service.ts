import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: string, countryCode: string) {
    return this.http.get(`${this.apiUrl}?q=${city},${countryCode}&APPID=${this.apiKey}`);
  }
}
