import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.apiUrl;
  private weatherApiUrl = environment.weatherApiUrl;
  private weatherApiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  getWeather(cityId: number): Observable<any> {
    return this.http.get(`${this.weatherApiUrl}?id=${cityId}&APPID=${this.weatherApiKey}`);
  }

  searchCity(searchString: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/city/search?q=${searchString}`);
  }
}
